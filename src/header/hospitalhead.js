import axios  from "axios";
import React, { Component, useEffect, useState,useRef } from "react";
import { useParams,Link, useNavigate } from "react-router-dom";
import { Card,Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from "../body";
import RemoveCookie from "../componenets/removecookie";
import image from '../logo.png';
import IdleTimer from "react-idle-timer";
import Modal from 'react-modal';
import { toast } from "react-toastify";


export default function HospitalHead(){
  const {id} =useParams()
  const [loggedin,setLogged]=useState(true)
  const [modal,setmodal]=useState(false)

  const idle=useRef(null)
  const idletimeref=useRef(null)
  const sesstimeout=useRef(null)
  const navigate=useNavigate('')
  const[items,setItems]=useState([])
    
  useEffect(()=>{
    axios.get(`http://localhost:8001/getprofiles/${id}`).then((resp)=>setItems({...resp.data[0]}))
    console.log(items)
     
  },[]);

  const idli=()=>{
    toast.error("You Are Idle")
    setmodal(true)
   sesstimeout.current=setTimeout(logout,5000000000000)
    console.log(sesstimeout.current)
}
const stayActive=()=>{
  toast.success("You Are back")
  setmodal(false)
  clearTimeout(sesstimeout.current)
  
}

  const logout=()=>{
    setmodal(false)
    setLogged(false)
    clearTimeout(sesstimeout.current)
    
     RemoveCookie('usrin')
     
    navigate('/logged')
  }

  
  
  
  
  
  
    
        return(
            <div>
                          <div>
                      <IdleTimer ref={idletimeref} timeout={5*1000000000000} onIdle={idli}></IdleTimer>
                      <Modal isOpen={modal}>
                        <h2> You are Idle For Long Time</h2>
                        <div>
                          <button className="btn btn-success" onClick={stayActive}>Stay Active</button>
                          <button className="btn btn-danger" onClick={logout}>Logout</button>
                        </div>
                      </Modal>
                    </div>
               
    <div class="container d-flex align-items-center">

      <a href="index.html" class="logo me-auto"><img src={image} alt="" /></a>
      
      

      <nav id="navbar" class="navbar navbar-dark bg-dark">

        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
     
 
      &nbsp;&nbsp;
      <button className="btn btn-danger" onClick={logout}>Logout</button>
 
      <Link to={`/getpatient/${items.id}`}> 
     <button className="appointment-btn scrollto">View Patient List</button>
      </Link> <br />
      <Link to={`/hospappoint/${items.id}`}>
      <button className="appointment-btn scrollto">View  appointment List</button>
      </Link>
   

      <Link to={`/empget/${items.id}`}> 
     <button className="appointment-btn scrollto">View Employeee List</button>
      </Link> <br />
      

      

      

    </div>

              
              
             
  
  <section id="hero">
           
        
             
        
              <div class="carousel-inner" role="listbox">
        
                
                <div className="carousel-item active" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL
          + "/doc.jpg"})`
      
    }} >
                  <div  class="container text-center">
                   
                        <h1> Welcome {items.name}</h1>
                        <br></br>
                       



                   
                      

                  
                </div>
        
        
                </div>
        
              </div>
        
         
        
            
          </section>
          <Body />
  </div>
        )
    }
