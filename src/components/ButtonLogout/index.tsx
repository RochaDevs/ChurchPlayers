'use client';

import { logout } from "@/app/actions/authDeleteSession";

export const ButtonLogout = () => {
    return (
        <button onClick={logout}>
            Deslogar
        </button>
    )
}