import React from 'react'
import { CustomButtonProps } from '../../../types'
const Button = ({title, containerStyles, btnType, textStyles, onClick}: CustomButtonProps) => {
  return (
    <button type={btnType} disabled={false} className={`text-center max-md:text-sm ${containerStyles}`} onClick={onClick}>
        <span className={`flex-1 ${textStyles} max-md:text-sm`}>{title}</span>        
    </button>
  )
}

export default Button