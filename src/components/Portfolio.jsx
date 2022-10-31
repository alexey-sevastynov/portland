import styles from './Portfolio.module.css';


function Portfolio() {
    return (
        <div className={styles.container}>
            <div className={styles.hat}>
                <div className={styles.subtitle}>
                    <div></div>
                    <h3>Portland</h3>
                </div>
                <h2 className={styles.title}>My works</h2>
                <span className={styles.line}></span>
            </div>

            <div className={styles.portfolio__wrapper}>
                <a href="http://my-portland.netlify.app" className={styles.portfolio__item}>
                    <img
                        src="../../img/promo.jpg" alt="uber"
                        width={280} height={280} />
                </a>
                <a href="https://itgruz.netlify.app/" className={styles.portfolio__item}>
                    <img src="../../img/promo1.jpg" alt="pulse"
                        width={280} height={280} />
                </a>
                <a href="https://itgruz.netlify.app/" className={styles.portfolio__item}>
                    <img src="../../img/promo1.jpg" alt="bread"
                        width={280} height={280} />
                </a>
                <a id={styles.vertical} href="https://itgruz.netlify.app/" className={styles.portfolio__item}>
                    <img src="../../img/promo1.jpg" alt="plans"
                        width={280} height={560} />
                </a>
                <a href="https://itgruz.netlify.app/" className={styles.portfolio__item}>
                    <img src="../../img/promo1.jpg" alt="ipad"
                        width={280} height={280} />
                </a>
                <a id={styles.horizonal} href="https://itgruz.netlify.app/" className={styles.portfolio__item}>
                    <img src="../../img/promo1.jpg" alt="mac"
                        width={560} height={280} />
                </a>
            </div>
        </div>


    )
}

export default Portfolio;