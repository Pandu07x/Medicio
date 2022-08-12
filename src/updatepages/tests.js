import e from "express";
import React, { Component,useState,useEffect } from "react";
import axios from "axios";

const initialstate={
    name:"",
    address:"",
    phone:"",
    email:"",
    username:"",
    password:""
}
export default function updateform() {
    const [data,setData]=useState(initialstate)
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8001/update/:id",{
            name,
            address,
            phone,
            email,
            username,
            password
        }).then(()=>{
            setData({name:"",address:"",phone:"",email:"",username:"",password:""})
        })
    }
    const Inputchange=(e)=>{
        const{name,value}=e.target;
        setData({...data,[name]:value});

    }
    
    return(
        <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
            <div className="wrapper wrapper--w680">
                <div className="card card-4">
                    <div className="card-body">
                        <h2 align="center" className="title" text-align="center">User Registration</h2>
                        <form method="POST" action="">
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
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">Name</label>
                                        <input className="input--style-4" type="text" name="name" value={this.data.name} />
                                    </div>
                                </div>

                            </div>

                            <div className="row row-space">
                                <div className="col-2">
                                    <div className="form-group">
                                        <label className="label">Addresss</label>
                                        <textarea className="input--style-4 form-group" cols="60" rows="3"
                                                  name="add" value={this.data.address}></textarea>
                                    </div>
                                </div>
                                </div>

                            <div className="row row-space">

                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">Phone Number</label>
                                        <input className="input--style-4" type="text" name="phone" value={this.data.phone} />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">Email</label>
                                        <input className="input--style-4" type="email" name="email" value={this.data.email} />
                                    </div>
                                </div>
                            </div>
                           
                            <div className="row row-space">
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">Username</label>
                                        <input className="input--style-4" type="text" name="uname" value={this.data.username} />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">Password</label>
                                        <input className="input--style-4" type="password" name="pass" value={this.data.password} />
                                    </div>
                                </div>
                                </div>



                            <div className="p-t-15">
                                <button className="btn btn--radius-2 btn--blue" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )


}