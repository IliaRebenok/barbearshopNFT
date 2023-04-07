import React from 'react'
import styles from './cardBlock.module.css'
import Card from '../card/card'
import { NFTs } from '../../assets/nftList'

const CardBlock = ({search}) => {
    const filteredNfts = NFTs.filter((nft) => {
        return search.toLowerCase() === '' ? nft : nft.name.toLowerCase().includes(search);
    });

    const nftItems = filteredNfts.map((nft) =>
        <Card
            key={nft.id}
            image={nft.image}
            name={nft.name}
            qrCode={nft.qrCode}
        />
    )
    console.log(search);

    return (
        <div className={styles.wrap}>
            <div className={styles.text}>
                <span>Click the NFT to get the qr code for AR effect</span>
            </div>
            <div className={styles.cardsWrap}>
                {nftItems}
            </div>
        </div>
    )
}

export default CardBlock