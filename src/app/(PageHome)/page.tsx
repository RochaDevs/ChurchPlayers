import { Banner } from "@/components/Banner";
import { BeneficesCard } from "@/components/CardBenefices";
import NavBar from "@/components/NavBar";
import { UserComments } from "@/components/UserComments";
import { HeartIcon, MoonIcon, FireIcon } from '@heroicons/react/24/solid';
import styles from './Home.module.css';



export default function Home() {

  return (
    <main className={'dark:bg-blue-950'}>

      <NavBar />
      <Banner />

      {/* //Sessão responsiva */}
      <article id="beneficios" className={`${styles.sectionCardBenefices} hidden lg:flex gap-1 py-5 px-2 dark:bg-blue-900`}>
        <BeneficesCard
          icone={<HeartIcon height={76} width={76} color="#FF3B30" />}
          titulo="Mente Feliz"
          beneficio="Desbloqueie a felicidade interior e abrace um estado positivo de espírito."
        />
        <BeneficesCard
          icone={<MoonIcon height={76} width={76} color="#C2C2C2" />}
          titulo="Mente Feliz"
          beneficio="Desbloqueie a felicidade interior e abrace um estado positivo de espírito."
        />
        <BeneficesCard
          icone={<FireIcon height={76} width={76} color="#FF9500" />}
          titulo="Mente Feliz"
          beneficio="Desbloqueie a felicidade interior e abrace um estado positivo de espírito."
        />
      </article>
      <article id="beneficios" className={`${styles.sectionCardBeneficesResponsivo} lg:hidden flex flex-col items-center p-3 justify-center gap-1 py-5 dark:bg-blue-900`}>
        <BeneficesCard
          icone={<HeartIcon height={76} width={76} color="#FF3B30" />}
          titulo="Mente Feliz"
          beneficio="Desbloqueie a felicidade interior e abrace um estado positivo de espírito."
        />
        <BeneficesCard
          icone={<MoonIcon height={76} width={76} color="#C2C2C2" />}
          titulo="Mente Feliz"
          beneficio="Desbloqueie a felicidade interior e abrace um estado positivo de espírito."
        />
        <BeneficesCard
          icone={<FireIcon height={76} width={76} color="#FF9500" />}
          titulo="Mente Feliz"
          beneficio="Desbloqueie a felicidade interior e abrace um estado positivo de espírito."
        />
      </article>
      {/* //Sessão responsiva */}

      {/* //Sessão responsiva */}
      <section className={`hidden lg:flex flex-col gap-10 justify-center py-10 dark:bg-blue-950`}>
        <h1 id="feedbacks" className={`text-center font-bold text-2xl dark:text-white`}>Junte-se a nossa vibrante comunidade!</h1>
        <div className={`${styles.section} flex justify-evenly`}>
          <UserComments classeCSS="article" />
          <UserComments classeCSS="article" />
          <UserComments classeCSS="article" />
          <UserComments classeCSS="article" />
        </div>
      </section>
      <section id="feedbacks" className={`lg:hidden flex flex-col gap-10 justify-center py-10 dark:bg-blue-950`}>
        <h1 id="feedbacks" className={`text-center font-bold text-2xl dark:text-white`}>Junte-se a nossa vibrante comunidade!</h1>
        <div className={`${styles.section} flex flex-col items-center gap-5 `}>
          <UserComments classeCSS="articleResponsivo" />
          <UserComments classeCSS="articleResponsivo" />
          <UserComments classeCSS="articleResponsivo" />
          <UserComments classeCSS="articleResponsivo" />
        </div>
      </section>
      {/* //Sessão responsiva */}
    </main>
  );
};
