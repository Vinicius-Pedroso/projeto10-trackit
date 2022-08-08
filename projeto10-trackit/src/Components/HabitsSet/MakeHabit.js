import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';

export default function MakeHabit() {
    return (
        <>
            <Header />
                <Feitohabito>
                    <Flexx>
                        <h1>Nome do hábito</h1>
                        <ion-icon name="trash-outline"></ion-icon>
                    </Flexx>
                    <Dias>
                        <Dia>D</Dia>
                        <Dia>S</Dia>
                        <Dia>T</Dia>
                        <Dia>Q</Dia>
                        <Dia>Q</Dia>
                        <Dia>S</Dia>
                        <Dia>S</Dia>
                    </Dias>
                    <Salvar>
                        <p>Cancelar</p>
                        <Plus >Salvar</Plus>
                </Salvar>
                </Feitohabito>
            <Footer />
        </>
    );
}

const Feitohabito = styled.div`
    padding-top: 10px;
    display: block;
    justify-content: center;
    align-items: center;
    margin-bottom:120px;
    
    h1{
        size: 20px;
        font-family: 'Lexend Deca';
        color: #666666;
    }
`

const Flexx = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 5%;
    padding-right: 5%;
    ion-icon {
        width: 23px;
        height: 25px;
    }
`

const Dias = styled.div`
    margin-top: 15px;
    margin-left: 5%;
    display: flex;
`
const Dia = styled.button`
    margin-left: 4px;
    width: 30px;
    height: 30px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    color: #DBDBDB;
    font-size: 20px;
    font-family: 'Lexend Deca';
    display: flex;
    justify-content: center;
    align-items: center;
`
const Salvar = styled.div`
    margin-right: 5%;
    margin-left: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p{
        padding-top: 18px;
        font-size: 18px;
        color: #52B6FF;
        font-family: 'Lexend Deca';
    }
`

const Plus = styled.button`
    background-color: #52B6FF;
    color: white;
    border: 1px none;
    border-radius: 5px;
    margin-top: 20px;
    font-size: 16px;
    height: 35px;
    width: 84px;
`
