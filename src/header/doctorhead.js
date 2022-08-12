import axios  from "axios";
import React, { Component, useEffect, useState,useRef } from "react";
import { useParams,Link, useNavigate, } from "react-router-dom";
import { Card,Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from "../body";
import { toast } from "react-toastify";
import IdleTimer from "react-idle-timer";
import Modal from 'react-modal';
import RemoveCookie from "../componenets/removecookie";
import image from '../logo.png';

Modal.setAppElement('#root')


export default function DoctorHead(){
  const [loggedin,setLogged]=useState(true)
  const [modal,setmodal]=useState(false)
  const [modlas,setmodlas]=useState(false)
  const handleClose=()=>setmodlas(false);
const handleshow=()=>setmodlas(true)


  const idle=useRef(null)
  const idletimeref=useRef(null)
  const sesstimeout=useRef(null)

 
 
  const {id} =useParams()
  const[items,setItems]=useState([])
  const navigate=useNavigate()
 
    
  useEffect(()=>{
    axios.get(`http://localhost:8001/getdoctors/${id}`).then((resp)=>setItems({...resp.data[0]}))
    
     
  },[]);
  const idli=()=>{
    toast.error("You Are Idle")
    setmodal(true)
   sesstimeout.current=setTimeout(logout,50000000000000000)
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
                      <IdleTimer ref={idletimeref} timeout={5*10000000000000000} onIdle={idli}></IdleTimer>
                      <Modal isOpen={modal}>
                        <h2> You are Idle For Long Time</h2>
                        <div>
                          <button className="btn btn-success" onClick={stayActive}>Stay Active</button>
                          <button className="btn btn-danger" onClick={logout}>Logout</button>
                        </div>
                      </Modal>
                    </div>
                    <div>
                  <Modal isOpen={modlas} shouldCloseOnOverlayClick={false} onRequestClose={()=>setmodlas(false)} style={{
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
    content: {
      position: 'absolute',
      top: '40px',
      left: '40px',
      right: '40px',
      bottom: '40px',
      border: '1px solid #ccc',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px'
    }
  }}>
                    <div className="conatiner-fluid">
                      
                      <h1 align='center'>Doctor Profile</h1>
                      <br /><br />
                     <h1 >Doctor Id: {items.DoctorID}</h1> 
                     <h2>Doctor name:{items.DoctorName}</h2> 
                      <h2>Contact no: {items.ContactNo}</h2>
                     <h2>Email: {items.Email_ID}</h2> 
                      <h2>Address: {items.Address}</h2>

                    </div>
                    <div className="conatiner">
                      <button className="btn btn-outline-danger" onClick={()=>setmodlas(false)}>Close</button>
                    </div>

                  </Modal>
                    </div>
      
            <div>
            
    <div class="container d-flex align-items-center">

      <a href="index.html" class="logo me-auto"><img src={image} alt="" /></a>
      
      

      <nav id="navbar" class="navbar ">

        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
     
      
      <button className="btn btn-danger" onClick={logout} >Logout</button> &nbsp;
      
      <Link to={`/docpatient/${items.DoctorID}`}> 
     <button className="appointment-btn scrollto">View Patient List</button>
      </Link> <br />
      <button className="appointment-btn scrollto" onClick={handleshow} >View profile</button>

  
      

      

      

    </div>
  
             
              
              
        
  
  <section id="hero">
           
        
                
              <div className="carousel-item active" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL
          + "/slide2.png"})`
      
    }} >
         
                  <div class="container">
               
              
                   
                        <h1> Welcome Dr.{items.DoctorName}</h1>
                   
                      

               
        
        
                </div>
        
              </div>
        

        
            
          </section>
         
          <Body />
  </div>
  </div>
        )
    }
