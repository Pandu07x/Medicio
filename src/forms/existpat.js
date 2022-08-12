import React, { Component, useEffect,useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Save from "../componenets/image";
import { toast } from "react-toastify";
import { useFormik } from "formik";

 export default function Pathospform()  {
     const initialValues={
        pname:'',
        Dname:''


    }
     const validate=values=>{
        let errors={}
        if(!values.pname){
            errors.pname="Requried"
        }
        if(!values.Dname){
            errors.Dname="Required"
        }

    }
     const formik=useFormik({
         initialValues,
         validate
     })
     const [pid,setPid]=useState('')
     const [hospid,setHospid]=useState('')
     const [hospName,setHospName]=useState('')
     const [name,setName]=useState('')
 
 
     const [phone,setPhone]=useState('')
     const [add,setAdd]=useState('')
     const navigate=useNavigate('')
     const [date,setDate]=useState(new Date().toISOString().slice(0, 10))
     

    const[items,setItems]=useState([])
    const[doc,setDoc]=useState([])
    const [dname,setDname]=useState('')

    const {id}=useParams();
    useEffect(()=>{
        axios.get(`http://localhost:8001/gethosp/${id}`).then((resp)=>{
            setHospid(resp.data[0].id)
            setHospName(resp.data[0].name)
            console.log(hospid)
            console.log(hospName)
           
        })
        
        

        
       
    },[]);
    const search=()=>{
        axios.get(`http://localhost:8001/getpatinfo/${pid}`).then((res)=>{  
            if(res.data.length>0){
                toast.success("Patient Details Found Sucessfully")
                setName(res.data[0].PatientName)
                setPhone(res.data[0].ContactNo)
                setAdd(res.data[0].Address)
  
              
                
            }
            else{
                setName('')
                setPhone('')
                setAdd('')
                toast.error("Patients Details Not Found ",{position: toast.POSITION.TOP_CENTER});
            }
            
        })
        axios.get(`http://localhost:8001/getdoctors/${doc}`).then((res)=>{
            if(res.data.length>0){
            console.log(res.data[0].DoctorName)
            setDname(res.data[0].DoctorName)
            toast.success("Doctor Details Found Sucessfully")
            }
            else{
                setDoc('')
                setDname('')
                toast.error(" Doctor Details Not Found")
            }
        })
    }
    
    
    const upload=()=>{
        
        axios.post('http://localhost:8001/pathosp',{
            pid:pid,
            hospid:hospid,
            hospname:hospName,
            dname:dname,
            date:date,
            docid:doc,
            name:name,
            phone:phone,
            add:add


            


        }).then((res)=>{
            toast.success("Patient Added Sucessfully")
            navigate(`/getpatient/${hospid}`)

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
                        <h2 align="center" className="title">Patient Form</h2>
                        
                        <div className="input-group">
                                <label className="label">Patient Id</label>
                                <input className="input--style-4" type="text" name="hospid" value={pid} onChange={((e)=>setPid(e.target.value))} />
                                <label className="label"> Doctor ID</label>
                                <input className="input--style-4" type="number" name="name" value={doc} onChange={((e)=>setDoc(e.target.value))}/>
                                <button className="btn btn-success" onClick={search}>Search</button>
                                
                            </div>
                            

                            <div className="input-group">
                                <label className="label"> Hospital Id</label>
                                <input className="input--style-4" type="text" name="hospid" value={hospid}  />
                                
                            </div>
                            <div className="input-group">
                                <label className="label"> Doctor Name</label>
                                <input className="input--style-4" type="text" name="Dname" value={dname} required />
                                
                            </div>
                           
                            
                               
                            
                         



                            <div className="row row-space">

                                

                                    <div className="input-group">
                                        <label className="label"> Patient Name</label>
                                        <input className="input--style-4" type="text" name="pname" value={name} required />
                                    
                                </div>
                                
                                <div className="input-group">
                                        <label className="label"> Date</label>
                                        <input className="input--style-4" type="text" name="date" value={date}  />
                                        <label>Note: date Format:- (year-month-date)</label>
                                    
                                </div>

                               
                            </div>

                       


                           
                                
                              
                                
                                
                                    <div className="input-group">
                                        <label className="label">Phone Number</label>
                                        <input className="input--style-4" type="text" name="phone" value={phone}  />
                                    
                                </div>
                                
                                <div className="input-group">
                                        <label className="label">Address</label>
                                        <input className="input--style-4" type="text" name="add"  value={add}  />
                                    
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
 