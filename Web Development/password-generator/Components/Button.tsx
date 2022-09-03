import type { NextPage } from "next";
import styled from "styled-components";

const ButtonStyled = styled.div`
`;
const Button = () => {
    return (
        <ButtonStyled>
            <h1 className={"button_container_heading"}>Generate</h1>
        </ButtonStyled>
    )

}

export default Button;