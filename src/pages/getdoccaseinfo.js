import axios from 'axios';
import React, { Component ,useState,useEffect} from 'react';
import { useParams,Link } from 'react-router-dom';



export default function Doccaseinfo() {
    const {id} =useParams()
    const {pid}=useParams()
    const [did,setDid]=useState('')
    
useEffect(()=>{
    fetchItems();
    axios.get(`http://localhost:8001/getpatinfo/${pid}`).then((res)=>{
      setDid(res.data[0])
      console.log(res.data[0].PatientName)
    })
   
  
},[])
  const[items,setItems]=useState([])
  
  const fetchItems=async()=>{
      const data=await fetch(`http://localhost:8001/getdoccaseinfo/${id}/${pid}`)
      const items=await data.json();
      setItems(items)
  }
  const myStyle={
      
    backgroundImage:`url(${process.env.PUBLIC_URL+ "/slide2.png"})`,
    height:'120vh',
    marginTop:'-70px',
   
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    
};
    
    
        return (
          <div style={myStyle}>
                
                <div class="container">
                
                  <div class="container">
                    
                   
                    <br></br>
                    <br></br>
                    <br />
                    <br />
                    <br />
                    <h1 align='center'>Case Details </h1>
                    <h2><p className='fw-bold'>Patinet Name:{did.PatientName}</p></h2>
                  
                          <table className='table table-dark table-striped'>
                    <thead>
                        <tr>
                            <th>CaseNo</th>
                            <th>Date</th>
                            <th>Disease</th>
                            <th></th>
                            <th />
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item=>(
                                <tr>
                                    <td>{item.CaseId}</td>
                                    <td>{item.Date}</td>
                                    <td>{item.disease}</td>
                                    <td>  <Link to={`/docreport/${item.CaseId}`}> 
                                    <button className="btn btn-success">Details</button>
                                    </Link> <br /></td>
                                    <td>  <Link to={`/editcase/${item.CaseId}`}> 
                                    <button className="btn btn-success">Edit</button>
                                    </Link> <br /></td>


                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                   
               
                    <Link to={`/docpatient/${id}`}> 
                                    <button className="btn btn-success">Back To Home</button>
                                    </Link> <br />
                  
                  </div>
                </div>
                </div>
        
        
   
            
        );
    
}

