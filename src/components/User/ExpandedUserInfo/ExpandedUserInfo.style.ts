import styled from '@emotion/styled';
import Image from 'next/image';

export const ExpandedUserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  width: 100%;
  padding-top: 32px;
`;

export const AvatarExpanded = styled(Image)`
  box-sizing: border-box;
  /* background-color: #dedcdf; */
  width: 90px;
  height: 90px;
  border: 1px solid #dedcdf;
  border-radius: 90px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 12px 12px 12px;
`;

export const UsernameExpanded = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  text-align: center;
  color: #111a30;
  margin: 0px 0px 12px 0px;
`;

export const InfoWrapper = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #37258e;

  span {
    color: #9a9b9d;
    font-weight: 500;
    margin-left: 5px;
  }
`;
