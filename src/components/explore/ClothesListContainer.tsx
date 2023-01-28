import styled from '@emotion/styled';
import { LegacyRef, useEffect, useRef, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import Clothes from './Clothes';
import { useObserver } from './useObserver';

export const Container = styled.div`
  margin-left: 9.5px;
  margin-right: 9.5px;
  padding-top: 12px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default function ClothesListContainer({
  bottom,
}: {
  bottom: LegacyRef<HTMLElement>;
}) {
  const page = useRef(0);
  const [clothes, setClothes] = useState<{ id: number; imageUrl: string }[]>(
    []
  );
  const [scrollY, setScrollY] = useLocalStorage('explore_list_scroll', 0);

  useEffect(() => {
    if (scrollY !== 0) window.scrollTo(0, scrollY);
  }, []);

  const getPosts = () => {
    const res = Array(9).fill({
      id: page.current,
      imageUrl:
        page.current % 2 == 0
          ? 'http://img.danawa.com/prod_img/500000/159/348/img/17348159_1.jpg?_v=20220628141605'
          : 'https://img.danawa.com/prod_img/500000/766/351/img/13351766_1.jpg?shrink=330:330&_v=20210209143807',
    });
    setClothes((prev) => prev.concat(...res));
    page.current += 1;
  };

  const onIntersect = ([entry]) => entry.isIntersecting && getPosts();

  useObserver({
    target: bottom,
    onIntersect,
  });

  return (
    <Container>
      {clothes.map((v, i) => (
        <Clothes
          url={v.imageUrl}
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
  );
}
