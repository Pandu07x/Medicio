import React,{useState,useEffect,Component} from "react";
import { Link, useParams } from "react-router-dom";

export default function UploadHis(){
  const {id} =useParams('')
    
    useEffect(()=>{
        fetchItems();
       
    },[id]);
    const[items,setItems]=useState([])
    
    const fetchItems=async()=>{
        const data=await fetch(`http://localhost:8001/uphistory/${id}`)
        const items=await data.json();
        setItems(items)
    }
    const viewitems=async()=>{
      const resposne=await fetch(`http://localhost:8001/delete/${id}`)
      
      
        
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
       <div style={myStyle}>
                
                <div class="container" >
                  <div class="container">
                    
                    <br></br>
                    <br></br>
                    <br />
                    <br />
                    <h1 align='center'>Upload History</h1>
            
            <table  class="table table-dark table-striped ">
                <thead>
                              <tr scope="col">
                              
                             
                              <th>id</th>
                              <th>Name</th>
                              <th>Date</th>
                              
                              <th>Source</th>
                              
                              </tr>
                              </thead>       
           {
               
                items.map((item,index) => (
                    <tbody>
                    
                          
                              <tr key={item.PatientId}>
                                  <td scope="row">{item.PatientId}</td>
                                  <td>{item.Pname}</td>
                                  <td>{item.date}</td>
                                  <td><a href={`${item.img}`} className="btn btn-outline-info">View</a></td>
                                  

                                 
                               
                              
                              </tr>
                              </tbody>
                          
                        
                          
                ))
                }
                <br />
                <Link to={`/labhead/${id}`}>
                  <button className="btn btn-outline-dark">Back To Hospital</button>
                </Link>
                </table>
                
        
                  
                  </div>
                </div>
                </div>
        

  
    )
}