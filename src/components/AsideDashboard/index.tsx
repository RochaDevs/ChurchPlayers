import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"
import { ThemeChanger } from "../ButtonTheme"

export const AsideDashboard = () => {
    return (
        <aside className={`bg-red-700 dark:bg-blue-900 h-screen w-1/6 flex flex-col items-center justify-between`}>
            <div className={``}>
                <div>
                    <img src="" alt="Image's User" />
                    <p>Name's User</p>
                    <p>Username</p>
                </div>

                <ThemeChanger
                    iconeDarkMode={<MoonIcon className='hover:text-red-500' height={35} width={35} />}
                    iconeLightMode={<SunIcon className='dark:hover:text-cyan-400' height={35} width={35} />}
                />
            </div>

            <div>
                <p>Título 01</p>
                <p>Título 02</p>
                <p>Título 03</p>
                <p>Título 04</p>
                <p>Título 05</p>
            </div>


            <div className={``}>
                <p>Settings</p>
                <p>Log out</p>
            </div>
        </aside>
    )
} 