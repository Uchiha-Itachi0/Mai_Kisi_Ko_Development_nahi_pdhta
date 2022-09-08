import type { NextPage } from "next";
import styled from "styled-components";

interface Props{
    WIDTH?: string;
    HEIGHT?: string;
    buttonClickedHandler: () => void;

}

interface styleProps {
    WIDTH: string;
    HEIGHT: string;
}

const ButtonStyled = styled.div<styleProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 2em;
  height: ${({HEIGHT}) => HEIGHT};
  width: ${({WIDTH}) => WIDTH};
  background: rgb(30, 30, 30);
  color: #fff;
  overflow: hidden;
  cursor: pointer;
  
  &:hover {
    &::before, &::after {
      width: 50%;
      transition-delay: .1s;
    }
    
    h1{
        &:nth-child(1){
          transform: scale(0);
        }
        &:nth-child(2){
          transform: scale(1);
          opacity: 1;
          transition-delay: .2s;
        }
    }
  }
  
  &::before, &::after {
    content: "";
    top: 0;
    position: absolute;
    width: 2%;
    height: 100%;
    background: greenyellow;
    transition: .5s;
    transition-delay: .1s;
  }
  &::before {
    left: 0;
  }
  
  
  &::after{
    right: 0;
    background: greenyellow;
  }
  
  h1{
    position: absolute;
    z-index: 1;
    transition: .5s;
    font-size: max(10px, 1.5vw);
    
    &:nth-child(1){
      transition-delay: .2s;
    }
    
    &:nth-child(2){
      color: #000;
      transform: scale(6);
      opacity: 0;
    }
  }
  
  @media only screen and (max-width: 800px){
    padding: 1.2em;
    h1{
      font-size: 3vw;
    }
  }
`;
const Button: NextPage<Props> = ({
    WIDTH = "5vw",
    HEIGHT = "2vw",
    buttonClickedHandler,
                                 }) => {
    return (
        <ButtonStyled WIDTH={WIDTH} HEIGHT={HEIGHT} onClick={() => buttonClickedHandler()}>
            <h1>Generate</h1>
            <h1>Generate</h1>
        </ButtonStyled>
    )

}

export default Button;