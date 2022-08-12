import React,{Component, useState} from "react";
import { useEffect } from "react";
import {useFormik} from "formik";
import DatePicker from "react-date-picker";

import csc from "country-state-city";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";


export default function Form (){
    const [date,setDate]=useState(new Date())
    const [name,setName]=useState('')
    const [pid,setPid]=useState('')
    const [hospid,setHospid]=useState('')
    const [hospname,setHospname]=useState('')
    const [doc,setDoc]=useState('')
    const [dep,setDep]=useState('')
    const [time,setTime]=useState('')
    const [phone,setPhone]=useState('')
    const [add,setAdd]=useState('')
    const [status,setStatus]=useState('yet to be approved')
    const {id}=useParams('')
    const navigate=useNavigate('')


    useEffect(()=>{
        axios.get(`http://localhost:8001/gethosp/${id}`).then((res)=>{
            setHospid(res.data[0].id)
            setHospname(res.data[0].name)
            console.log(res.data[0])
            console.log(date)
        })

    })
    const search=()=>{
        axios.get(`http://localhost:8001/getProfile/${pid}`).then((res)=>{
            if(res.data.length>0){
                setName(res.data[0].PatientName)
                setPhone(res.data[0].ContactNo)
                setAdd(res.data[0].Address)
                console.log(res.data[0].ContactNo)
            }
            else{
                toast.error('Please Check Your Patient Id')
            }
        })
    }

    const upload=()=>{
        axios.post(`http://localhost:8001/appoint`,{
            pid:pid,
            name:name,
            hospid:hospid,
            hospname:hospname,
            dname:dep,
            date:date,
            time:time,
            phone:phone,
            add:add,
            status:status
        }).then((res)=>{
            toast.success("Your Appointment Booked Sucessfully ")
            navigate(`/`)
            
        })
    }
    const disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate() + 1).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };

    const myStyle={

        backgroundImage:`url(${process.env.PUBLIC_URL+ "/form2.jpg"})`,
        height:'auto',
        width:'auto',




        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',

    };








    return (
            <div style={myStyle}>
                
        <div class="wrapper wrapper--w680" >
            <div class="card card-4">
                <div class="card-body">
                    <h2 class="title" align="center">Appointment</h2>
                    
                     
                        <div class="row row-space">

                           
                        <div class="input-group text-center">
                                    <label class="label">Patient Id</label>
                                    <input class="input--style-4" type="text" name="name" onChange={((e)=>setPid(e.target.value))}/>
                                    <button className="btn btn-success" onClick={search}>Search</button>
                                </div>

                                <div class="input-group text-center">
                                    <label class="label">Patient Name</label>
                                    <input class="input--style-4" type="text" name="name" value={name} onChange={((e)=>setName(e.target.value))}/>
                                </div>
                            
                                <div class="input-group">
                                    <label class="label">Hospital Name</label>
                                    <input class="input--style-4" type="text" name="Doc" value={hospname}/>
                                </div>
                            
                            
                        </div>

                        <div class="row row-space">
                            
                                <div class="input-group">
                                    <label class="label">Department</label>
                                    <br /> &nbsp; &nbsp; &nbsp;
                                    <select class="form-select" aria-label="Default select example" onChange={((e)=>setDep(e.target.value))}>
                                        <option selected>Please Select your Department</option>
                                        <option value="Department Of Vascular">Department Of Vascular</option>
                                        <option value="Department of Orthopedics">Department of Orthopedics</option>
                                        <option value="Department of Cardiology">Department of Cardiology</option>
                                    </select>
                                </div>
                            
                           
                                <div class="input-group">
                                    <label class="label">Appointment</label> &nbsp;&nbsp;&nbsp;
                                    <div class="input-group-icon">
                                    <input type='date' name="date" min={disablePastDate()} onChange={((e)=>setDate(e.target.value))}  required/>
                                    
                                </div>
                            </div>
                            <div class="input-group">
                                    <label class="label">Time</label>
                                    <br /> &nbsp; &nbsp; &nbsp;
                                    <select class="form-select" aria-label="Default select example" onChange={((e)=>setTime(e.target.value))}>
                                        <option selected>Please Select your Time</option>
                                        <option value="10:00 am-12:00pm">10:00 am-12:00pm</option>
                                        <option value="2:00pm -5:00pm">2:00pm -5:00pm</option>
                                    </select>
                                </div>
                

                        </div>
                        <div class="row row-space">
                     
                            
                                <div class="input-group">
                                    <label class="label">Phone Number</label>
                                    <input class="input--style-4" type="text" name="phone" value={phone} />
                                
                            </div>
                        </div>
                        <div class="row row-space">
                            
                        </div>
                        <div class="row row-space">
                          
                                <div class="input-group">
                                    <label class="label">Address</label>
                                    <input class="input--style-4" type="text" name="add" value={add}  />
                                </div>
                          
                        </div>
                        <div class="row row-space">
                           
                        </div>



                        <div class="p-t-15 text-center">
                            <button class="btn btn--radius-2 btn-success" type="submit" onClick={upload}>Submit</button>
                            
                        </div>
                    
                </div>
            </div>
        </div>
    </div>
                
                
            

        )


    }

