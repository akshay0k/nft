import React from 'react'
import {INFO_ITEM} from "../../data/infoItem"
import "./infosection.css"
import InfoItem from './InfoItem'

const InfoSection = () => {
  return (
    <div className='info-section'> 
      <div className='is-heading absolute-center'>
        <span className='heading-gradient'>Create and sell your NFTs</span>
      </div>
      <div className='is-items-container'>
        {INFO_ITEM.map((_infoItem)=>(
          <InfoItem item={_infoItem}/>

        ))}
      </div>
    </div>
  )
}

export default InfoSection
