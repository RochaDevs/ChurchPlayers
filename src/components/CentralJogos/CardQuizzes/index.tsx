import Image from "next/image";
import Link from "next/link";
import styles from './CardQuizzes.module.css';

interface IDataQuizzes {
    title: string;
    altImage: string;
    srcImage: string;
    description: string;
    srcLink: string;
}

export const CardQuizzes = ({ title, altImage, description, srcImage, srcLink }: IDataQuizzes) => {
    return (
        <article className={`${styles.article} bg-blue-500 p-3 flex flex-col justify-between items-center text-center rounded-lg`}>
            <h1 className="text-sm font-bold text-white">
                {title}
            </h1>
            <Image 
                alt={altImage}
                src={srcImage}
                width={50}
                height={50}
                className="mb-2"
            />
            <p className="text-xs text-white break-words mb-2">
                {description}
            </p>
            <Link href={srcLink} className="text-blue-200 hover:text-blue-400">
                Play
            </Link>
        </article>
    );
};
