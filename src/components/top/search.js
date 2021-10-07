import React from "react";

export const Search = props => (
    <div className="flex border-2 w-1/2 h-10">
        <input className="w-full rounded p-2" type="text"/>
        <button className="bg-white w-auto flex justify-end items-center text-gray-600 p-2 hover:text-gray-400">
        <i className="material-icons">search</i>
        </button>
    </div>
);