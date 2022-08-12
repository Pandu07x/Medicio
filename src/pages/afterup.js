import axios from "axios";
import React,{Component, useEffect, useState} from "react";
import { useNavigate, useParams,Link } from "react-router-dom";
export default function Afterup (){
    const {id}=useParams
    const navigate=useNavigate()
    const [item,setItems]=useState('')

    useEffect(()=>{
        axios.get(`http://localhost:8001/getprofiles/${id}`).then((resp)=>setItems({...resp.data[0]}))
       
        
       
    },[id]);

    const clicks=()=>{
        navigate(`/labreq/${id}`)
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
                  <h1>You Have Uploaded Sucessfully </h1>
                  <br></br>
                    <Link to={`/labreq/${item.id}`}> 
                     <button className="appointment-btn scrollto">Back To list</button>
                    </Link> <br />
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
