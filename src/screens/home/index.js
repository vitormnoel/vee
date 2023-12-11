import { signOut, useSession } from "next-auth/react";

function Home() {
  const session = useSession();
  const user = session?.data?.user.name;

  return (
    <section className="container m-auto h-[100vh] flex flex-col gap-4 items-center justify-center">
      <h1>{user}</h1>
      <button
        onClick={() => signOut()}
        className="mt-8 bg-red-400 text-white w-full py-2 rounded-md duration-300 hover:bg-red-600 md:w-[20vw]"
      >
        sign out
      </button>
    </section>
  );
}

export default Home;
