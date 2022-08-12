import React,{useState,useEffect,Component} from "react";
import { Link ,useNavigate,useParams} from "react-router-dom";
import Drop from "../componenets/city";
import axios from "axios";
import BackToTop from 'react-back-to-top-button';
import { Scrollbar } from "swiper";



export default function Requestget(){
    
   
  const {id} =useParams()
  const navigate=useNavigate()
    
  useEffect(()=>{
      fetchItems();
     
  },[]);
  const[items,setItems]=useState([])
  
  const fetchItems=async()=>{
      const data=await fetch(`http://localhost:8001/getpatreq/${id}`)
      const items=await data.json();
      setItems(items)
  }
  const viewitems=async(id)=>{
    const resposne=await fetch(`http://localhost:8001/delete/${id}`)
    
    
      
    }
    const onclic=()=>{
      navigate(`/labForm/${id}`)
    
    }
    const myStyle={
      
      backgroundImage:`url(${process.env.PUBLIC_URL+ "/6997.jpg"})`,
      height:'110vh',
      marginTop:'-70px',
     
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      align:'center'
  };
      
    
      
    
    
    
    return(
      
    
      <div className="conatiner" style={myStyle} >          
         
           
                
        
                  <div className="container"  >
                    
                    <h1></h1>
                    <br></br>
                    <br></br>
                      <br />
                      <br />
                      <h1 align="center">Patient Registration List </h1>
                    
                          <button className="btn btn-success" onClick={onclic}>Create Patient</button>
                           <br />

                    <table className="table table-striped table-dark " >
                    <thead class="thead-dark">
                        <tr>
                          <th>Patient ID</th>
                            <th>Patient Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                            <th></th>

                            
                        </tr>
                        </thead>
                        
                          
                        
                      
                        {
               
               items.map((item,index) => (
                 <tbody>
                   
                         
                             <tr>
                                 <td  key={item.PatientId} scope="row">{index+1}</td>
                                 <td>{item.Pname}</td>
                                 <td>{item.email}</td>
                                 <td>{item.phone}</td>
                                 <td>{item.Address}</td>
                                 <td>
                                 <Link to={`/uploadreport/${item.PatientId}`}> 
                                   <button className="btn btn-success">Upload Report</button>
                                     </Link>
                                 </td>
                                 

                                
                                 
                               
                               
                             
                             </tr>
                             </tbody>
                         
                       
                         
               ))
               }
               </table>
               <h5 align='center'>Patient Are added At the End Of The List </h5>
               
                    <Link to={`/labhead/${id}`}> 
                                    <button className="btn btn-outline-dark">Back To Hospital</button>
                                    </Link> <br />
                                   
                                  
 
                    
                  
            
            
               
                
                    
                          
                  

                                 
                                  
                                 
                              
                              
                          
                        
                          
                
                
                
                    
                  
                  </div>
                  </div>
                 

                
                
                
        
        
              
        
 
              
                
            
         
          
    )
}