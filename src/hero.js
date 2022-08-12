import React,{Component} from "react";
export default class Hero extends Component{
    render(){
        return(
          <div>
          <div>
          <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">

      <a href="/" class="logo me-auto"><img src="assets/img/logo.png" alt="" /></a>
      
      

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
     
      <a href="/select" className="appointment-btn scrollto">Regsister Yourself</a>
      <a href="/login" className="appointment-btn scrollto">Login</a>
      

      

      

    </div>
  </header>
          </div>
         

   
          <section id="featured-services" class="featured-services">
            <div class="container" data-aos="fade-up">
      
              <div class="row">
                <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                  <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                    <div class="icon"><i class="fas fa-heartbeat"></i></div>
                    <h4 class="title"><a href="">Book Appointment</a></h4>
                    <p class="description">Book Appointment in any Hospital</p>
                  </div>
                </div>
      
                <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                  <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                    <div class="icon"><i class="fas fa-pills"></i></div>
                    <h4 class="title"><a href="">View Prescription</a></h4>
                    <p class="description">View your Prescription anytime </p>
                  </div>
                </div>
      
                <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                  <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
                    <div class="icon"><i class="fas fa-thermometer"></i></div>
                    <h4 class="title"><a href="">Book a Lab Test</a></h4>
                    <p class="description">Book a lab test anytime anywhere at any location </p>
                  </div>
                </div>
      
                <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                  <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
                    <div class="icon"><i class="fas fa-dna"></i></div>
                    <h4 class="title"><a href="">View Lab Report</a></h4>
                    <p class="description">View lab report anytime without visiting the lab</p>
                  </div>
                </div>
      
              </div>
      
            </div>
          </section>
      
          
          <section id="cta" class="cta">
            <div class="container" data-aos="zoom-in">
      
              <div class="text-center">
                <h3>In an emergency? Need help now?</h3>
                <p> </p>
                <a class="cta-btn scrollto" href="#appointment">Make an Make an Appointment</a>
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
                    Patients
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
                    <p>Our Organization provides lab reports instant without visiting the lab </p>
                  </div>
                  <div class="icon-box mt-5">
                    <i class="bx bx-cube-alt"></i>
                    <h4>Different Lab Appointments</h4>
                    <p>We provide different Lab appointment facility </p>
                  </div>
                  <div class="icon-box mt-5">
                    <i class="bx bx-images"></i>
                    <h4>kk </h4>
                    <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                  </div>
                  <div class="icon-box mt-5">
                    <i class="bx bx-shield"></i>
                    <h4>kk</h4>
                    <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
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
      
         
          <section id="appointment" class="appointment section-bg">
            <div class="container" data-aos="fade-up">
      
              <div class="section-title">
                <h2>Make an Appointment</h2>
                <p>Book Appointment  Instantly</p>
              </div>
      
              <form action="forms/appointment.php" method="post" role="form" class="php-email-form" data-aos="fade-up" data-aos-delay="100">
                <div class="row">
                  <div class="col-md-4 form-group">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
                  </div>
                  <div class="col-md-4 form-group mt-3 mt-md-0">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
                  </div>
                  <div class="col-md-4 form-group mt-3 mt-md-0">
                    <input type="tel" class="form-control" name="phone" id="phone" placeholder="Your Phone" required />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4 form-group mt-3">
                    <input type="date" name="date" class="form-control datepicker" id="date" placeholder="Appointment Date" required />
                  </div>
                  <div class="col-md-4 form-group mt-3">
                    <select name="department" id="department" class="form-select">
                      <option value="">Select Department</option>
                      <option value="Department 1">Department 1</option>
                      <option value="Department 2">Department 2</option>
                      <option value="Department 3">Department 3</option>
                    </select>
                  </div>
                  <div class="col-md-4 form-group mt-3">
                    <select name="doctor" id="doctor" class="form-select">
                      <option value="">Select Doctor</option>
                      <option value="Doctor 1">Doctor 1</option>
                      <option value="Doctor 2">Doctor 2</option>
                      <option value="Doctor 3">Doctor 3</option>
                    </select>
                  </div>
                </div>
      
                <div class="form-group mt-3">
                  <textarea class="form-control" name="message" rows="5" placeholder="Message (Optional)"></textarea>
                </div>
                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                </div>
                <div class="text-center"><button type="submit">Make an Appointment</button></div>
              </form>
      
            </div>
          </section>
      
         
          <section id="departments" class="departments">
            <div class="container" data-aos="fade-up">
      
              <div class="section-title">
                <h2>Departments</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
              </div>
      
              <div class="row" data-aos="fade-up" data-aos-delay="100">
                <div class="col-lg-4 mb-5 mb-lg-0">
                  <ul class="nav nav-tabs flex-column">
                    <li class="nav-item">
                      <a class="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1">
                        <h4>Cardiology</h4>
                        <p>Quis excepturi porro totam sint earum quo nulla perspiciatis eius.</p>
                      </a>
                    </li>
                    <li class="nav-item mt-2">
                      <a class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
                        <h4>Neurology</h4>
                        <p>Voluptas vel esse repudiandae quo excepturi.</p>
                      </a>
                    </li>
                    <li class="nav-item mt-2">
                      <a class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
                        <h4>Hepatology</h4>
                        <p>Velit veniam ipsa sit nihil blanditiis mollitia natus.</p>
                      </a>
                    </li>
                    <li class="nav-item mt-2">
                      <a class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4">
                        <h4>Pediatrics</h4>
                        <p>Ratione hic sapiente nostrum doloremque illum nulla praesentium id</p>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-8">
                  <div class="tab-content">
                    <div class="tab-pane active show" id="tab-1">
                      <h3>Cardiology</h3>
                      <p class="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                      <img src="assets/img/departments-1.jpg" alt="" class="img-fluid" />
                      <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                    </div>
                    <div class="tab-pane" id="tab-2">
                      <h3>Neurology</h3>
                      <p class="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                      <img src="assets/img/departments-2.jpg" alt="" class="img-fluid" />
                      <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                    </div>
                    <div class="tab-pane" id="tab-3">
                      <h3>Hepatology</h3>
                      <p class="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                      <img src="assets/img/departments-3.jpg" alt="" class="img-fluid" />
                      <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                    </div>
                    <div class="tab-pane" id="tab-4">
                      <h3>Pediatrics</h3>
                      <p class="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                      <img src="assets/img/departments-4.jpg" alt="" class="img-fluid" />
                      <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                    </div>
                  </div>
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
                        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                      <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="" />
                      <h3>Saul Goodman</h3>
                      <h4>Ceo &amp; Founder</h4>
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
      
          
          <section id="doctors" class="doctors section-bg">
            <div class="container" data-aos="fade-up">
      
              <div class="section-title">
                <h2>Doctors</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
              </div>
      
              <div class="row">
      
                <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                  <div class="member" data-aos="fade-up" data-aos-delay="100">
                    <div class="member-img">
                      <img src="assets/img/doctors/doctors-1.jpg" class="img-fluid" alt="" />
                      <div class="social">
                        <a href=""><i class="bi bi-twitter"></i></a>
                        <a href=""><i class="bi bi-facebook"></i></a>
                        <a href=""><i class="bi bi-instagram"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                      </div>
                    </div>
                    <div class="member-info">
                      <h4>Walter White</h4>
                      <span>Chief Medical Officer</span>
                    </div>
                  </div>
                </div>
      
                <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                  <div class="member" data-aos="fade-up" data-aos-delay="200">
                    <div class="member-img">
                      <img src="assets/img/doctors/doctors-2.jpg" class="img-fluid" alt="" />
                      <div class="social">
                        <a href=""><i class="bi bi-twitter"></i></a>
                        <a href=""><i class="bi bi-facebook"></i></a>
                        <a href=""><i class="bi bi-instagram"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                      </div>
                    </div>
                    <div class="member-info">
                      <h4>Sarah Jhonson</h4>
                      <span>Anesthesiologist</span>
                    </div>
                  </div>
                </div>
      
                <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                  <div class="member" data-aos="fade-up" data-aos-delay="300">
                    <div class="member-img">
                      <img src="assets/img/doctors/doctors-3.jpg" class="img-fluid" alt="" />
                      <div class="social">
                        <a href=""><i class="bi bi-twitter"></i></a>
                        <a href=""><i class="bi bi-facebook"></i></a>
                        <a href=""><i class="bi bi-instagram"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                      </div>
                    </div>
                    <div class="member-info">
                      <h4>William Anderson</h4>
                      <span>Cardiology</span>
                    </div>
                  </div>
                </div>
      
                <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                  <div class="member" data-aos="fade-up" data-aos-delay="400">
                    <div class="member-img">
                      <img src="assets/img/doctors/doctors-4.jpg" class="img-fluid" alt="" />
                      <div class="social">
                        <a href=""><i class="bi bi-twitter"></i></a>
                        <a href=""><i class="bi bi-facebook"></i></a>
                        <a href=""><i class="bi bi-instagram"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                      </div>
                    </div>
                    <div class="member-info">
                      <h4>Amanda Jepson</h4>
                      <span>Neurosurgeon</span>
                    </div>
                  </div>
                </div>
      
              </div>
      
            </div>
          </section>
          <section id="faq" class="faq section-bg">
            <div class="container" data-aos="fade-up">
      
              <div class="section-title">
                <h2>Frequently Asked Questioins</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
              </div>
      
              <ul class="faq-list">
      
                <li>
                  <div data-bs-toggle="collapse" class="collapsed question" href="#faq1">Non consectetur a erat nam at lectus urna duis? <i class="bi bi-chevron-down icon-show"></i><i class="bi bi-chevron-up icon-close"></i></div>
                  <div id="faq1" class="collapse" data-bs-parent=".faq-list">
                    <p>
                      Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                    </p>
                  </div>
                </li>
      
                <li>
                  <div data-bs-toggle="collapse" href="#faq2" class="collapsed question">Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque? <i class="bi bi-chevron-down icon-show"></i><i class="bi bi-chevron-up icon-close"></i></div>
                  <div id="faq2" class="collapse" data-bs-parent=".faq-list">
                    <p>
                      Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                    </p>
                  </div>
                </li>
      
                <li>
                  <div data-bs-toggle="collapse" href="#faq3" class="collapsed question">Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi? <i class="bi bi-chevron-down icon-show"></i><i class="bi bi-chevron-up icon-close"></i></div>
                  <div id="faq3" class="collapse" data-bs-parent=".faq-list">
                    <p>
                      Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                    </p>
                  </div>
                </li>
      
                <li>
                  <div data-bs-toggle="collapse" href="#faq4" class="collapsed question">Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla? <i class="bi bi-chevron-down icon-show"></i><i class="bi bi-chevron-up icon-close"></i></div>
                  <div id="faq4" class="collapse" data-bs-parent=".faq-list">
                    <p>
                      Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                    </p>
                  </div>
                </li>
      
                <li>
                  <div data-bs-toggle="collapse" href="#faq5" class="collapsed question">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i class="bi bi-chevron-down icon-show"></i><i class="bi bi-chevron-up icon-close"></i></div>
                  <div id="faq5" class="collapse" data-bs-parent=".faq-list">
                    <p>
                      Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                    </p>
                  </div>
                </li>
      
                <li>
                  <div data-bs-toggle="collapse" href="#faq6" class="collapsed question">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i class="bi bi-chevron-down icon-show"></i><i class="bi bi-chevron-up icon-close"></i></div>
                  <div id="faq6" class="collapse" data-bs-parent=".faq-list">
                    <p>
                      Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
                    </p>
                  </div>
                </li>
      
              </ul>
      
            </div>
          </section>
      
          
          <section id="contact" class="contact">
            <div class="container">
      
              <div class="section-title">
                <h2>Contact</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
              </div>
      
            </div>
      
           
      
            <div class="container">
      
              <div class="row mt-5">
      
                <div class="col-lg-6">
      
                  <div class="row">
                    <div class="col-md-12">
                      <div class="info-box">
                        <i class="bx bx-map"></i>
                        <h3>Our Address</h3>
                        <p>A108 Adam Street, New York, NY 535022</p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="info-box mt-4">
                        <i class="bx bx-envelope"></i>
                        <h3>Email Us</h3>
                        <p>info@example.com<br />contact@example.com</p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="info-box mt-4">
                        <i class="bx bx-phone-call"></i>
                        <h3>Call Us</h3>
                        <p>+1 5589 55488 55<br />+1 6678 254445 41</p>
                      </div>
                    </div>
                  </div>
      
                </div>
      
                <div class="col-lg-6">
                  <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                    <div class="row">
                      <div class="col form-group">
                        <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
                      </div>
                      <div class="col form-group mt-3">
                        <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
                      </div>
                    </div>
                    <div class="form-group mt-3">
                      <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
                    </div>
                    <div class="form-group mt-3">
                      <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                    </div>
                    <div class="my-3">
                      <div class="loading">Loading</div>
                      <div class="error-message"></div>
                      <div class="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div class="text-center"><button type="submit">Send Message</button></div>
                  </form>
                </div>
      
              </div>
      
            </div>
          </section>
          </div>
      
        
        )

    }
}