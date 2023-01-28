import { AWS_ADDRESS } from '@/const';
import { useGenerateStore } from '@/util/store';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  CloseButton,
  LastWarpper,
  Header,
  PrevButton,
  ImageWrapper,
  TitleWrapper,
  Form,
  PostButton,
} from './Last.styles';
import { ILastFormValue } from './Last.tyles';

export function Last() {
  const router = useRouter();

  const { title, imageUrl, isNew } = useGenerateStore();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, isValid },
  } = useForm<ILastFormValue>();

  const onSubmitHandler: SubmitHandler<ILastFormValue> = (data) => {
    console.log(data.caption);
  };

  const buttonDisabled = !isDirty || !isValid || isSubmitting;

  return (
    <LastWarpper>
      <Header>
        <PrevButton onClick={router.back} />
        {isNew ? 'Generate' : 'Redesign'}
        <CloseButton onClick={() => router.push('/')} />
      </Header>
      <ImageWrapper>
        <Image
          src={`${AWS_ADDRESS}/${imageUrl}`}
          alt='Clothes image'
          width={155}
          height={155}
        />
      </ImageWrapper>
      <TitleWrapper>{title}</TitleWrapper>
      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        <textarea
          id='caption'
          placeholder='Write a catpion'
          {...register('caption', {
            required: true,
          })}
        />
        <PostButton disabled={buttonDisabled}>Post</PostButton>
      </Form>
    </LastWarpper>
  );
}
