import React,{useState,useEffect,Component} from "react";
import { Link ,useParams} from "react-router-dom";
import Drop from "../componenets/city";
import axios from "axios";

export default function Empget(){
    
   
  const {id} =useParams()
    
  useEffect(()=>{
      fetchItems();
     
  },[]);
  const[items,setItems]=useState([])
  
  const fetchItems=async()=>{
      const data=await fetch(`http://localhost:8001/getemp/${id}`)
      const items=await data.json();
      setItems(items)
  }
  const viewitems=async(id)=>{
    const resposne=await fetch(`http://localhost:8001/delete/${id}`)
    
    
      
    }
    const myStyle={
      
      backgroundImage:`url(${process.env.PUBLIC_URL+ "/doc.jpg"})`,
      height:'120vh',
      marginTop:'-70px',
     
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      
  };
      
    
    
    
    return(
      <div className="container-fluid" style={myStyle}>
       
           
              
        
         
       <div class="container ">
                    
                    <h1 align="center">Patient List </h1>
                    
                    <br></br>
                    <br></br>
               
                          <h1 align='center'>Employee List</h1>

                    <table className="table table-striped table-dark">
                      <thead>
                        <tr>
                          <th>Employeee ID</th>
                            <th>Employee Name</th>
                            <th>Designation</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                            
                        </tr>
                        </thead>
                        
                          
                        
                      
                        {
               
               items.map((item,index) => (
                 <tbody>
                   
                         
                             <tr key={item.HospempId }>
                                 <td scope="row">{index+1}</td>
                                 <td>{item.EmpName}</td>
                                 <td>{item.Designation}</td>
                                 <td>{item.Email_ID}</td>
                                 <td>{item.ContactNo}</td>
                                 <td>{item.Address}</td>
                                 

                                
                           
                             
                             </tr>
                             </tbody>
                         
                       
                         
               ))
               }
               </table>
               <h5 align='center'>Details Are added At the End Of The List </h5>
               
                    <Link to={`/dochead/${id}`}> 
                                    <button className="btn btn-outline-dark">Back To Hospital</button>
                                    </Link> &nbsp; &nbsp;
                                    <Link to={`/hospemp/${id}`}> 
                          <button className="btn btn-success">Create Employeee</button>
                          </Link> <br />
                    
                  
            
            
               
                
                    
                          
                  

                                 
                                  
                                 
                              
                              
                          
                        
                          
                
                
                
        
                  
                  
                
        
        
               
        
              </div>
              </div>
              
        
   
  
    )
}