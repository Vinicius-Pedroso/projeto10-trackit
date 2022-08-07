import { useState } from "react";
import React from 'react';
import styled from 'styled-components';
//Por favor, funciona useState
export default function Habitosdias({setTemhabitos}) {
    const [Domingo, setDomingo] = useState(false)
    const [Segunda, setSegunda] = useState(false)
    const [Terca, setTerca] = useState(false)
    const [Quarta, setQuarta] = useState(false)
    const [Quinta, setQuinta] = useState(false)
    const [Sexta, setSexta] = useState(false)
    const [Sabado, setSabado] = useState(false)
    return (
        <>
            <Boxinfo type="text" placeholder="Nome do hábito">
            </Boxinfo>
            <Dias>
                {!Domingo && <Dia onClick={() => setDomingo(!Domingo)}>D</Dia>}
                {Domingo && <DiaS onClick={() => setDomingo(!Domingo)}>D</DiaS>}
                {!Segunda && <Dia onClick={() => setSegunda(!SegundasetSegunda)}>S</Dia>}
                {Segunda && <DiaS onClick={() => setSegunda(!SegundasetSegunda)}>S</DiaS>}
                {!Terca && <Dia onClick={() => setTerca(!Terca)}>T</Dia>}
                {Terca && <DiaS onClick={() => setTerca(!Terca)}>T</DiaS>}
                {!Quarta && <Dia onClick={() => setQuarta(!Quarta)}>Q</Dia>}
                {Quarta && <DiaS onClick={() => setQuarta(!Quarta)}>Q</DiaS>}
                {!Quinta && <Dia onClick={() => setQuinta(!Quinta)}>Q</Dia>}
                {Quinta && <DiaS onClick={() => setQuinta(!Quinta)}>Q</DiaS>}
                {!Sexta && <Dia onClick={() => setSexta(!Sexta)}>S</Dia>}
                {Sexta && <DiaS onClick={() => setSexta(!Sexta)}>S</DiaS>}
                {!Sabado && <Dia onClick={() => setSabado(!Sabado)}>S</Dia>}
                {Sabado && <DiaS onClick={() => setSabado(!Sabado)}>S</DiaS>}
            </Dias>
            <Salvar>
                <p>Cancelar</p>
                <Plus onClick={() => setTemhabitos(false)}>Salvar</Plus>
            </Salvar>
        </>
    );
}

const Boxinfo = styled.button`
    margin-left: 5%;
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
const DiaS = styled.div`
    margin-left: 4px;
    width: 30px;
    height: 30px;
    border: 1px solid;
    border-radius: 5px;
    font-size: 20px;
    font-family: 'Lexend Deca';
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #CFCFCF;
    color: white;
    border-color: #CFCFCF;
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
