import SignIn from '@/components/SignIn';
import { useUserInfoStore } from '@/util/store';
import { useRouter } from 'next/router';

export default function Page() {
  const { username } = useUserInfoStore();
  const router = useRouter();

  if (username !== '') router.replace('/explore');

  return <SignIn />;
}
