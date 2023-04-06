import React from 'react'
import styles from './cardBlock.module.css'
import Card from '../card/card'

const CardBlock = () => {
    return (
        <div className={styles.wrap}>
            <Card />
            <Card />

        </div>
    )
}

export default CardBlock