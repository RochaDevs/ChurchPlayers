import { BookOpenIcon, BellIcon, UserIcon, SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import ButtonNav from '../ButtonNav';
import Link from 'next/link';
import { MenuDropDown } from '../MenuDropDown';
// import ThemeSwitcher from '../ButtonTheme/themeSwitcher';
import { ThemeChanger } from '../ButtonTheme';

const NavBar = () => {

    const usuarioLogado = false;
    const listaNav = [
        'Área 01',
        'Área 02',
        'Área 03',
        'Área 04'
    ];

    return (
        <nav className={` 
            flex w-screen px-10 py-4 justify-between items-center shadow-md fixed bg-white 
            dark:bg-blue-900 dark:text-white
            `}

        >

            <MenuDropDown
                lista={listaNav}
                titulo='Menu'
            />

            <ul className={`gap-5 items-center hidden sm:flex`}>
                <li>
                    <BookOpenIcon className="h-10 w-10 text-red-600 dark:text-cyan-400" />
                </li>
                {listaNav.map(lista => (
                    <li key={lista}>
                        <ButtonNav
                            titulo={lista}
                        />
                    </li>
                ))}
            </ul>

            {usuarioLogado ? (
                <div className={`flex gap-5 items-center`}>
                    <ThemeChanger
                        iconeDarkMode={<MoonIcon className='hover:text-red-500' height={35} width={35} />}
                        iconeLightMode={<SunIcon className='dark:hover:text-cyan-400' height={35} width={35} />}
                    />
                    <BellIcon
                        height={30}
                        className='hover:text-red-500 dark:hover:text-cyan-400'
                    />
                    <img src="" alt="Imagem" />
                </div>
            ) : (
                <div className='flex gap-5'>
                    <div className=''>
                        <ThemeChanger
                            iconeDarkMode={<MoonIcon className='hover:text-red-500' height={35} width={35} />}
                            iconeLightMode={<SunIcon className='dark:hover:text-cyan-400' height={35} width={35} />}
                        />
                    </div>
                    <Link
                        href={'/login'}
                        className={`flex items-center hover:text-red-500 dark:hover:text-cyan-400`}
                    >
                        <UserIcon
                            className='h-8 w-8'
                        />
                        <p>Logar</p>
                    </Link>
                </div>
            )}

        </nav>
    )
};

export default NavBar;