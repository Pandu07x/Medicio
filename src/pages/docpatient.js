import React,{useState,useEffect,Component} from "react";
import { Link ,useParams} from "react-router-dom";
import Drop from "../componenets/city";
import axios from "axios";
import { Scrollbar } from "swiper";

export default function Docpatientget(){
    
   
  const {id} =useParams()
  const [hosp,setHosp]=useState('')
    
  useEffect(()=>{
      fetchItems();
      axios.get(`http://localhost:8001/docpatient/${id}`).then((res)=>{
        setHosp(res.data.HospId)
        console.log(res.data[0])

      })
     
  },[]);
  const[items,setItems]=useState([])

  
  const fetchItems=async()=>{
      const data=await fetch(`http://localhost:8001/docpatient/${id}`)
      const items=await data.json();
      setItems(items)
      console.log(items[0].DoctorID)
  }
  const fetchItem=async()=>{

   
}
const download=()=>{
  window.print()
}
  const viewitems=async(id)=>{
    const resposne=await fetch(`http://localhost:8001/delete/${id}`)
    
    
      
    }
    const myStyle={
      
      backgroundImage:`url(${process.env.PUBLIC_URL+ "/slide2.png"})`,
      height:'120vh',
      marginTop:'-70px',
     
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      
  };
      
    
    
    
    return(
      <div >
        
      <div className='container-fluid' style={myStyle}>
        <div className="container" >
                
                    <div></div>
                    <h1></h1>
                    
                    <br></br>
                    <br></br>
                    <br />
                    <br />
                    <br />

                    <h1 align="center">Patient List </h1>
                   

                    <table className="table table-bordered table-light" >
                      <thead>
                        <tr>
                          <th>Patient ID</th>
                            <th>Patient Name</th>
                            
                            <th>Hospital</th>
                            <th>Date</th>
                            <th>Conatct Info</th>
                            <th></th>
                            <th></th>
                            
                            
                        </tr>
                        </thead>
                        
                          
                        
                      
                        {
               
               items.map((item,index) => (
                 <tbody>
                   
                         
                             <tr key={item.PatientId}>
                                 <td scope="row">{item.PatientId}</td>
                                 <td>{item.PatientName}</td>
                                 <td>{item.HospName}</td>
                                 <td>{item.date}</td>
                                 <td>{item.ContactNo}</td>
                                 

                                
                                 <td>  
                                   <Link to={`/case/${item.id}`}> 
                                   <button className="btn btn-success">Create Report</button>
                                   </Link> <br /></td>
                                   <td>  
                                   <Link to={`/docaseinfo/${id}/${item.PatientId}`}> 
                                   <button className="btn btn-success">View Case</button>
                                   </Link> <br /></td>
                             
                             </tr>
                             </tbody>
                         
                       
                         
               ))
               }
               </table>
               <h5 align='center'>Patient Are added At the End Of The List </h5>
               
                    <Link to={`/doctorhead/${id}`}> 
                                    <button className="btn btn-success">Back To Hospital</button>
                                    </Link>&nbsp; &nbsp; <button className="btn btn-success" onClick={download}>Download</button>
                    
                  
            
            
               
                
                    
                          
                  

                                 
                                  
                                 
                              
                              
                          
                        
                          
                
                
                
        
                  
                  </div>
                </div>
                </div>
                
                
                

        
        
                
        
          
              
        
                
              
              
        
            
         
  
    )
}