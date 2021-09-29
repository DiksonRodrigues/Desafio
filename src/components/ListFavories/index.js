import React,{useState,useEffect} from 'react';
import api from '../../services/api';
import firebase from '../../firebaseConnection';

import
{
Container,
ContainerProduto,
} from './styles';

export default function ListFavorites() {
    let userlogin = localStorage.getItem('id');
    const [favoritos,setFavoritos] = useState([]);

    useEffect(() => {
        const getanuncios = async () => {
            await firebase.firestore()
              .collection(userlogin)
              .get()
              .then((querySnapshot) => {
                let favoritosarray = []
                querySnapshot.forEach((doc) => {
                    favoritosarray.push({
                      id: doc.id,
                      nome: doc.data().nome,
                      preco: doc.data().preco,
                      img: doc.data().img,
  
                    })
                })
                setFavoritos(favoritosarray)
              })
              .catch((e) => {
                console.log("error" + e)
              })
          }

          getanuncios();
    }, [])
    console.log(favoritos)
        
    return(
        <Container>
          {favoritos.length > 0 ? (
            favoritos.map(value => (
                <li key={value.id}>
                    <h1>{value.nome}</h1>
                        <h2>R$:{value.preco}</h2>
                    <img src={value.img}/>
                </li>
            ))
          ) : <h1>Voce ainda nao tem nenhum post</h1>}
            
            
        </Container>
    )
}