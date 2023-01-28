import { BottomTabsNavigator } from '@/components/BottomTabsNavigator';
import ClothesListContainer from '@/components/explore/ClothesListContainer';
import SortContainer from '@/components/explore/SortContainer';
import { useRef } from 'react';

export default function Explore() {
  const bottom = useRef(null);

  return (
    <>
      <SortContainer sort='인기순' />
      <ClothesListContainer bottom={bottom} />
      <div ref={bottom} />
      <BottomTabsNavigator />
    </>
  );
}
