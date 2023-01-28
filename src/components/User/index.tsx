import { useState } from 'react';
import ExpandedUserInfo from './ExpandedUserInfo';
import FoldedUserInfo from './FoldedUserInfo';
import { ActiveButton, InactiveButton, Buttons, UserWrapper } from './styles';
import { UserProps, Tabs, Folding } from './types';

const User = ({ username }: UserProps) => {
  const [activatedTab, setActivatedTab] = useState<Tabs>('clothes');
  const [foldState, setFoldState] = useState<Folding>('expanded');

  return (
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
  );
};

export default User;
