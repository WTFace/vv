import React from "react";

export const Ask = () =>(
    <div>
        <h2 className="text-center">1:1 문의하기</h2>
        <div className="flex justify-center gap-28">
            <div className="p-4 text-center">
                <h2 className="mb-6">Q&A 문의하기</h2>
                <button className="border-2 p-2 px-3">바로가기</button>
            </div>
            <div className="p-4 text-center">
                <h2 className="mb-6">카카오톡 문의하기</h2>
                <img src="https://w.namu.la/s/059f8bf3e629d3f2e343fe3f3f10809022d58800962db675d233429660bf98d9ceccd60e23b1324d090c87485833b10c2c4503c93a230003ba67d5fcafa527935ccb956c3f2847a98c893a03ae19ef9baf4a5210cf2082ba2e2607770bb1a89d" alt="" />
            </div>
        </div>
    </div>
)