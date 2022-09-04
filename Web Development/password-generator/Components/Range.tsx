import type { NextPage } from "next";
import styled from "styled-components"
import { useState } from "react";

interface styleProps{
    WIDTH?: number;
    setWidth?: any;
}

const RangeStyle = styled.div<styleProps>`
  width: 500px;
input[type="range"] {
  -webkit-appearance: none;
  position: relative;
  width: 100%;
  height: 10px;
  background: black;
  
  &::before{
    content: "";
    position: absolute;
    inset: 0;
    background: blue;
    width: ${({WIDTH}) => String(WIDTH) + "%"};
  }
  &::-webkit-slider-thumb{
    -webkit-appearance: none;
    position: relative;
    width: .6vw;
    height: 2vw;
    background: red;
  }
  &::-moz-range-thumb{
    -webkit-appearance: none;
    position: relative;
    width: .6vw;
    height: 2vw;
    background: red;
  }
  
  &::-moz-range-progress{
    width: 100%;
    height: 100%;
    background: blue;
  }
  &::-ms-fill{
    width: 100%;
    height: 100%;
    background: blue;
  }
}
`;

const Range: NextPage = () => {

    const [ RANGE_VALUE, setRANGE_VALUE ] = useState(40);

    const inputRangeHandler = (e: any) => {
        const value: number = e.target.value;
        setRANGE_VALUE(value);
    }
    return (
        <RangeStyle WIDTH = {RANGE_VALUE}>
            <input type={"range"} value={RANGE_VALUE} min={0} max={100} onChange={ (e) => inputRangeHandler(e)}/>
        </RangeStyle>
    )
}

export default Range;