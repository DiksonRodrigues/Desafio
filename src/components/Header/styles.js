import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 90%;

    margin-top: 5%;
    margin-right: 5%;
    margin-left: 5%;

    border: 1px solid #121212;
    border-radius: 10px 10px 0px 0px;
    
    flex-direction: column;
`;

export const ContainerTitle = styled.div`
    display: flex;
    width: 100%;
    height: 100px;

    justify-content: center;
    align-items: center;

    > h1 {
        color: #121212;
        font-family: sans-serif;
        font-weight: 700;
        font-size: 3.0rem;
    }
`;

export const ContainerItens = styled.div`
    display: flex;
    width: 100%;
    height: 100px;

    align-items: center;
    justify-content: space-between;


    > a {
        color: #035FB3;

        font-family: sans-serif;
        font-weight: bold;
        font-size: 1.6rem;
        text-decoration: none;

        padding: 0px 20px 0px 20px;

        &:hover{
            cursor: pointer;
            transform: translateY(-5px);
            
        }
    }
`;

export const TextLink = styled.h1`
    color: #035FB3;

    font-family: sans-serif;
    font-weight: bold;
    font-size: 1.6rem;
    text-decoration: none;
`;
