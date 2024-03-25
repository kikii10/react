import React, {useState} from "react";
import GameCircle from "./GameCircle";
import "../Game.css"
import "./Header"
import Header from "./Header";
import Footer from "./Footer";
import { empate, isWinner,computerMove } from "../Helper";
import { ESTADO_INICIADO,ESTADO_PAUSA,ESTADO_GANADO,ESTADO_EMPATADO,PLAYER_1,PLAYER_2,SIN_JUGADOR,CIRCULOS} from "../constant";

const GameBoard = () =>
{ 
    /*creo la pantalla para jugar y le pongo los 0*/
    const [gameBoard, setGameBoard] = useState(Array(16).fill(SIN_JUGADOR))
    const[currentPlayer,setCurrentPlayer] = useState(PLAYER_1);
    const [gameState, setGameState] = useState(ESTADO_INICIADO);
    /*lo cree porque cambiaba de jugador antes de decir quien ganaba, asi queda el nombre del jugador que gano*/ 
    const [winPlayer,setWinPlayer] = useState(SIN_JUGADOR);
    console.log(gameBoard);
    /*con esto renderizo los circulos*/ 
   const iniciarPartida = ()=>{

        setGameBoard(Array(16).fill(SIN_JUGADOR));
        setCurrentPlayer(PLAYER_1);
        setGameState(ESTADO_INICIADO)

   }/*esto hace jugar al jugador de la computadora ver helper.js computerMove*/ 
   const sugerirMovimiento = () => {
   
   cliqueado(computerMove(gameBoard));


   }
   
    const iniciar = () =>{
        const circulos = [];
        for (let i = 0;i<CIRCULOS; i++){
       circulos.push(renderCircle(i))}
        ;
        return circulos;
    }
    /*para cuando se cliquea cambia de color*/ 
    const cliqueado = (id)  => {
      /*esto hace que si esta usado por otro jugador no lo puedas volver a usar*/ 
        if(gameBoard[id] !== SIN_JUGADOR) return;
    /*termina el juego cuando uno gana*/
        if(gameState !== ESTADO_INICIADO) return;
        console.log("circulo cliqueado"+ id);
        
         /*se fija si hay unn ganador cada vez que se cliquea(ver Helper.js)*/
         if (isWinner(gameBoard,id,currentPlayer)){
            setWinPlayer(currentPlayer);
            setGameState(ESTADO_GANADO);
            
        }
          /*se fija si hay unn empate cada vez que se cliquea(ver Helper.js)*/
        if (empate(gameBoard,id,currentPlayer)){
            setWinPlayer(SIN_JUGADOR);
            setGameState(ESTADO_EMPATADO);
            
        }

        gameBoard[id]= currentPlayer;
        setGameBoard(gameBoard)

        setGameBoard (prev =>{

           return prev.map((circulo,pos)=> {
            if (pos === id) return currentPlayer;
            return circulo;
           })
        })
       
        /*cambio los jugadores*/ 
        setCurrentPlayer(currentPlayer === PLAYER_1? PLAYER_2 : PLAYER_1)  
       
       
        console.log(gameBoard);

    }/*esto es para que se renderisar los circulos segun el numero que venga le da un color */
    const renderCircle = id =>{
        return  <GameCircle key={id} id = {id} className={`player_${gameBoard[id]}`} circuloCliqueado = {cliqueado}></GameCircle>

    }
   
    return (
        <>
        <Header gameState={gameState}  player = {currentPlayer} winPlayer={winPlayer}/>
        <div className="gameBoard">
     
        {iniciar()}
        

    </div>
    <Footer nuevaPartida={iniciarPartida} sugerir={sugerirMovimiento}/>
    </>
    )
}
export default GameBoard;