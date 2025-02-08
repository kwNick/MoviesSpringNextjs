export default function SignupLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen w-screen">
            {children}
        </div>
    )
}