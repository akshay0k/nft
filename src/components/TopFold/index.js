import React from 'react'
import Button from '../../common/Button'
import "./topfold.css"

const TopFold = () => {
  return (
    <div className="topfold absolute-center">
    <div className="tf-left">
      <div className='tf-heading'>
        Discover collect, & sell{" "} <br />
        <span className='heading-gradient'>Extraordinary </span>NFTs
      </div>
      <div className="tf-description">
        Please make sure that you are buying and selling the most trending NFTs out there ,
        welcome to my channel Develops .
      </div>
      <div className='tf-left-btns'>
        <Button btnType="PRIMARY" btnText='EXPLORE'/>
        <Button btnType="SECONDARY "btnText='CREATE' customClass='tf-left-secondaty-btn'/>
      </div>
      <div className='tf-left-infoStats'>

        <div className="tf-is-infoItem absolute-center">
          <div className="tf-infoItem-count">200K+</div>
          <div className="tf-infoItem-label">collections</div>
        </div>
        <div className="tf-is-infoItem absolute-center">
          <div className="tf-infoItem-count">10K+</div>
          <div className="tf-infoItem-label">Artists</div>
        </div>
        <div className="tf-is-infoItem absolute-center">
          <div className="tf-infoItem-count">423K+</div>
          <div className="tf-infoItem-label">Communtity</div>
        </div>



      </div>
    </div>
    <div className="tf-right"></div>
   </div>
  )
}

export default TopFold
