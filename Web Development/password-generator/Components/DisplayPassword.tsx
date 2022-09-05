import type { NextPage } from 'next'
import styled from "styled-components";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface Props {
    WIDTH?: string;
    HEIGHT?: string;
    COLOR?: string;
    BACKGROUND?: string;
}

interface styleProps {
    WIDTH: string;
    HEIGHT: string;
    COLOR: string;
    BACKGROUND: string;
}

const StyledDisplayPassword = styled.div<styleProps>`
  position: relative;
  width: max-content;
  height: max-content;
  transform-style: preserve-3d;
  perspective: 1000px;

  &:hover {
    .display_password{
      transform: rotateX(180deg) translateZ(-50px);
    }
  }

  
  .display_password {
    position: relative;
    transition: .5s;
    transform-style: preserve-3d;
    perspective: 1000px;
    background: red;
    
  }
  
  
  .display_password_container {
    display: flex;
    justify-content: space-between;
    padding: .5em 1em;
    background: ${({BACKGROUND}) => BACKGROUND};
    color: ${({COLOR}) => COLOR};
    align-items: center;
    width: ${({WIDTH}) => WIDTH};
    height: ${({HEIGHT}) => HEIGHT};
    transform: translateZ(50px);
    
    .display_password_container_copy_icon {
      cursor: pointer;
    }
  }
  .display_password_container_back {
    position: absolute;
    inset: 0;
    transform: rotateX(180deg)
  }
;`


const DisplayPassword: NextPage<Props> = ({
    WIDTH = "500px",
    HEIGHT = "50px",
    COLOR = "#fff",
    BACKGROUND = "#000"

                                          }) => {

    return (
        <StyledDisplayPassword WIDTH = {WIDTH} HEIGHT={HEIGHT}
                               COLOR={COLOR} BACKGROUND={BACKGROUND}>
            <div className="display_password">
                <div className="display_password_container">
                    <h1>Password 1 will be displayed here</h1>
                    <ContentCopyIcon className = "display_password_container_copy_icon"/>
                </div>
                <div className="display_password_container display_password_container_back">
                    <h1>Password 2 will be displayed here</h1>
                    <ContentCopyIcon className = "display_password_container_copy_icon"/>
                </div>
           </div>
        </StyledDisplayPassword>
    )
};

export default DisplayPassword;

