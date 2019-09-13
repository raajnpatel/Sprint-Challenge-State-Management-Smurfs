import React, { useState } from "react";
import axios from "axios";
import "./App.css"

const SmurfsAddForm = () => {
    const [smurf, setSmurf] = useState({
        name: "",
        age: "",
        height: ""
    });

    const handleChanges = e => {
        setSmurf({ ...smurf, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(smurf);
        setSmurf({
            name: "",
            age: "",
            height: ""
        });
    };
    return (
        <div className="smurfForm">
            <form onSubmit={handleSubmit}>
                <div>
                <input
                    type="text"
                    value={smurf.name}
                    name="name"
                    placeholder="Name for Smurf"
                    onChange={handleChanges}
                />
                </div>
                <div>
                <input
                    type="text"
                    value={smurf.age}
                    name="age"
                    placeholder="Age for Smurf"
                    onChange={handleChanges}
                />
                </div>
                <div>
                <input
                    type="text"
                    value={smurf.height}
                    name="height"
                    placeholder="Height for Smurf"
                    onChange={handleChanges}
                />
                </div>
                <div>
                <button>Add</button>
                </div>
                </form>
        </div>
    );
};

export default SmurfsAddForm;