import React,{Component} from "react";
import Contact from "./contact";
export default class Body extends Component{
    render(){
        return(
            <main id="main">

   
            <section id="featured-services" class="featured-services">
              <div class="container" data-aos="fade-up">
        
                <div class="row">
                  <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                      <div class="icon"><i class="fas fa-heartbeat"></i></div>
                      <h4 class="title"><a href="/getHospi">Book Appointment</a></h4>
                      <p class="description">Book Appointment in any Hospital</p>
                    </div>
                  </div>
        
                  <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                      <div class="icon"><i class="fas fa-pills"></i></div>
                      <h4 class="title"><a href="/login">View Prescription</a></h4>
                      <p class="description">View your Prescription anytime </p>
                    </div>
                  </div>
        
                  <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
                      <div class="icon"><i class="fas fa-thermometer"></i></div>
                      <h4 class="title"><a href="/login">Book a Lab Test</a></h4>
                      <p class="description">Book a lab test anytime anywhere at any location </p>
                    </div>
                  </div>
        
                  <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
                      <div class="icon"><i class="fas fa-dna"></i></div>
                      <h4 class="title"><a href="/login">View Lab Report</a></h4>
                      <p class="description">View lab report anytime without visiting the lab</p>
                    </div>
                  </div>
        
                </div>
        
              </div>
            </section>
        
            
        
        
            
            <section id="about" class="about">
              <div class="container" data-aos="fade-up">
        
                <div class="section-title">
                  <h2>About Us</h2>
                  <p>We believe healthcare should be personalised,accesible and coordinated .
                    At our website, we provide a centralised file system so that patients can book an appointment and they don't need to carry the patient file during their every visit. If the reports and files of a patient is has been lost they can download it from the database. This way they can also view thier Lab Reports online They can also search for nearby Hospitals Based on the State they are.Not only this, our website can also be useful for maintaining patient record history and doctor record.</p>
                </div>
        
                <div class="row">
                  <div class="col-lg-6" data-aos="fade-right">
                    <img src="assets/img/about2.jpg" class="img-fluid" alt="" />
                  </div>
                  <div class="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left">
                    <h3>We focus on Patients health. We want to provide a carefree work for all </h3>
                    <p class="fst-italic">
                      we want to create a carefree environment where everyone focus on their work without worry for other things.
                    </p>
                    <ul>
                      <li><i class="bi bi-check-circle"></i> Focus on Patients.</li>
                      <li><i class="bi bi-check-circle"></i> Care free Work</li>
                      <li><i class="bi bi-check-circle"></i> Less physical interaction and focus on work </li>
                    </ul>
                    <p>

                    </p>
                  </div>
                </div>
        
              </div>
            </section>
        
            
            <section id="counts" class="counts">
              <div class="container" data-aos="fade-up">
        
                <div class="row no-gutters">
        
                  <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                    <div class="count-box">
                      <i class="fas fa-user-md"></i>
                      <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1" class="purecounter"></span>
        
                      <p align="center"><strong>Doctors</strong> Reviews</p>
                      <a href="#">Find out more &raquo;</a>
                    </div>
                  </div>
        
                  <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                    <div class="count-box">
                      <i class="far fa-hospital"></i>
                      <span data-purecounter-start="0" data-purecounter-end="26" data-purecounter-duration="1" class="purecounter"></span>
                      <p align="center"><strong>Departments</strong> Reviews </p>
                      <a href="#">Find out more &raquo;</a>
                    </div>
                  </div>
        
                  <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                    <div class="count-box">
                      <i class="fas fa-flask"></i>
                      <span data-purecounter-start="0" data-purecounter-end="14" data-purecounter-duration="1" class="purecounter"></span>
                      <p align="center"><strong>Research Lab</strong> reviews </p>
                      <a href="#">Find out more &raquo;</a>
                    </div>
                  </div>
        
                  <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                    <div class="count-box">
                      <i class="fas fa-award"></i>
                      <span data-purecounter-start="0" data-purecounter-end="150" data-purecounter-duration="1" class="purecounter"></span>
                      <p align="center">Our <strong>Awards</strong> </p>
                      <a href="#">Find out more &raquo;</a>
                    </div>
                  </div>
        
                </div>
        
              </div>
            </section>
            
            <section id="features" class="features">
              <div class="container" data-aos="fade-up">
        
                <div class="row">
                  <div class="col-lg-6 order-2 order-lg-1" data-aos="fade-right">
                    <div class="icon-box mt-5 mt-lg-0">
                      <i class="bx bx-receipt"></i>
                      <h4>Lab Reports</h4>
                      <p> Provides lab reports instant without visiting the lab </p>
                    </div>
                    <div class="icon-box mt-5">
                      <i class="bx bx-cube-alt"></i>
                      <h4>Different Lab Appointments</h4>
                      <p>We provide different Lab appointment facility </p>
                    </div>
                    <div class="icon-box mt-5">
                      <i class="bx bx-images"></i>
                      <h4>Reduce Paper heap </h4>
                      <p>Helps to reduce hideous Paper heap</p>
                    </div>
                    <div class="icon-box mt-5">
                      <i class="bx bx-shield"></i>
                      <h4>Less Writing work</h4>
                      <p>Helps to reduce PaperWork</p>
                    </div>
                  </div>
                  <div class="image col-lg-6 order-1 order-lg-2" style={{
                      backgroundImage: 'url("assets/img/features.jpg")'}} data-aos="zoom-in"
                      ></div>
                </div>
        
              </div>
            </section>
        
            
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
        
           

        
           

        
            
            <section id="testimonials" class="testimonials">
              <div class="container" data-aos="fade-up">
        
                <div class="section-title">
                  <h2>Testimonials</h2>
                  <p>Our Reviews</p>
                </div>
        
                <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                  <div class="swiper-wrapper">
        
                    <div class="swiper-slide">
                      <div class="testimonial-item">
                        <p>
                          <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                          I need to remember my Id only. and
                          <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                        <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="" />
                        <h3>Saul Goodman</h3>
                        <h4>Medicio User</h4>
                      </div>
                    </div>
        
                    <div class="swiper-slide">
                      <div class="testimonial-item">
                        <p>
                          <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                          Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                          <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                        <img src="assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt="" />
                        <h3>Sara Wilsson</h3>
                        <h4>Designer</h4>
                      </div>
                    </div>
        
                    <div class="swiper-slide">
                      <div class="testimonial-item">
                        <p>
                          <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                          Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                          <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                        <img src="assets/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt="" />
                        <h3>Jena Karlis</h3>
                        <h4>Store Owner</h4>
                      </div>
                    </div>
        
                    <div class="swiper-slide">
                      <div class="testimonial-item">
                        <p>
                          <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                          Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                          <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                        <img src="assets/img/testimonials/testimonials-4.jpg" class="testimonial-img" alt="" />
                        <h3>Matt Brandon</h3>
                        <h4>Freelancer</h4>
                      </div>
                    </div>
        
                    <div class="swiper-slide">
                      <div class="testimonial-item">
                        <p>
                          <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                          Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                          <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                        <img src="assets/img/testimonials/testimonials-5.jpg" class="testimonial-img" alt="" />
                        <h3>John Larson</h3>
                        <h4>Entrepreneur</h4>
                      </div>
                    </div>
        
                  </div>
                  <div class="swiper-pagination"></div>
                </div>
        
              </div>
            </section>
        
            

        
        
        
        
        
           
            <section id="faq" class="faq section-bg">
              <div class="container" data-aos="fade-up">
        
                <div class="section-title">
                  <h2>Frequently Asked Questioins</h2>
                  <p>Below given are some of the frequently asked questions that are mostly asked by new users on first time visiting the website</p>
                </div>
        
                <ul class="faq-list">
        
                  <li>
                    <div data-bs-toggle="collapse" class="collapsed question" href="#faq1">What is Medicio? <i class="bi bi-chevron-down icon-show"></i><i class="bi bi-chevron-up icon-close"></i></div>
                    <div id="faq1" class="collapse" data-bs-parent=".faq-list">
                      <p>
                        Medicio is a web app that takes different Patients Case Details and stores it in a Database so that there are no chances of it getting lost and the patient can view his Case Details at any time he wants too

                      </p>
                    </div>
                  </li>
        
                  <li>
                    <div data-bs-toggle="collapse" href="#faq2" class="collapsed question">Does Medicio Stores Patient all medical History? <i class="bi bi-chevron-down icon-show"></i><i class="bi bi-chevron-up icon-close"></i></div>
                    <div id="faq2" class="collapse" data-bs-parent=".faq-list">
                      <p>
                        Yes it stores all Your Patient History
                      </p>
                    </div>
                  </li>
        
                  <li>
                    <div data-bs-toggle="collapse" href="#faq3" class="collapsed question">Is Medicio Helpful in Current Scenario ? <i class="bi bi-chevron-down icon-show"></i><i class="bi bi-chevron-up icon-close"></i></div>
                    <div id="faq3" class="collapse" data-bs-parent=".faq-list">
                      <p>
                        Yes. As Medicio Provide Paperless documents,it reduce  hand contact.
                      </p>
                    </div>
                  </li>
        
                  <li>
                    <div data-bs-toggle="collapse" href="#faq4" class="collapsed question">Does Medicio provide patientlist according to specific hospital? <i class="bi bi-chevron-down icon-show"></i><i class="bi bi-chevron-up icon-close"></i></div>
                    <div id="faq4" class="collapse" data-bs-parent=".faq-list">
                      <p>
                        Yes , it provide patientlist according to the specific hospital.
                      </p>
                    </div>
                  </li>
        
                  <li>
                    <div data-bs-toggle="collapse" href="#faq5" class="collapsed question">Does Medicio reduce paperwork for all the user? <i class="bi bi-chevron-down icon-show"></i><i class="bi bi-chevron-up icon-close"></i></div>
                    <div id="faq5" class="collapse" data-bs-parent=".faq-list">
                      <p>
                        Medicio helps to reduce paperwork as it store all data in database.
                      </p>
                    </div>
                  </li>
        

        
                </ul>
        
              </div>
            </section>
        
            
           <Contact />
        
          </main>
        )
    }
}