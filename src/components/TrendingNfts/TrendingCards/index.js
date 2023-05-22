import React from 'react'
import "./trendingCard.css";



const TrendingCard = (props) => {
  const {nft} = props;
    return (
    <div className='trending-card absolute-center'>
        <div className='tc-inner-wrapper'>
            <div className='tc-content'>
                <img  alt={nft.user_name} src={nft.banner} className='tc-banner' />
                <div className='tc-user-info'>
                    <div className='tc-ui-left'>
                        <img src={nft.user_photo} alt={nft.user_name} className='tc-user-logo' />

                        <div>
                            <div className='tc-ui-username'>{nft.user_name}</div>
                            <div className='tc-ui-userhandle'>{nft.userhandle}</div>
                        </div>
                        
                    </div>
                    <img  alt="ETH ON SOLANA"
                        className='tc-solana-log'
                        src="https://openseauserdata.com/files/265128aa51521c90f7905e5a43dcb456_new.svg"  />
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default TrendingCard