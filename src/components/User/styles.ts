import styled from '@emotion/styled';

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0px;
  padding: 0px;
  position: fixed;
  background-color: #ffffff;
`;

export const FoldedUserInfo = styled.div`
  direction: row;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  width: 100%;
  height: 56px;
`;

export const Buttons = styled.div`
  display: flex;
  display: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-bottom: 16px;
  padding-top: 16px;
  box-shadow: 0px 4px 7px 2px rgba(169, 168, 173, 0.11);
`;

export const ActiveButton = styled.button`
  width: 110px;
  height: 42px;
  border-radius: 42px;
  background: #111a30;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
  border: 1px solid #111a30;
  margin: 0px 5px 0px 5px;
`;

export const InactiveButton = styled.button`
  width: 110px;
  height: 42px;
  border-radius: 42px;
  border: 1px solid #111a30;
  color: #111a30;
  background: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const LogoutButton = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  background-color: #fff;
  border: 1px solid #111a30;
  border-radius: 20px;
  padding: 5px 10px;
  font-size: 12px;
`;
