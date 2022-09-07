import type { NextPage } from "next";
import styled from "styled-components";
import { useState, Dispatch, SetStateAction, MouseEvent } from "react";
const CheckBoxStyle = styled.div`
    .check_box_container{
      width: 500px;
      padding: 1em;
      display: flex;
      flex-direction: row;
      gap: 2em;
      
      .check_box_container_checkbox{
        width: 2vw;
        height: 2vw;
        box-shadow: 3px 3px 5px #1b1a1a, -3px -3px 5px #2b2b2b;
      }
      
      .check_box_container_checkbox_pressed{
        box-shadow:  inset 2px 2px 2px 2px rgba(0, 0, 0, 0.2),
                      inset -2px -2px 10px 2px rgba(255, 255, 255, 0.2);
        background: greenyellow;
      }
      
      .check_box_container_heading_container{
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    
`;
interface checkbox{
    lowercase: boolean;
    uppercase: boolean;
    numbers: boolean;
    symbols: boolean;
}
interface Props {
    TEXT?: string;
    checkBoxClicked: Dispatch<SetStateAction<checkbox>>;
    name: string;
}

const CheckBox: NextPage<Props> = ({
    TEXT = "This is where text goes",
    checkBoxClicked,
    name
                                   }) => {

    const [ PRESSED, setPRESSED ] = useState<boolean>(false);

    const checkboxPressedHandler = (e:MouseEvent<HTMLDivElement>) => {
        const name: string = e.currentTarget.id;
        if(name == "#uppercase"){
            checkBoxClicked(prevState => {
                return {
                    ...prevState,
                    uppercase: !prevState.uppercase
                }
            })
        }
        else if(name == "#lowercase"){
            checkBoxClicked(prevState => {
                return {
                    ...prevState,
                    lowercase: !prevState.lowercase
                }
            })
        }
        else if(name == "#numbers"){
            checkBoxClicked(prevState => {
                return {
                    ...prevState,
                    numbers: !prevState.numbers
                }
            })
        }
        else if (name == "#symbols"){
            checkBoxClicked(prevState => {
                return {
                    ...prevState,
                    symbols: !prevState.symbols
                }
            })
        }
        setPRESSED(!PRESSED);
    }
    return (
        <CheckBoxStyle>
            <div className="check_box_container">
                <div id={`#${name}`} className={`check_box_container_checkbox ${PRESSED ? "check_box_container_checkbox_pressed" : ""}`}
                onClick={(e) => checkboxPressedHandler(e)}
                ></div>
                <div className="check_box_container_heading_container">
                    <h1>{TEXT}</h1>
                </div>
            </div>
        </CheckBoxStyle>
    )
}

export default CheckBox