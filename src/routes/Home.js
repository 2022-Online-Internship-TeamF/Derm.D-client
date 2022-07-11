import React, { useState } from "react";
import Header from "../components/Header"
import styled from "styled-components";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const Wrapper = styled.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 150px;
  text-align: center;
  margin-top: 70px;
`;

export default function Home() { 
    return (
      <div>
          <Header />
          <Wrapper>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Link to="/Judgment" style={{ textDecoration: 'none' }}>
                    <Button 
                        style={{fontSize: "20px", textTransform: "none", padding: "20px 40px" }} 
                        variant="success">
                          개인 모니터링
                      </Button>
                    </Link>
            </Grid>

            <Grid item xs={6}>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>사진을 입력하세요</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
                <Link to="/Scrap" style={{ textDecoration: 'none' }}>
                    <Button 
                        style={{fontSize: "20px", textTransform: "none", padding: "20px 40px" }} 
                        variant="success">
                          그룹 모니터링
                    </Button>
                </Link>
            </Grid>
          </Grid> 
          </Wrapper>
          <>
          </>
      </div>
    );
  }
  