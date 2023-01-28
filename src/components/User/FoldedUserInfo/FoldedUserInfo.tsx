import { UserProps } from '../types';
import {
  AvatarFold,
  FoldedUserInfoWrapper,
  UsernameFold,
} from './FoldedUserInfo.style';

const FoldedUserInfo = ({ username }: UserProps) => {
  return (
    <FoldedUserInfoWrapper>
      <AvatarFold
        src='https://t1.daumcdn.net/cfile/tistory/9931CB4B5D904D7607'
        alt=''
        width={32}
        height={32}
      />
      <UsernameFold>{username}</UsernameFold>
    </FoldedUserInfoWrapper>
  );
};
export default FoldedUserInfo;
