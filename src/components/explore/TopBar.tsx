import styled from '@emotion/styled';
import CloZLogo from './logo.svg';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { MdSearch, MdArrowBackIos, MdCancel } from 'react-icons/md';
import { AnimatePresence, motion } from 'framer-motion';
const TopBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10.5px 11px 10.5px 11px;
  align-items: center;
  border-bottom: 1px solid #dedcdf;
  position: fixed;
  width: 100%;
  background-color: #fff;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 32px;
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin: 0;
  width: 100%;
  padding: 6.5px 10px 6.5px 10px;
  border-radius: 4px;
`;

const TransparentInput = styled.input`
  width: 100%;
  border: none;
  margin: 0;
  background-color: transparent;
  :focus-visible {
    outline: none;
  }
`;

export const TopBar = () => {
  const [searchingState, setSearchingState] = useState<boolean>(false);
  const [queryState, setQueryState] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchingState) {
      inputRef.current?.focus();
    } else {
      setQueryState('');
    }
  }, [searchingState]);

  return (
    <TopBarWrapper>
      <LogoWrapper>
        <AnimatePresence mode='wait'>
          {!searchingState ? (
            <motion.div
              key={`${searchingState}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <Image width={32} height={32} src={CloZLogo} alt='CloZ Logo' />
            </motion.div>
          ) : (
            <motion.div
              key={`${searchingState}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <MdArrowBackIos
                size={24}
                onClick={() => setSearchingState(false)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </LogoWrapper>
      <SearchBox
        style={{
          backgroundColor: searchingState ? '#f5f3f6' : 'transparent',
          height: 32,
        }}
      >
        <AnimatePresence mode='wait'>
          {!searchingState ? (
            <motion.div
              key={`${searchingState}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <MdSearch size={24} onClick={() => setSearchingState(true)} />
            </motion.div>
          ) : (
            <motion.div
              key={`${searchingState}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              style={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <TransparentInput
                value={queryState}
                onChange={() => {
                  setQueryState(inputRef.current?.value || '');
                }}
                ref={inputRef}
              />
              <MdCancel
                size={24}
                onClick={() => {
                  setQueryState('');
                  inputRef.current?.focus();
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </SearchBox>
    </TopBarWrapper>
  );
};
