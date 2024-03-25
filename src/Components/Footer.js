import React from 'react'

const Footer = ({nuevaPartida,sugerir}) => {
  return (
    <div className = "panel footer">
        <button className='footer-button' onClick={nuevaPartida}>Nueva Partida</button>
        <button className='footer-button' onClick={sugerir}>Sugerencia</button>
    </div>
  )
}

export default Footer