import React,{useState,useEffect,Component} from "react";
import { Link,useParams } from "react-router-dom";
import axios from "axios";


export default function HospView(){
  const[items,setItems]=useState([])
  const[doc,setDoc]=useState([])
  const {id}=useParams();
  useEffect(()=>{
      axios.get(`http://localhost:8001/gethosp/${id}`).then((resp)=>setItems({...resp.data[0]}))
      axios.get(`localhost:8001/getdoctors/${id}`).then((response)=>{
        const repo=response.data
        setDoc(repo)
      })
      
     
  },[id]);
      
    
    
    
      return(
        <div>
        <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
<div class="wrapper wrapper--w680">
   <div class="card card-4">
       <div class="card-body">
           <h2 class="title" align="center">Appointment</h2>
           <form method="POST" action="http://localhost:8001/appoint">
            
               <div class="row row-space">

                   <div class="col-2">
                   <div class="input-group text-center">
                           <label class="label">Hospital Name</label>
                           <input class="input--style-4" type="text" name="hospname" value={items.name}/>
                       </div>

                       <div class="input-group text-center">
                           <label class="label">Patient Name</label>
                           <input class="input--style-4" type="text" name="name" value={doc.D} />
                       </div>
                   </div>
                   
               </div>

               <div class="row row-space">
                   <div class="col-2">
                       <div class="input-group">
                           <label class="label">Doctor</label>
                          
                           <input class="input--style-4" type="text" name="dname"  />
                       </div>
                   </div>
                   <div class="col-2">
                       <div class="input-group">
                           <label class="label">Appointment</label>
                           <div class="input-group-icon">
                               <input class="input--style-4 js-datepicker" type="date" name="date"  />
                               <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                           </div>
                       </div>
                   </div>
                   <div class="col-2">
                       <div class="input-group">
                           <label className="label">Choose Gender<br></br></label>
                           <div>
                               <select name="gender" className="form-select form-select-lg mb-3">
                                   <option disabled="disabled" selected="selected">Choose option</option>
                                   <option>Male</option>
                                   <option>Female</option>

                               </select>
                               <div className="select-dropdown"></div>
                           </div>
                           </div>
                       </div>

               </div>
               <div class="row row-space">
                   <div class="col-2">
                       <div class="input-group">
                           <label class="label">Email</label>
                           <input class="input--style-4" type="email" name="email" />
                       </div>
                   </div>
                   <div class="col-2">
                       <div class="input-group">
                           <label class="label">Phone Number</label>
                           <input class="input--style-4" type="text" name="phone" />
                       </div>
                   </div>
               </div>
               <div class="row row-space">
                   
               </div>
               <div class="row row-space">
                   <div class="col-2">
                       <div class="input-group">
                           <label class="label">Address</label>
                           <input class="input--style-4" type="text" name="add" />
                       </div>
                   </div>
               </div>
               <div class="row row-space">
                  
               </div>



               <div class="p-t-15">
                   <button class="btn btn--radius-2 btn--blue" type="submit">Submit</button>
                   
               </div>
           </form>
       </div>
   </div>
</div>
</div>
       
       
   </div>


  
    )
}