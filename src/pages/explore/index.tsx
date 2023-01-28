import { BottomTabsNavigator } from '@/components/BottomTabsNavigator';
import ClothesListContainer from '@/components/explore/ClothesListContainer';
import { TopBar } from '@/components/explore/TopBar';
import {
  useExploreKeywordStore,
  useExploreListStore,
} from '@/util/explore/store';
import { useRef } from 'react';

export default function Explore() {
  const bottom = useRef(null);
  const { setKeyword } = useExploreKeywordStore();
  const { setClothes } = useExploreListStore();

  const onEndEditing = (value: string) => {
    setKeyword(value);
    setClothes([]);
  };

  const onClose = () => {
    setKeyword('');
    setClothes([]);
  };

  return (
    <>
      <TopBar onEndEditing={onEndEditing} onClose={onClose} />
      <div style={{ height: '56px' }} />
      <ClothesListContainer bottom={bottom} />
      <div style={{ height: '120px' }} />
      <div ref={bottom} />
      <BottomTabsNavigator />
    </>
  );
}
