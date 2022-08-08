import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Footer() {

    const percentage = 66;

    return (
        <>
            <Wrapper>
                <Foot>
                    <p><Link to="/Habit">Hábito</Link></p>
                    <p><Link to="/Historic">Histórico</Link></p>
                </Foot>
                <Footimg>
                    <Link to="/Today">
                        <CircularProgressbar value={percentage} text={`${percentage}%`} />;
                    </Link>
                </Footimg>
            </Wrapper>

        </>
    );
}

const Wrapper = styled.div`
    margin-top: 80px;
`

const Foot = styled.div`
    bottom: 0px;
    position: fixed;
    width: 90%;
    height: 70px;
    padding-left: 5%;
    padding-right: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
        padding-top: 18px;
        font-size: 18px;
        color: #52B6FF;
        font-family: 'Lexend Deca';
    }
`

const Footimg = styled.div`
    width: 85%;
    bottom: 10px;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        height: 91px;
        width: 91px;
    }
`