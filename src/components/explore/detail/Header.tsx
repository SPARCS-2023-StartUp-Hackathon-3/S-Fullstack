import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { MdHome } from 'react-icons/md';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 16px;
  padding-left: 20px;
  position: fixed;
  top: 0;
  z-index: 1;
  height: 56px;
  background-color: #fff;
  width: 100%;
`;

const Icon = styled(MdHome)`
  width: 24px;
  height: 24px;
`;

export default function DetailPageHeader() {
  const router = useRouter();

  return (
    <Container>
      <Icon onClick={() => router.push('/')} color='#050505' />
    </Container>
  );
}
