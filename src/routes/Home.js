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
import Defaultimage from "../images/Default.png";


const Wrapper = styled.div`
  height: auto;
  width: 70%;
  margin:0 auto;
  border-radius: 0px;
  margin-bottom : 50px;
`;

export default function Home() { 
  const [fileImage, setFileImage] = useState(Defaultimage);

  const saveFileImage  = (event) => {
    setFileImage(URL.createObjectURL(event.target.files[0]));
    const file = event.target.files[0];
    console.log(file);
  };

  const deleteFileImage = (event) => {
    URL.revokeObjectURL(fileImage);
    setFileImage(Defaultimage);
  };

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
                <Form.Group controlId="formFileLg" className="mb-3">
                  <Form.Label style={{fontSize: "30px"}}>진단받고 싶은 사진을 선택하세요</Form.Label>
                  <Grid container spacing={2}>
                    <Grid item xs={9} >
                      <Form.Control type="file" size="lg" name="img" accept="image/*" onChange={saveFileImage}/>
                    </Grid>   
                    <Grid item xs={3} >
                      <Button
                        style={{fontSize: "20px", textTransform: "none", padding: "10px 20px" }}
                        variant="secondary" 
                        onClick={() => deleteFileImage()}>
                        삭제
                      </Button>
                    </Grid>     
                  </Grid>
                </Form.Group>
                <Box width="100%" height="80%" >
                  <img className="diseaseImage" alt="diseaseImage" src={fileImage} width="100%" height="100%"/>    
                </Box>                          
                <br/><br/>
                
                <Grid item xs={12} align='center'>
                  {fileImage === Defaultimage ? (
                      <Button 
                      style={{fontSize: "20px", textTransform: "none", padding: "20px 40px" }} 
                      variant="success">
                        진단하기로 가기
                      </Button>
                  ) : (                
                  <Link to="/Judgment" style={{ textDecoration: 'none' }}>
                    <Button 
                    style={{fontSize: "20px", textTransform: "none", padding: "20px 40px" }} 
                    variant="success">
                      진단하기로 가기
                    </Button>
                  </Link>
                )}
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
  