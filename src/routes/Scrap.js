import React, {useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header"
import Popup from '../components/Popup'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Carousel from 'react-bootstrap/Carousel';
import styled from "styled-components";
import {Link} from "react-router-dom";

const Scrapitem = styled.div`
    height: auto;
    width: 70%;
    margin:0 auto;
    border-radius: 0px;
    margin-bottom : 50px;
`;

export default function Scrap(){
  const useGetData = () => {
    const [popup, setPopup] = useState({open: false, title: "", message: "", callback: false});
    const [ListScrap, setListScrap] = useState("");
    const [ScrapId, setScrapId] = useState("");

    const getListScrap = async () => {
      const postUrl = "/user/archive";
      await axios.get(postUrl)
      .then((response) => {
        setListScrap(response.data);
        console.log(response.data);
        console.log("성공");
      }).catch(function(error){
        console.log(error);
      });
    }
    
    
    const setScrapname = (value) => {
      setScrapId(value);
      //setTimeout(()=> console.log("after",3000))
      console.log(ScrapId);

      if(ScrapId){
        deleteScrap();
      }
    }
    

    const deleteScrap = async () => {
      const postUrl = `/user/archive/${ScrapId}`;
      await axios.delete(postUrl)
      .then((response) => {
        setPopup({open: true, title: "성공!", message: "스크랩이 삭제되었습니다!"});
        setScrapId(null);
        getListScrap();
        console.log("삭제 성공");
      }).catch(function(error){
        console.log(error);
      });
    }

    useEffect(()=>{
      getListScrap()
    },[]);

    return {
      ListScrap,
      popup,
      setPopup,
      setScrapname,
    }
  }
  
  const { ListScrap, popup, setPopup, setScrapname } = useGetData();


    return (
      <>
          <div>
            <Popup open = {popup.open} setPopup = {setPopup} title = {popup.title} message = {popup.message} callback = {popup.callback}/>

              <Header />
              <br /><br /><br /><br /><br />
              <Scrapitem>
                  <Container maxWidth={"false"}>
                      <Typography variant="h2" gutterBottom component="div" align="left" style={{ textDecoration: 'none', color:'#168d63' }}>
                        스크랩 기록
                      </Typography>
                      <br />
                      <Grid container spacing={8} >
                          {ListScrap && ListScrap.map((scrap) => (
                              <Grid item xl={3} lg={6} sm={12}>
                                  <Card border='dark'>                                    
                                    <Link to={`/infodisease/${scrap.eng_name}`} style={{ textDecoration: 'none', color:'black'}}>
                                      <Card.Img variant="top" src={scrap.condition_conditionmedia[0].img}/>
                                    </Link>
                                      <Card.Body align='center'>
                                        <Link to={`/infodisease/${scrap.eng_name}`} style={{ textDecoration: 'none', color:'black'}}>
                                          <Card.Title style={{ fontSize:'30px'}}>{scrap.kr_name}</Card.Title>
                                        </Link>
                                        <br/>
                                          <Button
                                            style={{fontSize: "25px", textTransform: "none", padding: "10px 60px" }}
                                            variant="danger" 
                                            align-item="center"
                                            onClick={() => setScrapname(`${scrap.eng_name}`)}
                                            >
                                            삭제
                                          </Button>    
                                      </Card.Body>                                                                          
                                  </Card>                                    
                              </Grid>
                          ))}
                      </Grid>
                  </Container>
              </Scrapitem>
          </div>
      </>
  );
}