import { ChatBubbleLeftIcon } from '@heroicons/react/24/solid';
import styles from './UserComments.module.css';

export const UserComments = () => {
    return (
        <article className={`${styles.article} flex flex-col justify-evenly px-6 items-start`}>
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

