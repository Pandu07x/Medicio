import React, { Component } from "react";

 export default class Labrequestform extends Component {
     render(){
    return(
        <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
            <div className="wrapper wrapper--w680">
                <div className="card card-4">
                    <div className="card-body">
                        <h2 align="center" className="title">Patient Form</h2>
                        <form method="POST" enctype="multipart/form-data">



                            <div className="row row-space">

                                <div className="col-2">

                                    <div className="input-group">
                                        <label className="label"> Patient Name</label>
                                        <input className="input--style-4" type="text" name="name" />
                                    </div>
                                </div>

                            </div>

                            <div className="row row-space">
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">Age</label>
                                        <input className="input--style-4" type="text" name="age" />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">Adresss Area</label>
                                        <input className="input--style-4" type="password" name="add" />
                                    </div>
                                </div>

                            </div>


                            <div className="row row-space">
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">Email</label>
                                        <input className="input--style-4" type="email" name="email" />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">Phone Number</label>
                                        <input className="input--style-4" type="text" name="phone" />
                                    </div>
                                </div>
                            </div>

                            <div className="row row-space">
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">Prescription</label>
                                        <input className="input--style-4" type="file" name="pres" />
                                    </div>
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
 }