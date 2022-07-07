import React, { useState } from "react";
import Header from "../components/Header"
import { Button } from 'reactstrap';
import styled from "styled-components";
import {Link} from "react-router-dom";

const Studyresult = styled.div`
    height: 800px;
    width: 700px;
    margin:0 auto;
    border-radius: 0px;
`;

const Content = styled.div`
    position: relative;
    top: 105px;
`;

const P = styled.p`
    font-size: 64px;
    font-weight: 800;
`;

const Timer = styled.div`
    border:1px solid silver;
    padding:30px;
`;

const Date = styled.span`
    font-size: 48px;
    font-weight: 800;
`;

const Title = styled.p`
    width:50%;
    margin:0 auto;
    text-align:center;
`;

const Bottom = styled.div`
    width:15%;
    margin:0 auto;
`;

function Result(){


    return (
        <>
            <div className="contents1">
                <Header />
                <Timer>
                    <Date className="textShadow2">
                        <Title>공부 결과</Title>
                    </Date>
                </Timer>
                <Studyresult className="lightest boxShadow">
                    <Content>
                        <P>
                            유저이름 : test
                        </P>
                        <P>
                            시작시간 ~ 종료시간
                        </P>
                        <P>
                            총 시간 : 15시간
                        </P>
                        <P>
                            총 점수 : 100점
                        </P>
                        <P>
                            랭킹 : 1위
                        </P>
                    </Content>
                </Studyresult>
                <Bottom>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Button 
                        style={{fontSize: "40px", textTransform: "none", width:"400px", height:"200px"}} 
                        outline color="primary">
                            홈으로 돌아가기
                        </Button>
                    </Link>
                </Bottom>
            </div>
        </>
    );
}

export default Result

