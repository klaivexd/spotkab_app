const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex justify-center items-center min-h-screen w-full bg_dark_blue bg-dotted-pattern bg-center">
            {children}
        </div>
    )
}

export default Layout