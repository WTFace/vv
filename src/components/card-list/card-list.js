import React from "react";
import { Card } from "../card/card";

export const CardList = props => (
    <div className="card-list">
        {props.monsters.map(m => <Card monster={m} key={m.id}/>)}
    </div>
)
