import LoginForm from "../../components/auth/form";

function signup() {
  return (
    <section className="container m-auto h-[100vh] flex flex-col items-center justify-center">
      <div className="w-[50vw] px-[10%] flex flex-col justify-center items-center">
        <div className="text-start w-full mb-10">
          <>
            <h2 className="font-semibold text-4xl">Hello stranger 👋🏼</h2>
          </>
          <p className="mt-4 w-[25vw]">
            Sign up right now - enter your information bellow and explore your
            possibilities.
          </p>
        </div>

        <LoginForm type="signup"/>
      </div>
    </section>
  );
}

export default signup;