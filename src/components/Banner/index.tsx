import Link from "next/link";
import { FaPersonPraying } from "react-icons/fa6";
import styles from './Banner.module.css';

export const Banner = () => {
    return (
        <section id="inicio" className={`${styles.section} flex flex-col items-center justify-end gap-5 pb-5 bg-white dark:bg-blue-950`}>
            <FaPersonPraying
                className={`hidden lg:flex text-red-600 dark:text-white`}
                size={350}
            />
            <FaPersonPraying
                className={`sm:flex hidden lg:hidden text-red-600 dark:text-white`}
                size={300}
            />
            <FaPersonPraying
                className={`sm:hidden text-red-600 dark:text-white`}
                size={200}
            />
            <h1 className="text-2xl text-center p-1 dark:text-white">
                Aprimore seu conhecimento sobre as Escrituras Sagradas
            </h1>
        </section>
    )
};