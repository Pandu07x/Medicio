import React,{Component, useState} from "react";
import  axios  from "axios";
import { Link,useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SetCookie from "../componenets/setcookie";
import RemoveCookie from "../componenets/removecookie";
toast.configure()

export default function Docloginss(){
  const [items,setItems]=useState('')
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  
  const navigate=useNavigate()
  
  
    const login=()=>{
      axios.post("http://localhost:8001/doclogins",{
          uname:username,
          pass:password

      }).then((res)=>{
        setItems(res.data[0])
          if(res.data.length>0){
            RemoveCookie('usrin')
              const id=res.data[0].id
              SetCookie('usrin',JSON.stringify(id))
              navigate(`/dochead/${id}`)
             

            
              
          }
          else{
              setItems('')
              toast.error("Invalid UserName/Password",{position: toast.POSITION.TOP_CENTER});
          }
      })
    }
        return(
            <section id="hero">
            <div id="heroCarousel" data-bs-interval="5000" class="carousel slide carousel-fade" data-bs-ride="carousel">
        
              <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>
        
              <div class="carousel-inner" role="listbox">
        
                
                <div class="carousel-item active" style={{
                  backgroundImage: 'url(assets/img/slide/slide1.jpg)'
              }}>
                  <div class="container">
                    <h1>Welcome To Hospital Login</h1>
                 
                  
                    <p></p>
                    
         <label>Enter your name:
           <input type="text" name="uname" placeholder=" Enter Username" className="form-control" style={{width:"300px"}} onChange={((e)=>setUsername(e.target.value))} />
         </label>
         <p></p>
         <label>Enter your Password:
           <input type="password" placeholder="Enter Password"  className="form-control" style={{color:"red", width:"300px"}} name='pass' onChange={((e)=>setPassword(e.target.value))} />
         </label>
         <p></p>
         <br></br>
         <button  class="btn btn-success" onClick={login} >Submit</button>
         <br></br>
        
         <br></br>
       
        
        
      
                  </div>
                 
                </div>
        
        
                </div>
        
              </div>
        
              <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
              </a>
        
              <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
              </a>
        
            
          </section>

          
        )

    }
