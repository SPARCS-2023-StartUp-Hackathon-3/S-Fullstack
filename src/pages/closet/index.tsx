import { BottomTabsNavigator } from '@/components/BottomTabsNavigator';
import User from '@/components/User';
import { useUserInfoStore } from '@/util/store';
import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();
  const { username } = useUserInfoStore();

  return (
    <>
      <User username={username} />
      <BottomTabsNavigator />
    </>
  );
}
