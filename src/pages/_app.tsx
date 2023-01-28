import localFont from '@next/font/local';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={pretendard.className}>
        <Component {...pageProps} />
      </main>
    </QueryClientProvider>
  );
}
