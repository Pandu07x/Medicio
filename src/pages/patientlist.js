import React,{useState,useEffect,Component} from "react";
import { Link ,useParams} from "react-router-dom";
import Drop from "../componenets/city";
import axios from "axios";
import BackToTop from 'react-back-to-top-button';
import { Scrollbar } from "swiper";

export default function Patientget(){
    
  const [count,setCount]=useState('')
  const {id} =useParams()
    
  useEffect(()=>{
      fetchItems();
      axios.get(`http://localhost:8001/gethosppat/${id}`).then((res)=>{
        setCount(res.data[0].total)
        console.log(res.data[0].total)
      })

      
      
     
  },[]);
  const[items,setItems]=useState([])
 
  
  const fetchItems=async()=>{
      const data=await fetch(`http://localhost:8001/getallpatients/${id}`)
      const items=await data.json();
      
      setItems(items)
      

  }
  const getDoc=()=>{
    axios.get(``)
  }
  const viewitems=async(id)=>{
    const resposne=await fetch(`http://localhost:8001/delete/${id}`)
    
    
      
    }
    
    const upload=()=>{
        window.print();

    }  
    const myStyle={
      
      backgroundImage:`url(${process.env.PUBLIC_URL+ "/doc.jpg"})`,
      height:'110vh',
      marginTop:'-70px',
     
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      align:'center'
  };
    
    
    
    return(
      <div className="container-fluid" style={myStyle}>
    
      
          
         
           
                
        
                  <div class="container ">
                    <h1>Employee</h1>
                    
                    <br></br>
                    <br></br>
                 
                          <h1 align="center">Patient List </h1>
                    <h2 align="center">Total Patient Count:  {count}</h2>

                    <table className="table table-striped table-dark" >
                      <thead>
                        <tr>
                          <th>Patient ID</th>
                            <th>Patient Name</th>
                            <th>DoctorID</th>
                            <th>DoctorName</th>
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
                                 <td>{item.PatientName}</td>
                                 <td>{item.DoctorID}</td>
                                 <td>{item.DoctorName}</td>
                                
                                 <td>{item.ContactNo}</td>
                                 <td>{item.Address}</td>
                                 

                                
                                 <td>  
                               
                                   <Link to={`/view/${item.PatientId}`}> 
                                   <button className="btn btn-success">View Details</button>
                                   </Link> <br /></td>
                             
                             </tr>
                             </tbody>
                         
                       
                         
               ))
               }
               
               </table>
               <h5 align='center'>Patient Are added At the End Of The List </h5>
               
               
                    <Link to={`/dochead/${id}`}> 
                                    <button className="btn btn-outline-dark">Back To Hospital</button>
                                    </Link> &nbsp;&nbsp;
                                    <button className="btn btn-outline-info" onClick={upload}>Download</button> &nbsp; &nbsp;
                                    <Link to={`/pathosp/${id}`}> 
                          <button className="btn btn-success">Create Patient</button>
                          </Link> <br />
                                    
                                                  
 
                    
                  
            
            
               
                
                    
                          
                  

                                 
                                  
                                 
                              
                              
                          
                        
                          
                
                
                
                    
                  
                  </div>
                  </div>
                
                
                
        
        
              
        
 
              
                
            
         
          
    )
}