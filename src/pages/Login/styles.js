import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    
    background: gray;
    
    justify-content: center;
    align-items: center;

    padding: 50px;
`;

export const ContainerLogin = styled.div`
    display: flex;
    width: 600px;
    height: 600px;
    
    background: #fff;

    border-radius: 10px;

    flex-direction: column;
    align-items: center;

    > h1 {
        padding-top: 25px;

        font-family: sans-serif;
        font-size: bold;
        font-size: 2.6rem;
    }

    > h2 {
        color: gray;

        padding-top: 60px;

        font-family: sans-serif;
        font-size: 1.5rem;

        > a {
            color: #121212;
            cursor: pointer;

            font-family: sans-serif;
            font-size: 1.5rem;

            padding-left: 10px;

            &:hover {
                color: #035FB3;
            }
        }
    }


    > input {
        display: flex;
        width: 90%;
        height: 55px;

        padding: 10px;
        margin-top: 60px;

        border: 1px solid #000;
        border-radius: 5px;

        font-size: 1.2rem;
        font-family: sans-serif;
        
    }

    > button {
        cursor: pointer;
        width: 90%;
        height: 70px;
        
        background: #035FB3;

        margin-top: 100px;

        border-radius: 10px;

        > h1 {
            font-family: sans-serif;
            color: #fff;
        }
    }
`;

export const ContainerRegister = styled.div`
    display: flex;
    width: 600px;
    height: 600px;

    background: #fff;
    
    border-radius: 10px;

    flex-direction: column;
    align-items: center;

    > h1 {
        padding-top: 25px;

        font-family: sans-serif;
        font-size: bold;
        font-size: 2.6rem;
    }

    > h2 {
        color: gray;
        padding-top: 30px;

        font-family: sans-serif;
        font-size: 1.5rem;

        > a {
            color: #121212;
            cursor: pointer;

            font-family: sans-serif;
            font-size: 1.5rem;

            padding-left: 10px;

            &:hover {
                color: #035FB3;
            }
        }
    }


    > input {
        display: flex;
        width: 90%;
        height: 55px;

        padding: 10px;
        margin-top: 30px;

        border: 1px solid #000;
        border-radius: 5px;
        outline: 0;

        font-size: 1.2rem;
        font-family: sans-serif;
        
    }

    > button {
        cursor: pointer;
        width: 90%;
        height: 70px;

        background: #035FB3;

        margin-top: 100px;

        border-radius: 10px;

        &:hover{
            opacity: 85%;
        }

        > h1 {
            font-family: sans-serif;
            color: #fff;
        }
    }
`;