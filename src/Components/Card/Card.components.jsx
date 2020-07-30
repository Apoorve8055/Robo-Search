import React from 'react';
import './Card.style.css';

export const Card = props =>{
    return <div className="Card">
    <img 
    alt="robo" 
    src={`https://robohash.org/${props.roboData.name}?set=set6&size=180x180`}/>
    <h2>{props.roboData.name}</h2>
    <h5>{props.roboData.email}</h5>
    </div>;
}