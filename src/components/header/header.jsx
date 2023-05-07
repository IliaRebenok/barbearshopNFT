import React, { useState } from 'react'
import styles from './header.module.css'

const Header = ({ setSearch }) => {



    return (
        <div className={styles.wrap}>
            <input
                className={styles.input}
                placeholder='Search your art'
                type='text'
                onChange={(e) => setSearch(e.target.value)}
            />

            
            <div className={styles.text}>
                Click the art to get the qr code for AR effect
            </div>

        </div>
    )
}

export default Header