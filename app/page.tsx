import { auth, signIn, signOut } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <form
      action={async () => {
        "use server"
        session ? await signOut() : await signIn("google")
      }}
    >
      <button type="submit">
        { session ? "Sign out" : "Sign in with Google" }
      </button>
    </form>
  );
}
