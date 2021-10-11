import React from "react";

export const Intro = props =>(
    <div className="text-center w-4/5 m-auto ">
        <div className="p-4">
            <img src="" alt="banner" className="w-full bg-black h-44"/>
            <h2 className="text-xl border-b-2 my-4 p-4">기업의 Needs에 적합한 비즈니스 브릿지 서비스 제공</h2>
        </div>
        <div className="grid grid-cols-4 my-6 pt-4">
            <div className="w-3/4 m-auto">
                <img src="" alt="banner" className="border h-32 w-full mb-3"/>
                <div>국내 기업정보 제공</div>
            </div>
            <div className="w-3/4 m-auto">
                <img src="" alt="banner" className="border h-32 w-full mb-3"/>
                <div>기업 홍보관 제공 </div>
            </div>
            <div className="w-3/4 m-auto">
                <img src="" alt="banner" className="border h-32 w-full mb-3"/>
                <div>전자계약 서비스 제공</div>
            </div>
            <div className="w-3/4 m-auto">
                <img src="" alt="banner" className="border h-32 w-full mb-3"/>
                <div>공개입찰 서비스 제공</div>
            </div>
        </div>

        <div className="px-8">
            <div className="text-left p-3 ml-2">국내 기업정보 제공</div>
            <div className="border mb-6 py-4">다양한 산업형태의 국내 기업들의 정보를 (주)비브에서 한곳에 모아 정보를 제공하여 줍니다. <br />고객들의 거래처 발굴 거래처 비즈니스 제안을 (주)비브 플랫폼과 함께 비대면으로 효율적인 비즈니스를 진행해 보세요. <br />정보출처 – 국세청 오픈 API / 인터넷등기소 오픈 API / 자체 발굴 DB정보</div>
            <div className="text-left p-3 ml-2">기업 홍보관 제공</div>
            <div className="border mb-6 py-4">다양한 산업의 기업을 소개해 보세요. 기업의 사업을 보다 효과적으로 B2B 시장에 홍보할 수 있습니다. <br />이런 기업 추천드립니다. <br />1. 초기 기업을 알리고자 하는 스타트업 <br />2. 영업망을 다변화 시키고 싶은 기업</div>

            <div className="text-left p-3 ml-2">전자계약 서비스 제공</div>
            <div className="border mb-6 py-4"> 사업을 하기위해 계약서는 필수조건!! <br />서면 계약서의 관리소홀 분실등의 리스크를 전자계약으로 상호간 효율적인 계약을 진행해 보세요. <br />표준계약서 부터 (주)비브가 제공하는 변호사 검토 계약서 까지 다양한 계약을 진행해 보세요.</div>

            <div className="text-left p-3 ml-2">공개입찰 서비스 제공</div>
            <div className="border mb-6 py-4"> 프로젝트 입찰을 아직도 대면으로 하시나요? <br />(주)비브와 함께 다양한 프로젝트를 효율적으로 공개입찰 하여 비즈니스를 이어나가 보세요. <br />업무효율을 돕는 공개입찰 서비스</div>
        </div>

        <div className="px-8">
            <h2 className="text-left p-2 ml-4 text-lg">기업 연혁</h2>
            <hr />
            <div className="flex gap-4 pt-2">
                <div className="border px-5 py-3 h-full">2021</div>
                <div className="text-left ml-4">
                    <div>08 (주)비브 창립</div>
                    <div>08 (주)비브 플랫폼 화면기획 </div>
                    <div>09 (주)비브 개발착수</div>
                    <div>12 (주)비브 플랫폼 데모완료</div>
                </div>
            </div>
            <hr className="mb-2 mt-6"/>
            <h2 className="text-left p-2 ml-4 text-lg">기업 경쟁력</h2>
            <div className="grid grid-cols-4 gap-4">
                <div className="w-3/4 h-32">
                    <img src="" alt="" className="border h-32 w-full mb-3" />
                    <div>특허번호</div>
                </div>
                <div className="w-3/4 h-32">
                    <img src="" alt="" className="border h-32 w-full mb-3" />
                    <div>특허번호</div>
                </div>
                <div className="w-3/4 h-32">
                    <img src="" alt="" className="border h-32 w-full mb-3" />
                    <div>특허번호</div>
                </div>
                <div className="w-3/4 h-32">
                    <img src="" alt="" className="border h-32 w-full mb-3" />
                    <div>특허번호</div>
                </div>
            </div>
        </div>
    </div>
)