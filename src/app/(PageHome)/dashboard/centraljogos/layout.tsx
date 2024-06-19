import { SearchCentralJogos } from "@/components/CentralJogos/Search"


export default function CentralJogosLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section  className={`flex w-full dark:bg-blue-950 text-white h-screen flex-col`}>
            <SearchCentralJogos />
            {children}
        </section>
    )
}