import React, { Component ,useState,useEffect} from 'react';
import { useParams,Link } from 'react-router-dom';



export default function GetReportinfo() {
    const {id} =useParams()
    
  useEffect(()=>{
      fetchItems();
     
  },[]);
  const[items,setItems]=useState([])
  
  const fetchItems=async()=>{
      const data=await fetch(`http://localhost:8001/getimage/${id}`)
      const items=await data.json();
      setItems(items)
  }
  const myStyle={
      
    backgroundImage:`url(${process.env.PUBLIC_URL+ "/7536.jpg"})`,
    height:'120vh',
    marginTop:'-70px',
   
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    
};



    
    
        return (
           <div style={myStyle}>
            
        
                
                <div class="container">
                
                  <div class="container">
                    
                   <h1></h1>
                    <br></br>
                    <br></br>
                    <br />
                    <br />
                    <h1 align='center'>Laboratory Reports</h1>
                  
                          <table className='table table-dark table-striped'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Lab Name</th>
                            <th>Date</th>
                           
                            <th>Report</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item=>(
                                <tr key={item.PatientId}>
                                  <td>{item.id}</td>
                                  <td>{item.labname}</td>
                                    <td>{item.date}</td>
                                  
                                    <td> <a href={item.img} className='btn btn-success'>View Report</a> </td>


                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                   
               
                    <Link to={`/pathead/${id}`}> 
                                    <button className="btn btn-success">Back To Home</button>
                                    </Link> <br />
                  
                  </div>
                </div>
                </div>
        
        
      
              
        
            
          
            
        );
    
}

