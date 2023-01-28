import { useUserInfoStore } from '@/util/store';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { Input, SignInButton, SignInWrapper } from './SignIn.styles';
import Lottie from 'lottie-react';
import * as animationData from './animationData.json';
import { motion } from 'framer-motion';

const SignIn = () => {
  const router = useRouter();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { setUsername, setId } = useUserInfoStore();

  const signUpRequest = async () => {
    return fetch(`/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: usernameRef.current?.value,
      }),
    }).then((res) => res.json());
  };

  const { mutate } = useMutation(signUpRequest, {
    onSuccess: (data) => {
      setId(data.id);
      setUsername(data.name);
      router.push('/explore');
    },
  });

  const singInHandler = () => {
    if (!usernameRef.current || !passwordRef.current) return;
    mutate();
  };

  return (
    <SignInWrapper>
      <Lottie animationData={animationData} loop={false} />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.167, delay: 1.3 }}
      >
        <Input placeholder='Username' ref={usernameRef} />
        <Input placeholder='Password' type='password' ref={passwordRef} />
        <SignInButton onClick={singInHandler}>Sign In</SignInButton>
      </motion.div>
    </SignInWrapper>
  );
};

export default SignIn;
