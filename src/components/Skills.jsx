//styles
import styles from './Skills.module.css';

// tools
import { useTranslation } from "react-i18next";
import '../i18next'


function Skills() {

    const { t } = useTranslation();

    const listSkills = [
        {
            icon: "../../icons/ps.png",
            title: "Adobe Photoshop",
            text: t("skills.text__cart1")
        },
        {
            icon: "../../icons/3d.png",
            title: "Autodesk 3ds Max",
            text: t("skills.text__cart2")
        },
        {
            icon: "../../icons/figma.png",
            title: "Figma ",
            text: t("skills.text__cart3")
        },
        {
            icon: "../../icons/html.png",
            title: "HTML5",
            text: t("skills.text__cart4")
        },
        {
            icon: "../../icons/css-3.png",
            title: "CSS3",
            text: t("skills.text__cart5")
        },
        {
            icon: "../../icons/js.png",
            title: "Java Script",
            text: t("skills.text__cart6")
        },
        {
            icon: "../../icons/nodejs.png",
            title: "Node.js",
            text: t("skills.text__cart7")
        },
        {
            icon: "../../icons/physics.png",
            title: "React",
            text: t("skills.text__cart8")
        }

    ];

    const listPercent = [
        {
            titlePercent: t("skills.title__percent1"),
            percent: 70
        },
        {
            titlePercent: t("skills.title__percent2"),
            percent: 60
        },
        {
            titlePercent: t("skills.title__percent3"),
            percent: 90
        },
        {
            titlePercent: t("skills.title__percent4"),
            percent: 10
        },
        {
            titlePercent: t("skills.title__percent5"),
            percent: 20
        },
    ];
    return (
        <div className={styles.container}>
            <div className={styles.hat}>
                <div className={styles.subtitle}>
                    <div></div>
                    <h3>{t("skills.subtitle")}</h3>
                </div>
                <h2 className={styles.title}>{t("skills.title")}</h2>
                <span className={styles.line}></span>
            </div>
            <div className={styles.cartSkills}>
                {
                    listSkills.map((item, id) => (
                        <div key={id} className={styles.cartSkill}>
                            <img src={item.icon} width={50} alt="icons" />
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    ))
                }
            </div>

            <div className={styles.skills__percent}>

                {listPercent.map((item, id) => (
                    <div key={id} className={styles.grid}>
                        <div className={styles.skills__title}>
                            <span></span>
                            <h3>{item.titlePercent}</h3>
                        </div>
                        <p>{item.percent}%</p>
                        <div className={styles.percent__perent_scale}>
                            <div style={{ width: item.percent + '%' }} className={styles.percent__scale}></div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Skills;