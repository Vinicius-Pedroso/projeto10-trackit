import React from 'react';
import styled from 'styled-components';

export default function Header() {
    return (
        <>
            <Headerr>
                <h1>TrackIt</h1>
                <img src="/public/img/logo.png" />
            </Headerr>
        </>
    );
}

const Headerr = styled.div`
    padding-left: 5%;
    padding-right: 5%;
    width: 90%;
    height: 70px;
    background-color: #126BA5;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        height: 51px;
        width: 51px;
    }
    h1{
        font-size: 39px;
        color: white;
        font-family: 'Playball';
    }
`