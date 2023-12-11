import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from "firebase/auth";
import GoogleProvider from "next-auth/providers/google";
import { authentication } from "../../firebase-config";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        return await signInWithEmailAndPassword(
          authentication,
          credentials.email,
          credentials.password
        )
          .then((userCredential) => {
            if (userCredential.user) {
              return userCredential;
            }
            return null;
          })
          .catch((error) => console.log(error));
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
};
export default NextAuth(authOptions);
