import React,{useState} from 'react';
import firebase from '../../firebaseConnection';

import
{
Container,
ContainerLogin,
ContainerRegister
} from './styles';

export default function Login() {
    const [register,setRegister] = useState(false);
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');

    const handlename = (e) => {
        setName(e.target.value)
    };

    const handleemail = (e) => {
        setEmail(e.target.value)
    };


    const handlepassword = (e) => {
        setPassword(e.target.value)
    };

    const handlebutton = () => {
        if(register == false){
            setRegister(true)
        }
        if(register == true){
            setRegister(false
                )
        }
    };

    async function newUser(){
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( async (value)=>{
          
          await firebase.firestore().collection('users')
          .doc(value.user.uid)
          .set({
            nome: name,
          })
          .then(()=>{
            localStorage.setItem('id',value.user.uid)
            alert('Conta criada')
            window.location.reload();
            setName('');
            setEmail('');
            setPassword('');
          })
    
    
        })
        .catch((error)=>{ 
          if(error.code === 'auth/weak-password'){
            alert('Senha muito fraca..')
          }else if(error.code === 'auth/email-already-in-use'){
            alert('Esse email já existe!');
          }
    
        })
    
    
      }

    async function login(){
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(async (value)=>{
          await firebase.firestore().collection('users')
          .doc(value.user.uid)
          .get()
          .then((snapshot)=>{
            localStorage.setItem('id',value.user.uid)
            alert('Usuario logado')
            window.location.reload();
            setEmail('');
            setPassword('');
          })
    
    
        })
        .catch((error)=>{
          console.log('ERRO AO LOGAR' + error)
        })
    
      }

    return(
        <Container>
            {register ? (
                <ContainerRegister>
                <h1>Registrar</h1>
                <h2>Você ja tem uma conta ?<a onClick={() => setRegister(false)}>Entrar</a></h2>
                    <input value={name} onChange={handlename} placeholder="Nome: seu nome"/>
                    <input value={email} onChange={handleemail} placeholder="Email: emailteste@teste.com"/>
                    <input value={password} onChange={handlepassword} placeholder="Senha: *********"/>
                <button onClick={ newUser }>
                    <h1>Registrar</h1>
                </button>
                </ContainerRegister>
            ): (
                <ContainerLogin>
                <h1>Entrar</h1>
                <h2>Você não tem uma conta ?<a onClick={() => setRegister(true)}>Registre-se</a></h2>
                <input value={email} onChange={handleemail} placeholder="emailteste@teste.com"/>
                <input value={password} onChange={handlepassword} placeholder="*********"/>
                <button onClick={ login }>
                    <h1>Entrar</h1>
                </button>
                </ContainerLogin>
                
            )}
        </Container>
    )
}