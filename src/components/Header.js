import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link, Route, BrowserRouter} from "react-router-dom";
import logo from "../images/Logo.png";
import Button from 'react-bootstrap/Button'
import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import userEvent from "@testing-library/user-event";

const Logo = styled.span`
    margin-top: 20px;
    margin-left: 30px;
    display: flex;
`;

const HeaderUp = styled.header`
  position: relative;
  width: 100%;
  font-weight: 600;
`;

const Nav = styled.span`
  float: right;
  margin-right: 100px;
  margin-top: -90px;
`;

const Right = styled.span`
  float: right;
  margin-right: 50px;
  margin-left: 50px;
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
        <HeaderUp className="headerContainer">
        <div className="headerleft">
            <Logo>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <img width="400px" height="100px" classname="camture" src={logo} alt="wrapkit" />
                </Link>
            </Logo>
        </div>
        <div className="headeritem">
            <Nav className="headerright">
              {auth ? 
              <>
              <div> //get 사용해서 받아와야 될듯?
                안녕하세요 (유저네임 변수)님! 
              <Right>
                <Link to="/" onClick={onLogoutHandler} style={{ textDecoration: 'none' }}>
                  <Button 
                    style={{fontSize: "20px", textTransform: "none", padding: "20px 40px" }} 
                    variant="success">
                      로그아웃
                  </Button>
                </Link>
              </Right>
              </div>
              </>
              :
              <>
              <Link to="/Login" style={{ textDecoration: 'none' }}>
                <Button 
                  style={{ fontSize: "20px", textTransform: "none", padding: "20px 40px" }} 
                  variant="outline-success" >
                    로그인
                </Button>
              </Link>
              <Right>
              <Link to="/Signup" style={{ textDecoration: 'none' }}>
                <Button 
                  style={{fontSize: "20px", textTransform: "none", padding: "20px 40px" }} 
                  variant="outline-success">
                    회원가입
                </Button>
              </Link>
              </Right>
              </>
              }
            </Nav>
        </div>
      </HeaderUp>
    );
  }

export default Header
