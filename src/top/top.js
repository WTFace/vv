import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Nav } from './nav';
import { Search } from './search';
import { Update } from './update';

export class Top extends Component{

    render(){
        return (
            <div className="top px-8">
                <div className="mt-3 border-b-2 pb-2">
                    <Nav></Nav>
                    <div className="flex justify-around items-center mt-2">
                        <Link to="/">
                            <img src="" alt="LOGO" width="150" height="50"/>
                        </Link>
                        <Search></Search>
                        <Update></Update>
                    </div>
                </div>
            </div>
        );
    }
}
