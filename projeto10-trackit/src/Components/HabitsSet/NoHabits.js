import React from 'react';
import styled from 'styled-components';

export default function NoHabits() {
    return (
        <>
        <Blip>
            <h1>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h1>
        </Blip>
        </>
    );
}

const Blip = styled.div`
    h1 {
    margin-bottom:120px;
    padding-left: 5%;
    margin-top: 20px;
    font-size: 18px;
    color: #666666;
    font-family: 'Lexend Deca';
}
`