import React, { Component,useState } from "react";
import Drop from "../componenets/city";
import Drops from "../componenets/speciallity";
import { toast } from 'react-toastify';
import axios from "axios";
import { Link } from "react-router-dom";




export default function Regiform() {
    const myStyle={

        backgroundImage:`url(${process.env.PUBLIC_URL+ "/form2.jpg"})`,
        height:'auto',
        width:'auto',

        marginTop:'-70px',

        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',

    };

    
    return(
        <div style={myStyle}>

            <div className="wrapper wrapper--w680">
                <div className="card card-4">
                    <div className="card-body">
                        <br />
                        <br />
                        <h2 align="center" className="title" text-align="center">User Registration</h2>
                        <form method="POST" action="http://localhost:8001/registration">
                        <div className="input-group">
                                <label className="label">Choose Hospital</label><br></br> 
                                <div className="rs-select2 js-select-simple select--no-search">
                                    <select name="hosp">
                                        <option disabled="disabled" selected="selected">Choose option</option>
                                        <option>Hospital</option>
                                        <option>Laboratory</option>
                                       
                                        
                                    </select>
                                    <div className="select-dropdown"></div>
                                </div>
                            </div>


                            <div className="row row-space">
                               
                                    <div className="input-group">
                                        <label className="label">Name</label>
                                        <input className="input--style-4" type="text" name="name" required/>
                                    </div>
                                

                            </div>
                            <div className="row row-space">
                                
                                    <div className="input-group">
                                        <label className="label">Choose Your User</label>
                                        <Drops />
                                    
                                </div>

                            </div>

                            <div className="row row-space">
                                
                                    <div className="form-group">
                                        <label className="label">Addresss</label>
                                        <textarea className="input--style-4 form-group" cols="60" rows="3"
                                                  name="add" required></textarea>
                                    
                                </div>
                                </div>

                            <div className="row row-space">

                                
                                    <div className="input-group">
                                        <label className="label">Phone Number</label>
                                        <input className="input--style-4" type="text" name="phone"  required/>
                                    
                                </div>
                              
                                    <div className="input-group">
                                        <label className="label">Email</label>
                                        <input className="input--style-4" type="email" name="email" required />
                                    
                                </div>
                            </div>
                            <div className="row row-space">
                  
                                
                                    <div className="input-group">
                                        <label className="label">Pin code</label>
                                        <input className="input--style-4" type="text" name="pincode" required />
                                    
                                </div>


                            </div>
                            <div className="row row-space">
                                
                                    <div className="input-group">
                                        <label className="label">Username</label>
                                        <input className="input--style-4" type="text" name="uname" required />
                                    
                                </div>
                                
                                    <div className="input-group">
                                        <label className="label">Password</label>
                                        <input className="input--style-4" type="password" name="pass" required />
                                    
                                </div>
                                </div>
                                <div className="row row-space">
                               
                                    <div className="input-group">
                                        <Drop />
                                       
                                    
                                </div>
                                </div>




                            <div className="p-t-15">
                                <button className="btn btn-outline-success" type="submit">Submit</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Link to={`/`}> 
                                            <button className="btn btn-outline-success">Back To Home Page</button>
                                 </Link> 
                                
                            </div>
                             
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )


}