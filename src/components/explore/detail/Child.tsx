import styled from '@emotion/styled';
import ChildLink from './ChildLink';
import { Post } from './Post';

const Container = styled.div`
  padding-top: 24px;
  padding-bottom: 18px;
  margin-left: 20px;
  margin-right: 20px;
`;

const Text = styled.div`
  color: #000;
  font-size: 20px;
  margin-bottom: 18px;
  font-weight: 600;
`;

export default function Child({ postList }: { postList: Post[] }) {
  console.log(postList);
  return (
    <Container>
      <Text>Child</Text>
      {postList.map((v, i) => (
        <ChildLink post={v} key={i} />
      ))}
    </Container>
  );
}
