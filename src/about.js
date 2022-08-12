import React,{Component} from "react";
export default class About extends Component{
    render(){
        return(
            
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
        )
    }
}