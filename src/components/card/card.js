import React from "react";

export const Card = props => 
    <div className="p-2 border-2 border-blue-500">
        <h1>{props.monster.name}</h1>
        <img src={`https://robohash.org/${props.monster.id}`} alt="" />
    </div>

