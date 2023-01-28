import styled from "@emotion/styled";

export const FoldedUserInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  width: 100%;
  height: 56px;
  padding: 32px 0px 16px 0px;
`;

export const AvatarFold = styled.div`
  box-sizing: border-box;
  background-color: #DEDCDF;
  width: 32px;
  height: 32px;
  border: 1px solid #DEDCDF;
  border-radius: 32px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const UsernameFold = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: left;
  color: #050505;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin-left: 8px;
`;
