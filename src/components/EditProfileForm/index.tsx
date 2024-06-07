"use client";

import { getUserInfo } from "@/app/actions/getUserInfo";
import { IInfoUser } from "@/app/interface/infoUser";
import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";

export const EditProfileForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nickname, setNickname] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');
    const [country, setCountry] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [christianDenom, setChristianDenom] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            const data = await getUserInfo();
            if (data) {
                setName(data.name ?? '');
                setEmail(data.email ?? '');
                setNickname(data.nickname ?? '');
                setGender(data.gender ?? '');
                setCountry(data.contry ?? '');
                setMaritalStatus(data.maritalStatus ?? '');
                setChristianDenom(data.christianDenom ?? '');
            }
        };

        fetchData();
    }, []);

    return (
        <form action={''} className={`flex flex-col gap-3`}>
            <div className={`flex flex-col gap-1`}>
                <label htmlFor="name">
                    Nome:
                </label>
                <input
                    id="name"
                    name="name"
                    placeholder="Nome"
                    className={`py-1 px-2 rounded-md focus:outline-none bg-white text-black`}
                    value={name} 
                    onChange={e => setName(e.target.value)}
                />
            </div>

            <div className={`flex flex-col gap-1`}>
                <label
                    htmlFor="email">
                    E-mail:
                </label>
                <input
                    id="email"
                    name="email" type="email" placeholder="Email"
                    className={`py-1 px-2 rounded-md focus:outline-none bg-white text-black`}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>

            <div className={`flex flex-col gap-1`}>
                <label
                    htmlFor="text">
                    Nickname:
                </label>
                <input
                    id="nickname"
                    name="nickname" type="text" placeholder="NickName"
                    className={`py-1 px-2 rounded-md focus:outline-none bg-white text-black`}
                    value={nickname}
                    onChange={e => setNickname(e.target.value)}
                />
            </div>

            <div className={`flex flex-col gap-1`}>
                <label htmlFor="data_de_nascimento">Data de Nascimento:</label>
                <input 
                    id="birthDate" 
                    name="birthDate" 
                    placeholder="Data de nascimento" 
                    type="date"
                    className={`py-1 px-2 rounded-md focus:outline-none bg-white text-black`}
                />
            </div>

            <div className={`flex flex-col gap-1`}>
                <label htmlFor="genero">Selecione seu gênero:</label>
                <select 
                    className="py-1 px-2 rounded-md focus:outline-none bg-white text-black" 
                    value={gender}
                    onChange={e => setGender(e.target.value)}
                    name="gender"
                    id="gender"
                >
                    <option disabled selected>Qual o seu gênero de nascimento?</option>
                    <option>Masculino</option>
                    <option>Fêminino</option>
                </select>
            </div>

            <div className={`flex flex-col gap-1`}>
                <label htmlFor="estado">Selecione seu estado:</label>
                <select 
                    className="py-1 px-2 rounded-md focus:outline-none bg-white text-black"
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                    name="country"
                    id="country"
                >
                    <option disabled selected>Qual o seu estado?</option>
                    <option>Acre (AC)</option>
                    <option>Alagoas (AL)</option>
                    <option>Amapá (AP)</option>
                    <option>Amazonas (AM)</option>
                    <option>Bahia (BA)</option>
                    <option>Ceará (CE)</option>
                    <option>Distrito Federal (DF)</option>
                    <option>Espírito Santo (ES)</option>
                    <option>Goiás (GO)</option>
                    <option>Maranhão (MA)</option>
                    <option>Mato Grosso (MT)</option>
                    <option>Mato Grosso do Sul (MS)</option>
                    <option>Minas Gerais (MG)</option>
                    <option>Pará (PA)</option>
                    <option>Paraíba (PB)</option>
                    <option>Paraná (PR)</option>
                    <option>Pernambuco (PE)</option>
                    <option>Piauí (PI)</option>
                    <option>Rio de Janeiro (RJ)</option>
                    <option>Rio Grande do Norte (RN)</option>
                    <option>Rio Grande do Sul (RS)</option>
                    <option>Rondônia (RO)</option>
                    <option>Roraima (RR)</option>
                    <option>Santa Catarina (SC)</option>
                    <option>São Paulo (SP)</option>
                    <option>Sergipe (SE)</option>
                    <option>Tocantins (TO)</option>
                </select>
            </div>

            <div className={`flex flex-col gap-1`}>
                <label htmlFor="estado_civil">Selecione seu estado civil:</label>
                <select 
                    className="py-1 px-2 rounded-md focus:outline-none bg-white text-black" 
                    value={maritalStatus}
                    onChange={e => setMaritalStatus(e.target.value)}
                    name="maritalStatus"
                    id="maritalStatus"
                >
                    <option disabled selected>Qual o seu estado civil?</option>
                    <option>Solteiro</option>
                    <option>Casado</option>
                    <option>Divorciado</option>
                    <option>Viúvo</option>
                </select>
            </div>

            <div className={`flex flex-col gap-1`}>
                <label htmlFor="estado_civil">Selecione sua denominação</label>
                <select 
                    className="py-1 px-2 rounded-md focus:outline-none bg-white text-black" 
                    value={christianDenom}
                    onChange={e => setChristianDenom(e.target.value)}
                    name="christianDenom"
                    id="christianDenom"
                >
                    <option disabled selected>Qual a sua denominação cristã?</option>
                    <option>Igreja Presbiteriana do Brasil (IPB)</option>
                    <option>Igreja Batista</option>
                    <option>Igreja Metodista</option>
                    <option>Igreja Evangélica de Confissão Luterana no Brasil (IECLB)</option>
                    <option>Igreja Evangélica Luterana do Brasil (IELB)</option>
                    <option>Igreja Episcopal Anglicana do Brasil (IEAB)</option>
                    <option>Assembleia de Deus</option>
                    <option>Congregação Cristã no Brasil (CCB)</option>
                    <option>Igreja do Evangelho Quadrangular</option>
                    <option>Igreja Deus é Amor</option>
                    <option>Igreja Universal do Reino de Deus (IURD)</option>
                    <option>Igreja Internacional da Graça de Deus</option>
                    <option>Igreja Mundial do Poder de Deus</option>
                    <option>Comunidade Evangélica Sara Nossa Terra</option>
                    <option>Igreja Renascer em Cristo</option>
                    <option>Igreja Católica Apostólica Romana</option>
                    <option>Igreja Católica Apostólica Brasileira (ICAB)</option>
                    <option>Igreja Ortodoxa Grega</option>
                    <option>Igreja Ortodoxa Antioquina</option>
                    <option>Igreja Ortodoxa Russa</option>
                    <option>Igreja Adventista do Sétimo Dia</option>
                    <option>Testemunhas de Jeová</option>
                    <option>Igreja de Jesus Cristo dos Santos dos Últimos Dias (Mórmons)</option>
                </select>

            </div>

            <SignupButton />
            <button className={`dark:bg-blue-950 text-white w-full p-3 rounded-md bg-red-950 dark:hover:bg-blue-800 hover:bg-red-800`}>
                EDITAR
            </button>

        </form>
    )
}

export function SignupButton() {
    const { pending } = useFormStatus()

    return (
        <button className={`dark:bg-blue-950 text-white w-full p-3 rounded-md bg-red-950 dark:hover:bg-blue-800 hover:bg-red-800`} aria-disabled={pending} type="submit">
            {pending ? 'SALVANDO' : 'SALVAR'}
        </button>
    )
};