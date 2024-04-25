import { BookOpenIcon, BellIcon, UserIcon } from '@heroicons/react/24/solid';
import ButtonNav from '../ButtonNav';
import Image from 'next/image';
import Link from 'next/link';
import { MenuDropDown } from '../MenuDropDown';

const NavBar = () => {

    const usuarioLogado = false;
    const listaNav = [
        'Área 01',
        'Área 02',
        'Área 03',
        'Área 04'
    ];

    return (
        <nav className={`flex w-screen px-10 py-4 justify-between shadow-md items-center`}>

            <MenuDropDown 
                lista={listaNav}
                titulo='Menu'
            />

            <ul className={`gap-5 items-center hidden sm:flex`}>
                <li>
                    <BookOpenIcon className="h-10 w-10 text-red-600" />
                </li>
                <li>
                    <ButtonNav
                        titulo='Área 01'
                    />
                </li>
                <li>
                    <ButtonNav
                        titulo='Área 02'
                    />
                </li>
                <li>
                    <ButtonNav
                        titulo='Área 03'
                    />
                </li>
                <ButtonNav
                    titulo='Área 04'
                />
            </ul>

            {usuarioLogado ? (
                <div className={`flex gap-5 items-center`}>
                    <BellIcon />
                    <img src="" alt="Imagem" />
                </div>
            ) : (
                <Link
                    href={'/login'}
                    className={`flex items-center hover:text-red-500`}
                >
                    <UserIcon
                        className='h-8 w-8'
                    />
                    <p>Logar</p>
                </Link>
            )}

        </nav>
    )
};

export default NavBar;