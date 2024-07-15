import { auth, signIn, signOut } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <main>
      {session ? (
        <form
          action={async () => {
            "use server"
            await signOut()
          }}
        >
          <button type="submit">SignOut</button>
        </form>

      ): (
        <form
          action={async () => {
            "use server"
            await signIn("google")
          }}
        >
          <button type="submit">SignIn</button>
        </form>
      )}
    </main>
  );
}
