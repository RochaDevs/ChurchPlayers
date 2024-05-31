import styles from './AsideSettings.module.css';

export default function AsideSettings() {
    return (

        <nav className={`${styles.navSettings} w-1/12 rounded-lg absolute right-3 bg-red-700 dark:bg-blue-900`}>
            Settings
        </nav>

    )
}