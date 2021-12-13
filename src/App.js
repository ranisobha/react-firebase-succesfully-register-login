import React,{useState} from 'react';
import './App.css';
import { createUserWithEmailAndPassword ,
   onAuthStateChanged, signInWithEmailAndPassword, signOut } from '@firebase/auth';
import "react-toastify/dist/ReactToastify.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {auth} from './config/fire';

function App() {

  
  const [registerPassword,setRegisterPassword] =useState('')
  const [registerEmail,setRegisterEmail] = useState("")
  const [loginEmail,setloginEmail]= useState("");
  const [loginPassword,setLoginPassword] = useState("")


  const [user,setuser] = useState({})

  onAuthStateChanged(auth,(currentUser) => {
    setuser(currentUser)
  })

  const register = async () =>{
    try {
      const user = await createUserWithEmailAndPassword(
        auth,registerEmail,registerPassword
      );
      console.log(user)
    }catch(error){
      console.log(error.message)
    }
  }
  const login = async () =>{
    try {
      const users = await signInWithEmailAndPassword(
        auth,loginEmail,loginPassword
      );
      console.log(users)
    }catch(error){
      console.log(error.message)
    }
  }

  const logout = async () =>{
    await signOut(auth)
  }
    
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">   
        <h3>Register User</h3>
        <input type="text" placeholder="Email..." onChange={(e)=>setRegisterEmail(e.target.value)} />
        <input type="text" placeholder="PAssword..." onChange={(e)=>setRegisterPassword(e.target.value)} />
        <button onClick={register}>CreateUser</button>
        </div>
        <div className="col-md-4"> 
        <h3>Login User</h3>
        <input type="text" placeholder="Email..." onChange={(e)=>setloginEmail(e.target.value)} />
        <input type="text" placeholder="PAssword..." onChange={(e)=>setLoginPassword(e.target.value)} />
        <button onClick={login}>LoginUser</button>
      </div>
      </div>
      <h1>User Logged in: </h1>
      {user?.email}
      <button onClick={logout}> Signout</button>
    </div>
    
  );

  }
export default App;
