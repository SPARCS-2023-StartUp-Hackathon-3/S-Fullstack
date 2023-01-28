import { AI_ADDRESS, AWS_ADDRESS } from '@/const';
import { useGenerateStore } from '@/util/store';
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {
  ButtonWrapper,
  CloseButton,
  CompleteButton,
  ConfirmWrapper,
  Header,
  ImageWrapper,
  PrevButton,
  RegenerateButton,
} from './Confirm.styles';

export function Confirm() {
  const router = useRouter();

  const { title, color, desc, imageUrl, isNew } = useGenerateStore();

  // todo: 보내는 데이터 확인
  const editRequest = async () => {
    return fetch(`${AI_ADDRESS}/v2/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        color,
        desc,
      }),
    }).then((res) => res.json());
  };

  const { mutate, isSuccess } = useMutation(editRequest, {
    onSuccess: (data) => {
      console.log(data);
    },
  });

  useEffect(() => {
    if (!isNew) {
      // mutate();
    }
  }, [mutate]);

  return (
    <ConfirmWrapper>
      <Header>
        <PrevButton onClick={router.back} />
        {isNew ? 'Generate' : 'Redesign'}
        <CloseButton onClick={() => router.push('/')} />
      </Header>
      <ImageWrapper>
        <Image
          src={`${AWS_ADDRESS}/${imageUrl}`}
          alt='Clothes image'
          width={267}
          height={267}
        />
      </ImageWrapper>
      <ButtonWrapper>
        {!isNew && <RegenerateButton>Regenerate</RegenerateButton>}
        <CompleteButton
          isNew={isNew}
          onClick={() => router.push('/generate/last')}
        >
          Complete
        </CompleteButton>
      </ButtonWrapper>
    </ConfirmWrapper>
  );
}
