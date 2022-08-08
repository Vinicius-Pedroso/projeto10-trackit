import React from 'react';
import styled from 'styled-components';
import { sign_Up } from './APIfunctions';
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sign({}) {

    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const [name, setName] = useState("");
	const [image, setImage] = useState("");

    return (
        <Container>
            <div>
                <img src="/projeto10-trackit\public\img\logo.png" />
                <Boxinfo type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}>
                </Boxinfo>
                <Boxinfo input type="text" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)}>
                </Boxinfo>
                <Boxinfo type="text" placeholder="nome" value={name} onChange={e => setName(e.target.value)}>
                </Boxinfo>
                <Boxinfo input type="text" placeholder="foto" value={image} onChange={e => setImage(e.target.value)}>
                </Boxinfo>
                <Enter onClick={sign_Up}>
                    <p >Cadastrar</p>
                </Enter>
                <h1 >
                <Link to="/">Já tem uma conta? Faça login!</Link>
                </h1>
            </div>
        </Container>
    );
}

const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    width: 100%;
    height: 100vh;

    img {
        margin-left: 15%;
        width: 180px;
        height: 200px;
    }

    p {
        size: 20px;
        font-family: 'Lexend Deca';
    }

    h1 {
        margin-top: 15px;
        size: 14px;
        font-family: 'Lexend Deca';
        color: #52B6FF;
        text-decoration: underline;
    }
`
const Boxinfo = styled.input`
    display: block;
    margin-top: 5%;
    height: 45px;
    width: 300px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;

    ::placeholder {
        font-size: 20px;
        color: #dbdbdb;
        font-family: 'Lexend Deca';
    }
`

const Enter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
    height: 45px;
    width: 300px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    background-color: #52B6FF;
    border-color: #52B6FF;
    color: white;
`