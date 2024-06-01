import AsideSettings from "@/components/AsideSettings";


export default function DashboardSettingsLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section  className={`flex w-full dark:bg-blue-950 text-white h-screen items-center`}>
            {children}
            <AsideSettings />
        </section>
    )
}