import type { NextPage } from "next";
import styled from "styled-components";
import DisplayPassword from "./DisplayPassword";
import Range from "./Range";
import CheckBox from "./CheckBox";
import Button from "./Button";
import { useState } from "react";
import generatePassword from "../utils/password_generator";
import DifficultyMeter from "./DifficultyMeter";
import { checkBoxInterface} from "../utils/Interface";

const CardStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5vw;
    width: max(300px, 40vw);
    .card_display_password{
      background: transparent;
      height: max(80px, 5vw);
      position: relative;
    }
  .card_display_mid{
    background: #24232B;
    color: #fff;
    padding: 1em 2em;
    border-radius: 5px;
    
    .card_display_mid_range_container{
      display: flex;
      justify-content: space-between;
      margin-bottom: 1vw;
      
      h1{
        font-size: 1.5vw;
      }
      
    }
    
    .card_display_mid_checkbox_container{
      display: flex;
      flex-direction: column;
      margin-top: 1vw;
    }
  }
  .card_display_mid_difficulty_meter{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.4em 1em;
    background: rgba(30, 30, 30, 0.8);
    margin-top: 1em;
    font-size: max(1.2vw, .8em);
  }
  .card_button{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2vw;
  }
  
  @media only screen and (max-width: 800px) {
    gap: 2em;
    width: 60vw;
    
    .card_display_mid{
      .card_display_mid_range_container{
        h1{
          font-size: 3vw;
        }
      }
      
      .card_display_mid_difficulty_meter{
        font-size: 3vw;
      }
    }
  }
  @media only screen and (max-width: 450px) {
    width: 80vw;
    .card_display_password{
      height: 10vw;
      background: transparent;
    }

    .card_display_mid{
      .card_display_mid_range_container{
        h1{
          font-size: 5vw;
        }
      }
      .card_display_mid_checkbox_container{
        gap: 2vw;
      }
    }
  }

`;


const Card: NextPage = () => {

    const [ RANGE_VALUE, setRANGE_VALUE ] = useState(5);
    const [PASSWORD, setPASSWORD] = useState<string>("Password will be displayed here");
    const [ROTATE, setROTATE] = useState<boolean>(false);
    const [ CHECKBOX, setCHECKBOX ] = useState<checkBoxInterface>({
        lowercase: false,
        uppercase: false,
        numbers: false,
        symbols: false
    });


    const inputRangeHandler = (e: any) => {
        const value: number = e.target.value;
        setRANGE_VALUE(value);
    }

    const buttonClickedHandler = () => {
        const password: string = generatePassword(RANGE_VALUE, CHECKBOX.lowercase, CHECKBOX.uppercase, CHECKBOX.numbers, CHECKBOX.symbols);
        setPASSWORD(password);
        setROTATE(!ROTATE);
    }

    return (
        <CardStyle>
            <div className="card_display_password">
                <DisplayPassword
                    TEXT={PASSWORD}
                    WIDTH = "100%" HEIGHT = "100%"
                    BACKGROUND = "#24232B"
                    ROTATE = {ROTATE}/>
            </div>
            <div className="card_display_mid">
                <div className="card_display_mid_range_container">
                    <div></div>
                    <h1>{RANGE_VALUE}</h1>
                </div>
                <Range WIDTH = "100%"
                       inputRangeHandler = {(e: any) => inputRangeHandler(e)}
                        RANGE_VALUE = {RANGE_VALUE}/>
                <div className="card_display_mid_checkbox_container">
                    <CheckBox name = "uppercase" checkBoxClicked = {setCHECKBOX} TEXT = "Include Uppercase Letters"/>
                    <CheckBox name = "lowercase" checkBoxClicked = {setCHECKBOX} TEXT = "Include Lowercase Letters"/>
                    <CheckBox name = "numbers" checkBoxClicked = {setCHECKBOX} TEXT = "Include numbers"/>
                    <CheckBox name = "symbols" checkBoxClicked = {setCHECKBOX} TEXT = "Include symbols"/>
                </div>

                <div className="card_display_mid_difficulty_meter">
                    <h1>STRENGTH</h1>
                    <DifficultyMeter
                        checkBox = {CHECKBOX}
                        range = {RANGE_VALUE}/>
                </div>

            </div>
            <div className="card_button">
                <Button buttonClickedHandler = {() => buttonClickedHandler()}WIDTH = "100%" HEIGHT = "100%"/>
            </div>
        </CardStyle>
    );
}

export default Card;