import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { listHabit } from '../APIfunctions';
import { useState, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import NoHabits from './NoHabits';
import HabitReady from './HabitReady';

export default function Habits() {

    const [habitsList, setHabitsList] = useState([]);

    useEffect(() => {
        listHabit().then((res) => setHabitsList(res.data));
    }, []);

    console.log(habitsList);

    return (
        <>
            <Header />
            <Divtemp>
                <span>
                    <p>Meus hábitos</p>
                    <Plus ><Link to="/MakeHabit">+</Link></Plus>
                </span>
                {(habitsList === null) && <NoHabits />}
                {(habitsList !== null) && <HabitReady />}
            </Divtemp>
            <Footer />
        </>
    );
}

const Divtemp = styled.div`

    span {
        padding-left: 5%;
        padding-top: 30px;
        width: 90%;
        display: flex;
        justify-content: space-between;
    }
    p {
        color: #126BA5;
        font-size: 23px;
        font-family: 'Lexend Deca';
    }
`

const Plus = styled.button`
    width: 40px;
    height: 35px;
    background-color: #52B6FF;
    color: white;
    font-size: 27px;
    border: 1px none;
    border-radius: 5px;
`