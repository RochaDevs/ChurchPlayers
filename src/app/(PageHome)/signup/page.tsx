import { FormSignUp } from '@/components/FormSignUp';
import Link from 'next/link';

const PageSignUp = () => {
    return (
        <section className={`flex h-screen`}>
            <div className={`w-6/12 bg-gradient-to-r from-red-400 to-red-600 h-screen dark:bg-gradient-to-r dark:from-blue-900 dark:to-blue-950`}></div>
            <section className={`w-6/12 flex items-center justify-center`}>
                <div className={`flex flex-col bg-gray-100 h-3/4 w-2/4 items-center justify-center rounded-md gap-1`}>
                    <FormSignUp />
                    <Link href={'/login'}>
                        <p className={`dark:bg-blue-950 text-white w-full p-3 rounded-md bg-red-950 dark:hover:bg-blue-800 hover:bg-red-800`}>Já possuí conta? Então CONECTE-SE!</p>
                    </Link>
                </div>
            </section>
        </section>
    )
};

export default PageSignUp;