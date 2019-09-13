import React, { useState } from "react";
import axios from "axios";

const SmurfsAddForm = () => {
    const [smurf, setSmurf] = useState({
        name: "",
        age: "",
        height: ""
    });

    const handleChangesName = e => {
        setSmurf({ ...smurf, name: e.target.value });
    };

    const handleChangesAge = e => {
        setSmurf({ ...smurf, age: parseInt(e.target.value) });
    };

    const handleChangesHeight = e => {
        setSmurf({ ...smurf, height: e.target.value + "cm" });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Form Submission of Smurf:", smurf);
        //Add Post service
        axios
            .post(`http://localhost:3333/smurfs`, smurf)
            .then(res => console.log("Response from POST Request", res))
            .catch(err => console.log("Error from POST Request", err.response));
        setSmurf({
            name: "",
            age: 0,
            height: ""
        });
    };
    return (
        <div className = "smurfForm">
        <form onSubmit={handleSubmit}>
        <div>
            <input
                type="text"
                value={smurf.name}
                name="name"
                placeholder="Name for Smurf"
                onChange={handleChangesName}
            />
        </div>
        <div>
            <input
                type="number"
                value={smurf.age}
                name="age"
                placeholder="Age for Smurf"
                onChange={handleChangesAge}
            />
        </div>
        <div>
            <input
                type="text"
                value={smurf.height}
                name="height"
                placeholder="Height for Smurf"
                onChange={handleChangesHeight}
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