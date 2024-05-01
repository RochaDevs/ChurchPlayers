

interface IButtonNav {
    titulo: string
};

const ButtonNav = ({titulo}: IButtonNav) => {
    return (
        <button className={`hover:text-red-500 dark:hover:text-cyan-400`}>
            {titulo}
        </button>
    )
};

export default ButtonNav;