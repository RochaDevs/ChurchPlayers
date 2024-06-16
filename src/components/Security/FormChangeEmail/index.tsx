'use client';

import { updatePasswordUser } from "@/app/actions/updatePasswordUser";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom"

interface IUpdateButton {
    limparForm: () => void
}

export const FormChangeEmail = () => {

    const [state, formUpdateSensityDataUserServerAction] = useFormState(updatePasswordUser, undefined)

    const [senhaAtual, setSenhaAtual] = useState('');
    const [novaSenha, setNovaSenha] = useState('');

    const limparForm = (): void => {
        setSenhaAtual('');
        setNovaSenha('')
    }

    return (
        <form
            action={formUpdateSensityDataUserServerAction}
            className={`flex flex-col gap-4 w-1/2`}
        >

            <div className={'flex flex-col gap-2'}>
                <label htmlFor='password'>
                    Confirme sua senha atual primeiro:
                </label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    className={`py-1 px-2 rounded-md focus:outline-none bg-white text-black`}
                    placeholder='Digite sua senha atual'
                    onChange={(e) => setSenhaAtual(e.target.value)}
                />
                {state?.error === 'Campo vazio' && (
                    <p className={`bg-white text-red-600 p-1 rounded-md w-max`}>
                        Campo vazio
                    </p>
                )}
                {state?.error === 'Senha inválida' && (
                    <p className={`bg-white text-red-600 p-1 rounded-md w-max`}>
                        Senha inválida
                    </p>
                )}
            </div>


            <div className={'flex flex-col gap-2'}>
                <label htmlFor='newPassword'>
                    Digite aqui o seu novo e-mail:
                </label>
                <input
                    type='email'
                    name='newEmail'
                    id='newEmail'
                    className={`py-1 px-2 rounded-md focus:outline-none bg-white text-black`}
                    placeholder='Digite seu novo e-mail'
                    onChange={(e) => setNovaSenha(e.target.value)}
                />
                {state?.errors?.password && (
                    <div className={`bg-white text-red-600 p-1 rounded-md flex flex-col gap-2`}>
                        <p>A senha deve possuir:</p>
                        <ul className={`flex flex-col gap-2`}>
                            {state.errors.password.map((error: any) => (
                                <li key={error}>- {error}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <UpdateButton 
                limparForm={limparForm}
            />
            {state?.success && (
                <p className={`bg-white text-green-600 p-1 rounded-md w-max`}>
                    Senha atualizada!
                </p>
            )}

        </form>
    )
}

export function UpdateButton({limparForm}: IUpdateButton) {
    const { pending } = useFormStatus()

    return (
        <button
            type="submit"
            aria-disabled={pending}
            onClick={limparForm}
            className={`dark:bg-blue-950 text-white w-full p-2 rounded-md bg-red-950 dark:hover:bg-blue-800 hover:bg-red-800`}
        >
            {pending ? 'VERIFICANDO' : 'VERIFICAR'}
        </button>
    )
};