import axios from 'axios';
import React, { Component ,useState,useEffect} from 'react';
import { useParams,Link } from 'react-router-dom';



export default function Getcaseinfo() {
    const {id} =useParams()
    const [doc,setDoc]=useState('')
    
  useEffect(()=>{
      fetchItems();

  },[]);
  const[items,setItems]=useState([])
  
  const fetchItems=async()=>{
      const data=await fetch(`http://localhost:8001/getcaseinfo/${id}`)
      const items=await data.json();
      
      setItems(items)
      console.log(items.DoctorId)


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
                <div className="container" style={myStyle}>
                
                  <div className="container">
                    
                   
                    <br></br>
                    <br></br>
                    <br />
                    <br />


                    <h1 align='center'>Case Details </h1>
                  
                          <table className='table table-dark table-striped'>
                    <thead>
                        <tr>
                            <th>CaseNo</th>
                            <th>Hospital Name</th>
                            <th>Doctor Name</th>
                            <th>Date</th>
                            <th>Disease</th>
                            <th></th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item=>(
                                <tr>
                                    <td>{item.CaseId}</td>
                                    <td>{item.HospName}</td>
                                    <td>{item.DoctorName}</td>
                                    <td>{item.Date}</td>
                                    <td>{item.disease}</td>
                                   
                                    <td>  <Link to={`/report/${item.CaseId}`}> 
                                    <button className="btn btn-success">Details</button>
                                    </Link> <br /></td>


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

