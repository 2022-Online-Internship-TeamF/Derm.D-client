import React, { useState, useRef } from "react";
import Header from "../components/Header"
import { Button } from 'reactstrap';
import styled from "styled-components";
import { Link} from "react-router-dom";
import Webcam from "react-webcam";

const Wrapper = styled.div`
  height: auto;
  min-height: 100%;
  text-align: center;
  padding-bottom: 20px;
`;

const Left = styled.span`
    position : absolute;
    bottom: 40px;
    left: 200px;
`;

const Right = styled.span`
    position : absolute;
    bottom: 40px;
    right : 200px;
`;

const Date = styled.span`
    font-size: 48px;
    font-weight: 800;
    text-align:center;
`;

const Timer = styled.div`
    border:1px solid silver;
    padding:30px;
`;

const Timer2 = styled.p`
    width:50%;
    margin:0 auto;
    text-align:center;
`;

function Selfmonitoring(){
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const detect = async () => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

    }
  };

    return(
        <div>
            <Header />
            <body>
            <Timer>
            <Date className="textShadow2">
                    <Timer2>2022-07-05 14:47:35</Timer2>
            </Date>
            </Timer>
            <Wrapper>
                <div className="App">
                        <Webcam
                        ref={webcamRef}
                        muted={true} 
                        style={{
                            position: "absolute",
                            marginLeft: "auto",
                            marginRight: "auto",
                            left: 0,
                            right: 0,
                            textAlign: "center",
                            zindex: 9,
                            width: 1200,
                            height: 1200,
                        }}
                        />
                </div>                
            </Wrapper>
            </body>
            <Left>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <Button 
                style={{fontSize: "50px", textTransform: "none", width:"300px", height:"200px" }} 
                outline color="primary">
                    일시정지
                </Button>
            </Link>
            </Left>
            <Right>
                <Link to="/Result" style={{ textDecoration: 'none' }}>
                    <Button 
                    style={{fontSize: "60px", textTransform: "none", width:"300px", height:"200px" }} 
                    outline color="primary">
                        종료
                </Button>
            </Link>
            </Right>
        </div>
    );
}

export default Selfmonitoring