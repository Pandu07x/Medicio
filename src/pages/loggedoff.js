import React,{Component, useEffect} from "react";

import disableBrowserBackButton from 'disable-browser-back-navigation';
export default function  Logged() {
  useEffect(()=>{
   const   preventBack=()=> {window.history.forward();}
    setTimeout("preventBack()", 0); 

  })
    
        return(
            <section id="hero">
            <div id="heroCarousel" data-bs-interval="5000" class="carousel slide carousel-fade" data-bs-ride="carousel">
        
              <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>
        
              <div class="carousel-inner" role="listbox">
        
                
                <div class="carousel-item active" style={{
                  backgroundImage: 'url(assets/img/slide/slide1.jpg)'
              }}>
                  <div class="container">
                  <h1>You Have Logged Successfully </h1>
                  <br></br>
                  <a href="/login" className="appointment-btn scrollto">Back To login</a>
                      <a href="/" className="appointment-btn scrollto">Back To Home</a>
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
