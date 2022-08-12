import React,{useState,useEffect,Component} from "react";
import { Link ,useParams} from "react-router-dom";
import Drop from "../componenets/city";
import axios from "axios";

export default function Docget(){
    
   
  const {id} =useParams()
    
  useEffect(()=>{
      fetchItems();
     
  },[]);
  const[items,setItems]=useState([])
  
  const fetchItems=async()=>{
      const data=await fetch(`http://localhost:8001/getDoc/${id}`)
      const items=await data.json();
      setItems(items)
  }
  const viewitems=async(id)=>{
    const resposne=await fetch(`http://localhost:8001/delete/${id}`)
    
    
      
    }
      
    
    
    
    return(
        <section id="hero">
            <div id="heroCarousel" data-bs-interval="5000" class="carousel slide carousel-fade" data-bs-ride="carousel">
        
              <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>
        
              <div class="carousel-inner" role="listbox">
        
                
                <div class="carousel-item active" style={{
                  backgroundImage: 'url(assets/img/slide/slide1.jpg)'
              }}>
                  <div class="container">
                    
                    <h1>Doctor List  </h1>
                    <br></br>
                    <br></br>
                    <Link to={`/createDoc/${id}`}> 
                          <button className="appointment-btn scrollto">Create Doctor</button>
                          </Link> <br />

                    <table className="table">
                      <thead>
                        <tr>
                          <th>Doctor ID</th>
                            <th>Doctor Name</th>
                            <th>Speacility</th>
                            <th>Master</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            
                            <th>Address</th>
                            
                        </tr>
                        </thead>
                        
                          
                        
                      
                        {
               
               items.map((item,index) => (
                 <tbody>
                   
                         
                             <tr key={item.DoctorID}>
                                 <td scope="row">{index+1}</td>
                                 <td>{item.DoctorName}</td>
                                 <td>{item.	speciality}</td>
                                 <td>{item.	designation}</td>
                                 <td>{item.Email_ID}</td>
                                 <td>{item.ContactNo}</td>
                                 <td>{item.Address}</td>
                                 

                                
                           
                             
                             </tr>
                             </tbody>
                         
                       
                         
               ))
               }
               </table>
               <h5 align='center'>Doctors Are added At the End Of The List </h5>
               
                    <Link to={`/dochead/${id}`}> 
                                    <button className="appointment-btn scrollto">Back To Hospital</button>
                                    </Link> <br />
                    
                  
            
            
               
                
                    
                          
                  

                                 
                                  
                                 
                              
                              
                          
                        
                          
                
                
                
        
                  
                  </div>
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