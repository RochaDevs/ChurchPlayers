'use client';

import { updatePasswordUser } from "@/app/actions/updatePasswordUser";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom"


interface IForm {

}

export const Form = (props: IForm) => {
    const { pending } = useFormStatus();
    const [state, formUpdateSensityDataUserServerAction] = useFormState(updatePasswordUser, undefined)

    const [senhaAtual, setSenhaAtual] = useState('');
    const [novaSenha, setNovaSenha] = useState('');

    return (
        <form
            action={formUpdateSensityDataUserServerAction}
            className={`flex flex-col gap-1`}
        >
            <label htmlFor='password'>
                Senha atual
            </label>
            <input
                type='password'
                name='password'
                id='password'
                className={`py-1 px-2 rounded-md focus:outline-none bg-white text-black`}
                placeholder='Digite sua senha atual'
                onChange={(e) => setSenhaAtual(e.target.value)}
            />
            <input
                type='password'
                name='newPassword'
                id='newPassword'
                className={`py-1 px-2 rounded-md focus:outline-none bg-white text-black`}
                placeholder='Digite sua nova senha'
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
            <button
                type="submit"
                className={`dark:bg-blue-950 text-white w-full p-2 rounded-md bg-red-950 dark:hover:bg-blue-800 hover:bg-red-800`}
            >
                {pending ? 'VERIFICANDO' : 'VERIFICAR'}
            </button>
        </form>
    )
}

