import Link from "next/link";
import { FaPersonPraying } from "react-icons/fa6";
import styles from './Banner.module.css';

export const Banner = () => {
    return (
        <section className={`${styles.section} flex flex-col items-center justify-center gap-5`}>
            <FaPersonPraying
                className={`hidden lg:flex`}
                size={350}
                color="#FF3B30"
            />
            <FaPersonPraying
                className={`sm:flex hidden lg:hidden`}
                size={300}
                color="#FF3B30"
            />
            <FaPersonPraying
                className={`sm:hidden`}
                size={200}
                color="#FF3B30"
            />
            <h1 className="text-2xl text-center p-1">
                Aprimore seu conhecimento sobre as Escrituras Sagradas
            </h1>
        </section>
    )
};