import Link from 'next/link';

interface IButtonNav {
    lista: IMenuItem;  // Modificado para receber um único item
};

interface IMenuItem {
    titulo: string;
    id: string;
}

const ButtonNav = ({ lista }: IButtonNav) => {
    return (
        <Link href={`#${lista.id}`} className="hover:text-red-500 dark:hover:text-cyan-400">
            {lista.titulo}
        </Link>
    );
};

export default ButtonNav;
