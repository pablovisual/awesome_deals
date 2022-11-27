import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createTheme, NextUIProvider } from '@nextui-org/react';
const theme = createTheme({
  type: 'light',
  theme: {
    colors: {
      primary: '#329D9C',
      siteColor: '#7BE495',
      testColors: '#329D9C'
    }
  }
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
