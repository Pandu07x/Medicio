import React, { Component,useState,useEffect,useRef } from "react";
import { Link,useHistory,useNavigate,useParams } from "react-router-dom";
import axios from "axios";
import { Card,Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../logo.png';
import img from '../7536.jpg'
import IdleTimer from "react-idle-timer";
import Modal from 'react-modal';
import { toast } from "react-toastify";
import RemoveCookie from "../componenets/removecookie";




export default function Pathead (){
  const[login,setLogin]=useState()
  const[items,setItems]=useState('')
  const [loggedin,setLogged]=useState(true)
  const [modal,setmodal]=useState(false)
  const [modlas,setmodlas]=useState(false)

  const idle=useRef(null)
  const idletimeref=useRef(null)
  const sesstimeout=useRef(null)
  const navigate=useNavigate('')
 
  const {id}=useParams();

  useEffect(()=>{
    axios.get(`http://localhost:8001/getProfile/${id}`).then((resp)=>setItems({...resp.data[0]}))
   
    
   
},[id]);

const idli=()=>{
  toast.error("You Are Idle")
  setmodal(true)
 sesstimeout.current=setTimeout(logout,500000000000000000000000000000000000)
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
const handleClose=()=>setmodlas(false);
const handleshow=()=>setmodlas(true)



  
  
  
  
    
        return(
            <div>
                            <div>
                      <IdleTimer ref={idletimeref} timeout={5*100000000000} onIdle={idli}></IdleTimer>
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
                    overlay:{
                      
                     
                    },
                    content:{
                      backgroundImage:{img}
                     
                    }

                  }}>
                    <div className="conatiner-fluid">
                      
                      <h1 align='center'>Patient Profile</h1>
                      <br /><br />
                     <h1 >Patient Id: {items.PatientId}</h1> 
                     <h2>Patient name:{items.PatientName}</h2> 
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
      
      

      
      
     
     
      <button  className="btn btn-danger" onClick={logout}>Logout</button>
      <Link to={`/getinfo/${items.PatientId}`}>
      <button className="appointment-btn scrollto">View Case History</button>
      </Link>
      <Link to={`/viewreport/${items.PatientId}`}>
      <button className="appointment-btn scrollto">View Lab Report</button>
      </Link>
      <Link to={`/appointment/${items.PatientId}`}>
      <button className="appointment-btn scrollto">View Last appointment</button>
      </Link>
      <button className="appointment-btn scrollto" onClick={handleshow} >View profile</button>

      

      

    </div>
 
  <section id="hero">
  
          
        
                
              <div className="carousel-item active" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL
          + "/7536.jpg"})`
      
    }} >
                  <div class="container">
                      <h1>{items.PatientName}</h1>

                 
        
        
                </div>
        
              </div>
        
            
          </section>
          </div> </div>
        )
    }
