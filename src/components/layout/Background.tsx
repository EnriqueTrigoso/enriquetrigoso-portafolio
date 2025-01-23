import React from 'react'

const Background = () => {
    return (
        <div className="absolute min-h-screen bg-[#030014] px-[2%] sm:px-0 overflow-hidden">
            <div className="fixed inset-0">
                <div className="absolute -inset-[10px] opacity-20">
                    <div className="absolute top-0 -left-4 w-72 md:w-96 h-72 md:h-96 bg-slate-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                    <div className="absolute top-0 -right-4 w-72 md:w-96 h-72 md:h-96 bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 w-72 md:w-96 h-72 md:h-96 bg-gray-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>
        </div>
    )
}

export default Background