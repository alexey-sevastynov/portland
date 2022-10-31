//styles
import styles from './Contacs.module.css';


function Contacs() {
    return (

        <div className={styles.container}>
            <div className={styles.contacs__column}>
                <div className={styles.contacs__photo}>
                    <img src="../../img/photo.jpg" alt="myPhoto" />
                </div>
                <div>
                    <h2 className={[styles.contacs__title, styles.title_three]}>Контакты</h2>
                    <div className={styles.contacs__subtitle}>Свяжитесь со мной</div>
                    <div className={styles.contacs__line}></div>
                    <div className={styles.contacs__text}>Любым удобным для вас способом:</div>
                    <div className={styles.contacs__social}>
                        <a href="" className={styles.contacs__link}>
                            <img src="icons/Facebook.svg" alt="facebook" />
                        </a>
                        <a href="" className={styles.contacs__link}>
                            <img src="icons/social/telegram.svg" alt="telegram" />
                        </a>
                        <a href="" className={styles.contacs__link}>
                            <img src="icons/Instagram.svg" alt="Instagram" />
                        </a>
                    </div>
                    <div className="contacs__text">Или оставьте ваши данные и я сама вам напишу:</div>

                    <form action="#" className={styles.contacs__form}>
                        <div className={styles.contacs__input}>
                            <input name="name" id="name" type="text" />
                            <label htmlFor="name">Ваше имя:</label>
                        </div>
                        <div className={styles.contacs__input}>
                            <input name="email" is="email" type="email" />
                            <label htmlFor="email">Ваша почта:</label>
                        </div>
                        <div className={styles.contacs__textarea}>
                            <textarea name="text" id="text"></textarea>
                            <label htmlFor="text">Ваше сообщения:</label>
                        </div>
                        <div className={styles.contacs__triggers}>
                            <button className={styles.contacs__btn}>Отправить сообщение</button>
                            <div className={styles.contacs__policy}>
                                <input type="checkbox" />
                                <span>Я согласен с <a href="src/policy.html">политекой конфидетальности</a></span>
                            </div>
                        </div>


                    </form>
                </div>



            </div>
        </div>

    )
}

export default Contacs;