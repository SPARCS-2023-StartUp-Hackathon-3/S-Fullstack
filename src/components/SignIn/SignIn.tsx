import { useUserInfoStore } from '@/util/store';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { Input, SignInButton, SignInWrapper } from './SignIn.styles';

const SignIn = () => {
  const router = useRouter();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { setUsername } = useUserInfoStore();

  return (
    <SignInWrapper>
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
    </SignInWrapper>
  );
};

export default SignIn;
