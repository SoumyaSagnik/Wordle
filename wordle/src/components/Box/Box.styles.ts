import styled from "styled-components";
import type { BoxStyleProps } from "./Box.types";

export const Square = styled.div<BoxStyleProps>`
    width: 3rem;
    height: 3rem;
    border: 1.5px solid gray;
    background: ${(props) => props.background};
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`