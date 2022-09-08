import type { NextPage } from "next";
import styled from "styled-components"

interface Props {
    WIDTH?: string;
    inputRangeHandler: any;
    RANGE_VALUE: number;
    MIN_RANGE: number;
    MAX_RANGE: number;
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
    background: #fff;
    box-shadow: -407px 0 0 400px greenyellow;
  }
  &::-moz-range-thumb{
    -webkit-appearance: none;
    position: relative;
    width: .6vw;
    height: 2vw;
    background: #fff;
    border: none;
  }
  
  &::-moz-range-progress{
    width: 100%;
    height: 100%;
    background: greenyellow;
  }
  &::-ms-fill{
    width: 100%;
    height: 100%;
    background: greenyellow;
  }
}
`;

const Range: NextPage<Props> = ({
    WIDTH = "500px",
    inputRangeHandler,
    RANGE_VALUE,
    MIN_RANGE = 5,
    MAX_RANGE = 12
                         }) => {

    return (
        <RangeStyle PROGRESS_WIDTH = {RANGE_VALUE} WIDTH = {WIDTH}>
            <input type={"range"} value={RANGE_VALUE} min={MIN_RANGE} max={MAX_RANGE} onChange={ (e) => inputRangeHandler(e)}/>
        </RangeStyle>
    )
}

export default Range;