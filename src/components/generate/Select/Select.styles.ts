import styled from '@emotion/styled';
import Image from 'next/image';
import { MdClose, MdKeyboardArrowLeft } from 'react-icons/md';
import { ISelectImageProps } from './Select.types';

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

export const SelectBox = styled.div`
  width: 335px;
  height: 519px;
  margin: 43px 0 25px;
`;

export const ImageBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  border-radius: 14px;
`;

export const SelectImage = styled(Image)<ISelectImageProps>`
  outline: ${({ selected }) =>
    selected ? '3px solid #9747FF' : '1px solid #DEDCDF'};
  border-radius: 14px;
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

  &:disabled {
    border: none;
    background: #c8c6c8;
    color: #9a9b9d;
  }
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

export const LottieWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
