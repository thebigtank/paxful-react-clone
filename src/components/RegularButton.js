import React from 'react'
import '../styles/regularbutton.scss'

function RegularButton({ btnColor, backgroundColor, title }) {
  return (
    <button class="regularbtn btn" style={{ color: btnColor, background: backgroundColor, border: backgroundColor }}>{title}</button>
  )
}

export default RegularButton