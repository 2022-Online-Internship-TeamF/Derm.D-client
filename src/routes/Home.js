import React, { useState } from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"
import Ranking from "../components/Ranking"
import styled from "styled-components";
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';

const Wrapper = styled.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 1500px;
  text-align: center;
  margin-top: 30px;
`;

const Viewranking = styled.span`
    font-size: 48px;
    font-weight: 800;
    left: 40px;
  `;

function Home() {
    return (
      <div>
          <Header />
          <Wrapper>
            <div>
              <Viewranking> User Ranking </Viewranking>
              <Ranking />
            </div>
            <Link to="/Study" style={{ textDecoration: 'none' }}>
                <Button 
                    style={{fontSize: "20px", textTransform: "none", padding: "20px 40px" }} 
                    outline color="primary">
                        개인 모니터링
                  </Button>
                </Link>
                <Link to="/Result" style={{ textDecoration: 'none' }}>
                <Button 
                    style={{fontSize: "20px", textTransform: "none", padding: "20px 40px" }} 
                    outline color="primary">
                        그룹 모니터링
                        </Button>
                </Link>
          </Wrapper>
          <>
          </>
          <Footer />
      </div>
    );
  }
  
  export default Home;
  