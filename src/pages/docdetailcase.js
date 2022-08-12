import React,{useState,useEffect,Component} from "react";
import { Link,useParams } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function DocViewdetail(){
    const[items,setItems]=useState([])
    const {id}=useParams();
    useEffect(()=>{
        axios.get(`http://localhost:8001/getcasedetail/${id}`).then((resp)=>setItems({...resp.data[0]}))
        
       
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
                

               
                    <h1>Case No: {items.CaseId}</h1>
                    <h2 align="left">Date: {items.Date}</h2>
                    <h2 align="left"> Prescription {items.Prescription} </h2>
                    <h2 align="left">Description:   {items.Description}</h2>
                    <h2 align="left">Special Notes:   {items.Special_Notes}</h2>

                   <Link to={`/getinfo/${items.id}`}>
      <button className="appointment-btn scrollto">Back Case History</button>
      </Link>
                </div>
              
        
        
                          
                      
                    
                      
         
          
            
    
              
              
           
    
    
            
    
          
          
    
         
          
    
        
      </section>
      </div>

  
    )
}