import styles from './Search.module.css';

export const SearchCentralJogos = () => {
    return (
        <section className={`${styles.bgImage} before:flex flex-col justify-center items-center w-full h-1/4`}>
            <h1>Central de Jogos</h1>
            <p>Texto qualquer</p>
            <form action="">
                <label htmlFor="searchQuiz">
                    Pesquise o tema do quiz desejado:
                </label>
                <input type="text"  placeholder="Digite aqui"/>
                <button type="submit">
                    Submeter
                </button>
            </form>
        </section>
    )
}