import { Layout } from "@/components/layout/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto_Mono, Ubuntu_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"]
});

const ubuntuMono = Ubuntu_Mono({
  variable: "--font-ubuntu-mono",
  weight: ["400", "700"],
  subsets: ["latin"]
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${ubuntuMono.variable} ${robotoMono.variable} font-sans`}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </div>

  )
}
