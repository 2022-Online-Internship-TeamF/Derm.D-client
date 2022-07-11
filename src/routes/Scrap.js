import React, { useState } from "react";
import Header from "../components/Header"
import Card from 'react-bootstrap/Card'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from "styled-components";
import {Link} from "react-router-dom";

const Studyresult = styled.div`
    height: auto;
    width: 80%;
    margin:0 auto;
    border-radius: 0px;
`;

const Content = styled.div`
    position: relative;
    top: 105px;
`;

const PaddingUp = styled.div`
    padding:100px;
`;

export default function Scrap(){
    return (
        <>
            <div>
                <Header />
                <PaddingUp></PaddingUp>
                <Studyresult className="lightest boxShadow">
                    <Grid container spacing={4}>
                        <Grid item xs={3}>
                            <Card style={{ width: '25rem' }}>
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <Card.Img variant="top" src="https://source.unsplash.com/1000x1000/?food" />
                            </Link>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card style={{ width: '25rem' }}>
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <Card.Img variant="top" src="https://source.unsplash.com/1000x1000/?food" />
                            </Link>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card style={{ width: '25rem' }}>
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <Card.Img variant="top" src="https://source.unsplash.com/1000x1000/?food" />
                            </Link>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card style={{ width: '25rem' }}>
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <Card.Img variant="top" src="https://source.unsplash.com/1000x1000/?food" />
                            </Link>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card style={{ width: '25rem' }}>
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <Card.Img variant="top" src="https://source.unsplash.com/1000x1000/?food" />
                            </Link>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card style={{ width: '25rem' }}>
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <Card.Img variant="top" src="https://source.unsplash.com/1000x1000/?food" />
                            </Link>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card style={{ width: '25rem' }}>
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <Card.Img variant="top" src="https://source.unsplash.com/1000x1000/?food" />
                            </Link>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card style={{ width: '25rem' }}>
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <Card.Img variant="top" src="https://source.unsplash.com/1000x1000/?food" />
                            </Link>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Grid>
                    </Grid>
                </Studyresult>
            </div>
        </>
    );
}