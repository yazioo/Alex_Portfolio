import React, { memo } from 'react';
import { MonitorCheck, UserCheck, Fingerprint, Printer, PenTool } from 'lucide-react';

interface FeatureBadgeProps {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    className?: string;
    delay?: boolean;
}

const FeatureBadge = memo(({ icon, title, subtitle, className = "", delay }: FeatureBadgeProps) => (
    <div className={`${delay ? 'animate-float-delayed' : 'animate-float'} opacity-90 hover:opacity-100 transition-opacity ${className}`}>
        <div className="bg-white/90 p-2 pr-5 rounded-full flex items-center gap-3 w-fit shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-sm border border-white/70 relative overflow-hidden group cursor-default gpu-accelerated">
            <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent opacity-50 group-hover:opacity-80 transition-opacity pointer-events-none rounded-full"></div>
            <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center text-white shrink-0 shadow-md relative z-10">
                {icon}
            </div>
            <div className="flex flex-col text-left relative z-10">
                <h3 className="font-bold text-xs text-gray-900 leading-none mb-0.5">{title}</h3>
                <p className="text-[10px] font-semibold text-gray-400 leading-none">{subtitle}</p>
            </div>
        </div>
    </div>
));

FeatureBadge.displayName = 'FeatureBadge';

interface LargeFeatureBadgeProps {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    className?: string;
}

const LargeFeatureBadge = memo(({ icon, title, subtitle, className = "" }: LargeFeatureBadgeProps) => (
    <div className={`animate-float z-20 ${className}`}>
        <div className="bg-white/95 p-2.5 pr-6 rounded-full flex items-center gap-3 w-fit shadow-[0_20px_40px_rgba(0,0,0,0.1)] transform scale-110 border border-white/80 backdrop-blur-md relative overflow-hidden group gpu-accelerated">
            <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-transparent opacity-60 group-hover:opacity-90 transition-opacity pointer-events-none rounded-full"></div>
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white shrink-0 shadow-md relative z-10">
                {icon}
            </div>
            <div className="flex flex-col text-left relative z-10">
                <h3 className="font-extrabold text-sm text-gray-900 leading-none mb-0.5">{title}</h3>
                <p className="text-[11px] font-bold text-gray-400 leading-none">{subtitle}</p>
            </div>
        </div>
    </div>
));

LargeFeatureBadge.displayName = 'LargeFeatureBadge';

const FloatingFeatures: React.FC = memo(() => (
    <div className="absolute left-0 lg:left-[8%] top-[10%] bottom-0 z-30 hidden lg:flex flex-col gap-5 justify-center pointer-events-none">
        <FeatureBadge icon={<MonitorCheck size={16} />} title="Pixel Perfect" subtitle="attention to detail" />
        <FeatureBadge icon={<UserCheck size={16} />} title="User Centric" subtitle="designed for humans" className="ml-4" delay />
        <LargeFeatureBadge icon={<Fingerprint size={20} />} title="Brand Identity" subtitle="unique & memorable" className="ml-8" />
        <FeatureBadge icon={<Printer size={16} />} title="Print Ready" subtitle="CMYK optimized" className="ml-4" delay />
        <FeatureBadge icon={<PenTool size={16} />} title="Illustration" subtitle="custom vector art" />
    </div>
));

FloatingFeatures.displayName = 'FloatingFeatures';

export default FloatingFeatures;