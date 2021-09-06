import Head from "next/head";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { SubHeader } from "../components/subHeader";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

const userFormSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  fullname: z.string(),
});

type UserFormSchema = z.infer<typeof userFormSchema>;

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormSchema>({
    resolver: zodResolver(userFormSchema),
  });

  useEffect(() => console.table(errors), [errors]);
  const onSubmit = (data: UserFormSchema) => console.table(data);

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
          <form autoComplete="off" className="flex flex-col space-y-2">
            <div className="">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="firstname"
              >
                Firstname
              </label>
              <input {...register("firstname")} type="text" name="firstname" />
            </div>
            <div className="">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="lastname"
              >
                Lastname
              </label>
              <input {...register("lastname")} type="text" name="lastname" />
            </div>
            <div className="">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="fullname"
              >
                Fullname
              </label>
              <input
                {...register("fullname")}
                readOnly
                defaultValue="asdasd"
                type="text"
                name="fullname"
              />
            </div>
            <button type="submit" onClick={handleSubmit(onSubmit)}>
              Submit
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
