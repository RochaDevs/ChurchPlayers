'use client'

import Image from "next/image";
import AvatarIcon from '../../../public/grandpaIcon.jpg';
import { getUserInfo } from "@/app/actions/getUserInfo";
import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';



export const UserSection = () => {

    const [userData, setUserData] = useState<any>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await getUserInfo();
                setUserData(data);
            } catch (error) {
                throw new Error ('Erro ao buscar informações do usuario')
            }
        };

        fetchUserData();
    }, [])

    if (!userData) {
        return <div>Carregando...</div>;
    }

    const [firstName, secondName] = userData.name.split(' ');
    const displayName = `${firstName} ${secondName}`;

    return (
        <div className={`flex items-center gap-2 bg-red-500 dark:bg-blue-700 py-2 px-3 rounded-md text-sm`}>
            <Image
                src={AvatarIcon}
                alt="User's image"
                className="rounded-full"
            />
            <div>
                <p>{displayName}</p>
                <p className={`underline`}>{userData.nickname}</p>
            </div>
        </div>
    )
}