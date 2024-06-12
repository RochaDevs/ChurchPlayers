import { Button } from "../Button"


export const NavBarSecurity = () => {
    return (
        <nav
            className={`flex`}
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