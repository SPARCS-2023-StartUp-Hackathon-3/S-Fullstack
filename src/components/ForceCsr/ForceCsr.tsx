import { useEffect, useState } from 'react';

interface IForceCsrProps {
  children: React.ReactNode;
}

export function ForceCsr({ children }: IForceCsrProps) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return null;

  return <>{children}</>;
}
