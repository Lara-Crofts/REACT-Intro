import React,  { useState } from "react";

// function componnent

const StateTutorial = () => {
    //          box                   our name goes in box
    const [inputValue, setInputValue] =useState("Jessa");
let onChange = (event) => {
    const newValue = event.target.value; 
    setInputValue(newValue); /// this is how you target the input value & make it a new value
}


return (
<>
<input placeholder="enter something..." onChange={onChange}/>
{inputValue}
</>
    );
};

// be able to call it
export default StateTutorial;
