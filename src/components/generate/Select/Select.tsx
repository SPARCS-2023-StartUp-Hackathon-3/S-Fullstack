import { useGenerateStore } from '@/util/store';
import { useRouter } from 'next/router';
import {
  ButtonBox,
  CloseButton,
  Header,
  PrevButton,
  RegenerateButton,
  SelectButton,
  SelectWrapper,
} from './Select.styles';
import { useMutation } from '@tanstack/react-query';
import { AI_ADDRESS } from '@/const';
import { useEffect } from 'react';

export function Select() {
  const router = useRouter();

  const { title, color, desc } = useGenerateStore();

  const generateRequest = async () => {
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

  const { mutate, isSuccess } = useMutation(generateRequest, {
    onSuccess: (data) => {
      console.log(data);
    },
  });

  useEffect(() => {
    // mutate();
  }, [mutate]);

  return (
    <SelectWrapper>
      <Header>
        <PrevButton onClick={router.back} />
        Generate
        <CloseButton onClick={() => router.push('/')} />
      </Header>
      {/* todo: 6가지 선택창 */}
      <ButtonBox>
        <RegenerateButton
          onClick={() => {
            mutate();
          }}
        >
          Regenerate
        </RegenerateButton>
        <SelectButton
          disabled={false}
          onClick={() => router.push('/generate/confirm')}
        >
          Select
        </SelectButton>
      </ButtonBox>
    </SelectWrapper>
  );
}
