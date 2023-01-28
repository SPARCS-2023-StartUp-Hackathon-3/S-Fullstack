import { AWS_ADDRESS } from '@/const';
import {
  useExploreKeywordStore,
  useExploreListStore,
  useExploreSortStore,
} from '@/util/explore/store';
import styled from '@emotion/styled';
import axios from 'axios';
import { LegacyRef, useEffect, useRef } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import Clothes from './Clothes';
import SortContainer, { Sort } from './SortContainer';
import { useObserver } from './useObserver';

export const Container = styled.div`
  margin-left: 9.5px;
  margin-right: 9.5px;
  padding-top: 12px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ClothesListContainerWrapper = styled.div`
  background-color: #f9f9f9;
`;

export default function ClothesListContainer({
  bottom,
}: {
  bottom: LegacyRef<HTMLElement>;
}) {
  const page = useRef(1);
  const [scrollY, setScrollY] = useLocalStorage('explore_list_scroll', 0);
  const { sort, setSort } = useExploreSortStore();
  const { clothes, setClothes } = useExploreListStore();
  const { keyword } = useExploreKeywordStore();

  useEffect(() => {
    if (scrollY !== 0) window.scrollTo(0, scrollY);
  }, []);

  useEffect(() => {
    if (clothes.length == 0 || keyword.length == 0) page.current = 1;
  }, [clothes.length, keyword]);

  const onClickSort = (value: Sort) => {
    setSort(value);
    setClothes([]);
    getPosts();
  };

  const getPosts = () => {
    const params =
      sort == '최신순'
        ? { page: page.current }
        : { page: page.current, sort_by: 'like' };

    if (keyword && keyword != '') Object.assign(params, { search: keyword });

    axios
      .get('/api/posts', {
        params: params,
      })
      .then((res) => {
        if (res.data.length > 0) {
          setClothes(clothes.concat(...res.data));
          page.current += 1;
        }
      });
  };

  const onIntersect = ([entry]) => entry.isIntersecting && getPosts();

  useObserver({
    target: bottom,
    onIntersect,
    dependencies: { keyword, clothes },
  });

  return (
    <ClothesListContainerWrapper>
      <SortContainer sort={sort} onChange={onClickSort} />
      <Container>
        {clothes.map((v, i) => (
          <Clothes
            url={v.image_url ? AWS_ADDRESS + '/' + v.image_url : ''}
            id={v.id}
            onClick={() => setScrollY(window.scrollY)}
            key={i}
            style={{
              width: '50%',
              height: '50%',
              paddingLeft: '6.5px',
              paddingRight: '6.5px',
              marginBottom: '12px',
            }}
          />
        ))}
      </Container>
    </ClothesListContainerWrapper>
  );
}
