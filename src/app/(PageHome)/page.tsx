import { Banner } from "@/components/Banner";
import { BeneficesCard } from "@/components/CardBenefices";
import NavBar from "@/components/NavBar";
import { UserComments } from "@/components/UserComments";
import { HeartIcon, MoonIcon, FireIcon } from '@heroicons/react/24/solid';
import styles from './Home.module.css';



export default function Home() {
  return (
    <main className={``}>

      <NavBar />
      <Banner />

      {/*Sessão responsiva */}
      <article className={`hidden lg:flex p-1 gap-1`}>
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
      <article className={`lg:hidden flex flex-col items-center p-3 justify-center gap-1`}>
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

      <section className={`flex flex-col gap-5`}>
        <h1 className={`text-center`}>Junte-se a nossa vibrante comunidade!</h1>
        <div className={`${styles.section} flex justify-evenly items-center`}>
          <UserComments />
          <UserComments />
          <UserComments />
          <UserComments />
        </div>
      </section>
    </main>
  );
};
