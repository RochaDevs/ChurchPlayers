import { Button } from "../Button"


export const NavBarSecurity = () => {
    return (
        <nav
            className={`flex dark:bg-blue-400 bg-red-400 p-1 gap-1 rounded-md w-1/2`}
        >
            <Button
                path="/dashboard/editprofile/security/changePassword"
                title="Mudar Senha"
            />
            <Button
                path="/dashboard/editprofile/security/changeEmail"
                title="Mudar E-mail"
            />
        </nav>
    )
}