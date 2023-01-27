import Link from 'next/link';
import { useStore } from '@/util/store';

export default function Select() {
  const { testData, setTestData, resetData } = useStore();

  console.log(testData);

  return (
    <>
      <Link href='/generate/confirm'>
        select
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
