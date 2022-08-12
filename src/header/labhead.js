import React, { Component,useState,useEffect,useRef } from "react";
import { Link,useHistory,useNavigate,useParams } from "react-router-dom";
import axios from "axios";
import { Card,Button } from "react-bootstrap";
import Body from "../body";
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../logo.png';
import RemoveCookie from "../componenets/removecookie";
import IdleTimer from "react-idle-timer";
import Modal from 'react-modal';
import { toast } from "react-toastify";




export default function Labhead (){
  const[login,setLogin]=useState()
  const[items,setItems]=useState('')
  const navigate=useNavigate('')
  const [loggedin,setLogged]=useState(true)
  const [modal,setmodal]=useState(false)

  const idle=useRef(null)
  const idletimeref=useRef(null)
  const sesstimeout=useRef(null)
 
  const {id}=useParams();

  useEffect(()=>{
    axios.get(`http://localhost:8001/getprofiles/${id}`).then((resp)=>setItems({...resp.data[0]}))
   
    
   
},[id]);

const onclic=()=>{
  navigate(`/labForm/${id}`)

}
const idli=()=>{
  toast.error("You Are Idle")
  setmodal(true)
 sesstimeout.current=setTimeout(logout,5000000000000000000000000000)
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

      <a  class="logo me-auto"><img src={image} alt="" /></a>
      
      

      <nav id="navbar" class="navbar order-last order-lg-0">
  
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
     
  
      <button onClick={logout} className="btn btn-danger">Logout</button>
      <Link to={`/labreq/${items.id}`}> 
     <button className="appointment-btn scrollto">View Patient List</button>
      </Link> <br />
      <Link to={`/uploadhis/${items.id}`}> 
     <button className="appointment-btn scrollto">View History</button>
      </Link> <br />
     


      

      

    </div>
  
  <section id="hero">
   
        
                
              <div className="carousel-item active" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL
          + "/6997.jpg"})`
      
    }} >
                  <div class="container">
                      <h1> Welcome {items.name} Laboratory</h1>

                  </div>
                </div>
        
        
              
        
              
        
              <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
              </a>
        
              <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
              </a>
        
            
          </section>
          <Body />
  </div>
  </div>
        )
    }
