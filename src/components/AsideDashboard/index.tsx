import { MoonIcon, SunIcon, Cog6ToothIcon, ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid"
import { ThemeChanger } from "../ButtonTheme"
import styles from './AsideDashboard.module.css';
import Link from "next/link";
import Image from 'next/image';
import AvatarIcon from '../../../public/grandpaIcon.jpg';

export const AsideDashboard = () => {
    return (
        <aside className={`${styles.asideContainer} bg-red-700 dark:bg-blue-900 h-screen flex flex-col items-center justify-between pt-4 pb-2`}>
            <div className={``}>
                <div>
                    <Image
                        src={AvatarIcon} 
                        alt="User's image"
                        className="rounded-full"
                    />
                    <p>Name's User</p>
                    <p>Username</p>
                </div>

                <ThemeChanger
                    iconeDarkMode={<MoonIcon className='hover:text-red-500' height={35} width={35} />}
                    iconeLightMode={<SunIcon className='dark:hover:text-cyan-400' height={35} width={35} />}
                />

                <div>
                    <p>Título 01</p>
                    <p>Título 02</p>
                    <p>Título 03</p>
                    <p>Título 04</p>
                    <p>Título 05</p>
                </div>
            </div>




            <div className={`border-t-2 border-slate-300 border-solid w-full flex flex-col items-start pt-2 px-2 gap-1`}>
                <Link href='/dashboard/settings' className={`flex items-center gap-1 hover:bg-red-500 dark:hover:bg-blue-700 w-full rounded-md p-1`}>
                    <Cog6ToothIcon
                        height={25}
                    />
                    Settings
                </Link>
                <button className={`flex items-center gap-1 dark:hover:bg-blue-700 hover:bg-red-500 w-full rounded-md p-1`}>
                    <ArrowRightStartOnRectangleIcon
                        height={25}
                    />
                    Log out
                </button>
            </div>
        </aside>
    )
} 