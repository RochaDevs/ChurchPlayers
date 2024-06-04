'use client';

import { logout } from "@/app/actions/authDeleteSession";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid";
import { useRouter } from 'next/navigation'

export const ButtonLogout = () => {
    const router = useRouter()
    const handleLogout = async () => {
        await logout();
        router.push('/login')
    }
    return (
        <button onClick={handleLogout} className={`flex items-center gap-1 dark:hover:bg-blue-700 hover:bg-red-500 w-full rounded-md p-1`}>
            <ArrowRightStartOnRectangleIcon
                height={25}
            />
            Log out
        </button>
    )
}