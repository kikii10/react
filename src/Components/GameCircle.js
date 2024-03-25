import React from 'react'
import "../Game.css"

const GameCircle = ({id,children,className,circuloCliqueado}) => {


   
  return (
    <div className={`gameCircle ${className}`} onClick={() => circuloCliqueado(id)}>
        {children}
    </div>
    
  )
}

export default GameCircle
