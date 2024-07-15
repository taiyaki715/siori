export default function Template({
    children,
}: Readonly<{
children: React.ReactNode;
}>) {
    return (
        <>
            <header>
                <title>siori</title>
            </header>
            <main>{children}</main>
        </>
    );
}
