import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { CSSProperties } from 'react';

const ClothesImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

export default function Clothes({
  url,
  id,
  style,
  onClick,
}: {
  url: string;
  id: number;
  style?: CSSProperties;
  onClick?: () => void;
}) {
  // const target = useRef(null); // 대상 ref
  // const [visible, setVisible] = useState(false); // DOM을 렌더할 조건

  // // isIntersecting의 경우에 DOM을 마운트 한다.
  // const onIntersect = ([entry]) =>
  //   entry.isIntersecting ? setVisible(true) : setVisible(false);

  // useObserver({
  //   target,
  //   onIntersect,
  //   threshold: 0.1, // 화면 양끝에서 10%만 보여져도 onIntersect를 실행한다.
  // });

  return (
    <Link href={'/explore/detail/' + id} onClick={onClick} style={style}>
      {true && (
        <ClothesImage
          src={url}
          alt=''
          style={{
            width: '100%',
            height: '100%',
            borderWidth: '1px',
            borderColor: '#F5F3F6',
            borderStyle: 'solid',
          }}
          width={100}
          height={200}
        />
      )}
    </Link>
  );
}
