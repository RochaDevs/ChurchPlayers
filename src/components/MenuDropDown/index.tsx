
interface IMenuDropDown {
    titulo: string
    lista: string[]
}

export const MenuDropDown = ({ titulo, lista }: IMenuDropDown) => {
    return (
        <div className="dropdown dropdown-hover sm:hidden dark:text-black">
            <div tabIndex={0} role="button" className="btn m-1">{titulo}</div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 flex gap-1">
                {lista.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}