import React, { useState } from "react";

const Save = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div>
            <h1>save and upload</h1>
            {selectedImage && (
                <div>
                    <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                    <br />
                    <button onClick={()=>setSelectedImage(null)}>Remove</button>
                </div>
            )}
            <br />

            <br />
            <form action="http://localhost:8001/image" method="post" >
            <input
                type="file"
                name="images"
                onChange={(event) => {
                    console.log(event.target.files[0]);
                    setSelectedImage(event.target.files[0]);
                }}
                
                
            />
            <input type="submit"></input>
            </form>
        </div>
        
    );
};

export default Save;