import React, { Component, useEffect,useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Save from "../componenets/image";
import toast from "toastify-js";
import { useNavigate } from "react-router-dom";


 export default function Reportform()  {
    const[pid,setPid]=useState([])
    const[lid,setLid]=useState([])
    const[name,setName]=useState([])
    const [labname, setLabname] = useState();
    const [date,setDate]=useState(new Date().toISOString().slice(0, 10))
    const [fileName, setFileName] = useState("");
    const [items,setItems]=useState('')
    const navigate=useNavigate()
    const [file, setFile] = useState();
    const {id} =useParams('')

    useEffect(()=>{
        axios.get(`http://localhost:8001/getreq/${id}`).then((res)=>{
            setName(res.data[0].Pname)
            setPid(res.data[0].PatientId)
            setLid(res.data[0].labId)
            console.log(pid)
        })
        axios.get(`http://localhost:8001/getlab/${lid}`).then((res)=>{
            setLabname(res.data[0].name)

        })
    })
    

    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };


  
    const upload=()=>{
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        axios.post("http://localhost:8001/caseupload",{
            pid:pid,
            uname:name,
            labname:labname,
            formData
  
        }).then((res)=>{
          console.log("Data Saved Sucessfully")
        })
      }

     const myStyle={

         backgroundImage:`url(${process.env.PUBLIC_URL+ "/form2.jpg"})`,
         height:'100vh',
         width:'auto',




         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',

     };

   

    return(
        <div style={myStyle}>
            <div className="wrapper wrapper--w680">
                <div className="card card-4">
                    <div className="card-body">
                    <form action="http://localhost:8001/caseupload" method="post" enctype="multipart/form-data" >
                        <h2 align="center" className="title">Patient Form</h2>
                        <div className="col-2">
                           

                            <div className="input-group">
                                <label className="label"> Patient Id</label>
                                <input className="input--style-4" type="text" name="pid" value={pid}  />
                                </div>
                                
                            </div>


                            <div className="row row-space">
                                
                                    <div className="input-group">
                                        <label className="label"> Patient Name</label>
                                        <input className="input--style-4"  type="text" name="uname" value={name}/>
                                    
                                </div>

                            </div>

                            <div className="row row-space">
                                
                                    <div className="input-group">
                                        <label className="label">Labname</label>
                                        <input className="input--style-4" type="text" name="labname" value={labname} />
                                    
                                </div>
                                <div className="input-group">
                                        <label className="label">LabId</label>
                                        <input className="input--style-4" type="text" name="labid" value={lid} />
                                    
                                </div>
                                <div className="input-group">
                                        <label className="label">Date</label>
                                        <input className="input--style-4" type="text" name="date" value={date} />
                                    
                                </div>
                             

                            </div>



                            <div className="row row-space">
                                
                                    <div className="input-group">
                                       <input type="file" name="image" onChange={saveFile} />
                                    </div>
                                
                            </div>


                            <div className="p-t-15">
                                <button className="btn btn--radius-2 btn--blue" type="submit">Submit</button>
                            </div>
                            </form>
                       
                    </div>
                </div>
            </div>
        </div>
    )

}
 