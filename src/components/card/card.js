import React from "react";

export const Card = props => 
    <div>
        <h1>{props.monster.name}</h1>
        <img src={`https://robohash.org/${props.monster.id}`} alt="" />
    </div>

