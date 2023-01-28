import { UserProps } from '../types';
import {
  AvatarExpanded,
  ExpandedUserInfoWrapper,
  UsernameExpanded,
} from './ExpandedUserInfo.style';

const ExpandedUserInfo = ({ username }: UserProps) => {
  return (
    <ExpandedUserInfoWrapper>
      <AvatarExpanded />
      <UsernameExpanded>{username}</UsernameExpanded>
      <div>♥ 112 Likes</div>
    </ExpandedUserInfoWrapper>
  );
};

export default ExpandedUserInfo;
