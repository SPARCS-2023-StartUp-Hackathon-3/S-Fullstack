import { useUserInfoStore } from '@/util/store';
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
  const { setUsername } = useUserInfoStore();

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
        <SignInButton
          onClick={() => {
            if (!usernameRef.current || !passwordRef.current) return;
            setUsername(usernameRef.current.value);
            router.replace('/explore');
          }}
        >
          Sign In
        </SignInButton>
      </motion.div>
    </SignInWrapper>
  );
};

export default SignIn;
