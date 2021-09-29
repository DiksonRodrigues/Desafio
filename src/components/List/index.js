import React,{useState,useEffect} from 'react';
import api from '../../services/api';
import firebase from '../../firebaseConnection';

import
{
Container,
ContainerProduto,
} from './styles';

export default function List() {

    let userlogin = localStorage.getItem('id');
    const [produtos,setProdutos] =useState([]);

    useEffect(() => {
        async function apiget() {
            const response = await api.get(`produtos`);
            setProdutos(response.data)
            console.log(produtos)
        }
        apiget();
        
    },[]);

    const addproduto = async (produto) => {
        console.log(produto)

        await firebase.firestore().collection(userlogin)
        .doc()
        .set({
            nome: produto.Nome,
            preco: produto.Price,
            img: produto.img
        })
        .then(()=>{
            alert(`voce adicionou ${produto.Nome} em seus favoritos`)
      })
    }

    return(
        <Container>
            {produtos.map(produto =>(
                <li>
                    <h1>{produto.Nome}</h1>
                        <h2>R$:{produto.Price}</h2>
                    <img src={produto.img}/>
                    <button onClick={() => addproduto(produto)}>Adicionar favorito</button>
                </li>
            ))}  
        </Container>
    )
}