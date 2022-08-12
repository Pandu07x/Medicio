import axios from "axios";
import React, { Component,useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function Hospitalempform(){
    const [hospid,setHospid]=useState('')
    const [name,setName]=useState('')
    const [desi,setDesi]=useState('')
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [phone,setPhone]=useState('')
    const [email,setEmail]=useState('')
    const [add,setAdd]=useState('')
    const {id}=useParams('')
    const navigate=useNavigate('')

    useEffect(()=>{
        axios.get(`http://localhost:8001/gethosp/${id}`).then((resp)=>{
            setHospid(resp.data[0].id)
            console.log(hospid)
        })
    })

    const upload=()=>{
        axios.post('http://localhost:8001/inhospemp',{
            id:hospid,
            name:name,
            desi:desi,
            uname:username,
            pass:password,
            phone:phone,
            email:email,
            add:add


        }).then((res)=>{
            toast.success("Employee Added Sucessfully")
            navigate(`/empget/${hospid}`)
        })
    }
    const names=()=>{
        if(!name){
            toast.error("Please Fill the Form")
            setName('')
        }

    }
    const validate=(num)=>{

        if(num.length===11){
            toast.error("invalid Number")
            setPhone('')
        }

    }
    const myStyle={

        backgroundImage:`url(${process.env.PUBLIC_URL+ "/form2.jpg"})`,
        height:'auto',
        width:'auto',




        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',

    };

    
    return(
        <div style={myStyle}>
            <div className="wrapper wrapper--w680">
                <div className="card card-4">
                    <div className="card-body">
                        <h2 align="center" className="title">Employee Registration Form</h2>
                       

                            


                            <div className="row row-space">
                                
                            <div className="input-group">
                                        <label className="label"> Hospital ID</label>
                                        <input className="input--style-4" type="text" name="hid" value={hospid} />
                                    
                                </div>

                               

                                    <div className="input-group">
                                        <label className="label"> Employee Name</label>
                                        <input className="input--style-4" type="text" name="name" onChange={((e)=>setName(e.target.value))} onBlur={names} />
                                    
                                </div>
                                <div className="input-group">
                                        <label className="label"> Designation</label>
                                        <input className="input--style-4" type="text" name="desi" onChange={((e)=>setDesi(e.target.value))} onBlur={names} />
                                    
                                </div>

                            </div>

                            <div className="row row-space">
                               
                                    <div className="input-group">
                                        <label className="label">Username</label>
                                        <input className="input--style-4" type="text" name="username" onChange={((e)=>setUsername(e.target.value))}  />
                                   
                                </div>
                              
                                    <div className="input-group">
                                        <label className="label">Password</label>
                                        <input className="input--style-4" type="password" name="password" onChange={((e)=>setPassword(e.target.value))} />
                                    
                                </div>

                            </div>


                            <div className="row row-space">
                                
                                    <div className="input-group">
                                        <label className="label">Email</label>
                                        <input className="input--style-4" type="email" name="email" onChange={((e)=>setEmail(e.target.value))} />
                                    
                                </div>
                                
                                    <div className="input-group">
                                        <label className="label">Phone Number</label>
                                        <input className="input--style-4" type="text" name="phone"  onChange={(e)=>{
                                            setPhone(e.target.value);
                                            validate(e.target.value)
                                        }}/>
                                   
                                </div>
                            </div>

                            <div className="row row-space">
                               
                                    <div className="input-group">
                                        <label className="label">Address</label>
                                        <input className="input--style-4" type="text" name="add" onChange={((e)=>setAdd(e.target.value))} />
                                   
                                </div>
                            </div>


                            <div className="p-t-15 text-center">
                                <button className="btn btn--radius-2 btn-success" type="submit" onClick={upload}>Submit</button>
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )

}
