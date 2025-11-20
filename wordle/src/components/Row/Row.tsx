import type { FC } from "react";
import { BoardRow } from "./Row.styles";
import Box from "../Box/Box";

interface RowProps {
  content: string;
}

const Row: FC<RowProps> = ({ content }) => {
  return (
    <BoardRow>
      <Box content={content.charAt(0)} background="black" key={0} />
      <Box content={content.charAt(1)} background="black" key={1} />
      <Box content={content.charAt(2)} background="black" key={2} />
      <Box content={content.charAt(3)} background="black" key={3} />
      <Box content={content.charAt(4)} background="black" key={4} />
    </BoardRow>
  );
};

export default Row;
