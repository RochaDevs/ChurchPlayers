import { FormSignUp } from '@/components/FormSignUp';
import { ArrowLongRightIcon, ArrowPathRoundedSquareIcon, BookOpenIcon, FireIcon, HeartIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const PageSignUp = () => {
    return (
        <>
            <section className={`hidden lg:flex h-screen`}>
                <div className={`w-6/12 bg-gradient-to-r from-red-400 to-red-600 h-screen dark:bg-gradient-to-r dark:from-blue-900 dark:to-blue-950 flex items-center justify-center`}>
                    <HeartIcon height={200} width={200} color="white" />
                    <ArrowPathRoundedSquareIcon height={66} width={66} color="white" />
                    <BookOpenIcon height={200} width={200} color="white" />
                    <ArrowLongRightIcon height={66} width={66} color="white" />
                    <FireIcon height={200} width={200} color="white" />
                </div>
                <section className={`w-6/12 flex items-center justify-center`}>
                    <div className={`flex flex-col bg-gray-100 h-3/4 w-2/4 items-center justify-center rounded-md gap-1`}>
                        <FormSignUp />
                        <Link href={'/login'}>
                            <p className={`dark:bg-blue-950 text-white w-full p-3 rounded-md bg-red-950 dark:hover:bg-blue-800 hover:bg-red-800`}>Já possuí conta? Então CONECTE-SE!</p>
                        </Link>
                    </div>
                </section>
            </section>
            <section className={`lg:hidden flex flex-col h-screen w-full`}>
                <div className={`bg-gradient-to-r from-red-400 to-red-600 h-screen dark:bg-gradient-to-r dark:from-blue-900 dark:to-blue-950 flex items-center justify-center`}>
                    <HeartIcon height={200} width={200} color="white" />
                    <ArrowPathRoundedSquareIcon height={66} width={66} color="white" />
                    <BookOpenIcon height={200} width={200} color="white" />
                    <ArrowLongRightIcon height={66} width={66} color="white" />
                    <FireIcon height={200} width={200} color="white" />
                </div>
                <section className={`h-1/2 flex items-center justify-center my-3`}>
                    <div className={`flex flex-col bg-gray-100 h-full px-3 py-1 items-center justify-center rounded-md gap-5`}>
                        <FormSignUp />
                        <Link href={'/login'}>
                            <p className={`dark:bg-blue-950 text-white w-full p-3 rounded-md bg-red-950 dark:hover:bg-blue-800 hover:bg-red-800`}>Já possuí conta? Então CONECTE-SE!</p>
                        </Link>
                    </div>
                </section>
            </section>
        </>
    )
};

export default PageSignUp;