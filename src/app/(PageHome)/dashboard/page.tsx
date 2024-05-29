import { AsideDashboard } from "@/components/AsideDashboard";
import styles from './Dashboard.module.css';



export default function Dashboard () {
    return (
        <section className={`flex w-full dark:bg-blue-950 text-white h-screen`}>
            <AsideDashboard />
            <p>Dashboard</p>
        </section>
    )
}