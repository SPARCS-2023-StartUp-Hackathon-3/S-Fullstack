import styled from "@emotion/styled";

export const SignInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0px;
  padding: 20px;
  height: 100vh;
  
  background-color: #FFFFFF;
`;

export const Input = styled.input`
  max-width: 400px;
  width: 100%;
  height: 44px;
  padding : 10px 10px 10px 10px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin: 20px;
  border: 1px solid #C8C6C8;
  border-radius: 4px;
  ::placeholder {
    color: #C8C6C8;
  }
`;

export const SignInButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  gap: 10px;
  margin: 20px;
  font-size: 20px;
  font-weight: 600;
  color: #FFFFFF;
  width: 100%;
  max-width: 400px;
  height: 60px;

  /* S 100 */

  background: #37258E;
  border-radius: 14px;
`;