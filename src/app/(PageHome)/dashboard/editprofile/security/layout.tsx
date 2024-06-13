import AsideSettings from "@/components/AsideSettings";
import { NavBarSecurity } from "@/components/Security/NavBar";


export default function LayoutSecurity({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section  className={`flex flex-col w-full dark:bg-blue-950 text-white h-screen items-center justify-center gap-2`}>
            <NavBarSecurity />
            {children}
        </section>
    )
}