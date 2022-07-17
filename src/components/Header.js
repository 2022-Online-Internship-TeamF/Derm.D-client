import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Popup from '../components/Popup'
import { Link, useNavigate} from "react-router-dom";
import logo from "../images/Logo.png";
import Button from 'react-bootstrap/Button'

const Logo = styled.span`
    margin-top: 20px;
    margin-left: 30px;
    display: flex;
`;

const Top = styled.div`
  width: 100%;
  height: 120px;
  background-color: white;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  z-index: 999;
`;

const TopLeft = styled.div`
  flex: 110;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TopRight = styled.div`
  flex: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const TopCenter = styled.div`
  flex: 6;
`;

const TopListItem = styled.div`
  margin-right: 20px;
`;

const Line = styled.hr`
  height: 12px;
  border: 0;
  box-shadow: inset 0 12px 12px -12px rgba(0, 0, 0, 0.5);
`;

function Header(){
  const useGetData = () => {
    const [popup, setPopup] = useState({open: false, title: "", message: "", callback: false});
    const [authTokens, setAuthTokens] = useState("");
    
    useEffect(() => {
      if (localStorage.getItem('token') !== null){
        setAuthTokens(true);
      }
      else {
        setAuthTokens(false);
      }
    }, [localStorage.getItem('token')])

    useEffect(() => {
      const fourMinutes = 1000 * 60 * 4

      const interval = setInterval(()=> {
        if(authTokens){
          updateToken()
        }
      }, fourMinutes)
      return ()=> clearInterval(interval)
    }, [authTokens])

    const updateToken = async ()=> {
      const postUrl = "/members/refresh/";
      const postValue = {
        refresh : localStorage.getItem('token'),
      }
      await axios.post(postUrl, postValue)
      .then((response) => {
        if(response.data.status == 205){
          localStorage.setItem("token", response.data.refresh);
        }
        else{
          onLogoutHandler();
        }
      }).catch(function(error){
        console.log(error);
      });
    }

    const onLogoutHandler = async (event) => {
      event.preventDefault()

      const postUrl = "/members/logout/";
      const postValue = {
        quit: true,
      }
      await axios.post(postUrl, postValue)
      .then((response) => {
        if(response.data.status == 205){
          setPopup({open: true, title: "성공!", message: (response.data.message), callback: function(){
            navigate("/",{replace:true});
          }});
          setAuthTokens(false);
          localStorage.clear();
        }
        else if(response.data.status == 400){
          setPopup({open: true, title: "실패!", message: (response.data.message), callback: function(){
            navigate("/",{replace:true});
          }});
        }
      }).catch(function(error){
        console.log(error);
      });
    }

    return {
      authTokens,
      onLogoutHandler,
      popup,
      setPopup,
    }
  }

  const username = localStorage.getItem('username');
  const navigate = useNavigate();
  const { authTokens, onLogoutHandler, popup, setPopup } = useGetData();
     
    return (
      <>
        <Popup open = {popup.open} setPopup = {setPopup} title = {popup.title} message = {popup.message} callback = {popup.callback}/>
        <Top>
        <TopLeft>
            <Logo>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <img width="400px" height="100px" classname="Homedoc" src={logo} alt="wrapkit" />
                </Link>
            </Logo>
        </TopLeft>
        <TopCenter/>
        <TopRight>
              {authTokens ? 
              <>
              <TopListItem> 안녕하세요 {username}님! </TopListItem>    
              <TopListItem>
                <Link to="/Scrap" style={{ textDecoration: 'none' }}>
                  <Button 
                    style={{fontSize: "20px", textTransform: "none", padding: "20px 30px" }} 
                    variant="outline-success">
                    MY 스크랩
                  </Button>
                </Link>
              </TopListItem>          
              <TopListItem>
                <Button 
                  style={{fontSize: "20px", textTransform: "none", padding: "20px 40px" }} 
                  variant="outline-success"
                  onClick={onLogoutHandler}>
                    로그아웃
                </Button>
              </TopListItem>
              </>
              :
              <>
              <TopListItem>
                <Link to="/Login" style={{ textDecoration: 'none' }}>
                  <Button 
                    style={{ fontSize: "20px", textTransform: "none", padding: "20px 40px" }} 
                    variant="outline-success" >
                      로그인
                  </Button>
                </Link>
              </TopListItem>
              <TopListItem>
                <Link to="/Signup" style={{ textDecoration: 'none' }}>
                  <Button 
                    style={{fontSize: "20px", textTransform: "none", padding: "20px 40px" }} 
                    variant="outline-success">
                      회원가입
                  </Button>
                </Link>
              </TopListItem>
              </>
              }
        </TopRight>
      </Top> 
      <Line />
      </>
    );
  }

export default Header
