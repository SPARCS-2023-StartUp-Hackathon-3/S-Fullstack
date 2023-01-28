import { MdClose } from 'react-icons/md';
import styled from '@emotion/styled';

export const StartWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;

export const Header = styled.header`
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
`;

export const CloseButton = styled(MdClose)`
  position: absolute;
  right: 20px;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  border-radius: 14px;
  margin-top: 32px;
  width: 155px;
  height: 155px;

  img {
    border-radius: 14px;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  margin-top: 40px;
  width: 100%;

  input {
    width: 100%;
    padding: 11px 10px 9px;
    border: 1px solid #c8c6c8;
    border-radius: 4px;
    font-size: 20px;
    line-height: 22px;
    font-weight: 500;
  }
`;

export const Color = styled.div`
  margin-top: 36px;
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;

  input {
    margin-left: 107px;
    width: 100%;
    padding: 10px 9px 8px;
    border: 1px solid #c8c6c8;
    border-radius: 4px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }
`;

export const Desc = styled.div`
  margin-top: 47px;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;

  textarea {
    resize: none;
    height: 100px;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    border: 1px solid #c8c6c8;
    border-radius: 4px;
    padding: 10px;
  }
`;

export const GenerateButton = styled.button`
  margin-top: 56px;
  width: 180px;
  height: 60px;
  border-radius: 14px;
  border: none;
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  color: #ffffff;
  background: #111a30;
  cursor: pointer;

  &:disabled {
    color: #9a9b9d;
    background: #c8c6c8;
  }
`;
