import React from 'react'
import styles from './cardBlock.module.css'
import Card from '../card/card'
import { NFTs } from '../../assets/nftList'

const CardBlock = ({ search }) => {

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

    return (
        <div className={styles.cardsWrap}>
            {nftItems}
        </div>
    )
}

export default CardBlock