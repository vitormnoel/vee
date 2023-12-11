import { FacebookAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

const provider = new FacebookAuthProvider();
const auth = getAuth();
auth.useDeviceLanguage = "en";