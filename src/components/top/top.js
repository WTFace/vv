import React, { Component } from 'react';
import { Nav } from './nav';
import { Search } from './search';
import { Update } from './update';

export class Top extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div>
                <Nav></Nav>
                <div className="flex justify-around items-center">
                    <img src="" alt="LOGO" width="150" height="50"/>
                    <Search></Search>
                    <Update></Update>
                </div>
            </div>
        );
    }
}
