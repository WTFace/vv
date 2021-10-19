import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Footer extends Component{
    render(){
        return (
            <div className="py-4">
                <div className="grid grid-cols-2 mt-2 p-4 border-t-2">
                    <div className="grid grid-cols-2">
                        <div>
                            <div>고객센터 : 070-8691-3773</div>
                            <div>09:00 ~ 18:00 (점심시간 : 12:00 ~ 13:00)</div>
                        </div>
                        <button className="border border-gray-500 py-1 ml-4 w-1/2">1:1 문의</button>
                    </div>
                    
                    <div className="flex justify-end gap-8 pr-4">
                        <Link to="intro">회사소개</Link>
                        <Link to="location">회사약도</Link>
                        <Link to="terms-of-use?q=terms">이용약관</Link>
                        <Link to="terms-of-use?q=private">개인정보처리방침</Link>
                    </div>
                </div>

                <div className="border-t-2 p-3
                ">(주)비브 l 경기도 동탄대로 643, 801호 (동탄역센테라아이티타워) l 대표 : 서동혁 I 개인정보관리책임자 : 서동혁 I 사업자등록번호 I 517-81-02465<br/>통신판매업신고 :</div>
            </div>
        );
    }
}
