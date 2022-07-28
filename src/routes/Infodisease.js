import React, {useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header"
import Popup from '../components/Popup'
import styled from "styled-components";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Carousel from 'react-bootstrap/Carousel';
import { Link, useParams, useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import Container from '@mui/material/Container';

const Wrapper = styled.div`
    height: auto;
    width: 80%;
    margin:0 auto;
    border-radius: 0px;
    margin-bottom : 50px;
`;

export default function Infodisease(){
  const useGetData = () => {
    const [popup, setPopup] = useState({open: false, title: "", message: "", callback: false});
    const [Disease, setDisease] = useState('');
    const [Image, setImage] = useState('');
    const [Question, setQuestion] = useState('');
    const [authTokens, setAuthTokens] = useState('');
    const [select, setSelect] = useState(1);
    const {diseaseid, qnaid} = useParams();
    const location = useLocation();

    const handleChange = (val) => {
      setSelect(val);
    }

    useEffect(() => {
      if (localStorage.getItem('token') !== null){
        setAuthTokens(true);
      }
      else {
        setAuthTokens(false);
      }
    }, [localStorage.getItem('token')])

    const getDisease = async () => {
      const postUrl = `/condition/${diseaseid}`;
      await axios.get(postUrl)
      .then((response) => {
        setDisease(response.data);
        setImage(response.data.condition_conditionmedia);
        console.log(response.data);
        console.log(response.data.condition_conditionmedia);
        console.log("성공");
      }).catch(function(error){
        console.log("실패");
      });
    }

    const getQuestion = async () => {
      const postUrl = `/condition/${diseaseid}/question`;
      await axios.get(postUrl)
      .then((response) => {
        setQuestion(response.data);
        console.log(response.data);
        console.log("성공");
      }).catch(function(error){
        console.log("실패");
      });
    }

    const postScrap = async () => {
      const postUrl = "/user/archive";
      const postValue = {
        condition : Disease.eng_name,
      }
      await axios.post(postUrl, postValue)
      .then((response) => {
          if (response) {
            setPopup({open: true, title: "성공!", message: "스크랩 되었습니다."});
          }                    
      }).catch(function(error){
        console.log(error);
      });
    }


    useEffect(()=>{
      getDisease()
      getQuestion()
    },[]);  

    useEffect(() => {
      if (localStorage.getItem('token') !== null){
        setAuthTokens(true);
      }
      else {
        setAuthTokens(false);
      }
    }, [localStorage.getItem('token')])  

    return {
      popup, 
      setPopup,
      Disease,
      select,
      Image,
      location,
      Question,
      authTokens,
      handleChange,
      postScrap,
    }
  }
  
  const { popup, setPopup, Disease, select, Image, location, Question, authTokens, handleChange, postScrap} = useGetData();

  return (
      <>
      <Popup open = {popup.open} setPopup = {setPopup} title = {popup.title} message = {popup.message} callback = {popup.callback}/>
          <div>
              <Header />
              <br /><br /><br />
              <Wrapper>
                  <Container maxWidth={"xl"}>
                  <Grid container spacing={8}>
                      <Grid item xs={3.5}>
                        <Carousel>
                          {Image && Image.map((imageitem) => (
                            <Carousel.Item>
                              <img
                                className="d-block w-100"
                                src={imageitem.img}
                                height="400px"
                              />
                            </Carousel.Item>
                          ))}
                        </Carousel>
                        <br/> <br/> <br/>
                        <Typography variant="h2" gutterBottom component="div" align="center" style={{ textDecoration: 'none', color:'#168d63' }}>
                          {Disease.kr_name}
                        </Typography>
                        <Typography variant="h5" gutterBottom component="div" align="center" style={{ textDecoration: 'none', color:'#168d63' }}>
                          {Disease.eng_name}
                        </Typography>
                        <br/> <br/> <br/>
                        {authTokens ? (
                          <>
                            <Link to={`${location.pathname}/question`} style={{ textDecoration: 'none' }}>
                              <Button 
                              style={{fontSize: "40px", textTransform: "none", width: "100%", height: "150px" }} 
                              variant="success">
                                질문하러 가기
                              </Button>
                            </Link>
                            <br/><br/>
                            <Grid item xs={12} align="right">
                              <Button                     
                                style={{fontSize: "60px", textTransform: "none", padding: "30px 40px" }} 
                                variant="outline-success"
                                onClick={postScrap}>
                                  스크랩 하기
                              </Button>             
                            </Grid>
                          </>
                        )
                        :
                        (<></>)
                        }
                      </Grid>

                      <Grid item xs={8.5}>
                        <ToggleButtonGroup type="radio" name="options" defaultValue={select} value={select} style={{width: "100%"}} onChange={handleChange}>
                          <ToggleButton id="tbg-radio-1" value={1} style={{fontSize: "40px"}} variant="success" >
                            설명
                          </ToggleButton>
                          <ToggleButton id="tbg-radio-2" value={2} style={{fontSize: "40px"}} variant="success" >
                            Q & A
                          </ToggleButton>
                        </ToggleButtonGroup>
                        <br/><br/>
                          {select === 1 ? (                             
                              <Paper elevation={3} style={{maxHeight: '1000px', overflow: 'auto', overflowWrap: 'break-word'}}>
                                <br/>
                                <Typography variant="h5" gutterBottom component="div" padding="10px 20px">
                                  정의 : {Disease.definition}
                                </Typography>
                                <hr/>
                                <Typography variant="h5" gutterBottom component="div" padding="10px 20px">
                                  원인 : {Disease.cause}
                                </Typography>
                                <hr/>
                                <Typography variant="h5" gutterBottom component="div" padding="10px 20px">
                                  치료 : {Disease.treatment}
                                </Typography>
                                <hr/>
                                <Typography variant="h5" gutterBottom component="div" padding="10px 20px">
                                  예방 방법 : {Disease.prevention}
                                </Typography>
                                <hr/>
                                <Typography variant="h5" gutterBottom component="div" padding="10px 20px">
                                  생활 가이드 : {Disease.guide}
                                </Typography>
                                <hr/>
                                <Typography variant="h5" gutterBottom component="div" padding="10px 20px">
                                  설명 요약 : {Disease.summary}
                                </Typography>
                                <hr/>
                                <Typography variant="h5" gutterBottom component="div" padding="10px 20px">
                                  출처 : {Disease.source}
                                </Typography>
                                {Disease.symtom ? (     
                                <>
                                  <hr/>                                  
                                  <Typography variant="h5" gutterBottom component="div" padding="10px 20px">
                                    임시 : {Disease.symtom}
                                  </Typography>
                                </>                           
                                ) : (<></>)}
                                {Disease.progress ? (     
                                <>
                                  <hr/>
                                  <Typography variant="h5" gutterBottom component="div" padding="10px 20px">
                                    임시 : {Disease.progress}
                                  </Typography>
                                </>                           
                                ) : (<></>)}
                                {Disease.etc ? (     
                                <>
                                  <hr/>
                                  <Typography variant="h5" gutterBottom component="div" padding="10px 20px">
                                    등등 : {Disease.etc}
                                  </Typography>
                                </>                           
                                ) : (<></>)}
                              </Paper>
                            )
                            :
                            (
                            <Grid container direction="row-reverse" justifyContent="flex-start" alignItems="stretch" spacing={2}>                              
                              {Question.map((qnaitem) => (
                                <Grid item xs={12}>
                                <Paper elevation={3} style={{overflowWrap: 'break-word'}}>
                                  <Link to={`${location.pathname}/qna/${qnaitem.id}`} style={{ textDecoration: 'none', color:'black' }}>
                                    <Typography variant="h6" gutterBottom component="div" padding="10px 20px">
                                      {qnaitem.content}
                                    </Typography>
                                  </Link>
                                </Paper>
                                </Grid>
                              ))}
                              
                            </Grid>
                            )
                          }
                      </Grid>
                  </Grid> 
                  </Container>
              </Wrapper>
          </div>
      </>
    );
}