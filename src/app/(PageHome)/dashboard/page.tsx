import { AsideDashboard } from "@/components/AsideDashboard";



export default function Dashboard () {
    return (
        <section className={`flex w-full dark:bg-blue-950 text-white`}>
            <AsideDashboard />
            <p>Dashboard</p>
        </section>
    )
}