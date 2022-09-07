import type { NextPage } from "next";
import styled from "styled-components";
import DisplayPassword from "./DisplayPassword";
import Range from "./Range";
import CheckBox from "./CheckBox";
import Button from "./Button";
import { useState } from "react";
import generatePassword from "../utils/password_generator";

const CardStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2em;
    .card_display_password{
      background: #24232B;
      height: 80px;
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
      margin-bottom: 1em;
      
      h1{
        font-size: 1.5vw;
      }
      
    }
    
    .card_display_mid_checkbox_container{
      margin-top: 1em;
    }
  }
  .card_button{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2vw;
  }

`;


interface checkBox {
    lowercase: boolean;
    uppercase: boolean;
    numbers: boolean;
    symbols: boolean;
}

const Card: NextPage = () => {

    const [ RANGE_VALUE, setRANGE_VALUE ] = useState(5);
    const [PASSWORD, setPASSWORD] = useState<string>("Password will be displayed here");
    const [ROTATE, setROTATE] = useState<boolean>(false);
    const [ CHECKBOX, setCHECKBOX ] = useState<checkBox>({
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

            </div>
            <div className="card_button">
                <Button buttonClickedHandler = {() => buttonClickedHandler()}WIDTH = "100%" HEIGHT = "100%"/>
            </div>
        </CardStyle>
    );
}

export default Card;