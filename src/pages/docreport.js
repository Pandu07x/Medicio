import axios from "axios";
import React, { useEffect ,useState} from "react";
import { Link,useParams } from "react-router-dom";
import image from '../logo.png';

export default function DocReports(){
    const[items,setItems]=useState([])
    const [doom,setDoom]=useState('')
    const [pid,setPid]=useState('')
    const [hid,setHid]=useState('')
    const [hop,setHop]=useState('')
    const {id}=useParams();
    useEffect(()=>{
        axios.get(`http://localhost:8001/getcasedetail/${id}`).then((resp)=>{
            setItems(resp.data[0])
            setPid(resp.data[0].PatientId)
            setHid(resp.data[0].HospId)
            console.log(resp.data[0])



        })
        axios.get(`http://localhost:8001/getallpatientss/${pid}`).then((res)=>{
            setDoom(res.data[0])
            console.log(res.data[0])

        })
        axios.get(`http://localhost:8001/getprofiles/${hid}`).then((res)=>{
            setHop(res.data[0])
            console.log(res.data[0])


        })
        
       
    });
    const download=()=>{
        window.print()
    }
    return(
        <div style={{
            backgroundImage: `url(${process.env.PUBLIC_URL
                + "/download.jpg"})`
            
          }}> 
 <img src={image} className="img-thumbnail" width="200" height="236"></img> 
 <h1 align="center">Case No:{items.CaseId} </h1> <br />  
        
      
       <div className="container" >
        
           <h2>Doctor Name: Dr. {items.DoctorName}</h2>   
       </div>
       <hr />
      
       
       <h2 align='center'>Patient Information</h2>
       <br />
       <div className="container">
           <h3>Patient name: {doom.PatientName} </h3> <h4>Phone No: {doom.ContactNo}</h4>
           
           
           <h2></h2>

      
</div>
<hr />
<div className="container">
    <h1 align='center'> Case Details</h1>
    <br />
<h2 >Disease:  {items.disease}</h2>
<br></br>
<h2>Description: {items.Description}</h2>
<br />
<h2>
Prescription: {items.Prescription}</h2>
<br></br>
<h2>Special_Notes: {items.Report_Request}</h2>
<br />
<h2>Report Request: {items.Special_Notes}</h2>






</div>
<br /><br />
<div className="container">
    <h5 align='center'>For Any Enquiry Conatct Hospital </h5>
    <h5 align='center'>{hop.name} &nbsp; +91{hop.phone} &nbsp; {hop.address}, {hop.city}</h5>
</div>
<Link to={`/docaseinfo/${items.DoctorID}/${items.PatientId}`}>
      <button className="btn btn-success">Back Case History</button>
      </Link> &nbsp;&nbsp;

<button className="btn btn-success" onClick={download}>Download</button>




       

    
       </div>
      

     

  
      

      

      

  
  
    )
}