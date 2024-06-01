import React from 'react';
import { PencilSquareIcon, ShieldCheckIcon, BellAlertIcon, BanknotesIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

interface IListAsideSettings {
    icon: React.ReactNode,
    title: string 
    className: string
    route: string
}

const classNameDefaultForListAsideSettings: string = 'flex items-center justify-start gap-1 hover:bg-red-500 dark:hover:bg-blue-700 w-full rounded-md py-1 px-2 text-xs'

const listAsideSettings: IListAsideSettings[] = [
    {
        icon: <PencilSquareIcon height={30} />,
        title: 'Editar Perfil',
        className: `${classNameDefaultForListAsideSettings}`,
        route: '/dashboard/settings/editperfil'
    },
    {
        icon: <ShieldCheckIcon  height={30}/>,
        title: 'Segurança',
        className: `${classNameDefaultForListAsideSettings}`,
        route: '/dashboard/settings/security'
    }, 
    {
        icon: <BellAlertIcon  height={30}/>,
        title: 'Notificações',
        className: `${classNameDefaultForListAsideSettings}`,
        route: '/dashboard/settings/news'
    }, 
    {
        icon: <BanknotesIcon  height={30}/>,
        title: 'Contribuições',
        className: `${classNameDefaultForListAsideSettings}`,
        route: '/dashboard/settings/donation'
    }, 
] 
export default function AsideSettings() {
    return (

        <nav className={`h-1/2 w-1/12 px-1 rounded-lg absolute right-3 bg-red-700 dark:bg-blue-900 flex flex-col items-start justify-evenly`}>
            <h1 className={`text-center`}>Setting's options</h1>
            {listAsideSettings.map(item => (
                <Link href={item.route} key={item.title} className={item.className}>
                    {item.icon}
                    {item.title}
                </Link>
            ))}
        </nav>

    )
}