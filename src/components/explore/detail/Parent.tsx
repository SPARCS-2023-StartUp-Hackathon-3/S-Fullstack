import styled from '@emotion/styled';
import ParentLink from './ParentLink';
import { Post } from './Post';

const Container = styled.div`
  padding-top: 18px;
  margin-left: 20px;
  margin-right: 20px;
`;

const Text = styled.div`
  color: #000;
  font-size: 20px;
  margin-bottom: 18px;
  font-weight: 600;
`;

const HorizontalLine = styled.div`
  margin-top: 24px;
  width: 100%;
  height: 6px;
  background-color: #f5f3f6;
`;

export default function Parent({ post }: { post: Post }) {
  return (
    <Container>
      <Text>Parent</Text>
      <ParentLink post={post} />
      <HorizontalLine />
    </Container>
  );
}
