import React,{Component} from "react";
import Body from "../body";
export default class SelectLogin extends Component{
    render(){
        return(
            <section id="hero">
            <div id="heroCarousel" data-bs-interval="5000" class="carousel slide carousel-fade" data-bs-ride="carousel">
        
              <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>
        
              <div class="carousel-inner" role="listbox">
        
                
                <div class="carousel-item active" style={{
                  backgroundImage: 'url(assets/img/slide/slide1.jpg)'
              }}>
                  <div class="container">
                  <h1>Please Select Users  </h1>
                  <br></br>
                  
                  <a href="/doclogin" className="btn btn-outline-info">Hospital Login</a> &nbsp;
                 <a href="/lablogin" className="btn btn-outline-info">Lab Login</a>  &nbsp;
                  <a href="/doctorlogin" className="btn btn-outline-info">Doctor Login</a> &nbsp;
                  <a href="/patlogin" className="btn btn-outline-info">Patient Login</a> 
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
}