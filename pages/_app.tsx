import type { AppProps } from "next/app";
import Header from "../components/Header";
import "./styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container md:mx-auto md:px-40 px-8 py-8 text-lighter font-roboto min-h-screen flex flex-col">
      <Header />

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
