import { useGenerateStore } from '@/util/store';
import { useRouter } from 'next/router';
import {
  ButtonBox,
  CloseButton,
  Header,
  ImageBox,
  PrevButton,
  RegenerateButton,
  SelectBox,
  SelectButton,
  SelectImage,
  SelectWrapper,
} from './Select.styles';
import { useMutation } from '@tanstack/react-query';
import { AI_ADDRESS, AWS_ADDRESS } from '@/const';
import { useEffect } from 'react';

export function Select() {
  const router = useRouter();

  const {
    title,
    color,
    desc,
    imageUrl,
    selectImageUrls,
    setSelectImageUrls,
    setImageUrl,
    resetAll,
  } = useGenerateStore();

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

  const { mutate } = useMutation(generateRequest, {
    onSuccess: (data) => {
      setSelectImageUrls(data.images);
    },
  });

  useEffect(() => {
    if (!selectImageUrls) {
      mutate();
    }
  }, []);

  return (
    <SelectWrapper>
      <Header>
        <PrevButton
          onClick={() => {
            setSelectImageUrls(undefined);
            router.back();
          }}
        />
        Generate
        <CloseButton
          onClick={() => {
            resetAll();
            router.push('/');
          }}
        />
      </Header>
      <SelectBox>
        {selectImageUrls ? (
          <ImageBox>
            {selectImageUrls.map((url, idx) => (
              <SelectImage
                key={idx}
                src={`${AWS_ADDRESS}/${url}`}
                alt=''
                width={155}
                height={155}
                onClick={() => setImageUrl(url)}
                selected={url === imageUrl}
              />
            ))}
          </ImageBox>
        ) : (
          <>loading</>
        )}
      </SelectBox>
      <ButtonBox>
        <RegenerateButton
          disabled={selectImageUrls === undefined}
          onClick={() => {
            setSelectImageUrls(undefined);
            setImageUrl(undefined);
            mutate();
          }}
        >
          Regenerate
        </RegenerateButton>
        <SelectButton
          disabled={imageUrl === undefined}
          onClick={() => router.push('/generate/confirm')}
        >
          Select
        </SelectButton>
      </ButtonBox>
    </SelectWrapper>
  );
}
