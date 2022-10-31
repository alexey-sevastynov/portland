// styles
import styles from './Experience.module.css';

//tools
import { useTranslation } from "react-i18next";
import '../i18next'



function Experience() {

    const { t } = useTranslation();

    const columExperience = [
        {
            col: t("experience.col__1"),
            title1: t("experience.title__1a"),
            subtitle1: t("experience.subtitle__1a"),
            text1: t("experience.text__1a"),
            title2: t("experience.title__1b"),
            subtitle2: t("experience.subtitle__1b"),
            text2: t("experience.text__1b")
        },
        {
            col: t("experience.col__2"),
            title1: t("experience.title__2a"),
            subtitle1: t("experience.subtitle__2a"),
            text1: t("experience.text__2a"),
            title2: t("experience.title__2b"),
            subtitle2: t("experience.subtitle__2b"),
            text2: t("experience.text__2b")
        }

    ];

    return (
        <div className={styles.container}>
            <div className={styles.hat}>
                <div className={styles.subtitle}>
                    <div></div>
                    <h3>{t("experience.subtitle")}</h3>
                </div>
                <h2 className={styles.title}>{t("experience.title")}</h2>
                <span className={styles.line}></span>
            </div>

            <div className={styles.col__2}>

                {
                    columExperience.map((item, id) => (
                        <div key={id} className={styles.col}>
                            <div className={styles.line__main}></div>
                            <div className={styles.line__grznt1}></div>
                            <div className={styles.line__grznt2}></div>
                            <div className={styles.subtitle__block}>
                                <span></span>
                                <h3>{item.col}</h3>
                            </div>

                            <div className={styles.title__block}>
                                <div className={styles.title__block_icon}>
                                    <span></span>
                                    <img src="" alt="" />
                                </div>
                                <div className={styles.title__block_text}>
                                    <h4 className={styles.weight__text}>{item.title1}</h4>
                                    <h4>{item.subtitle1}</h4>
                                </div>
                            </div>
                            <p>{item.text1}</p>

                            <div className={styles.title__block}>
                                <div className={styles.title__block_icon}>
                                    <span></span>
                                    <img src="" alt="" />
                                </div>
                                <div className={styles.title__block_text}>
                                    <h4 className={styles.weight__text}>{item.title2}</h4>
                                    <h4>{item.subtitle2}</h4>
                                </div>
                            </div>
                            <p>{item.text2}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Experience;