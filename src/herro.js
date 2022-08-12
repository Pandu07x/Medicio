import React,{Component} from "react";
import Body from "./body";
export default class Herosss extends Component{
    render(){
        return(
            <div>
                        <header id="header">
    <div class="container d-flex align-items-center">

      <a href="/" class="logo me-auto"><img src="assets/img/logo.png" alt="" /></a>
      
      

      <nav id="navbar" class="navbar order-last order-lg-0">
        
        <ul>
                  <li><a class="nav-link scrollto " href="#hero">Home</a></li>
                  <li><a class="nav-link scrollto" href="#about">About</a></li>
                  <li><a class="nav-link scrollto" href="#services">Services</a></li>
                  <li><a class="nav-link scrollto" href="#departments">Departments</a></li>

                  
                   
                
                  <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
                </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <a href="/getHospi" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span> Appointment</a>
      <a href="/select" className="appointment-btn scrollto">Regsister Yourself</a>
      <a href="/login" className="appointment-btn scrollto">Login</a>
      

      

      

    </div>
  </header>
  <section id="hero">
            <div id="heroCarousel" data-bs-interval="5000" class="carousel slide carousel-fade" data-bs-ride="carousel">
        
              <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>
        
              <div class="carousel-inner" role="listbox">
        
                
                <div class="carousel-item active" style={{
                  backgroundImage: 'url(assets/img/slide/slide1.jpg)'
              }}>
                  <div class="container text-center">
                 <h1>Welcome To Medicio</h1>
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
          <Body />

            </div>

        )
    }}