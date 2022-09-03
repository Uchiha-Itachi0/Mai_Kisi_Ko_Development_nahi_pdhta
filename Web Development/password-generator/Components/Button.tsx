import type { NextPage } from "next";
import styled from "styled-components";

const ButtonStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 2em;
  height: 2vw;
  width: 5vw;
  background: rgb(30, 30, 30);
  color: #fff;
  overflow: hidden;
  cursor: pointer;
  
  &:hover {
    &::before, &::after {
      width: 50%;
    }
    
    h1{
        &:nth-child(1){
          transform: scale(0);
        }
        &:nth-child(2){
          transform: scale(1);
          opacity: 1;
        }
    }
  }
  
  &::before, &::after {
    content: "";
    top: 0;
    position: absolute;
    width: 10%;
    height: 100%;
    background: rgb(252, 0, 21);
    transition: .5s;
  }
  &::before {
    left: 0;
  }
  
  
  &::after{
    right: 0;
    background: teal;
  }
  
  h1{
    position: absolute;
    z-index: 1;
    transition: .5s;
    font-size: max(10px, 1vw);
    
    &:nth-child(2){
      transform: scale(6);
      opacity: 0;
    }
  }
  
  
`;
const Button = () => {
    return (
        <ButtonStyled>
            <h1>Generate</h1>
            <h1>Generate</h1>
        </ButtonStyled>
    )

}

export default Button;