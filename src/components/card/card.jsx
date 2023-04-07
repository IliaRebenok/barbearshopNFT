import React, { useState } from 'react'
import styles from './card.module.css'

const Card = (props) => {
    const [isClicked, setIsClicked] = useState(false);

    const flipCard = () => {
        setIsClicked(!isClicked);
    }

    return (
        <button onClick={flipCard}>
            <div className={styles.wrap}>
                <div className={` ${styles.cardInner} ${isClicked ? styles.isFlipped : null}`}>
                    <div className={`${styles.cardFace} ${styles.cardFaceFront} `}>
                        <div className={styles.imageWrap}>
                            <img className={styles.image} src={props.image} />
                        </div>
                        <h2 className={styles.name}>
                            {props.name}
                        </h2>
                    </div>
                    <div className={`${styles.cardFace} ${styles.cardFaceBack} `}>
                        <div className={styles.imageWrap}>
                            <img className={styles.image} src={props.qrCode} />
                        </div>
                        <h2 className={styles.name}>
                            Scan QR code and aim on {props.name}
                        </h2>
                    </div>
                </div>
            </div>
        </button>
    )
}

export default Card