import { FormSignUp } from '@/components/FormSignUp';
import Link from 'next/link';

const PageSignUp = () => {
    return (
        <section className={`flex`}>
            <div className={`w-6/12 bg-gradient-to-r from-red-400 to-red-600 h-screen dark:bg-gradient-to-r dark:from-blue-900 dark:to-blue-950`}></div>
            <div className={`w-6/12`}>
                <FormSignUp />
                <Link href={'/login'}>
                    LOGIN
                </Link>
            </div>
        </section>
    )
};

export default PageSignUp;