import '../styles/global.css';

import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import type { AppProps } from 'next/app';

import { StateContextProvider } from '@/context';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThirdwebProvider desiredChainId={ChainId.Goerli}>
    <StateContextProvider>
      <Component {...pageProps} />
    </StateContextProvider>
  </ThirdwebProvider>
);

export default MyApp;
