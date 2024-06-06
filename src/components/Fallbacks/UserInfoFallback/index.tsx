import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const UserFallback = () => (
    <div className={`flex items-center gap-2 bg-red-500 dark:bg-blue-700 py-2 px-3 rounded-md text-sm`}>
        <Skeleton circle={true} height={50} width={50} />
        <div>
            <Skeleton width={100} />
            <Skeleton width={150} />
        </div>
    </div>
);

export default UserFallback;
