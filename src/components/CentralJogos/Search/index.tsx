import { MagnifyingGlassIcon, BookOpenIcon } from '@heroicons/react/24/solid';

export const SearchCentralJogos = () => {
    return (
        <section className={`flex justify-center gap-5 items-center w-full h-1/6 dark:bg-blue-800 bg-red-400 rounded-b-3xl`}>
            <div className={`relative`}>
                <BookOpenIcon
                    height={80}
                />
                <MagnifyingGlassIcon
                    height={40}
                    className={`absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4`}
                />
            </div>
            <div className={`flex flex-col items-center gap-2`}>
                <h1>
                    Utilize palavras-chave relacionadas ao assunto que deseja explorar e encontre quizzes sobre os mais variados tópicos
                </h1>
                <form action="" className={`flex gap-2 items-center w-full justify-center`}>
                    <label htmlFor="searchQuiz">
                        Seu tema:
                    </label>
                    <input type="text" placeholder="Digite aqui" className={`py-1 px-2 rounded-md focus:outline-none bg-white text-black $ w-1/2`} />
                    <button type="submit" className={`hover:bg-red-400 dark:hover:bg-blue-600 p-1 rounded-md`}>
                        <MagnifyingGlassIcon
                            height={24}
                        />
                    </button>
                </form>
            </div>
        </section>
    )
}