import { MdClose, MdKeyboardArrowLeft } from 'react-icons/md';
import styled from '@emotion/styled';
import { ICompleteButtonProps } from './Confirm.types';

export const ConfirmWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const ImageWrapper = styled.div`
  margin: 147px 0 173px;
  width: 267px;
  height: 267px;
  border-radius: 14px;

  img {
    border-radius: 14px;
  }
`;

export const ButtonWrapper = styled.div`
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

export const CompleteButton = styled.button<ICompleteButtonProps>`
  width: ${({ parentId }) => (parentId ? '160px' : '180px')};
  height: 60px;
  background: #111a30;
  border-radius: 14px;
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  color: #ffffff;
  border: none;
`;
