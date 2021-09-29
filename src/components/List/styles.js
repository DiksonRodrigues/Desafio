import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 90%;

    margin-right: 5%;
    margin-left: 5%;
    
    background: #fff;
     
    border: 1px solid #121212;


    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

    > li {
        display: flex;
        width: 250px;

        flex-direction: column;
        align-items: center;

        border: 1px solid #121212;
        border-radius: 10px;

        margin: 15px 15px 0px 15px;

        list-style: none;

        > h1 {
            font-family: sans-serif;
            font-size: 1.3rem;
            color: #121212;

            padding-top: 10px;
        }

        > h2 {
            font-family: sans-serif;
            font-size: 1.3rem;
            padding-top: 10px;
        }


        > img {
            width: 225px;
            height: 225px;
            border-radius: 10px;
        }

        > button {
            width: 90%;
            height: 50px;
            border-radius: 10px;
            background: #035FB3;
            margin: 10px 5% 5% 5%;

            color: #fff;
            font-size: 1.2rem;
            font-family: sans-serif;
            
            cursor: pointer;

            &:hover {
                opacity: 50%;
            }
            ;
        }
    }
`;
