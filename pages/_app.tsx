import type { AppProps } from "next/app";
import { GlobalStyles } from "../components/globalStyles";
import { GlobalContainer } from "../components/GlobalContainer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <GlobalContainer>
        <Component {...pageProps} />
      </GlobalContainer>
    </>
  );
}
