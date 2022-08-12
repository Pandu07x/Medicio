import axios from "axios";
import React, { Component,useEffect,useState } from "react";
import { useNavigate, useParams,Link } from "react-router-dom";
import { toast } from "react-toastify";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


 export default function  Docform () {
 
     const [hospid,setHospid]=useState('')
     const [name,setName]=useState('')
     const isvalid=name !=null && name.trim().length>0;
     const [username,setUsername]=useState('')
     const [password,setPassword]=useState('')
     const [email,setEmail]=useState('')
     const [phone,setPhone]=useState('')
     const [add,setAdd]=useState('')
     const [spe,setspe]=useState('')
     const [desi,setDesi]=useState('')
     const {id}=useParams('')
     const [isError, setIsError] = useState(false);
     const navigate=useNavigate('')
     const options=[{value:'Cardiology - Adult- Heart Transplant'},{value:'General Surgery'},{value:'Gastroenterology'},{value:'Electrophysiology'},{value:'Uro - Oncology'},{value:'Kidney Transplant - Adult'},{value:'Diabetology'},{value:'Gastrointestinal Oncology'},{value:'Clinical Nutrition & Dietetics'},{value:'Neurology'},{value:'Dental Sciences'},{value:'Endocrinology'},{value:'Spine Surgery'},{value:'Head & Neck Surgery - Oncology'},{value:'Ortho - Oncology'},{value:'Bone Marrow Transplant'},{value:'Physiotherapy & Rehabilitation'},{value:'Pulmonology'},{value:'Developmental Paediatrics'},{value:'Rheumatology'},{value:'ENT'},{value:'Vascular'}]
     const desis=[{value:'MBBS'},{value:'MBBS-MD'},{value:'MBBS-MS'},{value:"MS-Genral"},{value:"intern"},{value:'BHMS'}]

   




        
     const upload=()=>{
         axios.post('http://localhost:8001/insertdoc',{
             
             
             name:name,
             uname:username,
             spe:spe,
             desi:desi,
             pass:password,
             phone:phone,
             email:email,
             add:add



         }).then((res)=>{
             if(!name){
                 toast.error("Please Fill the Form")
             }else{
             toast.success("You are Registered Sucessfully")
             navigate(`/login`)
             }

         })

     }
     const names=()=>{
         if(!name){
             toast.error("Name Required")
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
         height:'100vh',
         width:'auto',




         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',

     };
    
    return(
        <div style={myStyle}>
            <div className="wrapper wrapper--w680">
                <div className="card card-2">
                    <div className="card-body">
                    
                        <h2 align="center" className="title">Doctors Registration</h2>
                       
                        

                           

                       
                            <div className="row row-space">
                          

                              
                            
                                

                                    <div className="input-group">
                                        <label className="label">Doctors Name</label>
                                        <input className="input--style-4" type="text" name="name" onChange={((e)=>setName(e.target.value))} onBlur={names}/>
                                    </div>
                                

                            </div>

                            <div className="row row-space">
                               
                                
                                    <div className="input-group">
                                        <label className="label">Username</label>
                                        <input className="input--style-4" type="text" name="username"  onChange={((e)=>setUsername(e.target.value))}/>
                                    </div>
                                
                                
                                    <div className="input-group">
                                        <label className="label">Password</label>
                                        <input className="input--style-4" type="password" name="password" onChange={((e)=>setPassword(e.target.value))} />
                                    
                                </div>
                                <div className="input-group">
                                        <label className="label">Speacility</label>
                                        <select value={spe} onChange={((e)=>setspe(e.target.value))}>
                                            {options.map((option)=>(
                                                <option value={option.value}>{option.value}</option>
                                            ))}
                                        </select>
                                    
                                </div>
                                <div className="input-group">
                                        <label className="label">Speacility</label>
                                        <select value={desi} onChange={((e)=>setDesi(e.target.value))}>
                                            {desis.map((option)=>(
                                                <option value={option.value}>{option.value}</option>
                                            ))}
                                        </select>
                                    
                                </div>

                            
                            </div>


                            <div className="row row-space">
                                
                                    <div className="input-group">
                                        <label className="label">Email</label>
                                        <input className="input--style-4" type="email" name="email" onChange={((e)=>setEmail(e.target.value))} />
                                    
                                </div>
                               
                                    <div className="input-group">
                                        <label className="label">Phone Number</label>
                                        <input className="input--style-4" type="number" error={isError} name="phone" pattern="^\d{10}$" onChange={(e)=>{
                                            setPhone(e.target.value);
                                            validate(e.target.value);
                                        }} />
                                    </div>
                                
                            </div>

                            <div className="row row-space">
                               
                                    <div className="input-group">
                                        <label className="label">Address</label>
                                        <input className="input--style-4" type="text" name="add" onChange={((e)=>setAdd(e.target.value))} />
                                    </div>
                            
                            </div>


                            <div className="p-t-15 text-center">
                                <button className="btn btn--radius-2 btn-success" type="submit" onClick={upload}>Submit</button> &nbsp;
                                <Link to={`/`}> 
                                            <button className="btn btn-outline-success">Back To Home Page</button>
                                 </Link> 
                            </div>

                           
                       
                    </div>
                </div>
            </div>
        </div>
    )

}
 