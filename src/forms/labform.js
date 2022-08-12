import axios from "axios";
import { toast } from "react-toastify";

import React, { Component, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

 export default function Labform () {
     const [labid,setLabid]=useState('')
     const [pid,setPid]=useState('')
     const [name,setName]=useState('')
     const [add,setAdd]=useState('')
     const [phone,setPhone]=useState('')
     const [email,setEmail]=useState('')
     const {id} =useParams('')
     const navigate=useNavigate('')

     useEffect(()=>{
         axios.get(`http://localhost:8001/getlab/${id}`).then((res)=>{
            console.log(id)
         })
     })
     const upload=()=>{
        axios.post("http://localhost:8001/inreq",{
            labid:id,
            pid:pid,
            name:name,
            add:add,
            phone:phone,
            email:email


            

        }).then((res)=>{
           toast.success("DATA UPloaded sucessfully")
           navigate(`/labreq/${id}`)
        })
    }
    const search=()=>{
        axios.get(`http://localhost:8001/getProfile/${pid}`).then((res)=>{
            if(res.data.length>0){
                setPid(res.data[0].PatientId)
                setName(res.data[0].PatientName)
                setEmail(res.data[0].Email_ID)
                setAdd(res.data[0].Address)
                setPhone(res.data[0].ContactNo)
                console.log(res.data[0])
            }
            else{
                toast.error("user not found")
                setPid('')
            }
        })
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
                        <h2 align="center" className="title">Lab Patient Registration </h2>
                        


                            <div className="row row-space">
                            <div className="input-group">
                                        <label className="label">Lab ID</label>
                                        <input className="input--style-4" type="text" name="name" value={id} onChange={((e)=>setLabid(e.target.value))} />
                                   
                                </div>
                                
                            <div className="input-group">
                                        <label className="label">Patient ID</label>
                                        <input className="input--style-4" type="text" name="name" value={pid} onChange={((e)=>setPid(e.target.value))} />
                                        <button className="btn btn-success" onClick={search}>Search</button>
                                   
                                </div>

                             

                                    <div className="input-group">
                                        <label className="label">Patient Name</label>
                                        <input className="input--style-4" type="text" name="name" value={name} />
                                   
                                </div>

                            </div>

                            <div className="row row-space">
                                
                                    <div className="input-group form-group">
                                        <label className="label">Address</label>
                                        <textarea className="input--style-4 " cols="60" rows="3"
                                                  name="address" value={add}></textarea>
                                    
                                </div>
                            </div>


                            <div className="row row-space">

                               
                                    <div className="input-group">
                                        <label className="label">Phone Number</label>
                                        <input className="input--style-4" type="text" name="phone" value={phone} />
                                    
                                </div>
                               
                                    <div className="input-group">
                                        <label className="label">Email</label>
                                        <input className="input--style-4" type="email" name="email" value={email} />
                                    
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
 