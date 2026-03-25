import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import LineIcon from './LineIcon';

const LineQrPromo = ({ url = "https://lin.ee/A2VWWj87" }) => {
    return (
        <div className="w-full h-full min-h-[250px] bg-[#06C755] text-white flex flex-col justify-center items-center py-6 px-4 font-sans relative overflow-hidden" aria-label="LINE Official Account QR Code">
            
            <div className="flex w-full items-center justify-center gap-4 z-10">
                {/* Left Side: LINE Official */}
                <div className="flex flex-col items-center">
                    <LineIcon size={80} className="text-white" textColor="#06C755" />
                    <span className="font-extrabold text-[1rem] sm:text-lg mt-2 tracking-wide drop-shadow-sm whitespace-nowrap">LINE Official</span>
                </div>

                {/* Right Side: QR Code */}
                <div className="bg-white p-2.5 sm:p-3 rounded-3xl shadow-xl relative ml-1 sm:ml-2 shrink-0">
                    <QRCodeSVG 
                        value={url} 
                        size={110} 
                        level="M" 
                        includeMargin={false}
                        className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px]"
                    />
                    {/* Small LINE Overlay in Middle of QR */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 py-0.5 rounded border border-white flex items-center justify-center shadow-sm">
                         <span className="text-black font-extrabold text-[10px] sm:text-[12px] leading-none tracking-tighter">LINE</span>
                    </div>
                </div>
            </div>
            
            {/* Bottom Text */}
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-6 z-10 tracking-widest drop-shadow-md">
                สแกนได้เลย
            </h2>
            
            {/* Background Decorative Element */}
            <div className="absolute top-[-20%] right-[-10%] w-[150%] h-[150%] border-[30px] border-white/10 rounded-full opacity-50 pointer-events-none mix-blend-overlay -z-0"></div>
            <div className="absolute bottom-[-10%] left-[-20%] w-[100%] h-[100%] border-[20px] border-white/5 rounded-full opacity-30 pointer-events-none mix-blend-overlay -z-0"></div>
        </div>
    );
};

export default LineQrPromo;
