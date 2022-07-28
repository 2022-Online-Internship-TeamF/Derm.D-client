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
  const useGetData = () => { 
    const [popup, setPopup] = useState({open: false, title: "", message: "", callback: false});
    const [Answer, setAnswer] = useState("");
    const [AnswerImage, setAnswerImage] = useState("");
    const {diseaseid, qnaid, answerid} = useParams();
    const navigate = useNavigate();

    const getAnswer = async () => {
      const postUrl = `/condition/${diseaseid}/question/${qnaid}/answer/${answerid}`;
      await axios.get(postUrl)
      .then((response) => {
        setAnswer(response.data);
        setAnswerImage(response.data.answer_answermedia);
        console.log(response.data);
        console.log("특정 답변 가져오기 성공");
      }).catch(function(error){
        console.log(error);
      });
    }

    const deleteAnswer = async () => {
      const postUrl = `/condition/${diseaseid}/question/${qnaid}/answer/${answerid}`;
      await axios.delete(postUrl)
      .then((response) => {
        setPopup({open: true, title: "성공!", message: "답변을 삭제하였습니다!", callback: function(){
          navigate(`/infodisease/${diseaseid}/qna/${qnaid}`,{replace:true});
        }}); 
        console.log("답변 삭제 성공");
      }).catch(function(error){
        setPopup({open: true, title: "실패!", message: "삭제 권한이 없습니다!"});
        console.log(error);
      });
    }
    
    useEffect(()=>{
      getAnswer()
    },[]);

    return {
      popup,
      setPopup,
      Answer,
      deleteAnswer,
      AnswerImage,
      answerid,
    }
  }

  const location = useLocation();
  const {popup, setPopup, Answer, deleteAnswer, AnswerImage, answerid } = useGetData();
  

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
                                증상 답변
                          </Typography>
                          <Box sx={{ width: '100%'}}>
                            <Paper elevation={3} style={{overflowWrap: 'break-word'}}>
                              {/* 
                              <Grid container spacing={1}>
                                <Grid item xs={6}>
                                <Typography variant="h6" component="div" padding="10px 20px">
                                  생성일자 : {Answer.created_at}
                                </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                <Typography variant="h6" component="div" padding="10px 10px">
                                  수정일자 : {Answer.modified_at}
                                </Typography>
                                </Grid>
                              </Grid>
                              <hr/>
                              */}
                              <Typography variant="h4" gutterBottom component="div" padding="10px 20px">
                                {Answer.content}
                              </Typography>
                            </Paper>
                            <Box sx={{ width: '50%'}}>
                                <Carousel>
                                  {AnswerImage && AnswerImage.map((imageitem) => (
                                    <Carousel.Item>
                                      <img
                                        className="d-block w-100"
                                        src={imageitem.img}
                                        height="400px"
                                      />
                                    </Carousel.Item>
                                  ))}
                                </Carousel>
                            </Box>
                          </Box>
                        </Grid>

                        <Grid item xs={6}>
                          <Link to={`${location.pathname}/../../answer/${answerid}`} style={{ textDecoration: 'none' }}>
                            <Button 
                            style={{fontSize: "40px", textTransform: "none", width: "100%", height: "100px" }} 
                            variant="success"
                            >
                              답변 수정
                            </Button>
                          </Link>
                        </Grid>
                        <Grid item xs={6}>
                          <Button 
                          style={{fontSize: "40px", textTransform: "none", width: "100%", height: "100px" }} 
                          variant="danger"
                          onClick={deleteAnswer}
                          >
                            답변 삭제
                          </Button>
                        </Grid>
                      </Grid>
                    </Container>
                </Wrapper>
            </div>
        </>
      );
}