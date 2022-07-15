import React from 'react'
import { GeneralButton } from './Buttons.style'

const Buttons = ( {title, primaryStyle} ) => {
  return (
    <GeneralButton primary={primaryStyle}>
      {title}
    </GeneralButton>
  )
}

export default Buttons