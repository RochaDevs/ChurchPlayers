'use client'
import Link from "next/link"
import { usePathname } from "next/navigation";


interface IButton {
    title: string
    path: string
}

export const Button = ({ title, path }: IButton) => {
    const pathname = usePathname();

    const getClassName = (path: string): string => (
        `${pathname === path ? 'dark:bg-white bg-red-600 dark:text-blue-700 ' : ''} dark:bg-blue-950 text-white p-3 rounded-md bg-red-950  w-full text-center`
    )
    return (
        <Link
            href={path}
            className={getClassName(path)}
        >
            {title}
        </Link>
    )
}

// dark:hover:bg-blue-800 hover:bg-red-800