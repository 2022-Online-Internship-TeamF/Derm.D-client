import React, { useState, useRef } from "react";
import Grid from '@mui/material/Grid';
import Header from "../components/Header"
import Button from 'react-bootstrap/Button'
import styled from "styled-components";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import { Link} from "react-router-dom";

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

const PaddingUp = styled.div`
    padding:60px;
`;

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: '여드름',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];

function Selfmonitoring(){
    return(
        <div>
            <Header />
            <PaddingUp>
            </PaddingUp>
            <Wrapper>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <img src="https://source.unsplash.com/700x1000/?hamburger" />
                    </Grid>
                    
                    <Grid item xs={6}>
                        <ImageList sx={{ width: 800, height: 700 }} cols={4} rowHeight={164}>
                            {itemData.map((item) => (
                                <ImageListItem key={item.img}>
                                <img
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                </ImageListItem>
                            ))}
                        </ImageList>
                        <Typography variant="h2" gutterBottom component="div" align="left">
                            이 환부는 "
                            <Link to="/Signup" style={{ textDecoration: 'none', color:'#168d63' }} variant="body2"> 
                                {itemData[0].title}
                            </Link> 
                            " 으로 보여집니다.
                        </Typography>
                    </Grid>
                </Grid>                
            </Wrapper>
            <Right>
                <Link to="/Scrap" style={{ textDecoration: 'none' }}>
                    <Button 
                    style={{fontSize: "60px", textTransform: "none", padding: "30px 40px" }} 
                    variant="outline-success">
                        스크랩 하기
                </Button>
            </Link>
            </Right>
        </div>
    );
}

export default Selfmonitoring