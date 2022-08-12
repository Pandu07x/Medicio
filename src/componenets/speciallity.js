import React, {Component} from "react";

 export default class Drops extends Component{
     constructor() {
         super();
         this.state={
             DDL1:[],
             city:[],
             selectddl:""
         }
     }
     componentDidMount() {
         this.setState({
             DDL1:[
                 {name:"Lab",city:["Include all Branches"]},
                 {name:"Genral Hospital",city:["Basic Illness"]},
                 {name:"Specality",city:['Cardiology - Adult- Heart Transplant','General Surgery','Gastroenterology','Electrophysiology','Uro - Oncology','Kidney Transplant - Adult','Diabetology','Gastrointestinal Oncology','Clinical Nutrition & Dietetics','Neurology','Dental Sciences','Endocrinology','Spine Surgery','Head & Neck Surgery - Oncology','Ortho - Oncology','Bone Marrow Transplant','Physiotherapy & Rehabilitation','Pulmonology','Developmental Paediatrics','Rheumatology','ENT','Vascular']},
                 {name:"MUlti Speacility",city:["Include All Departments"]},
                
                 













             ]
         })
     }
     selectChange(e){
         this.setState({selectddl:e.target.value});
         this.setState({city:this.state.DDL1.find(x=>x.name===e.target.value).city});
     }

     render() {
        return (
            <div>
                <select value={this.state.selectddl} onChange={this.selectChange.bind(this)} name="type">
                    <option>--Select Type--</option>
                    {this.state.DDL1.map(x=>{
                        return<option>{x.name}</option>

                    })}

                </select>
                <select name="special">
                    <option selected="disabled">--select Speaclity--</option>
                    {
                        this.state.city.map(x=>{
                            return <option>{x}</option>
                        })
                    }
                </select>

            </div>

        );
    }
}