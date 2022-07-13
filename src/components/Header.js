import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link} from "react-router-dom";
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
  flex: 100;
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
    const [auth, setAuth] = useState("");
    
    useEffect(() => {
      if (localStorage.getItem('token') !== null){
        setAuth(true);
      }
      else {
        setAuth(false);
      }
    }, [localStorage.getItem('token')])
    
    const onLogoutHandler = async () => {
      const postUrl = "http://localhost:8000/auth/logout";
      const postValue = {
        quit: true,
      }
      await axios.post(postUrl, postValue, {
        headers: {
          'Authorization' : `JWT ${localStorage.getItem("token")}`,
        }
      })
      .then((response) => {
        if(response.data.status == "success"){
          alert(response.data.message);
          setAuth(false);
          localStorage.clear();
        }
        else{
          alert(response.data.message);
        }
      })
    }

    return {
      auth,
      onLogoutHandler,
    }
  }

  const { auth, onLogoutHandler } = useGetData();
     
    return (
      <>
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
              {auth ? 
              <>
                //get 사용해서 받아와야 될듯?
                안녕하세요 (유저네임 변수)님! 
                <TopListItem>
                <Link to="/" onClick={onLogoutHandler} style={{ textDecoration: 'none' }}>
                  <Button 
                    style={{fontSize: "20px", textTransform: "none", padding: "20px 40px" }} 
                    variant="success">
                      로그아웃
                  </Button>
                </Link>
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
