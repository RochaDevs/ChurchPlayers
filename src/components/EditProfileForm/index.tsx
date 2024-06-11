"use client";

import { getUserInfo } from "@/app/actions/getUserInfo";
import { updateUser } from "@/app/actions/postUserInfo";
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

interface ISignupButton {
    stateDisabled: boolean;
  }

export const EditProfileForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nickname, setNickname] = useState('');
    const [gender, setGender] = useState('');
    const [contry, setContry] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [christianDenom, setChristianDenom] = useState('');

    const [state, formUpdateUserServerAction] = useFormState(updateUser, undefined)
    const [disabled, setDisabled] = useState(true)

    const handleDisabled = () => {
        setDisabled(!disabled)
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUserInfo();
            if (data) {
                setName(data.name ?? '');
                setEmail(data.email ?? '');
                setNickname(data.nickname ?? '');
                setGender(data.gender ?? '');
                setContry(data.contry ?? '');
                setMaritalStatus(data.maritalStatus ?? '');
                setChristianDenom(data.christianDenom ?? '');
            }
        };

        fetchData();
    }, []);

    return (
        <form action={formUpdateUserServerAction} className={`flex flex-col gap-3`}>
            <div className={`flex flex-col gap-1`}>
                <label htmlFor="name">
                    Nome:
                </label>
                <input
                    id="name"
                    name="name"
                    placeholder="Nome"
                    className={`py-1 px-2 rounded-md focus:outline-none bg-white text-black ${disabled ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-white text-black'}`}
                    onChange={e => setName(e.target.value)}
                    value={name}
                />
            </div>
            {state?.errors?.name &&
                <p className={`bg-white text-red-600 p-1 rounded-md w-max`}>{state.errors.name}</p>
            }

            <div className={`flex flex-col gap-1`}>
                <label
                    htmlFor="email">
                    E-mail:
                </label>
                <input
                    id="email"
                    name="email" type="email" placeholder="Email"
                    className={`py-1 px-2 rounded-md focus:outline-none bg-white text-black ${disabled ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-white text-black'}`}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            {state?.errors?.email &&
                <p className={`bg-white text-red-600 p-1 rounded-md w-max`}>{state.errors.email}</p>
            }

            <div className={`flex flex-col gap-1`}>
                <label
                    htmlFor="nickname">
                    Nickname:
                </label>
                <input
                    id="nickname"
                    name="nickname" type="text" placeholder="NickName"
                    className={`py-1 px-2 rounded-md focus:outline-none bg-white text-black ${disabled ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-white text-black'}`}
                    value={nickname}
                    onChange={e => setNickname(e.target.value)}
                />
            </div>
            {state?.errors?.nickname &&
                <p className={`bg-white text-red-600 p-1 rounded-md w-max`}>{state.errors?.nickname}</p>
            }

            <div className={`flex flex-col gap-1`}>
                <label htmlFor="genero">Selecione seu gênero:</label>
                <select
                    className={`py-1 px-2 rounded-md focus:outline-none bg-white text-black ${disabled ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-white text-black'}`}
                    value={gender}
                    onChange={e => setGender(e.target.value)}
                    name="gender"
                    id="gender"
                >
                    <option disabled value={''}>Qual o seu gênero de nascimento?</option>
                    <option value={'Masculino'}>Masculino</option>
                    <option value={'Fêminino'}>Fêminino</option>
                </select>
            </div>

            <div className={`flex flex-col gap-1`}>
                <label htmlFor="contry">Selecione seu estado:</label>
                <select
                    className={`py-1 px-2 rounded-md focus:outline-none bg-white text-black ${disabled ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-white text-black'}`}
                    value={contry}
                    onChange={e => setContry(e.target.value)}
                    name="contry"
                    id="contry"
                >
                    <option value="" disabled>Qual o seu estado?</option>
                    <option value="AC">Acre (AC)</option>
                    <option value="AL">Alagoas (AL)</option>
                    <option value="AP">Amapá (AP)</option>
                    <option value="AM">Amazonas (AM)</option>
                    <option value="BA">Bahia (BA)</option>
                    <option value="CE">Ceará (CE)</option>
                    <option value="DF">Distrito Federal (DF)</option>
                    <option value="ES">Espírito Santo (ES)</option>
                    <option value="GO">Goiás (GO)</option>
                    <option value="MA">Maranhão (MA)</option>
                    <option value="MT">Mato Grosso (MT)</option>
                    <option value="MS">Mato Grosso do Sul (MS)</option>
                    <option value="MG">Minas Gerais (MG)</option>
                    <option value="PA">Pará (PA)</option>
                    <option value="PB">Paraíba (PB)</option>
                    <option value="PR">Paraná (PR)</option>
                    <option value="PE">Pernambuco (PE)</option>
                    <option value="PI">Piauí (PI)</option>
                    <option value="RJ">Rio de Janeiro (RJ)</option>
                    <option value="RN">Rio Grande do Norte (RN)</option>
                    <option value="RS">Rio Grande do Sul (RS)</option>
                    <option value="RO">Rondônia (RO)</option>
                    <option value="RR">Roraima (RR)</option>
                    <option value="SC">Santa Catarina (SC)</option>
                    <option value="SP">São Paulo (SP)</option>
                    <option value="SE">Sergipe (SE)</option>
                    <option value="TO">Tocantins (TO)</option>
                </select>
            </div>

            <div className={`flex flex-col gap-1`}>
                <label htmlFor="maritalStatus">Selecione seu estado civil:</label>
                <select
                    className={`py-1 px-2 rounded-md focus:outline-none bg-white text-black ${disabled ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-white text-black'}`}
                    value={maritalStatus}
                    onChange={e => setMaritalStatus(e.target.value)}
                    name="maritalStatus"
                    id="maritalStatus"
                >
                    <option value="" disabled>Qual o seu estado civil?</option>
                    <option value="Solteiro">Solteiro</option>
                    <option value="Casado">Casado</option>
                    <option value="Divorciado">Divorciado</option>
                    <option value="Viúvo">Viúvo</option>
                </select>
            </div>

            <div className={`flex flex-col gap-1`}>
                <label htmlFor="christianDenom">Selecione sua denominação</label>
                <select
                    className={`py-1 px-2 rounded-md focus:outline-none bg-white text-black ${disabled ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-white text-black'}`}
                    value={christianDenom}
                    onChange={e => setChristianDenom(e.target.value)}
                    name="christianDenom"
                    id="christianDenom"
                >
                    <option value="" disabled>Qual a sua denominação cristã?</option>
                    <option value="Igreja Presbiteriana do Brasil (IPB)">Igreja Presbiteriana do Brasil (IPB)</option>
                    <option value="Igreja Batista">Igreja Batista</option>
                    <option value="Igreja Metodista">Igreja Metodista</option>
                    <option value="Igreja Evangélica de Confissão Luterana no Brasil (IECLB)">Igreja Evangélica de Confissão Luterana no Brasil (IECLB)</option>
                    <option value="Igreja Evangélica Luterana do Brasil (IELB)">Igreja Evangélica Luterana do Brasil (IELB)</option>
                    <option value="Igreja Episcopal Anglicana do Brasil (IEAB)">Igreja Episcopal Anglicana do Brasil (IEAB)</option>
                    <option value="Assembleia de Deus">Assembleia de Deus</option>
                    <option value="Congregação Cristã no Brasil (CCB)">Congregação Cristã no Brasil (CCB)</option>
                    <option value="Igreja do Evangelho Quadrangular">Igreja do Evangelho Quadrangular</option>
                    <option value="Igreja Deus é Amor">Igreja Deus é Amor</option>
                    <option value="Igreja Universal do Reino de Deus (IURD)">Igreja Universal do Reino de Deus (IURD)</option>
                    <option value="Igreja Internacional da Graça de Deus">Igreja Internacional da Graça de Deus</option>
                    <option value="Igreja Mundial do Poder de Deus">Igreja Mundial do Poder de Deus</option>
                    <option value="Comunidade Evangélica Sara Nossa Terra">Comunidade Evangélica Sara Nossa Terra</option>
                    <option value="Igreja Renascer em Cristo">Igreja Renascer em Cristo</option>
                    <option value="Igreja Católica Apostólica Romana">Igreja Católica Apostólica Romana</option>
                    <option value="Igreja Católica Apostólica Brasileira (ICAB)">Igreja Católica Apostólica Brasileira (ICAB)</option>
                    <option value="Igreja Ortodoxa Grega">Igreja Ortodoxa Grega</option>
                    <option value="Igreja Ortodoxa Antioquina">Igreja Ortodoxa Antioquina</option>
                    <option value="Igreja Ortodoxa Russa">Igreja Ortodoxa Russa</option>
                    <option value="Igreja Adventista do Sétimo Dia">Igreja Adventista do Sétimo Dia</option>
                    <option value="Testemunhas de Jeová">Testemunhas de Jeová</option>
                    <option value="Igreja de Jesus Cristo dos Santos dos Últimos Dias (Mórmons)">Igreja de Jesus Cristo dos Santos dos Últimos Dias (Mórmons)</option>
                </select>
            </div>

            <SignupButton 
                stateDisabled={disabled}
            />

            <button 
                className={`dark:bg-blue-950 text-white w-full p-3 rounded-md bg-red-950 dark:hover:bg-blue-800 hover:bg-red-800 `}
                onClick={handleDisabled}
                type="button"
            >
                EDITAR
            </button>

        </form>
    )
}

export function SignupButton({stateDisabled}: ISignupButton) {
    const { pending } = useFormStatus()

    return (
        <button className={`dark:bg-blue-950 text-white w-full p-3 rounded-md bg-red-950 dark:hover:bg-blue-800 hover:bg-red-800 ${stateDisabled ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-white text-black'}`} aria-disabled={pending} disabled={stateDisabled} type="submit">
            {pending ? 'SALVANDO' : 'SALVAR'}
        </button>
    )
};