import React,{useState,useEffect,Component} from "react";
import { Link,useParams } from "react-router-dom";
import  axios  from "axios";


export default function Test(){

    
 
    const {id}=useParams();
  
    useEffect(()=>{
      fetchItems();
      
      
     
      
     
  },[id]);
    const deleteitem=async(id)=>{
      const resposne=await fetch(`http://localhost:8001/delete/${id}`)
       
      
        
      }
      const[items,setItems]=useState([]) 
      const fetchItems=async()=>{
        const data=await fetch(`http://localhost:8001/getapp/${id}`)
        const items=await data.json();
        
        setItems(items)
        
  
    }
    const upload=()=>{
      window.print()
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
                    <h1>Welcome To Appointment List</h1>
                    <br></br>
                    <br></br>
                  
            
            <table  class="table table-bordered">
              <thead>
                              <tr scope="col">
                              <th scope="col">Patient ID</th>
                              <th>Name</th>
                              <th>Department</th>
                              <th>Date</th>  
                              <th>Phone</th>
                              <th>Addresss</th>
                              
                              </tr>
                              </thead>
                              {
               
               items.map((item,index) => (
                 <tbody>
                   
                         
                             <tr>
                                 <td  key={item.PatientId} scope="row">{index+1}</td>
                                 <td>{item.name}</td>
                                 <td>{item.doctor}</td>
                                
                                 <td>{item.date}</td>
                                 <td>{item.phone}</td>
                                 <td>{item.address}</td>
                                 

                                
                                 <td>  
                               
                                   <Link to={`/view/${item.PatientId}`}> 
                                   <button className="appointment-btn scrollto">View Details</button>
                                   </Link> <br /></td>
                             
                             </tr>
                             </tbody>
                         
                       
                         
               ))
               }
                             
                        
                          <button className="btn btn-success" onClick={upload}>Download</button>
              
                </table>
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