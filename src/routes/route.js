import React, { Component } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Form from "../forms/form";
import Docform from "../forms/doctorform";
import Labempform from "../forms/labemp";
import Patientform from "../forms/patientregi";
import Labform from "../forms/labform";
import Hospitalform from "../forms/hospitalform";
import Casedetails from "../forms/casedetailsform";
import Hospitalempform from "../forms/hospitalemp";
import Heros from "../pages/Sucesspage2";


import Test from "../pages/test";
import Hero from "../hero";
import Labhead from "../header/labhead";
import Logged from "../pages/loggedoff";
import Labrequestform from "../forms/requestform";
import Patienthead from "../header/patienthead";


import Save from "../forms/testform";
import Regiform from "../forms/RegistrationForm";
import Select from "../pages/selectpage";
import Regiget from "../pages/Regiget";
import Viewget from "../pages/ViewPatient";

import HospView from "../pages/appointmentpage";
import Patientget from "../pages/patientlist";
import Login from "../forms/login";
import Loginss from "../forms/doclogin";
import Labloginss from "../forms/loginlab";
import Docloginss from "../forms/doclogin";
import SelectLogin from "../pages/selectlogin";
import DataAdded from "../pages/Sucesspage2";
import Pathead from "../header/patienthead";
import Patloginss from "../forms/patientLogin";


import Getcaseinfo from "../pages/getcaseinfo";
import Viewdetail from "../pages/detailcase";
import Reportform from "../forms/report";
import GetReportinfo from "../pages/viewreport";
import HospitalHead from "../header/hospitalhead";
import Doctorlogin from "../forms/doctorlogin";
import DoctorHead from "../header/doctorhead";
import Docpatientget from "../pages/docpatient";
import Docget from "../pages/getDoctor";
import Empget from "../pages/hospemp";
import Requestget from "../pages/labpat";
import Pathospform from "../forms/existpat";
import GetHosp from "../pages/hosplist";
import Herosss from "../herro";
import Patappointget from "../pages/appointmentlist";
import Afterup from "../pages/afterup";
import Doccaseinfo from "../pages/getdoccaseinfo";
import EditCase from "../forms/editcase";
import Reports from "../pages/repport";
import Hospappointget from "../pages/hospappoint";
import Test5 from "../pages/test5";
import UploadHis from "../pages/uploadhis";
import DocReports from "../pages/docreport";




export default class Routerss extends Component {
    render(){
    return(
        <div>
        <BrowserRouter>
        <Routes>
        
            <Route path="/" element={<Herosss />}></Route>
          
            
            <Route path="/labemp" element={<Labempform />}></Route>
            <Route path="/patient" element={<Patientform />}></Route>
            <Route path="/labForm/:id" element={<Labform />}></Route>
            <Route path='/hospital' element={<Hospitalform />}></Route>
            <Route path='/report/:id'  element={<Reports />}></Route>
            <Route path='/docreport/:id' element={<DocReports />}></Route>
           
            <Route path='/case/:id' element={<Casedetails />}></Route>
            <Route path="/user/:id" element={<Test />}></Route>
            <Route path="/appoint/:id" element={<Form />}></Route>
            
            <Route path="/logged" element={<Logged />}></Route>
            <Route path='/after/:id' element={<Afterup />}></Route>
            <Route path="/dochead/:id" element={<HospitalHead />}></Route>
            <Route path="/labhead/:id" element={<Labhead />}></Route>
            <Route path="/pathead/:id" element={<Pathead />}></Route>
            <Route path="/doctorhead/:id" element={<DoctorHead />}></Route>
            <Route path='/requestlab' element={<Labrequestform />}></Route>
            <Route path="/patienthead" element={<Patienthead />}></Route>
            <Route path="/add" element={<DataAdded />}></Route>
            
           
           
            <Route path="/image" element={<Save />}></Route>
            <Route path="/regi" element={<Regiform />}></Route>
            <Route path="/getHospi" element={<GetHosp />}></Route>
            <Route path="/login" element={<SelectLogin />}></Route>
            <Route path="/select" element={<Select />}></Route>
            <Route path="/regiget/:id" element={<Regiget />}></Route>
            <Route path="/view/:id" element={<Viewget />}></Route>
            <Route path="/appointment/:id" element={<Patappointget />}></Route>
            <Route path='/hospappoint/:id' element={<Hospappointget />}></Route>
            <Route path='/test5/:id' element={<Test5 />}></Route>
            <Route path="/uploadreport/:id" element={<Reportform />}></Route>
            <Route path='/uploadhis/:id' element={<UploadHis />}></Route>


            
            <Route path="/hosp/:id" element={<HospView />}></Route>
            <Route path="/getpatient/:id" element={<Patientget />}></Route>
            <Route path="/getinfo/:id" element={<Getcaseinfo />}></Route>
            <Route path="/docaseinfo/:id/:pid" element={<Doccaseinfo />}></Route>
            <Route path="/editcase/:id" element={<EditCase />}></Route>
            <Route path="/Viewdeatils/:id" element={<Viewdetail />}></Route>
            <Route path="/viewreport/:id" element={<GetReportinfo />}></Route>
            <Route path="/docpatient/:id" element={<Docpatientget />}></Route>
            <Route path="/docget/:id" element={<Docget />}></Route>
            <Route path="/empget/:id" element={<Empget />}></Route>
            <Route path="/createDoc" element={<Docform />}></Route>
            <Route path="/hospemp/:id" element={<Hospitalempform />}></Route>
            <Route path="/labreq/:id" element={<Requestget />}></Route>
            <Route path="/pathosp/:id" element={<Pathospform />}></Route>
            
            <Route path="/doclogin" element={<Docloginss/>}></Route>
            <Route path="/lablogin" element={<Labloginss />}></Route>
            <Route path="/patlogin" element={<Patloginss />}></Route>
            <Route path="/doctorlogin" element={<Doctorlogin />}></Route>
           
            
           

        </Routes>
        </BrowserRouter>
        </div>
    )
}
}