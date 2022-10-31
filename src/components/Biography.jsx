// styles
import styles from './Biography.module.css';

//tools
import { useTranslation } from "react-i18next";
import '../i18next'





function Biography() {
    const { t } = useTranslation();

    const listSkills = [
        {
            icon: '../../icons/internet-web-browser-icon.png',
            title: t("biography.title1"),
            description: t("biography.p1")
        },
        {
            icon: '../../icons/internet-web-browser-icon.png',
            title: t("biography.title2"),
            description: t("biography.p2")
        }
 
    ];


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

                        {listSkills.map((skillBlock, id) => (
                            <div
                                key={id}
                                className={styles.skillsBlock__wrapper}>
                                <div className={styles.skillsBlock__img}>
                                    <img src={skillBlock.icon} alt="icon" />
                                    <span className={styles.circle}></span>
                                </div>
                                <div className={styles.skillsBlock__text}>
                                    <h3 >{skillBlock.title}</h3>
                                    <p >{skillBlock.description}</p>
                                </div>
                            </div>

                        ))}
                        
                    </div>

                </div>

            </div>
        </div >
    )
}

export default Biography;