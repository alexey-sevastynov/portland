// styles
import styles from './Social.module.css';


function Social() {
    return (
        <aside className={styles.fixed}>
            <div className={styles.wrapper}>
                <p>Write Me</p>
                <span></span>
                <button>
                    <img
                        width={30} height={30}
                        src="../../icons/telegram.png" alt="icon-telegram" />
                </button>
                <button>
                    <img
                        width={30} height={30}
                        src="../../icons/viber.png" alt="icon-telegram" />
                </button>
                <button>
                    <img
                        width={30} height={30}
                        src="../../icons/email.png" alt="icon-telegram" />
                </button>
            </div>
        </aside>
    )
}

export default Social;