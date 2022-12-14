import type { NextPage } from 'next'
import styled from "styled-components";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import copy from "copy-to-clipboard";

interface Props {
    TEXT?: string;
    WIDTH?: string;
    HEIGHT?: string;
    COLOR?: string;
    BACKGROUND?: string;
    ROTATE?: boolean;
}

interface styleProps {
    WIDTH: string;
    HEIGHT: string;
    COLOR: string;
    BACKGROUND: string;
}

const StyledDisplayPassword = styled.div<styleProps>`
  width: ${({WIDTH}) => WIDTH};
  height: ${({HEIGHT}) => HEIGHT};
  transform-style: preserve-3d;
  perspective: 1000px;
  background: transparent;
  
  .display_password{
    position: absolute;
    inset: 0;
    transition: .5s;
    transform-style: preserve-3d;
    perspective: 10000000px;
    background: transparent;
    
    &.rotate{
      transform: rotateX(180deg) translateZ(-50px);
    }


    .display_password_container{
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: ${({BACKGROUND}) => BACKGROUND};
      color: ${({COLOR}) => COLOR};
      position: absolute;
      inset: 0;
      padding: 2vw 3.2vw;
      z-index: 1;
      transform: translateZ(50px);
      
      .display_password_container_copy_icon{
        cursor: pointer;
        font-size: max(1.5em, 1.5vw);
      }
      
      h1{
        font-size: max(1.5vw, 1em);
        letter-spacing: .1em;
      }
    }
    
    .display_password_container_back{
      transform: rotateX(180deg);
      
    }
  }
  
  @media screen and (max-width: 800px){
    .display_password{
      .display_password_container{
        padding: .1em 1em;
        
        h1{
          font-size: 3vw;
        }
        
        .display_password_container_copy_icon{
          font-size: 3vw;
        }
      }
    }
  }
  @media screen and (max-width: 450px){
    .display_password{
      .display_password_container{
        h1{
          font-size: 4vw;
        }

        .display_password_container_copy_icon{
          font-size: 4vw;
        }
      }
    }
  }
;`


const DisplayPassword: NextPage<Props> = ({
    TEXT = "Password will be displayed here",
    WIDTH = "500px",
    HEIGHT = "50px",
    COLOR = "#fff",
    BACKGROUND = "#000",
    ROTATE = false

                                          }) => {

    const copyToClipboard = () => {
        copy(TEXT);
        alert("Copied to clipboard");
    }


    return (
        <StyledDisplayPassword WIDTH = {WIDTH} HEIGHT={HEIGHT}
                               COLOR={COLOR} BACKGROUND={BACKGROUND}>
            <div className={`display_password ${ROTATE ? "rotate": ""}`}>
                <div className="display_password_container">
                    <h1>{TEXT}</h1>
                    <ContentCopyIcon className = "display_password_container_copy_icon" onClick = {() => copyToClipboard()}/>
                </div>
                <div className="display_password_container display_password_container_back">
                    <h1>{TEXT}</h1>
                    <ContentCopyIcon className = "display_password_container_copy_icon" onClick={() => copyToClipboard()}/>
                </div>
           </div>
        </StyledDisplayPassword>
    )
};

export default DisplayPassword;

