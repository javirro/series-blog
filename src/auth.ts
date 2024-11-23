import NextAuth, { User } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { signInSchema } from './utils/zod'
import { ZodError } from 'zod'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        name: { label: 'email', type: 'text', required: true },
        password: { label: 'password', type: 'password', required: true },
      },
      async authorize(credentials: Partial<Record<'email' | 'password', unknown>>) {
        if (!credentials) throw new Error('Missing credentials')
        try {
          const { email, password } = await signInSchema.parseAsync(credentials)
          console.log({ email, password })
          const userSession: User = { email: email as string, name: email as string }
          if (userSession) {
            return userSession
          } else {
            throw new Error('Invalid credentials')
          }
        } catch (error) {
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            return null
          }
          throw error
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async session({ session, token }) {
      console.log("Session Callback", { session, token });
      return session;
    },
    async jwt({ token, user }) {
      console.log("JWT Callback", { token, user });
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
  },
})
