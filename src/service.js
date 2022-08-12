import React,{Component} from "react";
export default class Service extends Component{
    render(){
        return(
            
            <section id="services" class="services services">
              <div class="container" data-aos="fade-up">
        
                <div class="section-title">
                  <h2> Our Services</h2>
                  <p>We Offers these Services for everyone</p>
                </div>
        
                <div class="row">
                  <div class="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="100">
                    <div class="icon"><i class="fas fa-heartbeat"></i></div>
                    <h4 class="title"><a href="">Quick Support</a></h4>
                    <p class="description">We provide Quick Support for Everyone</p>
                  </div>
                  <div class="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="200">
                    <div class="icon"><i class="fas fa-pills"></i></div>
                    <h4 class="title"><a href="">Paperless Prescription</a></h4>
                    <p class="description">Minimise work load and paperless work</p>
                  </div>
                  <div class="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="300">
                    <div class="icon"><i class="fas fa-hospital-user"></i></div>
                    <h4 class="title"><a href="">Find  Hospital Quickly </a></h4>
                    <p class="description">Find your suitable Hospital for best Treatment</p>
                  </div>
                  <div class="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="100">
                    <div class="icon"><i class="fas fa-dna"></i></div>
                    <h4 class="title"><a href="">Lab Services</a></h4>
                    <p class="description">Best lab locations and reports near you</p>
                  </div>
                  <div class="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="200">
                    <div class="icon"><i class="fas fa-wheelchair"></i></div>
                    <h4 class="title"><a href="">Hospital facility </a></h4>
                    <p class="description">A carefree faculty</p>
                  </div>
                  <div class="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="300">
                    <div class="icon"><i class="fas fa-notes-medical"></i></div>
                    <h4 class="title"><a href="">Less Paper Management</a></h4>
                    <p class="description">We focus on everyone person </p>
                  </div>
                </div>
        
              </div>
            </section>
        )
    }
}
