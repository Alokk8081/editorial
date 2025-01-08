import React from "react";
import { useState } from "react";
import data from "./Data";
import Tours from "./Tour";
import  "./Teams.css";


const Teams=() => {
    const[tours, setTours]= useState(data);  

    
    

    return(
        <div> 
            <Tours tours={tours}></Tours>
        </div>
    )
};
export default Teams;
