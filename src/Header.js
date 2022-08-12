import React, {Component} from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";


export default class Header extends Component{
  


    render(){
        return(
       
        

          <div>
     
            
            
            <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">

      <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" /></a>
      
      

      <nav id="navbar" class="navbar order-last order-lg-0">
        
        <ul>
                  <li><a class="nav-link scrollto " href="#hero">Home</a></li>
                  <li><a class="nav-link scrollto" href="#about">About</a></li>
                  <li><a class="nav-link scrollto" href="#services">Services</a></li>
                  <li><a class="nav-link scrollto" href="#departments">Departments</a></li>
                  <li><a class="nav-link scrollto" href="#doctors">Doctors</a></li>
                  <li><a class="nav-link scrollto" href="#drop">Drop</a></li>
                   
                
                  <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
                </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
     
      <a href="/Regi" className="appointment-btn scrollto">Register Yourself</a>
      

      

      

    </div>
  </header>
  </div>

        )
    }
}