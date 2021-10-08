import React, { Component } from 'react';

export class Main extends Component{
    constructor(){
        super();
        this.state = {
            companies: [],
        }
    }

    render(){
        return (
            <div>
                <div className="flex justify-around pt-4">
                    <div>전체 카테고리</div>
                    <div>프리미엄 홍보관 </div>
                    <div>홍보관</div>
                    <div>전자계약</div>
                    <div>공개입찰</div>
                </div>
                <div>banner</div>
                <div></div>
            </div>
        );
    }
}