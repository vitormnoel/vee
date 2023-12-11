import { useRef } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { authentication } from "../../../pages/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";

import { MdOutlineMail, MdOutlineLock } from "react-icons/md";
import { GoPerson } from "react-icons/go";

function Form(props) {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const router = useRouter();

  function userData() {
    return {
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };
  }

  async function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <>
      <form
        id="login"
        className="flex flex-col gap-4 w-full capitalize"
        onSubmit={submitHandler}
      >
        {props.type ? (
          <div className="grid gap-1 relative">
            <label htmlFor="name">name</label>
            <GoPerson className="absolute text-slate-400 text-xl bottom-2 left-2" />
            <input
              className="px-4 pl-10 py-2 rounded-md bg-slate-100 focus:outline-none  focus:ring-2 focus:ring-black hover:ring-1 hover:ring-black"
              type="text"
              id="name"
              required
            />
          </div>
        ) : (
          ""
        )}
        <div className="grid gap-1 relative">
          <label htmlFor="email">email</label>
          <MdOutlineMail className="absolute text-slate-400 text-xl bottom-2 left-2" />
          <input
            className="px-4 pl-10 py-2 rounded-md bg-slate-100 focus:outline-none  focus:ring-2 focus:ring-black hover:ring-1 hover:ring-black"
            type="email"
            id="email"
            placeholder="your-email@company.com"
            ref={emailInputRef}
            required
          />
        </div>

        <div className="grid gap-1 relative">
          <label htmlFor="password">password</label>
          <MdOutlineLock className="absolute text-slate-400 text-xl bottom-2 left-2" />
          <input
            className="px-4 pl-10 py-2 rounded-md bg-slate-100 focus:outline-none  focus:ring-2 focus:ring-black hover:ring-1 hover:ring-black"
            type="password"
            id="password"
            ref={passwordInputRef}
            required
          />
        </div>
      </form>

      <div className="mt-2 flex w-full place-content-between text-slate-400">
        <div>
          <input type="checkbox" id="box" className="accent-black" />
          <label className="ml-2" htmlFor="box">
            Remember me
          </label>
        </div>
        {props.type ? (
          ""
        ) : (
          <Link href="/" className="hover:text-slate-500">
            Forgot password?
          </Link>
        )}
      </div>

      <button
        type="submit"
        form="login"
        className="mt-8 bg-slate-800 text-white w-full py-2 rounded-md duration-300 hover:bg-slate-600 md:w-[20vw]"
        onClick={() => {
          var email = userData().email;
          var password = userData().password;

          props.type
            ? createUserWithEmailAndPassword(
                authentication,
                email,
                password
              ).then(router.push("/"))
            : signIn("credentials", {
                email,
                password,
                redirect: true,
                callbackUrl: "/",
              });
        }}
      >
        {props.type ? "create" : "login"}
      </button>
    </>
  );
}

export default Form;
