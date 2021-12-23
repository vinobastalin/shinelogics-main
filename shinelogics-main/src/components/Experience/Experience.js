import React from 'react'
import "./Experience.css"
import { useState } from "react";
import folder from "../../assets/folder.jpg"
const Experience = () => {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
    }
    return (
        <div className="containerexp">
            <div className="containerexp__top">
                <p>Join us as we create the future and shape thousands of lives globally every day!</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="formcontainer__file">
                    <div className="formcontainer__icon">
                        <img src={folder} alt="/"></img>
                    </div>
                    <div className="formcontainer__div">
                        <div className="formcontainer__sub">
                            <div className="formcontainer__sub1">
                                <p>Recuiters want your resume</p>
                            </div>
                            <br />
                            <div className="formcontainer__sub2">
                                <p>Upload your resume and get connect with Shinelogics</p>
                            </div>
                        </div>
                        <input
                            type="file"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input type="submit" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Experience
