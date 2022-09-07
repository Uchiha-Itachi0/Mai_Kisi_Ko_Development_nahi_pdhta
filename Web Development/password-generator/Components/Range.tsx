import type { NextPage } from "next";
import styled from "styled-components"
import { useState } from "react";

interface Props {
    WIDTH?: string;
    inputRangeHandler: any;
    RANGE_VALUE: number;
}

interface styleProps{
    PROGRESS_WIDTH: number;
    WIDTH: string;
}

const RangeStyle = styled.div<styleProps>`
  width: ${({WIDTH}) => WIDTH};
input[type="range"] {
  -webkit-appearance: none;
  position: relative;
  width: 100%;
  height: 10px;
  background: black;
  
  &::-webkit-slider-runnable-track{
    overflow: hidden;

  }
  
  &::-webkit-slider-thumb{
    -webkit-appearance: none;
    position: relative;
    width: .6vw;
    height: 2vw;
    background: red;
    box-shadow: -407px 0 0 400px blue;
  }
  &::-moz-range-thumb{
    -webkit-appearance: none;
    position: relative;
    width: .6vw;
    height: 2vw;
    background: red;
    border: none;
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

const Range: NextPage<Props> = ({
    WIDTH = "500px",
    inputRangeHandler,
    RANGE_VALUE
                         }) => {

    return (
        <RangeStyle PROGRESS_WIDTH = {RANGE_VALUE} WIDTH = {WIDTH}>
            <input type={"range"} value={RANGE_VALUE} min={5} max={12} onChange={ (e) => inputRangeHandler(e)}/>
        </RangeStyle>
    )
}

export default Range;