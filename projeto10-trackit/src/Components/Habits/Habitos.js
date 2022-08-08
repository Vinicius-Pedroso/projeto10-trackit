import React from 'react';
import styled from 'styled-components';
import Habitopronto from './Habitopronto';

export default function Habitos({setParte}) {
    return (
        <>
            <Divtemp>
                <span>
                    <p>Meus hábitos</p>
                    <Plus onClick={() => setParte(1)}>+</Plus>
                </span>
            </Divtemp>
            {/*<Habitopronto/>*/}
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