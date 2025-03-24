import React from 'react'
import '../Button.css'

export default function Button({ classes, text = "Button", icon, handleEvent }) {
  return (
    <button className={`btn ${classes}`} onClick={handleEvent}>{text}{icon}</button>
  )
}
