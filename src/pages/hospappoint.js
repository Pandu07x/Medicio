import axios from "axios";
import React,{useState,useEffect,Component} from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function Hospappointget(){
 
    const {id} =useParams('')
    const[items,setItems]=useState([])
    const[ids,setIDs]=useState([])
    useEffect(()=>{
        fetchItems();
       
    },[id]);
    
   
    
    const fetchItems=async()=>{
        const data=await fetch(`http://localhost:8001/gethospappoint/${id}`)
        const items=await data.json();
        setItems(items)
        setIDs(items)

        
    }
    const approveall=(ids)=>{
        {
            items.map((item)=>(
        axios.get(`http://localhost:8001/approve/${item.id}`).then((res)=>{
            console.log(res.data)
            toast.success("Approved")
            fetchItems();
        })
        ))
    }
      
               
    }
    const rejectall=(ids)=>{
        {
            items.map((item)=>(
        axios.get(`http://localhost:8001/reject/${item.id}`).then((res)=>{
            console.log(res.data)
            toast.error("Reject")
            fetchItems();
        })
        ))
    }
      
               
    }
    const approve=(ids)=>{
        axios.get(`http://localhost:8001/approve/${ids}`).then((res)=>{
            console.log(res.data)
            toast.success("Approved")
            fetchItems();
        })
      
               
    }
    const reject=(ids)=>{
        axios.get(`http://localhost:8001/reject/${ids}`).then((res)=>{
            console.log(res.data)
            toast.error("Rejected")
            fetchItems();
        })
      
               
    }
    const myStyle={
      
        backgroundImage:`url(${process.env.PUBLIC_URL+ "/doc.jpg"})`,
        height:'120vh',
        marginTop:'-70px',
       
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        
    };
    const download=()=>{
        window.print();
    }

  
      
    
    
    
    return(
        
           
        
             
        
        
                
              <div className="container-fluid" style={myStyle}  >
                  <div class="container">
                   
                    <br></br>
                    <br></br><br></br>
                    <br />
                    <br />
                    <h1 align='center'>Appointment List</h1>
                    <button className="btn btn-success" onClick={approveall}>Approve All</button> &nbsp;
                                    <button className="btn btn-danger" onClick={rejectall}>Reject All</button>
                  
            
            <table  class="table table-striped table-dark">
              <thead>
                              <tr scope="col">

                              <th>PatientId</th>
                              <th>name</th>
                              
                              <th>Doctor</th>
                              <th>Date</th>
                              <th>Time</th>
                              <th>Status</th>
                              
                              
                              </tr>
                              </thead>
                              
           {
               
                items.map((item,index) => (
                    <tbody>
                          
                              <tr >
                                  <td scope="row">{item.PatientId}</td>
                                  <td>{item.name}</td>

                                  <td>{item.doctor}</td>
                                  <td>{item.date}</td>
                                  <td>{item.time}</td>
                                  <td><p className="fw-bold">{item.status}</p></td>
                                  <td><a className="btn btn-success" onClick={()=>approve(item.id)}>Approve</a></td>
                                  <td><button className="btn btn-danger" onClick={()=>reject(item.id)}>Reject</button></td>
                                  

                                 
                                 
                              
                              </tr>
                          
                        
                              </tbody>          
                ))
                }
                
                </table>
                <Link to={`/dochead/${id}`}> 
                                    <button className="btn btn-outline-dark">Back to Hospital</button>
                                    </Link> &nbsp; <button className="btn btn-success" onClick={download}>Download</button>
                                  
                 
                                    

                
                
        
                  
                  </div>
                
        
        
                </div>
        
              
              
        
             
        
            
         
  
    )
}