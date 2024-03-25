import React from 'react'
import { ESTADO_INICIADO,ESTADO_PAUSA,ESTADO_GANADO,ESTADO_EMPATADO,} from "../constant";

const Header = ({player, gameState,winPlayer}) => {
  const renderLabel = () => {
    switch(gameState){
      case ESTADO_INICIADO:
     return <div>Player {player} turn </div>
     case  ESTADO_GANADO:
      return <div>Player {winPlayer} Wins </div>
      case  ESTADO_EMPATADO:
        return <div>EMPATE </div>
    }
  }
  return (
    <div className = "panel header">
        <div className = "texto-header">{renderLabel()}</div>
    </div>
  )
}

export default Header