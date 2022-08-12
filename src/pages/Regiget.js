import React,{useState,useEffect,Component} from "react";
import { Link, useParams } from "react-router-dom";

export default function Regiget(){
  const {id} =useParams('')
    
    useEffect(()=>{
        fetchItems();
       
    },[id]);
    const[items,setItems]=useState([])
    
    const fetchItems=async(id)=>{
        const data=await fetch(`http://localhost:8001/getallpatients/${id}`)
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
                    <h1>Registartion List</h1>
                    <br></br>
                    <br></br>
                  
            
            <table  class="table table-borderless">
                              <tr scope="col">
                              <th scope="col">Id</th>
                             
                              <th>name</th>
                              <th>Email</th>
                              <th>Phone</th>
                              <th>Addresss</th>
                              <th>state</th>
                              <th>city</th>
                              <th>pincode</th>
                              </tr>
                              
           {
               
                items.map((item,index) => (
                    
                          
                              <tr key={item.PatientId}>
                                  <td scope="row">{index+1}</td>
                                  <td>{item.PatientName}</td>
                                  <td>{item.Email_ID}</td>
                                  

                                 
                                  <td>  
                                    <Link to={`/view/${item.id}`}> 
                                    <button className="appointment-btn scrollto">View</button>
                                    </Link> <br /></td>
                              
                              </tr>
                          
                        
                          
                ))
                }
                </table>
                
        
                  
                  </div>
                </div>
        
        
                </div>
        
              </div>
              <a href="/Form" className="appointment-btn scrollto"><span className="d-none d-md-inline">Back to </span> Hospital</a>
        
              <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
              </a>
        
              <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>

              </a>
              
        
            
          </section>
  
    )
}