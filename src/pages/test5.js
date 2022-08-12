import axios from "axios";
import React,{useState,useEffect,Component} from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function Test5(){
 
    const {id} =useParams('')
    const[items,setItems]=useState([])
    const[ids,setIDs]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:8001/gethospappoint/${id}`).then((res)=>{
            console.log(res.data)
            setItems(res.data)
        })
        
    },[id]);
    
   
    
    const fetchItems=async()=>{
        const data=await fetch(`http://localhost:8001/gethospappoint/${id}`)
        const items=await data.json();
        setItems(items)
        setIDs(items)

        
    }
    
   
        
        
      
      
      
      
        
   

  
      
    
    
    
    return(
        <section id="hero">
           
        
              <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>
        
              <div class="carousel-inner" role="listbox">
        
                
              <div className="carousel-item active" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL
          + "/slide1.jpg"})`
      
    }} >
                  <div class="container">
                    <h1 align='center'>Appointment List</h1>
                    <br></br>
                    <br></br>
                  
            
            <table  class="table table-borderless">
              <thead>
                              <tr scope="col">
                              <th scope="col">Id</th>
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
                                  <td>{item.hospital_name}</td>
                                  <td>{item.doctor}</td>
                                  <td>{item.date}</td>
                                  <td>{item.time}</td>
                                  <td>{item.status}</td>
                                 
                                  <td><button className="btn btn-danger">Reject</button></td>
                                  

                                 
                                 
                              
                              </tr>
                          
                        
                              </tbody>          
                ))
                }
                
                </table>
                 <Link to={`/dochead/${id}`}> 
                                    <button className="btn btn-success">Back to Hospital</button>
                                    </Link>

                
                
        
                  
                  </div>
                
        
        
                </div>
        
              </div>
              
        
              <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
              </a>
        
              <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>

              </a>
              
        
            
          </section>
  
    )
}