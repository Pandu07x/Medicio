import React,{Component} from "react";
export default class Fe extends Component{
    render(){
        return(
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
        )
    }
}