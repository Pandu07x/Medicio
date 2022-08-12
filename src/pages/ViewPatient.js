import React,{useState,useEffect,Component} from "react";
import { Link,useParams } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Viewget(){
    const[items,setItems]=useState([])
    const {id}=useParams();
    useEffect(()=>{
        axios.get(`http://localhost:8001/getallpatientss/${id}`).then((resp)=>setItems({...resp.data[0]}))
        
       
    },[id]);
   
    

    const fetchItems=async(id)=>{
        const data=await fetch(``)
        const items=await data.json();
        setItems(items)
    }
    const viewitems=async(id)=>{
      const resposne=await fetch(`http://localhost:8001/delete/${id}`)
      
      
        
      }
      
    
    
    
      return(
          <div>
        <section id="hero">
      
    
         
    
            
    
              <div class="container">
                  <h1>Patient Details</h1>
                

               <table className="table">
                   <tr>
                       <th>Patient ID</th>
                       <th>Patient Name</th>
                       <th>Patient Email Id</th>
                       <th>Patient Phone Number</th>
                       <th>Patient Address</th>
                   </tr>
                   <tr>
                       <td><h1>{items.PatientId}</h1></td>
                       <td><h1>{items.PatientName}</h1></td>
                       <td><h1>{items.Email_ID}</h1></td>
                       <td><h1>{items.ContactNo}</h1></td>
                       <td><h1>{items.Address}</h1></td>
                      
                   </tr>
               </table>

                    <Link to={`/getpatient/${items.HospId}`}> 
                                    <button className="appointment-btn scrollto">Back To Hospital</button>
                                    </Link> <br />
                </div>
                
              
        
        
                          
                      
                    
                      
         
          
            
    
              
              
           
    
    
            
    
          
          
    
         
          
    
        
      </section>
      </div>

  
    )
}