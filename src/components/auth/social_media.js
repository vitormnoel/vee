import { IoLogoFacebook } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { authentication } from "../../../pages/firebase-config";

function SocialMedia() {
  function signInWithFacebook() {
    const provider = new FacebookAuthProvider();
    signInWithPopup(authentication, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  return (
    <>
      <p className="py-4 text-slate-500">or</p>

      <div className="flex gap-2">
        <button className="p-1" onClick={() => signIn("google")}>
          <FcGoogle size={28} />
        </button>

        <button className="p-1" onClick={signInWithFacebook}>
          <IoLogoFacebook size={30} />
        </button>
      </div>
    </>
  );
}

export default SocialMedia;
