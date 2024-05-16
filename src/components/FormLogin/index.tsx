'use client';

import { login } from '@/app/actions/authLogin';
import { useFormState, useFormStatus } from 'react-dom';

export function LoginButton() {
    const { pending } = useFormStatus()
  
    return (
      <button aria-disabled={pending} type="submit">
        {pending ? 'Submitting...' : 'Login'}
      </button>
    )
  };

export const FormLogin = () => {

    const [state, formLoginServerAction] = useFormState(login, undefined)

    return (
        <form action={formLoginServerAction} className={`px-3 py-2 h-5/6 flex flex-col gap-5 justify-center`}>

            <div className={`flex flex-col gap-1`}>
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type="email" placeholder="Email"
                    className={`py-1 px-2 rounded-md focus:outline-none `}
                />
            </div>
            {/* {state?.errors?.email && <p>{state.errors.email}</p>} */}

            <div className={`flex flex-col gap-1`}>
                <label htmlFor="password">Password:</label>
                <input id="password" name="password" type="password"
                    className={`py-1 px-2 rounded-md focus:outline-none`}
                />
            </div>
            {/* {state?.errors?.password && (
                <div>
                    <p>Password must:</p>
                    <ul>
                        {state.errors.password.map((error: any) => (
                            <li key={error}>- {error}</li>
                        ))}
                    </ul>
                </div>
            )} */}

            {/* <SignupButton /> */}
            <button type="submit">Efetuar Login</button>
        </form>
    );
};