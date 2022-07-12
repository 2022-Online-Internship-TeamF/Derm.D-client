import React, { useState } from "react";
import Header from "../components/Header"
import Card from 'react-bootstrap/Card'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import styled from "styled-components";
import {Link} from "react-router-dom";
import { Field, Form, Formik } from "formik";
import BootstrapForm from "react-bootstrap/Form";

const MaterialForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

const Formimsi = styled.form`
    display: flex;
    flex-direction: column;
    background-color: rgb(253, 253, 245);
    padding: 32px;
    min-width: 1000px;
    border-radius: 8px;
    margin: 32px;
`;


export default function Question(){
    return (
        <MaterialForm>
            <Header/>
            <Formik>
            {() => (
                <Formimsi>
                <TextField
                    id="standard-textarea"
                    label="제목"
                    placeholder="제목을 입력하세요."
                    multiline
                    variant="standard"
                />
                <Box height={20} />
                <TextField
                    id="filled-multiline-static"
                    label="내용"
                    multiline
                    minRows={20}
                    placeholder="질문하고 싶은 질환에 대해 적으세요."
                    variant="filled"
                />
                <Box height={20} />
                <BootstrapForm.Group controlId="formFile" className="mb-3">
                    <BootstrapForm.Label>사진을 입력하세요</BootstrapForm.Label>
                    <BootstrapForm.Control type="file" />
                </BootstrapForm.Group>
                <Box height={30} />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                >
                    작성 완료!
                </Button>
                </Formimsi>
            )}
            </Formik>
      </MaterialForm>
    );
}