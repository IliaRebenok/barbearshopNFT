import React, { useState } from 'react'
import styles from './header.module.css'

const Header = ({ setSearch }) => {



    return (
        <div className={styles.wrap}>
            <input
                className={styles.input}
                placeholder='Search your bear'
                type='text'
                onChange={(e) => setSearch(e.target.value)}
            />

            <h2 className={styles.title}>The BarBearShop AR collection</h2>
            <div className={styles.text}>
                Click the NFT to get the qr code for AR effect
            </div>

        </div>
    )
}

export default Header