// styles
import styles from './Promo.module.css';

// tools
import { useTranslation } from "react-i18next";
import '../i18next'


function Promo() {

    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }

    return (
        <div className={styles.image}>
            <div className={styles.container}>
                <div className={styles.language}>
                    <button onClick={() => changeLanguage('en')} >{t("promo.en")}</button>
                    <div></div>
                    <button onClick={() => changeLanguage('ua')} >{t("promo.ua")}</button>
                    <div></div>
                    <button onClick={() => changeLanguage('ru')} >{t("promo.ru")}</button>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.subtitle}>
                        <span className={styles.circle}></span>
                        <h3><span>{t("promo.my")}</span>{t("promo.name")}</h3>
                    </div>

                    <h1>{t("promo.title1")}<br />
                        {t("promo.title2")}<br />
                        {t("promo.title3")}
                    </h1>
                    <div className={styles.buttons}>
                        <button className={styles.btn1}>{t("promo.btn1")}</button>
                        <button className={styles.btn2}>{t("promo.btn2")}</button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Promo;