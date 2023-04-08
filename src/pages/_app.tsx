import "../shared/styles/globals.css";
import { AppPropsWithLayout } from "@config/types";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
