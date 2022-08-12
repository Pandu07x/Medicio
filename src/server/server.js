const express = require("express");
const mysql = require("mysql");
const bodyParser=require('body-parser')
const cors=require('cors')
const multer=require('multer')
const path=require('path')
const accountSid = 'AC7a5df5b3510008e8f82c14e1d7bbd3c0'; 
const authToken = '30d1d50d7b0e7c66814804ef4cd1fe3b'; 
const client = require('twilio')(accountSid,authToken);
const session=require('express-session')
var cookieParser = require('cookie-parser');
const validate = require('validate-phone-number-node-js');
const exp = require("constants");




const app = express();
app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(express.static('public'))
app.use(express.static("./server"))
app.use('/images', express.static('images'));
const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    user:"root",
    password:"",
    database:"project"
});

const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './images/')    
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    },
  
})

const upload = multer({
    storage: storage
});
app.use(session({
    secret:"Project is hell",
    resave:true,
    saveUninitialized:false,
    cookie:{
        expires:120
    }
}))

app.get('/',function(req,res){
    console.log("Cookies :",req.cookies)
    res.clearCookie()
    console.log('cookie:',req.cookies)
})

app.post('/register', (req, res)=>{

    const username= req.body.uname
    const password= req.body.pass
    const values=[[username,password]]
    const sql="insert into usermst (username, password) values ?";

    db.query(sql,[values],(err, result)=>{
        if(err) throw err;
        console.log("Data Added SucessFully")
        res.send("Data Added")
    });
});
app.get('/show',(req,res)=>{
    db.query("SELECT * FROM usermst",(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

app.post('/appoint',(req,res)=>{
    const hosp=req.body.hospid;
    const pid=req.body.pid;
    const name=req.body.name;
    const hospname=req.body.hospname;
    const doctor=req.body.dname;
    const date=req.body.date;
    const gender=req.body.time;
    
   
    const phone=req.body.phone;
    const address=req.body.add;
    const status=req.body.status;

    const values=[[hosp,pid,name,hospname,doctor,date,gender,phone,address,status]]
    const sql="INSERT INTO appointment (HospId,PatientId,name,hospital_name,doctor,date,time,phone,address,status) VALUES ?";
    db.query(sql,[values],(err,result)=>{
        if(err) throw err;
        res.send(result)
        

    })
    
})

app.get("/delete/:id",(req,res)=>{
    const id=req.params.id
    const sql="DELETE FROM appointment WHERE id=?";
    db.query(sql,[id],(err,result)=>{
        if(err) throw err;
        console.log("deleteted Sucessfulyy")
        
    })
})
app.get("/patdelete/:id",(req,res)=>{
    const id=req.params.id
    const sql="DELETE FROM pathosp WHERE id=?";
    db.query(sql,[id],(err,result)=>{
        if(err) throw err;
        console.log("deleteted Sucessfulyy")
        
    })
})


app.post("/login",(req,res)=>{
    const username=req.body.uname;
    const password=req.body.pass;
    const value=[[password]]
    const sql="SELECT * FROM usermst WHERE username =? AND  password =?";
    db.query(sql,[username,password],(err,result)=>{
        if(err) throw err;
        
        
        if(result.length>0){
            res.redirect("http://localhost:3000/logged")
            
        
        }else{
            res.send("Wrong Passoe")
        }
    })
})
app.get('/data',(req,res)=>{
    db.query("SELECT * FROM appointment",(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

app.post("/doclogine",(req,res)=>{
    const uname=req.body.uname;
    const password=req.body.pass;
    const sql="SELECT * FROM registration WHERE username=? AND Password=? AND user='Hospital' ";
    db.query(sql,[uname,password],(err,result)=>{
         Object.keys(result).forEach(function(key){
            var rows=result[key]
            var id=rows.id
                if(result.length>0){
                    res.redirect(`http://localhost:3000/dochead/${id}`)
                }
                else{
                    res.send("error")
                }
            

    })

})
})
app.post("/doclogins",(req,res)=>{
    const uname=req.body.uname;
    const password=req.body.pass;
    const sql="SELECT * FROM registration WHERE username=? AND Password=? AND user='Hospital' ";
    db.query(sql,[uname,password],(err,result)=>{
        if(result){
            res.send(result)
        }
        else{
            res.send("error");
        }

    })

})
app.post("/doctorlogin",(req,res)=>{
    const uname=req.body.uname;
    const password=req.body.pass;
    const sql="SELECT * FROM doctor_info WHERE  Username=? AND Password=? ";
    db.query(sql,[uname,password],(err,result)=>{
        if(err) throw err;
        if(result){
            res.send(result)
        }
        else{
            res.send("error");
        }

    })

})

app.post("/lablogin",(req,res)=>{
    const uname=req.body.uname;
    const password=req.body.pass;
    const sql="SELECT * FROM registration WHERE username=? AND Password=? AND user='Laboratory' ";
    db.query(sql,[uname,password],(err,result)=>{
        if(result){
            res.send(result)
        }
        else{
            res.send("error");
        }

    })

})
app.post("/patlogin",(req,res)=>{
    const uname=req.body.uname;
    const password=req.body.pass;
    const sql="SELECT * FROM patient_info WHERE Username=? AND Password=?  ";
    db.query(sql,[uname,password],(err,result)=>{
        if(result){
            res.send(result)
        }
        else{
            res.send("error");
        }

    })

})
app.get("/getProfile/:id",(req,res)=>{
    const id=req.params.id
    db.query("SELECT * FROM patient_info WHERE PatientId=? ",[id],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

app.post('/logins',(req,res,next)=>{
    const username=req.body.uname;
    const password=req.body.pass;

    const sql="SELECT * FROM registration WHERE username=? AND password=? ";
    db.query(sql,[username,password],(err,result,fields)=>{
        if(err) throw err;
        
        Object.keys(result).forEach(function(key){
            var rows=result[key]
            var user=rows.user
            var passwords=rows.password
            

            if(result && user=="Laboratory"){
                res.send(result)
            }
            else if(result && user=="Hospital" ){
                res.send(result)
            }
            else if(!result){
                res.send("No User Found")
            }
            else{
                res.send("Invalid Details")
            }
           

        })
        
        
      
    
        
    })
})
app.post("/cases",(req,res)=>{
    const pid=req.body.pid;
    const docid=req.body.docid
    const HospId=req.body.hospid
    const dname=req.body.dname
    const dis=req.body.dis
    const hname=req.body.hname
    const date=req.body.date;
    const pres=req.body.prescription;
    const desc=req.body.desc;
    const requests=req.body.requests;
    const special=req.body.special;

    const sql="INSERT INTO case_details (PatientId,DoctorID,HospId,DoctorName,HospName,Date,disease,Prescription,Description,Report_Request,Special_Notes) VALUES ?";
    const values=[[pid,docid,HospId,dname,hname,date,dis,pres,desc,requests,special]]
    db.query(sql,[values],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })

})
app.get("/getcase",(req,res)=>{
    db.query("SELECT * FROM case_details",(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
app.get("/deletecase/:id",(req,res)=>{
    const id=req.params.id;
    db.query("DELETE FROM case_details WHERE CaseId=?",[id],(err,result)=>{
        if(err) throw err;
        res.redirect("")
    })
})
app.post("/image",(req,res)=>{
    const image=req.body.images;
    const values=[[image]]
    const sql="INSERT INTO image(image) VALUES ?"
    db.query(sql,[values],(err,result)=>{
        if(err) throw err;
        console.log("Image Saved")
        res.send("saved")
    })
})
app.post("/registration",(req,res)=>{
    const user=req.body.hosp;
    const name=req.body.name;
    const addr=req.body.add;
    const phone=req.body.phone;
    const email=req.body.email;
    const state=req.body.state;
    const city=req.body.city;
    const pincode=req.body.pincode;
    const type=req.body.type;
    const specal=req.body.special
    const username=req.body.uname;
    const password=req.body.pass;

    const values=[[user,name,type,specal,addr,phone,email,state,city,pincode,username,password]]
    const sql="INSERT INTO  registration(user,name,type,speciality,address,phone,email,state,city,pincode,username,password) VALUES ?"
    db.query(sql,[values],(err,result)=>{
        if(err) throw err;
        res.redirect('http://localhost:3000/add')
    })
})
app.post("/insertdoc",(req,res)=>{
    var phoneno=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(!req.body.name || !req.body.phone){
        console.log("please fill Properly")
    }
    else{
        const name=req.body.name
        const hospid=req.body.hospid
        const spe=req.body.spe
        const desi=req.body.desi
        const uname=req.body.uname
        const pass=req.body.pass
        const phone=req.body.phone
        const email=req.body.email
        const add=req.body.add
    
        const values=[[name,spe,desi,uname,pass,phone,email,add]]
        const sql="INSERT INTO doctor_info(DoctorName,speciality,designation,Username,Password,ContactNo,Email_ID,Address) VALUES ?"
        db.query(sql,[values],(err,result)=>{
            if(err) throw err;
            res.send(result)
        })
    }
   
   

})
app.post("/inhospemp",(req,res)=>{
    if(!req.body.name){
        console.log("Error")
    }else{
        const hospid=req.body.id
        const name=req.body.name
        const desi=req.body.desi
        const uname=req.body.uname
        const pass=req.body.pass
        const phone=req.body.phone
        const email=req.body.email
        const add=req.body.add
        const values=[[hospid,name,desi,uname,pass,phone,email,add]]
        const sql="INSERT INTO hosp_emp(HospId,EmpName,Designation,Username,Password,ContactNo,Email_ID,Address) VALUES ?"
        db.query(sql,[values],(err,result)=>{
            if(err) throw err;
            res.send(result)
        })
    }

})
app.get("/getemp/:id",(req,res)=>{
    const id=req.params.id
    db.query("SELECT * FROM hosp_emp WHERE HospId=?",[id],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })

})


app.get("/getalls",(req,res)=>{
    db.query("SELECT * FROM registration",(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
app.get("/getDoc/:id",(req,res)=>{
    const id=req.params.id
    db.query("SELECT * FROM doctor_info WHERE HospId=?",[id],(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})
app.get("/getall/:id",(req,res)=>{
    const id=req.params.id
    const values=[[id]]
    const sql="SELECT * FROM registration WHERE id= ?";
    db.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.send(result)

    })

})
app.post("/update/:id",(req,res)=>{
    const id=req.params.id;
    const name=req.body.name;
    const addr=req.body.add;
    const phone=req.body.phone;
    const email=req.body.email;
    const username=req.body.uname;
    const password=req.body.pass;
    const sql="UPDATE registration SET name=? ,address=?,phone=?,email=?,username=?,password=? WHERE id=?";
    db.query(sql,[name,addr,phone,email,username,password],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
app.post('/contact',(req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    const subject=req.body.sub;
    const msg=req.body.msg;
    const sql="INSERT INTO contact(name,email,subject,message) VALUES ?"
    const values=[[name,email,subject,msg]]
    db.query(sql,[values],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

app.get("/gethosp/:id",(req,res)=>{
    const id=req.params.id
    const hosp="Hospital"
    const sql="SELECT * FROM registration WHERE id=? AND user=?"
    db.query(sql,[id,hosp],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })

})
app.get("/getdoctors/:id",(req,res)=>{
    const id=req.params.id;
    db.query("SELECT * FROM doctor_info WHERE DoctorID=? ",[id],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
app.get("/getallhosp",(req,res)=>{
    const hosp="Hospital"
    db.query("SELECT * FROM registration WHERE user=?",[hosp],(err,result)=>{
        if(err) throw err;
        res.send(result)

    })
})
app.get("/getallpatients/:id",(req,res)=>{
    const id=req.params.id
    db.query("SELECT * FROM pathosp WHERE HospId=?",[id],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })

})
app.get("/getallpatientss/:id",(req,res)=>{
    const id=req.params.id
    db.query("SELECT * FROM pathosp WHERE PatientId=?",[id],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })

})
app.get("/getpatdet/:id",(req,res)=>{
    const id=req.params.id
    db.query("SELECT * FROM pathosp WHERE id=?",[id],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })

})

app.get("/getprofiles/:id",(req,res)=>{
    const id=req.params.id
    const sql="SELECT * FROM registration WHERE id=?";
    db.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
app.get("/getapp/:id",(req,res)=>{
    const id=req.params.id
    const sql="SELECT * FROM appointment WHERE HospId = ?";
    db.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
app.get("/getcaseinfo/:id",(req,res)=>{
    const id=req.params.id
    const sql="SELECT * FROM case_details WHERE PatientId=?"
    db.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })


})
app.get("/searchcaseinfo/:id",(req,res)=>{
    const id=req.params.id
    const sql="SELECT * FROM case_details WHERE CaseId=?"
    db.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })


})
app.post('/updatecase',(req,res)=>{
    const id=req.body.id
    const sql="UPDATE case_details SET Prescription='"+req.body.pres+"',Description='"+req.body.desc+"',Report_Request='"+req.body.report+"',Special_Notes='"+req.body.special+"' WHERE CaseId=?";
    db.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
    
})
app.get('/approve/:id',(req,res)=>{
    const id=req.params.id
    const sql= "UPDATE appointment SET status = 'Approved' WHERE id= ?";
    db.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
    
})
app.get('/reject/:id',(req,res)=>{
    const id=req.params.id
    const sql= "UPDATE appointment SET status = 'Rejected' WHERE id= ?";
    db.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
    
})
app.get("/getdoccaseinfo/:id/:pid",(req,res)=>{
    const id=req.params.id
    const pid=req.params.pid
    const sql="SELECT * FROM case_details WHERE DoctorID=? AND PatientId=?"
    db.query(sql,[id,pid],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })


})
app.get("/getcasedetail/:id",(req,res)=>{
    const id=req.params.id
    const sql="SELECT * FROM case_details WHERE CaseId=?"
    db.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
app.get("/uphistory/:id",(req,res)=>{
    const id=req.params.id
    const sql="SELECT * FROM test WHERE LabId=?"
    db.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
app.post('/addpatient',(req,res)=>{
    if(!req.body.name){
        console.log("Please Fill The Form")
    }
    else{
        const name=req.body.name
        const username=req.body.uname
        const password=req.body.pass
        const email=req.body.email
        const phone="+91"+req.body.phone
        const add=req.body.add
        
    
        const sql="INSERT INTO patient_info(PatientName,Username,Password,ContactNo,Email_ID,Address) VALUES ?"
        const values=[[name,username,password,phone,email,add]]
        db.query(sql,[values],(err,result)=>{
            if(err) throw err;
            res.send("Data Saved")
            
        })
    }
    
  
})
app.post("/inreq",(req,res)=>{
    if(!req.body.pid){
        console.log("Error")

    }
    else{
        const labid=req.body.labid
        const  pid=req.body.pid
         const name=req.body.name
         const add=req.body.add
         const phone=req.body.phone
         const email=req.body.email
     
         const values=[[labid,pid,name,add,phone,email]]
         const sql="INSERT INTO labrequest(labId,PatientId,Pname,Address,phone,email) VALUES ?"
         db.query(sql,[values],(err,result)=>{
             if(err) throw err;
             res.send(result)
         })
    }



})
app.get("/getpatinfo/:id",(req,res)=>{
    const id=req.params.id
    db.query("SELECT * FROM patient_info WHERE PatientId=?",[id],(err,result)=>{
        if(err) throw err
        res.send(result)
    })

})
app.post("/caseupload", upload.single('image'), (req, res) => {
    if (!req.file) {
        console.log("No file upload");
    } else {
        console.log(req.file.filename)
        const uname=req.body.uname
        const pid=req.body.pid
        const labname=req.body.labname
        const labId=req.body.labid
        const date=req.body.date
        
        const imgsrc = 'http://localhost:8001/images/' + req.file.filename
        const values=[[pid,labId,uname,date,labname,imgsrc]]
        const insertData = "INSERT INTO test(PatientId,LabId,Pname,date,labname,img) VALUES ?"
        db.query(insertData, [values], (err, result) => {
            if (err) throw err
            console.log("file uploaded")
            res.redirect(`http://localhost:3000/labreq/${labId}`)
            
        })
    }
});
app.get("/getimage/:id",(req,res)=>{
    const id=req.params.id
    db.query("SELECT * FROM test WHERE PatientId=? ",[id],(err,result)=>{
        res.send(result)
    })
})

app.get('/docpatient/:id',(req,res)=>{
    const id=req.params.id
    db.query("SELECT * FROM  pathosp WHERE DoctorID=?",[id],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

app.get('/getlab/:id',(req,res)=>{
    const id=req.params.id
    const value="Laboratory"
    const sql="SELECT * FROM registration WHERE id=? AND user=?"
    db.query(sql,[id,value],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

app.get('/getreq/:id',(req,res)=>{
    const id=req.params.id
    db.query("SELECT * FROM labrequest WHERE PatientId=?",[id],(err,result)=>{
        if(err) throw err
        res.send(result)
    })


})
app.get('/getpatreq/:id',(req,res)=>{
    const id=req.params.id
    db.query("SELECT * FROM labrequest WHERE labId=?",[id],(err,result)=>{
        if(err) throw err
        res.send(result)
    })


})

app.post('/pathosp',(req,res)=>{
    const pid=req.body.pid
    const docid=req.body.docid
    const HospName=req.body.hospname
    const dname=req.body.dname

    const hid=req.body.hospid
    const date=req.body.date
    const name=req.body.name
    const phone=req.body.phone
    const add=req.body.add

    const values=[[pid,hid,docid,name,dname,HospName,date,phone,add]]
    const sql="INSERT INTO pathosp(PatientId,HospId,DoctorID,PatientName,DoctorName,HospName,date,ContactNo,Address) VALUES ?"
    db.query(sql,[values],(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})
app.get("/getdoc/:id",(req,res)=>{
    const id=req.params.id;
    db.query("SELECT * FROM doctor_info WHERE HospId=? ",[id],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

app.get("/gethospi",(req,res)=>{
    
    const hosp="Hospital"
    const sql="SELECT * FROM registration WHERE user=?"
    db.query(sql,[hosp],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })

})

app.get('/getappoint/:id',(req,res)=>{
    const id=req.params.id
    db.query("SELECT * FROM appointment WHERE PatientId=?",[id],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
app.get('/gethospappoint/:id',(req,res)=>{
    const id=req.params.id
    db.query("SELECT * FROM appointment WHERE HospId=?",[id],(err,result)=>{
        if(err) throw err;
        res.send(result)
        
    })
})

app.get('/logout',(req,res)=>{
        console.log("Logout page");
        res.clearCookie('patientjwtoken',{path:'/'});
        res.status(200).send('User Logout');
    
})

app.get('/gethospcase/:id',(req,res)=>{
    const id=req.params.id
    db.query('SELECT COUNT(*) AS total FROM case_details WHERE HospId=?',[id],(err,result)=>{
        if(err) throw err
        res.send(result)

    })

})
app.get('/gethosppat/:id',(req,res)=>{
    const id=req.params.id
    db.query('SELECT COUNT(*) AS total FROM pathosp WHERE HospId=?',[id],(err,result)=>{
        if(err) throw err
        res.send(result)

    })

})

app.listen(8001, ()=>{
    console.log("successfully connected");
})
