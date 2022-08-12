import React,{useState,useEffect,Component} from "react";
import { Link, useParams } from "react-router-dom";

export default function Patappointget(){
 
    const {id} =useParams('')
    const[items,setItems]=useState([])
    useEffect(()=>{
        fetchItems();
       
    },[id]);
    
   
    
    const fetchItems=async()=>{
        const data=await fetch(`http://localhost:8001/getappoint/${id}`)
        const items=await data.json();
        setItems(items)
    }
    const viewitems=async(id)=>{
      const resposne=await fetch(`http://localhost:8001/delete/${id}`)
      
      
        
      }
      const myStyle={
      
        backgroundImage:`url(${process.env.PUBLIC_URL+ "/7536.jpg"})`,
        height:'120vh',
        marginTop:'-70px',
       
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        
    };
      
    
    
    
    return(
      <div style={myStyle}>
      <div className="container"  >
        
         
        
                
             
                  <div class="container" >
                    <h1></h1>
                    
                    <br></br>
                    <br></br>
                    <br />
                    <br />
                    <br />
                  
                    <h1 align='center'>Appointment History</h1>
            <table  class="table table-dark table-striped">
              <thead>
                              <tr scope="col">
                              <th scope="col">Id</th>
                              <th>Id</th>
                             
                              
                              <th>Hospital</th>
                              <th>Date</th>
                              <th>Time</th>
                              <th>Address</th>
                              <th>Status</th>
                              
                              
                              </tr>
                              </thead>
                              
           {
               
                items.map((item,index) => (
                    <tbody>
                          
                              <tr >
                                  <td scope="row">{item.id}</td>
                                 
                                  <td>{item.hospital_name}</td>
                                  <td>{item.doctor}</td>
                                  <td>{item.date}</td>
                                  <td>{item.time}</td>
                                  <td>{item.address}</td>
                                  <td><p className="fw-bold">{item.status}</p></td>
                                  

                                 
                                 
                              
                              </tr>
                          
                        
                              </tbody>          
                ))
                }
                
                </table>
                 <Link to={`/pathead/${id}`}> 
                                    <button className="btn btn-success">Back to Hospital</button>
                                    </Link>
                
                
        
                  
               
        
        
                </div>
        
              </div>
              </div>
              
        
        
              
        
            
        
  
    )
}