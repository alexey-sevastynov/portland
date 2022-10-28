// styles
import styles from './Biography.module.css';

//tools
import { useTranslation } from "react-i18next";
import '../i18next'





function Biography() {
    const { t } = useTranslation();


    return (
        <div className={styles.container}>
            <div className={styles.wrapper} >
                <div className={styles.photo}>
                    <img src='../../img/photo3.jpg'
                        className={styles.photo__pc}
                        width={400} alt="myPhoto" />
                    <img src='../../img/photo2.jpg'
                        className={styles.photo__mobile}
                        alt="myPhoto" />
                </div>
                <div className={styles.biography}>
                    <span className={styles.circle}></span>
                    <h3><span>{t("biography.abo")}</span>{t("biography.me")}</h3>
                    <h2>{t("biography.name")}</h2>
                    <span className={styles.line}></span>
                    <p>{t("biography.live")}</p>
                    <div className={styles.skillsBlock}>
                        <div className={styles.skillsBlock__wrapper}>
                            <div className={styles.skillsBlock__img}>
                                <img src="../../icons/internet-web-browser-icon.png" alt="icon" />

                                <span className={styles.circle}></span>
                            </div>
                            <div className={styles.skillsBlock__text}>
                                <h3 >{t("biography.title1")}</h3>
                                <p >{t("biography.p1")}</p>
                            </div>
                        </div>
                        <div className={styles.skillsBlock__wrapper}>
                            <div className={styles.skillsBlock__img}>
                                <img src="../../icons/internet-web-browser-icon.png" width={40} alt="icon" />
                                <span className={styles.circle}></span>
                            </div>
                            <div className={styles.skillsBlock__text}>
                                <h3 >Web Developer</h3>
                                <p > I responsible for turning user stories, mockups, and web designs into functional websites. I use web fundamentals such as HTML, CSS, and JavaScript to build, manage, and deploy web applications. </p>
                            </div>
                        </div>
                        <div className={styles.skillsBlock__wrapper}>
                            <div className={styles.skillsBlock__img}>
                                <img src="../../icons/internet-web-browser-icon.png" width={40} alt="icon" />
                                <span className={styles.circle}></span>
                            </div>
                            <div className={styles.skillsBlock__text}>
                                <h3 >Web Developer</h3>
                                <p > I responsible for turning user stories, mockups, and web designs into functional websites. I use web fundamentals such as HTML, CSS, and JavaScript to build, manage, and deploy web applications. </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Biography;