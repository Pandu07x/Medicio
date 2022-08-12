import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function GetHosp(){
    const [items,SetItems]=useState([])
    useEffect(()=>{
       fetchItems();
    })
    const fetchItems=async()=>{
        const data=await fetch(`http://localhost:8001/gethospi`)
        const items=await data.json();
        SetItems(items)
  
    }
    const myStyle={

        backgroundImage:`url(${process.env.PUBLIC_URL+ "/6274.jpg"})`,
        height:'110vh',
        marginTop:'-70px',

        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        align:'center'
    };
    return(
        <div style={myStyle}>
        <div className='container' s>
     
      <div class="container ">
                    
      <h1></h1>
      <br></br>
      <br></br>
     <br />
     <br />
          <h1 align="center">Hospital List </h1>

      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th>Sr.no</th>
              <th>Hospital Name</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th></th>

              
          </tr>
          </thead>
          {
               
               items.map((item,index) => (
                 <tbody>
                   
                         
                             <tr>
                                 <td  key={item.id} scope="row">{index+1}</td>
                                 <td>{item.name}&nbsp;{item.type}</td>
                                 
                                 
                                 <td>{item.phone}</td>
                                 <td>{item.address}</td>
                                 

                                
                                 <td>  
                               
                                   <Link to={`/appoint/${item.id}`}> 
                                   <button className="btn btn-success">Book Appointment</button>
                                   </Link> <br /></td>
                             
                             </tr>
                             </tbody>
                         
                       
                         
               ))
               }

          
            
          
        

 </table>
 <h5 align='center'>Patient Are added At the End Of The List </h5>
 
      <Link to={`/`}> 
                      <button className="btn btn-outline-dark">Back To Home</button>
                      </Link> <br />
                     
                    

      
    


 
  
      
            
    

                   
                    
                   
                
                
            
          
            
  
  
  
      
    
    </div>
        </div>
        </div>
  
  
  






  

  )
}