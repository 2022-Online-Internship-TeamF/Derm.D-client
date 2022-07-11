import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link, Route, BrowserRouter } from "react-router-dom";
import logo from "../images/Logo.png";
import Button from "react-bootstrap/Button";
import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import userEvent from "@testing-library/user-event";
import "./topbar.css";

export default function Topbar() {
  const useGetData = () => {
    const [auth, setAuth] = useState("");

    useEffect(() => {
      if (localStorage.getItem("token") !== null) {
        setAuth(true);
      } else {
        setAuth(false);
      }
    }, [localStorage.getItem("token")]);

    const onLogoutHandler = async () => {
      const postUrl = "http://localhost:8000/auth/logout";
      const postValue = {
        quit: true,
      };
      await axios
        .post(postUrl, postValue, {
          headers: {
            Authorization: `JWT ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          if (response.data.status == "success") {
            alert(response.data.message);
            setAuth(false);
            localStorage.clear();
          } else {
            alert(response.data.message);
          }
        });
    };

    return {
      auth,
      onLogoutHandler,
    };
  };

  const { auth, onLogoutHandler } = useGetData();

  return (
    <div className="top">
      <div className="topLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            width="400px"
            height="100px"
            classname="camture"
            src={logo}
            alt="wrapkit"
          />
        </Link>
      </div>
      <div className="topCenter">
        {/* <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul> */}
      </div>
      <div className="topRight">
        {auth ? (
          <>
            <div>
              {" "}
              <Link
                to="/"
                onClick={onLogoutHandler}
                style={{ textDecoration: "none" }}
              >
                {/* 
                  <Button 
                    style={{fontSize: "20px", textTransform: "none", padding: "20px 40px" }} 
                    variant="outlined">
                      로그아웃
                  </Button>
                  */}
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="topListItem">
              <Link to="/Login" style={{ textDecoration: "none" }}>
                <Button variant="outline-success" size="lg">
                  로그인
                </Button>{" "}
                {/*  
                <Button 
                  style={{ fontSize: "20px", textTransform: "none", padding: "20px 40px" }} 
                  variant="outlined" >
                    로그인
                </Button>
                */}
              </Link>
            </div>
            <div className="topListItem">
              <Link to="/Signup" style={{ textDecoration: "none" }}>
                <Button variant="outline-success" size="lg">
                  회원가입
                </Button>{" "}
                {/* 
                <Button 
                  style={{fontSize: "20px", textTransform: "none", padding: "20px 40px" }} 
                  variant="outlined">
                    회원가입
                </Button>
                */}
              </Link>
            </div>
          </>
        )}
        {/* {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )} */}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
