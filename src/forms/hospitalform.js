import React, { Component } from "react";

export default class Hospitalform extends Component {
    render(){
    return(
        <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
            <div className="wrapper wrapper--w680">
                <div className="card card-4">
                    <div className="card-body">
                        <h2 align="center" className="title">Hospital Registration</h2>
                        <form method="POST">


                            <div className="row row-space">

                                <div className="col-2">

                                    <div className="input-group">
                                        <label className="label">Hospital Name</label>
                                        <input className="input--style-4" type="text" name="name" />
                                    </div>
                                </div>

                            </div>

                            <div className="row row-space">
                                <div className="col-2">
                                    <div className="input-group form-group">
                                        <label className="label">Address</label>
                                        <textarea className="input--style-4 form-control" cols="60" rows="3"
                                                  name="address"></textarea>
                                    </div>
                                </div>
                            </div>


                            <div className="row row-space">

                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">Phone Number</label>
                                        <input className="input--style-4" type="text" name="phone" />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">Email</label>
                                        <input className="input--style-4" type="email" name="email" />
                                    </div>
                                </div>
                            </div>
                            <div className="row row-space">
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">State</label>
                                        <input className="input--style-4" type="text" name="state" />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">City</label>
                                        <input className="input--style-4" type="text" name="city" />
                                    </div>

                                </div>
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">Pin code</label>
                                        <input className="input--style-4" type="text" name="pincode" />
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