//styles 
import styles from './Price.module.css';

function Price() {

    const listColum1 = [
        {
            title: 'Landing-page',
            price: 'от 8000 грн.',
            subtitle: 'Одностраничный сайт для презентации услуг/товаров/...'
        },
        {
            title: 'Landing-page',
            price: 'от 8000 грн.',
            subtitle: 'Одностраничный сайт для презентации услуг/товаров/...'
        },
        {
            title: 'Landing-page',
            price: 'от 8000 грн.',
            subtitle: 'Одностраничный сайт для презентации услуг/товаров/...'
        }
    ];
    const listColum2 = [
        {
            title: 'Landing-page',
            price: 'от 8000 грн.',
            subtitle: 'Одностраничный сайт для презентации услуг/товаров/...'
        },
        {
            title: 'Landing-page',
            price: 'от 8000 грн.',
            subtitle: 'Одностраничный сайт для презентации услуг/товаров/...'
        },
        {
            title: 'Landing-page',
            price: 'от 8000 грн.',
            subtitle: 'Одностраничный сайт для презентации услуг/товаров/...'
        }
    ];
    return (
        <div className={styles.container}>

            <div className={styles.hat}>
                <div className={styles.subtitle}>
                    <div></div>
                    <h3>Прайс-лист</h3>
                </div>
                <h2 className={styles.title}></h2>
                <span className={styles.line}></span>
            </div>
            <div className={styles.price__colum}>
                <div className={styles.price__rows}>
                    {
                        listColum1.map((item, id) => (
                            <div key={id} className={styles.price__list}>
                                <div className={styles.list__title}>{item.title}</div>
                                <div className={styles.list__price}>{item.price}</div>
                                <div className={styles.list__subtitle}>{item.subtitle}</div>
                            </div>
                        ))
                    }

                </div>
                <div className={styles.price__rows}>
                    {
                        listColum2.map((item, id) => (
                            <div key={id} className={styles.price__list}>
                                <div className={styles.list__title}>{item.title}</div>
                                <div className={styles.list__price}>{item.price}</div>
                                <div className={styles.list__subtitle}>{item.subtitle}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Price;