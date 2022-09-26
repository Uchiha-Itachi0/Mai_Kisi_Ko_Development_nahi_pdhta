import type { NextPage } from "next";
import styled from "styled-components";
import {PropsForDifficultyMeter} from "../utils/Interface";


interface styleProps {
    BORDER_LENGTH: string;
    BORDER_COLOR: string;
    BACKGROUND_COLOR: string;
}

const DifficultyMeterStyle = styled.div<styleProps>`
  display: flex;
  gap: 1em;
  justify-content: center;
  align-items: center;
    .difficulty_meter_container{
      display: flex;
      gap: .6em;
      span{
        display: inline-block;
        width: .5vw;
        height: 2vw;
        background: ${({BACKGROUND_COLOR}) => BACKGROUND_COLOR};
        border: ${({BORDER_LENGTH, BORDER_COLOR}) => `${BORDER_LENGTH} solid ${BORDER_COLOR}`};
      }
      
      .transparent{
        background: transparent;
      }
    }

  @media only screen and (max-width: 800px){
    gap: .5em;
    .difficulty_meter_container{
      gap: .3em;
      span{
        width: 1vw;
        height: 4vw;
      }
    }
  }

`;

const DifficultyMeter: NextPage<PropsForDifficultyMeter> = ({
    TEXT = "EASY",
    BORDER_COLOR = "#000",
    BORDER_LENGTH = "2px",
    BACKGROUND_COLOR = "#ADFF2F",
    DIFFICULTY_NUMBER = 1,
    checkBox,
    range
                                          }) => {

    if(checkBox?.lowercase && checkBox?.uppercase && checkBox?.numbers && checkBox?.symbols){
        if(range >= 12){
            DIFFICULTY_NUMBER = 3;
            BACKGROUND_COLOR = "red"
            TEXT = "HIGH"
        }
        else if (range >= 8){
            DIFFICULTY_NUMBER = 2;
            BACKGROUND_COLOR = "yellow"
            TEXT = "MEDIUM"
        }
    }
    return (
        <DifficultyMeterStyle BORDER_LENGTH={BORDER_LENGTH}
                              BORDER_COLOR={BORDER_COLOR}
                              BACKGROUND_COLOR={BACKGROUND_COLOR}>
            <h1 className="difficulty_meter_heading">{TEXT}</h1>
            <div className="difficulty_meter_container">
                <span className = {DIFFICULTY_NUMBER >= 1 ? "" : "transparent"}></span>
                <span className = {DIFFICULTY_NUMBER >= 2 ? "" : "transparent"}></span>
                <span className = {DIFFICULTY_NUMBER >= 3 ? "" : "transparent"}></span>
            </div>
        </DifficultyMeterStyle>
    );
}

export default DifficultyMeter;