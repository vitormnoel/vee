import { getSession } from "next-auth/react";
import Home from "../src/screens/auth";

function HomePage({ session }) {
  return <Home {...session}/>;
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  return {
    props: {
      session,
    },
  };
}

export default HomePage;
