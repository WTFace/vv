import React from "react";

export const Banner = ({title, data, height}) => (
    <div className="my-5">
        <div>
            <span>{title}</span>
            <button className="float-right">더보기 &gt; </button>
        </div>
        <div className="grid grid-cols-4 gap-4">
            {data.map(d => (
                <div className="" key={d.id}>
                    <div className={`w-full h-${height} bg-gray-600`}></div>
                    <div>{d.name}</div>
                    <div>{d.industry}</div>
                    <div>{d.type}</div>
                </div>
            ))}
        </div>
    </div>
);