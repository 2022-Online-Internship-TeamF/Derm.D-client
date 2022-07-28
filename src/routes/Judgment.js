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

//임시 더미데이터
const itemData = [
    {
      img:'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      kr_name: '여드름',
      percent: 98.7,
    },
    {
      img:'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      kr_name: 'Burger',
      percent: 98.7,
    },
    {
        img:'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      kr_name: 'Camera',
      percent: 98.7,
    },
    {
      img:'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      kr_name: 'Coffee',
      percent: 98.7,
    },
    {
      img:'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      kr_name: 'Hats',
      percent: 98.7,
    },
  ];

 // 이건 좀 수정해야됨
 export default function Judgment(){
  /*
  const getDiscriminate = () => {
    const { state } = useLocation();
    console.log(state);
  }

  useEffect(()=>{
    getDiscriminate()
  },[]);
*/
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
                    <img src="https://source.unsplash.com/random"  width='100%' height='900px'/>
                </Grid>                    
                <Grid item xs={6} >
                  <Paper elevation={3} style={{maxWidth: '100%', maxHeight: '900px', overflow: 'auto', overflowWrap: 'break-word'}}>
                      {itemData && itemData.map((imageitem) => (
                        <>
                        <Typography variant="h4" gutterBottom component="div" align="left" padding="5px 20px" style={{ textDecoration: 'none', color:'#168d63' }}>
                          {imageitem.kr_name}
                        </Typography>
                          <img
                            className="d-block w-100"
                            src={imageitem.img}
                            height="300px"
                          />
                        </>
                      ))}
                  </Paper>                 
                </Grid>
                <Grid item xs={12}>                   
                  {itemData && itemData.map((disease) => (
                    <Typography variant="h2" gutterBottom component="div" align="center">
                      이 환부는 "
                      <Link to={`/infodisease/${disease.eng_name}`} style={{ textDecoration: 'none', color:'#168d63' }} variant="body2"> 
                          {disease.kr_name}
                      </Link> 
                      " 으로 {disease.percent}% 보여집니다.
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
