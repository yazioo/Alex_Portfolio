import React, { memo } from 'react';
import { Library, Piano } from 'lucide-react';

const FloatingStats: React.FC = memo(() => (
    <div className="absolute right-0 lg:right-[10%] top-[20%] z-30 hidden lg:flex flex-col gap-6 pointer-events-none">
        <div className="animate-float-delayed relative z-20">
            <div className="ios-card p-6 rounded-[2rem] w-52 text-center transform rotate-6 hover:rotate-0 transition-all duration-500 bg-white/80 gpu-accelerated">
                <div className="mb-4 flex justify-center">
                    <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center shadow-lg transform rotate-[-6deg]">
                        <Library className="text-white" size={24} />
                    </div>
                </div>
                <h3 className="font-extrabold text-lg text-gray-900 tracking-tight">10M+ Melodies</h3>
                <div className="mt-4 flex items-end justify-center gap-1.5 h-8 opacity-80">
                    <div className="w-1 bg-gray-800 h-3 rounded-full"></div>
                    <div className="w-1 bg-black h-6 rounded-full"></div>
                    <div className="w-1 bg-gray-600 h-4 rounded-full"></div>
                    <div className="w-1 bg-black h-8 rounded-full"></div>
                    <div className="w-1 bg-gray-700 h-5 rounded-full"></div>
                </div>
            </div>
        </div>

        <div className="animate-float relative z-10 -mt-10 ml-16">
            <div className="ios-card p-5 rounded-[1.8rem] w-48 text-center transform -rotate-3 hover:rotate-0 transition-all duration-500 bg-white/60 backdrop-blur-md gpu-accelerated">
                <div className="flex justify-between items-center mb-3">
                    <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center">
                        <Piano className="text-black" size={18} />
                    </div>
                    <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                        <span className="text-white text-[10px]">✓</span>
                    </div>
                </div>
                <h3 className="font-bold text-base text-gray-900 text-left mb-2">10k+ Genres</h3>
                <div className="h-1.5 w-full bg-gray-200/50 rounded-full overflow-hidden">
                    <div className="h-full bg-black w-3/4 rounded-full"></div>
                </div>
                <div className="flex gap-1 mt-3 justify-start opacity-30">
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                </div>
            </div>
        </div>
    </div>
));

FloatingStats.displayName = 'FloatingStats';

export default FloatingStats;