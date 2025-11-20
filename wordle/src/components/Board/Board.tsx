import { useState } from "react";
import { GameBoard } from "./Board.styles";
import Row from "../Row/Row";

const Board = () => {
  const [gameStats, setGameStats] = useState<string[]>([
    "VOWEL",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [activeRow, setActiveRow] = useState<number>(0);

  return (
    <GameBoard>
      <Row content={gameStats[0]} key={0} />
      <Row content={gameStats[1]} key={1} />
      <Row content={gameStats[2]} key={2} />
      <Row content={gameStats[3]} key={3} />
      <Row content={gameStats[4]} key={4} />
      <Row content={gameStats[5]} key={5} />
    </GameBoard>
  );
};

export default Board;
