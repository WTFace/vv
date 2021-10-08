import React from "react";

export const Banner = props => (
    <div className="my-5">
        <div>
            <span>{props.title}</span>
            <button className="float-right">더보기 &gt; </button>
        </div>
        <div className="grid grid-cols-4 gap-4">
            {props.data.map(d => (
                <div className="" key={d.id}>
                    <div className={`w-full h-${props.height} bg-gray-600`}></div>
                    <div>{d.name}</div>
                    <div>{d.industry}</div>
                    <div>{d.type}</div>
                </div>
            ))}
        </div>
    </div>
);