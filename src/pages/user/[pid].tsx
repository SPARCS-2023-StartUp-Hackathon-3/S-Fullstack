import { BottomTabsNavigator } from '@/components/BottomTabsNavigator';
import User from '@/components/User';

export default function Page() {
  return (
    <>
      <User username='Jason' />
      <BottomTabsNavigator />
    </>
  );
}
