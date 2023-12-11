import { useSession } from "next-auth/react";
import Home from "../home";
import Login from "./login";

function Logged() {
  const session = useSession();

  switch (session.status) {
    case "authenticated":
      return <Home />;
    case "unauthenticated":
      return <Login />;
    default:
      return null;
  }
}

export default Logged;
