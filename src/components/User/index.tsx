import { useEffect, useRef, useState } from 'react';
import ClothesListContainer from '../explore/ClothesListContainer';
import SortContainer from '../explore/SortContainer';
import ExpandedUserInfo from './ExpandedUserInfo';
import FoldedUserInfo from './FoldedUserInfo';
import { ActiveButton, InactiveButton, Buttons, UserWrapper } from './styles';
import { UserProps, Tabs, Folding } from './types';

const User = ({ username }: UserProps) => {
  const [activatedTab, setActivatedTab] = useState<Tabs>('clothes');
  const [foldState, setFoldState] = useState<Folding>('folded');
  const bottom = useRef(null);
  const top = useRef(null);

  useEffect(() => {
    if (!top.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0.5) {
          setFoldState('expanded');
        } else {
          setFoldState('folded');
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(top.current);
    return () => observer.disconnect();
  }, [top]);

  return (
    <>
      <UserWrapper>
        {foldState === 'expanded' ? (
          <ExpandedUserInfo username={username} />
        ) : foldState === 'folded' ? (
          <FoldedUserInfo username={username} />
        ) : null}
        {activatedTab === 'clothes' ? (
          <Buttons>
            <ActiveButton>Clothes</ActiveButton>
            <InactiveButton>Style</InactiveButton>
          </Buttons>
        ) : (
          <Buttons>
            <InactiveButton>Clothes</InactiveButton>
            <ActiveButton>Style</ActiveButton>
          </Buttons>
        )}
      </UserWrapper>
      <div ref={top} style={{ height: 260 }} />
      <SortContainer sort='인기순' />
      <ClothesListContainer bottom={bottom} />
      <div ref={bottom} />
    </>
  );
};

export default User;
