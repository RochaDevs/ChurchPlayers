import { FormChangePassword } from "@/components/Security/FormChangePassword";


export default function ChangePassword () {
    return (
        <div className={`h-1/2 dark:bg-blue-400 w-1/2 rounded-md p-2 gap-5 flex flex-col justify-center items-center`}>
            <h1>Siga as instruções abaixo para mudar sua senha:</h1>
            <FormChangePassword />
        </div>
    )
}