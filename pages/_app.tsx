import "../styles/globals.css";
import type { AppProps } from "next/app";
import Counter from "../components/Counter";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
