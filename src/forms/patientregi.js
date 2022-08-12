import React, { Component, useEffect,useState } from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import Save from "../componenets/image";
import { toast } from "react-toastify";

 export default function Patientform()  {
     const [hospid,setHospid]=useState('')
     const [name,setName]=useState('')
     const [username,setUsername]=useState('')
     const [password,setPassword]=useState('')
     const [email,setEmail]=useState('')
     const [phone,setPhone]=useState('')
     const [add,setAdd]=useState('')
     const navigate=useNavigate('')

    const[items,setItems]=useState([])
    const[doc,setDoc]=useState([])

    
   
    
    const upload=()=>{
        axios.post('http://localhost:8001/addpatient',{
            
            name:name,
            uname:username,
            pass:password,
            email:email,
            phone:phone,
            add:add


            


        }).then((res)=>{
            if(name==null){
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
                <div className="card card-4">
                    <div className="card-body">
                        <h2 align="center" className="title">Patient Form</h2>
                        

                           


                            <div className="row row-space">

                                

                                    <div className="input-group">
                                        <label className="label"> Patient Name</label>
                                        <input className="input--style-4" type="text" name="name"  onChange={((e)=>setName(e.target.value))} onBlur={names}/>
                                    
                                </div>


                            </div>

                            <div className="row row-space">
                                
                                    <div className="input-group">
                                        <label className="label">Username</label>
                                        <input className="input--style-4" type="text" name="uname" onChange={((e)=>setUsername(e.target.value))} />
                                    
                                </div>
                               
                                    <div className="input-group">
                                        <label className="label">Password</label>
                                        <input className="input--style-4" type="password" name="pass"  onChange={((e)=>setPassword(e.target.value))}/>
                                    
                                </div>

                            </div>


                           
                                
                                    <div className="input-group">
                                        <label className="label">Email</label>
                                        <input className="input--style-4" type="email" name="email" onChange={((e)=>setEmail(e.target.value))} />
                                    </div>
                                
                                
                                    <div className="input-group">
                                        <label className="label">Phone Number</label>
                                        <input className="input--style-4" type="text" name="phone" onChange={(e)=>{
                                            setPhone(e.target.value)
                                            validate(e.target.value)
                                        }}  />
                                    
                                </div>
                                
                                <div className="input-group">
                                        <label className="label">Address</label>
                                        <input className="input--style-4" type="text" name="add" onChange={((e)=>setAdd(e.target.value))} />
                                    
                                </div>
                            

                         

                            <div className="p-t-15">
                                <button className="btn btn--radius-2 btn--blue" type="submit" onClick={upload}>Submit</button>
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
 