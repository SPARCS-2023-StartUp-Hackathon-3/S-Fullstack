import styled from '@emotion/styled';
import { MdClose, MdKeyboardArrowLeft } from 'react-icons/md';

export const SelectWrapper = styled.section`
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

export const PrevButton = styled(MdKeyboardArrowLeft)`
  position: absolute;
  left: 20px;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const CloseButton = styled(MdClose)`
  position: absolute;
  right: 20px;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const RegenerateButton = styled.button`
  width: 160px;
  height: 60px;
  background: #ffffff;
  border: 2px solid #111a30;
  border-radius: 14px;
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  color: #111a30;
`;

export const SelectButton = styled.button`
  width: 160px;
  height: 60px;
  background: #111a30;
  border-radius: 14px;
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  color: #ffffff;
  border: none;

  &:disabled {
    background: #c8c6c8;
    color: #9a9b9d;
  }
`;
