import Head from "next/head";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { SubHeader } from "../components/subHeader";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Bulletproof Forms</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <Header />
        <SubHeader />

        <div className="flex flex-wrap items-center justify-around w-full max-w-3xl mt-6">
          <form autoComplete="new-password" className="flex flex-col space-y-2">
            <input type="text" name="firstname" />
            <input type="text" name="lastname" />
            <input type="text" name="fullname" />
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
