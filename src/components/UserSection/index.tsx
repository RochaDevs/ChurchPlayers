'use client';

import Image from "next/image";
import AvatarIcon from '../../../public/grandpaIcon.jpg';
import { getUserInfo } from "@/app/actions/getUserInfo";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

export function UserSection() {
    const [userData, setUserData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUserInfo();
            setUserData(data);
        };

        fetchData();
    }, []);

    if (!userData) {
        return (
            <div className={`flex items-center gap-2 bg-red-500 dark:bg-blue-700 py-2 px-3 rounded-md text-sm`}>
                <Skeleton circle={true} height={50} width={50} />
                <div>
                    <Skeleton width={50} />
                    <Skeleton width={100} />
                </div>
            </div>
        )

    }

    const [firstName, secondName] = userData.name.split(' ');
    const displayName = `${firstName} ${secondName}`;

    return (
        <div className={`flex items-center gap-2 bg-red-500 dark:bg-blue-700 py-2 px-3 rounded-md text-sm`}>
            <Image
                src={AvatarIcon}
                alt="User's image"
                className="rounded-full"
                height={50}
                width={50}
            />
            <div>
                <p>{displayName}</p>
                <p className={`underline`}>{userData.nickname}</p>
            </div>
        </div>
    );
}

export default UserSection;
