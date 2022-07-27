import React, { useEffect, useState } from "react";
import Header from "../components/Header"
import Popup from '../components/Popup'
import Card from 'react-bootstrap/Card'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel';
import ReactButton from 'react-bootstrap/Button'
import Container from '@mui/material/Container';
import styled from "styled-components";
import {Link, useNavigate, useLocation, useParams} from "react-router-dom";
import {Formik } from "formik";
import BootstrapForm from "react-bootstrap/Form";
import axios from 'axios'

const Wrapper = styled.div`
    height: auto;
    width: 80%;
    margin:0 auto;
    border-radius: 0px;
    margin-bottom : 50px;
`;

export default function Qna(){
  const useGetData = () => { //질문 수정이랑 삭제, 답변 작성, 수정/삭제 로그인 안하면 못하는 거 추가
    const [popup, setPopup] = useState({open: false, title: "", message: "", callback: false});
    const [Question, setQuestion] = useState("");
    const [QuestionImage, setQuestionImage] = useState('');
    const [Answer, setAnswer] = useState("");
    const [user, setUser] = useState("")
    const {diseaseid, qnaid, answerid} = useParams();
    const navigate = useNavigate();
    
    const getUserData = async () => {
      const postUrl = "/user";
      await axios.get(postUrl)
      .then((response) => {
          setUser(response.data);
          console.log(response.data);
          console.log("성공");
      }).catch(function(error){
          console.log("실패");
      });
  }

    const getQuestion = async () => {
      const postUrl = `/condition/${diseaseid}/question/${qnaid}`;
      await axios.get(postUrl)
      .then((response) => {
        setQuestion(response.data);
        setQuestionImage(response.data.question_questionmedia);
        console.log(response.data);
        console.log("질문 가져오기 성공");
      }).catch(function(error){
        console.log(error);
      });
    }

    const deleteQuestion = async () => {
      const postUrl = `/condition/${diseaseid}/question/${qnaid}`;
      await axios.delete(postUrl)
      .then((response) => {
        setPopup({open: true, title: "성공!", message: "질문이 삭제되었습니다!", callback: function(){
          navigate(`/infodisease/${diseaseid}`,{replace:true});
        }}); 
        console.log("질문 삭제 성공");
      }).catch(function(error){
        setPopup({open: true, title: "실패!", message: "삭제 권한이 없습니다!"});
        console.log(error);
      });
    }

    const getAnswer = async () => {
      const postUrl = `/condition/${diseaseid}/question/${qnaid}/answer`;
      await axios.get(postUrl)
      .then((response) => {
        setAnswer(response.data);
        console.log(response.data);
        console.log("전체 답변 가져오기 성공");
      }).catch(function(error){
        console.log(error);
      });
    }
    
    useEffect(()=>{
      getUserData();
      getQuestion()
      getAnswer()
    },[]);

    return {
      popup,
      setPopup,
      Question,
      Answer,
      deleteQuestion,
      qnaid,
      user,
      QuestionImage,
    }
  }

  const location = useLocation();
  const {popup, setPopup, Question, Answer, deleteQuestion, qnaid, user, QuestionImage } = useGetData();
  

    return (
        <>
            <div>
            <Popup open = {popup.open} setPopup = {setPopup} title = {popup.title} message = {popup.message} callback = {popup.callback}/>
                <Header />
                <br /><br />
                <Wrapper>
                    <Typography variant="h2" gutterBottom component="div" align="center" style={{ textDecoration: 'none', color:'#168d63' }}>
                          질문 & 답변 상세정보
                    </Typography> 
                    <Container maxWidth={"xl"}>
                      <Grid container spacing={8}>
                        <Grid item xs={12}>
                          <Typography variant="h2" gutterBottom component="div" align="left" style={{ textDecoration: 'none', color:'#168d63' }}>
                                증상 질문
                          </Typography>                    
                          <Box sx={{ width: '100%'}}>
                            <Paper elevation={3} style={{overflowWrap: 'break-word'}}>
                              <Grid container spacing={1}>
                                <Grid item xs={6}>
                                <Typography variant="h6" component="div" padding="10px 20px">
                                  생성일자 : {Question.created_at}
                                </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                <Typography variant="h6" component="div" padding="10px 10px">
                                  수정일자 : {Question.modified_at}
                                </Typography>
                                </Grid>
                              </Grid>
                              <hr/>
                              <Typography variant="h4" gutterBottom component="div" padding="10px 20px">
                                {Question.content}
                              </Typography>
                              <hr/>
                              <Carousel>
                                {QuestionImage && QuestionImage.map((imageitem) => (
                                  <Carousel.Item>
                                    <img
                                      className="d-block w-100"
                                      src={imageitem.img}
                                      height="400px"
                                    />
                                  </Carousel.Item>
                                ))}
                              </Carousel>
                            </Paper>
                          </Box>
                        </Grid>

                        <Grid item xs={6}>
                          <Link to={`${location.pathname}/../../question/${qnaid}`} style={{ textDecoration: 'none' }}>
                            <Button 
                            style={{fontSize: "40px", textTransform: "none", width: "100%", height: "100px" }} 
                            variant="success">
                              질문 수정
                            </Button>
                          </Link>
                        </Grid>
                        <Grid item xs={6}>
                          <Button 
                          style={{fontSize: "40px", textTransform: "none", width: "100%", height: "100px" }} 
                          variant="danger"
                          onClick={deleteQuestion}
                          >
                            질문 삭제
                          </Button>
                        </Grid>

                        <Grid item xs={12}>
                          <Typography variant="h2" gutterBottom component="div" align="left" style={{ textDecoration: 'none', color:'#168d63' }}>
                            증상 답변
                          </Typography>
                          {Answer ? 
                          (
                            <>
                              {Answer && Answer.map((answer) => (
                                <Box sx={{ width: '100%'}}>
                                  <Paper elevation={3} style={{overflowWrap: 'break-word'}}>
                                    <Link to={`${location.pathname}/answerlist/${answer.id}`} style={{ textDecoration: 'none', color:'black' }}>
                                      <Typography variant="h4" gutterBottom component="div" padding="20px 30px">
                                        {answer.content}
                                      </Typography>
                                    </Link>
                                  </Paper>
                                </Box>
                              ))}
                            </>
                          )
                          :
                          (
                            <>
                              <Box sx={{ width: '100%'}}>
                                <Paper elevation={3} style={{overflowWrap: 'break-word'}}>
                                  <Typography variant="h4" gutterBottom component="div" padding="20px 30px">
                                    답변이 없습니다.
                                  </Typography>
                                </Paper>
                              </Box>
                            </>
                          )
                          }                    
                        </Grid>

                        <Grid item xs={12} align="center">
                          <Link to={`${location.pathname}/answer`} style={{ textDecoration: 'none' }}>
                            <Button 
                            style={{fontSize: "40px", textTransform: "none", width: "50%", height: "100px" }} 
                            variant="success">
                              답변 작성
                            </Button>
                          </Link>
                        </Grid>

                      </Grid>
                    </Container>
                </Wrapper>
            </div>
        </>
      );
}