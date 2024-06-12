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
        `${pathname === path ? 'dark:bg-blue-500 bg-red-400' : ''} dark:bg-blue-950 text-white p-3 rounded-md bg-red-950 dark:hover:bg-blue-800 hover:bg-red-800 w-max`
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