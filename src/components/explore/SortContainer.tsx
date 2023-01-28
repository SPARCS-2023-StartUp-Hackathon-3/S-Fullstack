import styled from '@emotion/styled';
import { MdSort } from 'react-icons/md';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: 16px;
  padding-top: 17px;
`;

const Icon = styled(MdSort)`
  width: 18px;
  height: 18px;
`;

const Text = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #1c1b1f;
  margin-left: 8px;
  margin-right: 8px;
`;

type Sort = '인기순' | '최신순';

export default function SortContainer({ sort }: { sort: Sort }) {
  return (
    <Container>
      <Icon color='#1C1B1F' />
      <Text>{sort}</Text>
    </Container>
  );
}
