import React, { useState, useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from "styled-components";
import logo from "../images/Logo.png";
import axios from "axios";
import { Link, useNavigate} from "react-router-dom";

const Logo = styled.span`
    margin-top: 20px;
    margin-left: 30px;
    display: flex;
`;

const theme = createTheme();

export default function Signup() {
  const useGetData = () => {
    const [account, setAccount] = useState({
        id: "",
        email: "",
        password: "",
        confirmpassword: "",
    });

    const onAccountHandler = (event) => {
      setAccount({
          ...account,
          [event.target.name]: event.target.value,
      });
  }

    const postData = async () => {
      const postUrl = "http://localhost:8000/auth/signup";
      const postValue = {
          id: account.id,
          email: account.email,
          password: account.password,
      }
      await axios.post(postUrl, postValue)  //then부분부터는 약간 얘기를 해봐야할듯?
      .then((response) => {
          if (response.data.status == "success") {
              localStorage.clear();
              localStorage.setItem("token", response.data.auth_token);
              alert(response.data.message);
              navigate("/login",{replace:true});
          }
          else if (response.data.status == "fail"){
              alert(response.data.message);
          }
      });
  }

  //이게 handleSignup역할을 함
  const onSubmit = (event) => {
    event.preventDefault()
    //잘 등록 되는지 콘솔로 확인
    const data = new FormData(event.currentTarget);
    console.log({
      ID: data.get('id'),
      email: data.get('email'),
      password: data.get('password'),
    });
    // 위 주석부터 여기까지 나중에 지울 예정
    if(account.password !== account.confirmpassword) {
      return alert('비밀번호와 비밀번호확인은 같아야 합니다.')
    }
    else if(!(account.id && account.email && account.password && account.confirmpassword)){
      return alert('전부 다 입력하셔야 합니다.')
    }
    /*
    else if(name === ){ //프론트에서 아이디 주면 백엔드에서 처리해서 에러 주기
      return alert('이미 존재하는 아이디입니다.')
    }
    else{
      postData();
    }
    */
  }

  return{
    onAccountHandler,
    onSubmit,
  }
  }

  const navigate = useNavigate();
  const { onAccountHandler, onSubmit } = useGetData();

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
        navigate("/",{replace:true});
    } 
}, []);

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/1500x1300/?Reading)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 15,
            mx: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} >
            <PersonIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            회원가입
          </Typography>
          <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 3 }}>
            <FormControl component="fieldset" variant="standard">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField 
                    required
                    fullWidth
                    id="id"
                    label="아이디"
                    name="id"
                    type="id"
                    autoFocus
                    onChange={onAccountHandler}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    type="email"
                    id="email"
                    name="email"
                    label="이메일 주소"
                    onChange={onAccountHandler}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    type="password"
                    id="password"
                    name="password"
                    label="비밀번호"
                    onChange={onAccountHandler}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    type="password"
                    id="confirmpassword"
                    name="confirmpassword"
                    label="비밀번호 확인"
                    onChange={onAccountHandler}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                size="large">
                회원가입
              </Button>
            </FormControl>
            </Box>
            <Logo>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <img width="400px" height="120px" classname="camture" src={logo} alt="wrapkit" />
                </Link>
            </Logo>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};