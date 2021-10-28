import React, { useState } from "react";
import FormInput from "../components/form-input";

export function Login(){
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });

    const handleChange = event => {
        const { value, name } = event.target;
        setInputs(prev => {
            return { ...prev, [name]: value }
            // return {...prev, ...Object.assign(prev, {[name]: value})}
        })
    };

    const handleSubmit = event => {
        event.preventDefault();
        setInputs({ email: '', password: '' });
      };

    return (
        <div className="text-center w-1/3 m-auto pt-4">
            <div className="my-4">
                <img src="" alt="LOGO" />
                <div className="font-thin">비즈니스이 모든것 / 비즈니스 브릿지</div>
            </div>
            <form action="">
                <FormInput
                    name="email"
                    type="email"
                    handleChange={handleChange}
                    value={inputs.email}
                    placeholder="이메일"
                    classes="place-center border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 focus:outline-none focus:shadow-outline"
                    required
                />
                <FormInput
                    name="password"
                    type="password"
                    handleChange={handleChange}
                    value={inputs.password}
                    placeholder="비밀번호"
                    classes="place-center border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 focus:outline-none focus:shadow-outline"
                    required
                />

                <button onClick={handleSubmit} value="로그인" className="place-center border border-gray-500 rounded w-full py-2 px-3 mb-3 bg-white">로그인</button>
            </form>
            <hr className="my-3 -mx-4 border border-gray-500" />
            <div className="pt-3">
                <div className="text-left">소셜 계정으로 로그인하기</div>
                <div className="flex gap-4 mb-3">
                    <button type="button" className="border border-gray-500 w-full py-2 px-3 mb-3 bg-white">페이스북</button>
                    <button type="button" className="border border-gray-500 w-full py-2 px-3 mb-3 bg-white">카카오</button>
                    <button type="button" className="border border-gray-500 w-full py-2 px-3 mb-3 bg-white">네이버</button>
                </div>
                <div className="text-left">
                    <span>비밀번호를 잊어버리셨나요? </span>
                    <u>
                        <a href="#">비밀번호찾기</a>
                    </u>
                </div>
                <div className="text-left">
                    <span>계정이 없다면! </span>
                    <u>
                        <a href="#">무료 회원가입</a>
                    </u>
                </div>
            </div>
        </div>
    )
};