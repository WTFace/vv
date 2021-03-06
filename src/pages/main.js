import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Banner } from '../components/banner';

export class Main extends Component{
    constructor(){
        super();
        this.state = {
            similar: [],
            categories: [],
            popular: [],
            slide: [
                {id: 1},
                {id: 2},
                {id: 3},
                {id: 4},
                {id: 5},
                {id: 6},
                {id: 7},
                {id: 8},
                {id: 9},
                {id: 10},
            ]
        }
    }

    componentDidMount(){
        this.setState({similar: [
            {
                id: 0,
                name: 'XXX',
                industry: '제조',
                type: '가구제조'
            },
            {
                id: 1,
                name: 'XXX',
                industry: '제조',
                type: 'LPM 부착'
            },
            {
                id: 2,
                name: 'XXX',
                industry: '제조',
                type: '금속가공'
            },
            {
                id: 3,
                name: 'XXX',
                industry: '제조',
                type: '멤브레인 제조'
            }
        ]});
        this.setState({popular: [
            {
                id: 0,
                name: 'XXX',
                industry: '제조',
                type: '가구제조'
            },
            {
                id: 1,
                name: 'XXX',
                industry: '제조',
                type: 'LPM 부착'
            },
            {
                id: 2,
                name: 'XXX',
                industry: '제조',
                type: '금속가공'
            },
            {
                id: 3,
                name: 'XXX',
                industry: '제조',
                type: '멤브레인 제조'
            }
        ]});
        this.setState({categories: [
            {
                id: 0,
                industry: '제조업'
            },
            {
                id: 1,
                industry: '유통업'
            },
            {
                id: 2,
                industry: 'IT'
            },
            {
                id: 3,
                industry: '운송업'
            },
        ]})
    }

    render(){
        return (
            <div>
                <div className="flex justify-around py-4">
                    <div>전체 카테고리</div>
                    <div>프리미엄 홍보관 </div>
                    <div>홍보관</div>
                    <div>전자계약</div>
                    <div>공개입찰</div>
                </div>
                <Carousel autoPlay={true} interval={5000} showIndicators={false} infiniteLoop={true}>
                    {this.state.slide.map(i => <div className="p-4 h-16 bg-gray-400" key={i.id}>{i.id}</div>)}
                </Carousel>
                <Banner height="24" title="유사 회원 서비스" data={this.state.similar}></Banner>
                <Banner height="24" title="추천 카테고리" data={this.state.categories}></Banner>
                <Banner height="24" title="다른 회원이 많이 보고 있는 서비스" data={this.state.popular}></Banner>
            </div>
        );
    }
}