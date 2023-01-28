import { useUserInfoStore } from '@/util/store';
import { useQuery } from '@tanstack/react-query';
import { UserProps } from '../types';
import {
  AvatarExpanded,
  ExpandedUserInfoWrapper,
  UsernameExpanded,
} from './ExpandedUserInfo.style';

const ExpandedUserInfo = ({ username }: UserProps) => {
  const { id } = useUserInfoStore();

  const getLikes = async () => {
    return fetch(`/api/users/${id}/like`).then((res) => res.json());
  };

  const { data, isSuccess } = useQuery(['/api/users/:id/like'], getLikes);

  return (
    <ExpandedUserInfoWrapper>
      <AvatarExpanded />
      <UsernameExpanded>{username}</UsernameExpanded>
      <div>♥ {isSuccess ? data.likeCount : 0} Likes</div>
    </ExpandedUserInfoWrapper>
  );
};

export default ExpandedUserInfo;
