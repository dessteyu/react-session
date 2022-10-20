import React from "react";
import "./button.css"

export const Button = (props) => {
    return <div className="btn" {...props}>{props.name}</div>
}

export default Button;