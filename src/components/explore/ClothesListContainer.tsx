import { AWS_ADDRESS } from '@/const';
import {
  useExploreKeywordStore,
  useExploreListStore,
  useExplorePageStore,
  useExploreScrollStore,
  useExploreSortStore,
} from '@/util/explore/store';
import styled from '@emotion/styled';
import axios from 'axios';
import { LegacyRef, useEffect } from 'react';
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
  const { page, setPage } = useExplorePageStore();
  const { scrollY, setScrollY } = useExploreScrollStore();
  const { sort, setSort } = useExploreSortStore();
  const { clothes, setClothes } = useExploreListStore();
  const { keyword } = useExploreKeywordStore();

  useEffect(() => {
    if (scrollY !== 0) window.scrollTo(0, scrollY);
  }, []);

  useEffect(() => {
    if (clothes.length == 0 && keyword.length == 0) {
      if (page != 1) setPage(1);
    }
  }, [clothes.length, keyword]);

  const onClickSort = (value: Sort) => {
    setSort(value);
    setPage(1);
    setClothes([]);
    getPosts(value);
  };

  const getPosts = (value: Sort) => {
    const params =
      value == '최신순' ? { page: page } : { page: page, sort_by: 'like' };

    if (keyword && keyword != '') Object.assign(params, { search: keyword });

    axios
      .get('/api/posts', {
        params: params,
      })
      .then((res) => {
        if (res.data.length > 0) {
          setClothes(clothes.concat(...res.data));
          setPage(page + 1);
        }
      });
  };

  const onIntersect = ([entry]) => entry.isIntersecting && getPosts(sort);

  useObserver({
    target: bottom,
    onIntersect,
    dependencies: { keyword, clothes, page },
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
