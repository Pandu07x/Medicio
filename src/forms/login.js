import React,{useState,useEffect} from "react";

export default function Login(){
    return(
        <div>
            <form action="http://localhost:8002/login" method="post">
                Username: <input type="text" name="uname"  className="form-control"/> <br />
                Passowrd:<input type="text" name="pass" className="form-control"/>
                <input type='submit'></input>
            </form>
        </div>
    )
}