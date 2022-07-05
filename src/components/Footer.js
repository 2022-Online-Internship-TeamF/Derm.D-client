import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";

const Footerbottom = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    height : 100px;
    text-align: center;
    margin: 0 auto;
`;

const Left = styled.span`
    margin-right: 50px;
`;

const Right = styled.span`
    margin-left: 50px;
`;

const Div = styled.div`
    color: black;
    font-weight: 400;
`;

function Footer(){
    const noSession = () =>{
        alert("로그인 필요!");
    }
    const [auth, setAuth] = useState("");

    useEffect(() => {
        if(localStorage.getItem('token')!==null){
            setAuth(true);
        }
        else{
            setAuth(false);
        }
    }, [])

    return (        
        <Footerbottom>
            {auth ?
            <>
            <Left>
                <Link to="/Study" style={{ textDecoration: 'none' }}>
                    <Button 
                    style={{fontSize: "20px", textTransform: "none", padding: "20px 40px" }} 
                    outline color="primary">
                        개인 모니터링
                    </Button>
                </Link>
            </Left>
            <Right>
                <Link to="/Result" style={{ textDecoration: 'none' }}>
                    <Button 
                    style={{fontSize: "20px", textTransform: "none", padding: "20px 40px" }} 
                    outline color="primary">
                        그룹 모니터링
                    </Button>
                </Link>
            </Right>
            </>
            :
            <>
            <Left>
                    <Button 
                    style={{fontSize: "20px", textTransform: "none", padding: "20px 40px" }} 
                    outline color="primary" onClick={noSession}>
                        개인 모니터링
                    </Button>
            </Left>
            <Right>
                    <Button 
                    style={{fontSize: "20px", textTransform: "none", padding: "20px 40px" }} 
                    outline color="primary" onClick={noSession}>
                        그룹 모니터링
                    </Button>
            </Right>
            </>
            }
        </Footerbottom>
    )
}

export default Footer;