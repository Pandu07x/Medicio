import React, {Component, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
export default function Contact(){
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [sub,setSub]=useState('')
    const [msg,setMsg]=useState('')
    const upload=()=>{
        axios.post(`http://localhost:8001/contact`,{
            name:name,
            email:email,
            sub:sub,
            msg:msg


        }).then((res)=>{
            toast.success("Your Response Added. Our team Will contact you Shortly ")
            setName('')
            setEmail('')
            setSub('')
            setMsg('')

        })
    }

        return(
            <section id="contact" class="contact">
              <div class="container">
        
                <div class="section-title">
                  <h2>Contact</h2>
                  <p>For Any Queries <br />Send Us email and Our Team Will Contact You </p>
                </div>
        
              </div>
              <div>

              </div>
        
             
        
              <div class="container">
        
                <div class="row mt-5">
        
                  <div class="col-lg-6">
        
                    <div class="row">
                      <div class="col-md-12">
                        <div class="info-box">
                          <i class="bx bx-map"></i>
                          <h3>Our Address</h3>
                          <p>Near Railway Station, Vadodara</p>
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

                      <div class="row">
                        <div class="col form-group mt-3">
                          <input type="text" name="name" class="form-control" id="name" value={name} placeholder="Your Name" required onChange={((e)=>setName(e.target.value))}/>
                        </div>
                        <div class="col form-group mt-3">
                          <input type="email" class="form-control" name="email" id="email" value={email} placeholder="Your Email" required onChange={((e)=>setEmail(e.target.value))} />
                        </div>
                      </div>
                      <div class="form-group mt-3">
                        <input type="text" class="form-control" name="subject" id="subject" value={sub} placeholder="Subject" required  onChange={((e)=>setSub(e.target.value))}/>
                      </div>
                      <div class="form-group mt-3">
                        <textarea class="form-control" name="message" rows="5" placeholder="Message" value={msg} required onChange={((e)=>setMsg(e.target.value))}></textarea>
                      </div>
                      <div class="my-3">
                        <div class="loading">Loading</div>
                        <div class="error-message"></div>
                        <div class="sent-message">Your message has been sent. Thank you!</div>
                      </div>
                      <div class="text-center"><button className='btn btn-success' onClick={upload}>Send Message</button></div>

                  </div>
        
                </div>
        
              </div>
            </section>
        )

}