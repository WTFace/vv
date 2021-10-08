import React from "react";
import { Link } from "react-router-dom";

export const Nav = props => (
    <div className="flex justify-end gap-8 border-b-2">
        <Link to="login">1개월 무료이용</Link>
        <Link to="login">로그인</Link>
        <Link to="register">회원가입</Link>
        <Link to="mypage">마이페이지</Link>
        <Link to="support">고객센터</Link>
    </div>
);