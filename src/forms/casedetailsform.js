import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Select from "../pages/selectpage";
import DatePicker from 'react-date-picker';

export default function Casedetails () {
    
    const [items,setItems]=useState('')
    const [dname,setDname]=useState('')
    const [hname,setHname]=useState('')
    const [date,setDate]=useState(new Date().toISOString().slice(0, 10))
    const [pres,setPres]=useState('')
    const [desc,setDesc]=useState('')
    const [report,setReport]=useState('')
    const [special,setSpecial]=useState('')
    const {id}=useParams()
    const [pid,setPid]=useState('')
    const [hospid,setHospid]=useState('')
    const [docid,setDocId]=useState('')
    const [dis,setDis]=useState('')
    const navigate=useNavigate('')
    useEffect(()=>{
        
        axios.get(`http://localhost:8001/getpatdet/${id}`).then((res)=>{
            setHospid(res.data[0].HospId)
            setDocId(res.data[0].DoctorID)
            setPid(res.data[0].PatientId)
            setDname(res.data[0].DoctorName)
            setHname(res.data[0].HospName)
            console.log(date)
            
            
               
        })
    },[id])

const blur=()=>{
    console.log(hospid)
}

    
    const upload=()=>{
        
        axios.post("http://localhost:8001/cases",{
            pid:pid,
            hospid:hospid,
            docid:docid,
            dname:dname,
            dis:dis,
            hname:hname,
            date:date,
            prescription:pres,
            desc:desc,
            requests:report,
            special:special
            

        }).then((res)=>{
            console.log(hospid)
            toast.success("DATA UPloaded sucessfully")
            navigate(`/docpatient/${docid}`)
            
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
                        <br />
                        <br />
                        <h2 align="center" className="title">Case Details</h2>
                        
                           

                                <div className="input-group">
                                    <label className="label">PatientID</label>
                                    <input className="input--style-4" type="text" name="case" value={pid}    />
                                </div>
                                <div className="input-group">
                                    <label className="label">HospID</label>
                                    <input className="input--style-4" type="text" name="hospid" value={hospid} onBlur={blur}     />
                                </div>
                                <div className="input-group">
                                    <label className="label">Hospital Name</label>
                                    <input className="input--style-4" type="text" name="hospid" value={hname} onBlur={blur}    />
                                </div>
                                <div className="input-group">
                                    <label className="label">DoctorID</label>
                                    <input className="input--style-4" type="text" name="hospid" value={docid} onBlur={blur}    />
                                </div>
                                <div className="input-group">
                                    <label className="label">Doctor Name</label>
                                    <input className="input--style-4" type="text" name="hospid" value={dname} onBlur={blur}    />
                                
                            
                            </div>

                            
                            


                            <div className="row row-space">

                                

                                    <div className="input-group">
                                        <label className="label">  Todays Date</label>
                                        <input className="input--style-4" type="text" name="hospid" value={date} onBlur={blur}    />
                          
                                    
                                </div>
                                <div className="input-group">
                                        <label className="label">Disease</label>
                                        <input className="input--style-4" type="text" name="hospid"  onBlur={blur} onChange={((e)=>setDis(e.target.value))}   />
                          
                                    
                                </div>
                                

                            </div>

                            <div className="row row-space">
                                
                                    <div className="form-group">
                                        <label className="label">Prescription</label>
                                        <textarea className="input--style-4 form-group" cols="60" rows="3"
                                                  name="prescription" onChange={((e)=>setPres(e.target.value))}></textarea>
                                    
                                </div>
                                </div>
                                <div className="row row-space">
                                
                                
                                    <div className="form-group">
                                        <label className="label">Description</label>
                                        <textarea className="input--style-4 form-group" cols="60" rows="3"
                                                  name="desc" onChange={((e)=>setDesc(e.target.value))}></textarea>
                                    
                                </div>

                            </div>

                            <div className="row row-space">
                               
                                    <div className="form-group">
                                        <label className="label">Report Request</label>
                                        <textarea className="input--style-4 form-group" cols="60" rows="3"
                                                  name="requests" onChange={((e)=>setReport(e.target.value))}></textarea>
                                    
                                </div>
                            </div>
                            <div className="row row-space">
                                
                                    <div className="form-group">
                                        <label className="label">Special Notes</label>
                                        <textarea className="input--style-4 form-group" cols="60" rows="3"
                                                  name="special" onChange={((e)=>setSpecial(e.target.value))}></textarea>
                                    
                                </div>
                            </div>


                            <div className="p-t-15">
                                <button className="btn btn--radius-2 btn--blue" type="submit" onClick={upload}>Submit</button>
                            </div>
                            
                        
                    </div>
                </div>
            </div>
        </div>

    )

}
