import NextAuth, { getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
    secret: process.env.AUTH_SECRET,
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        // ...add more providers here
    ],

    pages: {
        signIn: "/signin",
    },

    callbacks: {
        // Setup the session object that is used in the client
        async session({ session, token }) {
            session.user.username = session.user.name.replace(" ", "").toLocaleLowerCase();
            session.user.uid = token.sub;
            return session;
        }
    }
}
const handler = NextAuth(authOptions);

export function auth() {
    return getServerSession(authOptions);
}


export { handler as GET, handler as POST };
