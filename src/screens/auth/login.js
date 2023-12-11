import Link from 'next/link'

import LoginForm from "../../components/auth/form";
import SocialMedia from "../../components/auth/social_media";

function Login() {
  return (
    <section className="container m-auto h-[100vh] flex flex-col items-center justify-center">
      <div className="w-[50vw] px-[10%] flex flex-col justify-center items-center">
        <div className="text-start w-full mb-10">
          <>
            <h2 className="font-semibold text-4xl">Hey 👋🏼</h2>
            <h2 className="font-semibold text-4xl">Welcome back!</h2>
          </>
          <p className="mt-4 w-[25vw]">
            Login to your account - enter your information and enjoy the
            experience.
          </p>
        </div>

        <LoginForm />

        <SocialMedia />

        <Link href="/signup" className="underline pt-4 text-slate-500 cursor-pointer duration-300 hover:text-slate-700">
          create new account
        </Link>
      </div>
    </section>
  );
}

export default Login;
