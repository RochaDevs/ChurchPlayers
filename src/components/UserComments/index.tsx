import { ChatBubbleLeftIcon } from '@heroicons/react/24/solid';
import styles from './UserComments.module.css';

interface IUserComments {
    classeCSS: string
}

export const UserComments = ({classeCSS}: IUserComments) => {
    return (
        <article className={`${styles[classeCSS]} flex flex-col justify-between gap-10 px-6 py-7 items-start dark:bg-blue-900  dark:text-white`}>
            <ChatBubbleLeftIcon
                height={50}
            />
            <h2 className='flex-wrap flex'>
                Desbloqueie a felicidade interior e abrace um estado positivo de espírito.
            </h2>
            <div className='flex gap-3'>
                <img src="" alt="Imagem" />
                <div className='flex flex-col gap-1'>
                    <h3 className='font-bold'>Sara P. Soares</h3>
                    <h4>Missionária</h4>
                </div>
            </div>
        </article>
    );
};

