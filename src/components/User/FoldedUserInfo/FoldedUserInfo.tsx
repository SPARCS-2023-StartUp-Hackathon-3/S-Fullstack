import { UserProps } from '../types';
import {
  AvatarFold,
  FoldedUserInfoWrapper,
  UsernameFold,
} from './FoldedUserInfo.style';

const FoldedUserInfo = ({ username }: UserProps) => {
  return (
    <FoldedUserInfoWrapper>
      <AvatarFold></AvatarFold>
      <UsernameFold>{username}</UsernameFold>
    </FoldedUserInfoWrapper>
  );
};
export default FoldedUserInfo;
