import { auth, signIn, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export default async function Template({
    children,
}: Readonly<{
children: React.ReactNode;
}>) {
    const session = await auth();

    return (
        <>
            <header className="flex justify-between items-center border-b p-4 sticky top-0 bg-white">
                <div className="text-xl font-black tracking-widest">siori</div>
                <div>
                    {session ? (
                        <form
                        action={async () => {
                            "use server"
                            await signOut()
                        }}
                        >
                            <Button type="submit" variant="outline">サインアウト</Button>
                        </form>

                    ) : (
                        <form
                        action={async () => {
                            "use server"
                            await signIn("google")
                        }}
                        >
                            <Button type="submit" variant="outline">サインイン</Button>
                        </form>
                    )}
                </div>
            </header>
            <main className="p-4">{children}</main>
        </>
    );
}
