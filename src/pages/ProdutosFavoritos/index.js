import React from 'react';
import Header from '../../components/Header';
import ListFavorites from '../../components/ListFavories';
import Login from '../Login';

import
{
ContainerView
} from './styles';

export default function ProdutosFavoritos() {
    let userlogin = localStorage.getItem('id');

    return(
        <ContainerView>
            {userlogin != null ? (
                <>
                <Header/>
                <ListFavorites/>
                </>
            ):(
               <Login/> 
            )
            }
        </ContainerView>
    )
}