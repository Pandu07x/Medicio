import React, { Component ,useState,useEffect} from 'react';
import { useParams,Link } from 'react-router-dom';



export default function Getcaseinfo() {
    const {id} =useParams()
    
  useEffect(()=>{
      fetchItems();
     
  },[]);
  const[items,setItems]=useState([])
  
  const fetchItems=async()=>{
      const data=await fetch(`http://localhost:8001/getcaseinfo/${id}`)
      const items=await data.json();
      setItems(items)
  }
    
    
        return (
            <section id="hero">
            <div id="heroCarousel" data-bs-interval="5000" class="carousel slide carousel-fade" data-bs-ride="carousel">
        
              <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>
        
              <div class="carousel-inner" role="listbox">
        
                
                <div class="carousel-item active">
                
                  <div class="container">
                    
                    <h1>Case Details </h1>
                    <br></br>
                    <br></br>
                  
                          <table className='table'>
                    <thead>
                        <tr>
                            <th>CaseNo</th>
                            <th>Date</th>
                            <th>Prescription</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item=>(
                                <tr key={item.CaseId}>
                                    <td>{item.CaseId}</td>
                                    <td>{item.Date}</td>
                                    <td>{item.Prescription}</td>
                                    <td>  <Link to={`/Viewdeatils/${item.CaseId}`}> 
                                    <button className="appointment-btn scrollto">Details</button>
                                    </Link> <br /></td>
                                
                                    


                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                   
               
                    <Link to={`/pathead/${id}`}> 
                                    <button className="appointment-btn scrollto">Back To Home</button>
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
            
        );
    
}

