import React from "react";
import { Card } from "../card/card";

export const CardList = props => (
    <div className="card-list grid grid-cols-4 gap-4">
        {props.monsters.map(m => <Card monster={m} key={m.id}/>)}
    </div>
)
