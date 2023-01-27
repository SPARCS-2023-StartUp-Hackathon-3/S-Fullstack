import { useStore } from '@/util/store';
import Link from 'next/link';

export default function End() {
  const { testData, setTestData, resetData } = useStore();

  console.log(testData);

  return (
    <>
      <Link href='/generate/start'>
        end
        <button
          onClick={() => {
            setTestData(testData + 1);
          }}
        >
          up
        </button>
        <button
          onClick={() => {
            resetData();
          }}
        >
          reset
        </button>
      </Link>
    </>
  );
}
