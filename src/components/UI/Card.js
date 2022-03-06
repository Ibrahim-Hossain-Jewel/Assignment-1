import React from "react";
import './Card.css';

const Card = (props) =>{
    //dynamicly provide the classname;
    //Now card is reuseable component here
    const classes = 'card ' + props.className;
    return <div className={classes}> {props.children}</div>
}
export default Card