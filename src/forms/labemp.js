import React, { Component } from "react";

export default class Labempform extends Component {
    render(){
    return(
        <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
            <div className="wrapper wrapper--w680">
                <div className="card card-4">
                    <div className="card-body">
                        <h2 align="center" className="title">Laboratory Employee Registartion</h2>
                        <form method="POST">

                            

                            <div className="row row-space">

                                

                                    <div className="input-group">
                                        <label className="label">Employee Name</label>
                                        <input className="input--style-4" type="text" name="name" />
                                    </div>
                                

                            </div>

                            <div className="row row-space">
                                
                                    <div className="input-group">
                                        <label className="label">Username</label>
                                        <input className="input--style-4" type="text" name="username" />
                                    
                                </div>
                                
                                    <div className="input-group">
                                        <label className="label">Password</label>
                                        <input className="input--style-4" type="password" name="password" />
                                    
                                </div>

                            </div>


                            <div className="row row-space">
                                
                                    <div className="input-group">
                                        <label className="label">Email</label>
                                        <input className="input--style-4" type="email" name="email" />
                                    
                                </div>
                                
                                    <div className="input-group">
                                        <label className="label">Phone Number</label>
                                        <input className="input--style-4" type="text" name="phone" />
                                    </div>
                                
                            </div>

                            <div className="row row-space">
                                
                                <div className="input-group">
                                        <label className="label">Address</label>
                                        <input className="input--style-4" type="text" name="add" />
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