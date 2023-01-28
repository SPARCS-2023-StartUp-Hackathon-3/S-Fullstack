import {
  CloseButton,
  Color,
  Desc,
  Form,
  GenerateButton,
  Header,
  ImageWrapper,
  StartWrapper,
  Title,
} from './Start.styles';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useGenerateStore } from '@/util/store';
import Image from 'next/image';
import { AWS_ADDRESS } from '@/const';
import { IStartFormValue } from './Start.types';

export function Start() {
  const router = useRouter();

  const {
    title,
    color,
    desc,
    imageUrl,
    parentId,
    setTitle,
    setColor,
    setDesc,
  } = useGenerateStore();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, isValid },
  } = useForm<IStartFormValue>();

  const onSubmitHandler: SubmitHandler<IStartFormValue> = (data) => {
    setTitle(data.title);
    setColor(data.color);
    setDesc(data.desc);
    if (parentId) {
      router.push('/generate/select');
    } else {
      router.push('/generate/confirm');
    }
  };

  const buttonDisabled = parentId ? !isDirty || !isValid || isSubmitting : true;

  return (
    <StartWrapper>
      <Header>
        {parentId ? 'Generate' : 'Redesign'}
        <CloseButton onClick={() => router.push('/')} />
      </Header>
      <ImageWrapper>
        {imageUrl && (
          <Image
            src={`${AWS_ADDRESS}/${imageUrl}`}
            alt='Clothes image'
            width={155}
            height={155}
          />
        )}
      </ImageWrapper>
      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        <Title>
          <input
            id='title'
            placeholder='Title'
            {...register('title', {
              required: true,
            })}
            defaultValue={title}
          />
        </Title>
        <Color>
          Color
          <input
            id='color'
            placeholder='Color'
            {...register('color', {
              required: true,
            })}
            defaultValue={color}
          />
        </Color>
        <Desc>
          Description
          <textarea
            id='desc'
            placeholder='Text input'
            {...register('desc', {
              required: true,
            })}
            defaultValue={desc}
          />
        </Desc>
        <GenerateButton disabled={buttonDisabled}>Generate</GenerateButton>
      </Form>
    </StartWrapper>
  );
}
