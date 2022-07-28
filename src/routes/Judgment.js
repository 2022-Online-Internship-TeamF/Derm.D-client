import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from '@mui/material/Grid';
import Popup from '../components/Popup'
import Header from "../components/Header"
import Button from 'react-bootstrap/Button'
import styled from "styled-components";
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Carousel from 'react-bootstrap/Carousel';
import { Link, useLocation } from "react-router-dom";

const Wrapper = styled.div`
  height: auto;
  width: 80%;
  margin:0 auto;
  text-align: center;
  border-radius: 0px;
  padding-bottom: 20px;
`;

 export default function Judgment(){
  const location = useLocation();
  const [diseaseitem, setDiseaseitem] = useState('');

  useEffect(()=>{
    setDiseaseitem(location.state.discriminate);
    console.log(location.state.discriminate);
    console.log(location.state.imageurl);
  },[]);

  return(
      <div>
        <Header />
        <br/>
        <Wrapper>
          <Container maxWidth={"xl"}>
            <Typography variant="h1" gutterBottom component="div" style={{ textDecoration: 'none', color:'#168d63' }}>
              판단 결과
            </Typography>
            <br/>
            <Grid container spacing={2} >
              <Grid item xs={6} align="left">
                  <img src={`${location.state.imageurl}`} width='100%' height='900px'/>
              </Grid>                    
              <Grid item xs={6} >
                <Paper elevation={3} style={{maxWidth: '100%', maxHeight: '900px', overflow: 'auto', overflowWrap: 'break-word'}}>
                    {diseaseitem && diseaseitem.map((imageitem, index) => (
                      <>
                      <Typography variant="h4" gutterBottom component="div" align="left" padding="5px 20px" style={{ textDecoration: 'none', color:'#168d63' }}>
                      {index+1}. {imageitem.kr_name} 
                      </Typography>
                        <img
                          className="d-block w-100"
                          src={imageitem.condition_conditionmedia[0].img}
                          height="300px"
                        />
                      </>
                    ))}
                </Paper>                 
              </Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={9}>                   
                {diseaseitem && diseaseitem.map((disease, index) => (
                  <Typography variant="h2" gutterBottom component="div" align="left">
                    {index+1} 순위로 판별된 증상 : {}
                    <Link to={`/infodisease/${disease.eng_name}`} style={{ textDecoration: 'none', color:'#168d63' }} variant="body2"> 
                      {disease.kr_name}
                    </Link> 
                  </Typography>
                    ))}
              </Grid>
            </Grid> 
            <br/><br/>
          </Container>               
        </Wrapper>
      </div>
  );
}
