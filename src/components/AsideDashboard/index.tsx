
import { MoonIcon, SunIcon, Cog6ToothIcon } from "@heroicons/react/24/solid"
import { ThemeChanger } from "../ButtonTheme"
import styles from './AsideDashboard.module.css';
import Link from "next/link";
import { ButtonLogout } from "../ButtonLogout";
import { UserSection } from "../UserSection";

interface LinkItem {
    route: string;
    className: string;
    title: string;
}

const linkList: LinkItem[] = [
    {
        route: '/dashboard/centraljogos',
        className: 'flex items-center gap-1 hover:bg-red-500 dark:hover:bg-blue-700 w-full rounded-md py-3 px-2',
        title: 'Central de jogos'
    },
    {
        route: '/dashboard/comunidade',
        className: 'flex items-center gap-1 hover:bg-red-500 dark:hover:bg-blue-700 w-full rounded-md py-3 px-2',
        title: 'Comunidade'
    },
    {
        route: '/dashboard/meusamigos',
        className: 'flex items-center gap-1 hover:bg-red-500 dark:hover:bg-blue-700 w-full rounded-md py-3 px-2',
        title: 'Meus amigos'
    },
    {
        route: '/dashboard/minhasconquistas',
        className: 'flex items-center gap-1 hover:bg-red-500 dark:hover:bg-blue-700 w-full rounded-md py-3 px-2',
        title: 'Minhas conquistas'
    },
    {
        route: '/dashboard/embreve',
        className: 'flex items-center gap-1 hover:bg-red-500 dark:hover:bg-blue-700 w-full rounded-md py-3 px-2',
        title: 'Em breve'
    },
]

export const AsideDashboard = () => {
    return (
        <aside className={`${styles.asideContainer} bg-red-700 dark:bg-blue-900 h-screen flex flex-col items-center justify-between pt-4 pb-2`}>
            <div className={`flex flex-col items-center h-2/5 justify-between px-2`}>
                <UserSection />
                <ThemeChanger
                    iconeDarkMode={<MoonIcon className='hover:text-red-400' height={35} width={35} />}
                    iconeLightMode={<SunIcon className='dark:hover:text-cyan-400' height={35} width={35} />}
                />

                <nav className={`flex flex-col h-1/2 w-full gap-1`}>
                    {linkList.map(link => (
                        <Link href={link.route} key={link.title} className={link.className}>
                            {link.title}
                        </Link>
                    ))}
                </nav>
            </div>

            <nav className={`border-t-2 border-slate-300 border-solid w-full flex flex-col items-start pt-2 px-2 gap-1`}>
                <Link href='/dashboard/editprofile' className={`flex items-center gap-1 hover:bg-red-500 dark:hover:bg-blue-700 w-full rounded-md p-1`}>
                    <Cog6ToothIcon
                        height={25}
                    />
                    Settings
                </Link>
                <ButtonLogout />
            </nav>
        </aside >
    )
} 