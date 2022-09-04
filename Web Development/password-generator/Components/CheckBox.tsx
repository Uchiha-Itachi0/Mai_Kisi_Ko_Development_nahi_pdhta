import type { NextPage } from "next";
import styled from "styled-components";
import { useState } from "react";
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
        box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.2),
          -2px -2px 10px 0 rgba(255, 255, 255, 0.5);
        border-radius: 5px;
      }
      
      .check_box_container_checkbox_pressed{
        box-shadow: inset 2px 2px 10px 0 rgba(0, 0, 0, 0.2),
          inset -2px -2px 10px 0 rgba(255, 255, 255, 0.5);
        background: greenyellow;
      }
      
      .check_box_container_heading_container{
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    
`;

interface Props {
    TEXT?: string;
}

const CheckBox: NextPage<Props> = ({
    TEXT = "This is where text goes"
                                   }) => {

    const [ PRESSED, setPRESSED ] = useState<boolean>(false);

    const checkboxPressedHandler = () => {
        setPRESSED(!PRESSED);
    }
    return (
        <CheckBoxStyle>
            <div className="check_box_container">
                <div className={`check_box_container_checkbox ${PRESSED ? "check_box_container_checkbox_pressed" : ""}`}
                onClick={() => checkboxPressedHandler()}></div>
                <div className="check_box_container_heading_container">
                    <h1>{TEXT}</h1>
                </div>
            </div>
        </CheckBoxStyle>
    )
}

export default CheckBox