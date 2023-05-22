import React from 'react'
import Button from '../../common/Button'
import "./topfold.css"

const TopFold = () => {
  return (
    <div className="topfold absolute-center">
    <div className="tf-left">
      <div className='tf-heading'>
        Discover collect, & sell{" "} 
        <span className='heading-gradient'>Extraordinary </span> NFTs
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
    <div className="tf-right">
      <div className="tf-r-bg-blob">
        
      </div>


      <div className="tf-right-diamond">

      <div className="tf-r-diamond-item absolute-center" >
          <img className="tf-r-diamond-img" 
           alt="daimond-banner"
          src="https://openseauserdata.com/files/22284fa002c7612a875381ab66b22abf.gif" />
        </div>

        <div className="tf-r-diamond-item absolute-center">
          <img className="tf-r-diamond-img" 
           alt="daimond-banner"
          src="https://openseauserdata.com/files/c3a312c53514642e8041c65e10b40a52.gif " />
        </div>
        
        <div className="tf-r-diamond-item absolute-center">
          <img className="tf-r-diamond-img" 
           alt="daimond-banner"
          src="https://openseauserdata.com/files/24ed399dc3e5430b39a1db656f68c67c.gif" />
        </div>
        
        <div className="tf-r-diamond-item absolute-center">
          <img className="tf-r-diamond-img" 
           alt="daimond-banner"
          src="https://openseauserdata.com/files/0895e82346f5c31462d41ab75d9b90b1.gif" />
        </div>
        



      </div>
    </div>
   </div>
  )
}

export default TopFold
