import React, { useState } from "react";
import Header from "../components/Header"
import Listdisease from "../components/Listdisease"
import styled from "styled-components";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from '@mui/material/Container';
import axios from 'axios'
import test from "../images/test.png";

const Wrapper = styled.div`
  height: auto;
  width: 70%;
  margin:0 auto;
  border-radius: 0px;
  margin-bottom : 50px;
`;

export default function Home() { 
    return (
      <div>
          <Header />
          <br /><br /><br /><br /><br />
          <Wrapper>
          <Container maxWidth={"xl"}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Listdisease/>
              </Grid>

              <Grid item xs={6} >
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>진단받고 싶은 사진을 입력하세요</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                <img className="phoneImage" alt="iPhone_01" src={test} width="100%"/>
                <Grid item xs={12} align='center'>
                  <Link to="/Judgment" style={{ textDecoration: 'none' }}>
                    <Button 
                    style={{fontSize: "20px", textTransform: "none", padding: "20px 40px" }} 
                    variant="success">
                      진단하기로 가기
                    </Button>
                  </Link>
                  <Link to="/Scrap" style={{ textDecoration: 'none' }}>
                    <Button 
                      style={{fontSize: "20px", textTransform: "none", padding: "20px 40px" }} 
                      variant="success">
                      스크랩으로 가기
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Grid> 
          </Container>
          </Wrapper>
          <>
          </>
      </div>
    );
  }
  