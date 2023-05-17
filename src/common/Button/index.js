import React from 'react'
import "./button.css"

const Button = (props) => {
    const {btnType, btnText, btnOnClick, customClass} = props;
  return (
    <div className={`${btnType==="PRIMARY" 
    
    ? `button primary-btn ${customClass}` 
    :`button secondary-btn ${customClass}`
    }`}

    onClick={btnOnClick}
    >

        {btnText}
        
    </div>
  )
}

export default Button
