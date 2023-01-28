import { BottomTabsNavigator } from '@/components/BottomTabsNavigator';
import { ForceCsr } from '@/components/ForceCsr';
import User from '@/components/User';
import { useUserInfoStore } from '@/util/store';

export default function Page() {
  const { username } = useUserInfoStore();

  return (
    <ForceCsr>
      <User username={username} />
      <BottomTabsNavigator />
    </ForceCsr>
  );
}
