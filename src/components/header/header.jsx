import React, { useState } from 'react'
import styles from './header.module.css'

const Header = ({setSearch}) => {
    
    

    return (
        <div className={styles.wrap}>
            <input
                className={styles.input}
                placeholder='Search your bear'
                type='text'
                onChange={(e) => setSearch(e.target.value)}
            />
            <div>The BarBearShop AR collection</div>

        </div>
    )
}

export default Header