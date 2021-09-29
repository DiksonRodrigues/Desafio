import React,{useState, useEffect} from 'react';
import Header from '../../components/Header';
import List from '../../components/List';
import api from '../../services/api';
import Login from '../Login';

import
{
Container,
} from './styles';

export default function Home() {
    const [user,setUser] = useState('');
    let userlogin = localStorage.getItem('id');


    return(
        <Container>
            {userlogin != null ? (
                <>
                <Header/>
                <List/>
                </>
            ):(
               <Login/> 
            )
            }
        </Container>
    )
}