import React from "react";
import "./СustomButton.scss";

export default function СustomButton({text, className}){
    return(
        <button id="customButton" className={className}>
            {text}
        </button>
    );
}