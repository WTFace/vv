import React from "react";
import { Link } from "react-router-dom";

export const TermsOfUse = props => {
    const q = props.location.search.split('=')[1];
    const terms = (
        <article className="">
            <div className="">제1조 (목적)</div>
            <div>가나다라마바사가나다라마바사가나다라마바사 <br />가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사</div>

            <div className="mt-4">제2조 (용어정의)</div>
            <div>가나다라마바사가나다라마바사가나다라마바사 <br />가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사</div>
        </article>
        )
    const private_data = (
        <article className="">
            <div className="">개인정보처리방침 안내 </div>
            <div>가나다라마바사가나다라마바사가나다라마바사 <br />가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사</div>

            <div className="mt-4">개인정보의 수집범위 </div>
            <div>가나다라마바사가나다라마바사가나다라마바사 <br />가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사</div>
        </article>
    )

    const body = q === 'terms' ? terms : private_data
    const activeClass = 'border-2 font-semibold';
    const inactive = 'border text-gray-400';

    return (
        <div>
            <h3 className="text-center text-2xl pb-4">이용약관 & 개인정보처리방침</h3>
            <div className="flex justify-center gap-4 my-4">
                <Link 
                    className={`w-36 text-center px-4 py-0 rounded ${q === 'terms' ? activeClass : inactive}`} 
                    to="terms-of-use?q=terms">
                        이용약관
                </Link>
                <Link 
                    className={`w-26 text-center px-4 py-0 rounded ${q === 'private' ? activeClass : inactive}`} 
                    to="terms-of-use?q=private">
                        개인정보처리방침
                </Link>
            </div>
            <div className="border p-6 w-3/4 m-auto">{body}</div>
        </div>
    );
};