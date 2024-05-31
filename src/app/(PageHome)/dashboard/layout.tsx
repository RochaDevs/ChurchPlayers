import { AsideDashboard } from "@/components/AsideDashboard"

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section  className={`flex w-full dark:bg-blue-950 text-white h-screen`}>
            <AsideDashboard />
            {children}
        </section>
    )
}