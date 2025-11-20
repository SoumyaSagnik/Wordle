import type { FC } from "react";
import type { BoxBackground } from "./Box.types";
import { Square } from "./Box.styles";

interface BoxProps {
  content: string;
  background: BoxBackground;
}

const Box: FC<BoxProps> = ({ content, background }) => {
  return <Square background={background}>{content.toUpperCase()}</Square>;
};

export default Box;
