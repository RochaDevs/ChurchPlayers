

interface IButtonNav {
    titulo: string
};

const ButtonNav = ({titulo}: IButtonNav) => {
    return (
        <button className={`hover:text-red-500`}>
            {titulo}
        </button>
    )
};

export default ButtonNav;