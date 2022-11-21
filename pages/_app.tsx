import "../styles/globals.sass";
import type { AppProps } from "next/app";

import localFont from "@next/font/local";

const jbMono = localFont({
  src: "./fonts/JetBrainsMono-Regular.woff2",
  variable: "--font-mono",
});
const jbMonoBold = localFont({
  src: "./fonts/JetBrainsMono-Bold.woff2",
  variable: "--font-monobold",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${jbMono.variable} ${jbMonoBold.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
