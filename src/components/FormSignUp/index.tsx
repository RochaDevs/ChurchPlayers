'use client';


import { signup } from '@/app/actions/authSignUp';
import { useFormState, useFormStatus } from 'react-dom';

export const FormSignUp = () => {
  const [state, formSignupServerAction] = useFormState(signup, undefined);

  return (
    <form action={formSignupServerAction} className={`px-3 py-2 h-5/6 flex flex-col gap-3 justify-center`}>
      <div className={`flex flex-col gap-1`}>
        <label htmlFor="name">Nome:</label>
        <input id="name" name="name" placeholder="Nome"
          className={`py-1 px-2 rounded-md focus:outline-none bg-white`}
        />
      </div>
      {state?.errors?.name &&
        <p className={`bg-white text-red-600 p-1 rounded-md w-max`}>{state.errors.name}</p>
      }

      <div className={`flex flex-col gap-1`}>
        <label htmlFor="email">E-mail:</label>
        <input id="email" name="email" type="email" placeholder="Email"
          className={`py-1 px-2 rounded-md focus:outline-none bg-white`}
        />
      </div>
      {state?.errors?.email &&
        <p className={`bg-white text-red-600 p-1 rounded-md w-max`}>{state.errors.email}</p>
      }

      <div className={`flex flex-col gap-1`}>
        <label htmlFor="password">Senha:</label>
        <input id="password" name="password" type="password" placeholder='Senha'
          className={`py-1 px-2 rounded-md focus:outline-none bg-white`}
        />
      </div>
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

      {state?.erroEmailJaEmUso && (
        <p className={`bg-white text-red-600 p-2 rounded-md`}>
          {state.erroEmailJaEmUso}
        </p>
      )}

      {state?.erroAoCriarUsuario && (
        <p className={`bg-white text-red-600 p-2 rounded-md`}>
          {state.erroAoCriarUsuario}
        </p>
      )}

      <SignupButton />

    </form>
  );
};

export function SignupButton() {
  const { pending } = useFormStatus()

  return (
    <button className={`dark:bg-blue-950 text-white w-full p-3 rounded-md bg-red-950 dark:hover:bg-blue-800 hover:bg-red-800`} aria-disabled={pending} type="submit">
      {pending ? 'REGISTRANDO-SE' : 'REGISTRE-SE!'}
    </button>
  )
};