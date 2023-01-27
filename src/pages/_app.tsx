import localFont from '@next/font/local';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={pretendard.className}>
      <Component {...pageProps} />;
    </main>
  );
}
