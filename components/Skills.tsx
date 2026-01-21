import React, { useEffect, memo } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { cn } from '../lib/utils';
import { MousePointer2 } from 'lucide-react';

const FigmaLogo = memo(({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256" className={className}><g fill="none"><rect width="256" height="256" fill="#f4f2ed" rx="60"/><g clip-path="url(#SVG9U8Xmbth)"><path fill="#0acf83" d="M94.347 228c18.4 0 33.333-14.933 33.333-33.333v-33.334H94.347c-18.4 0-33.334 14.934-33.334 33.334S75.947 228 94.347 228"/><path fill="#a259ff" d="M61.013 128c0-18.4 14.934-33.333 33.334-33.333h33.333v66.666H94.347c-18.4 0-33.334-14.933-33.334-33.333"/><path fill="#f24e1e" d="M61.013 61.333C61.013 42.933 75.947 28 94.347 28h33.333v66.667H94.347c-18.4 0-33.334-14.934-33.334-33.334"/><path fill="#ff7262" d="M127.68 28h33.333c18.4 0 33.334 14.933 33.334 33.333s-14.934 33.334-33.334 33.334H127.68z"/><path fill="#1abcfe" d="M194.347 128c0 18.4-14.934 33.333-33.334 33.333S127.68 146.4 127.68 128s14.933-33.333 33.333-33.333S194.347 109.6 194.347 128"/></g><defs><clipPath id="SVG9U8Xmbth"><path fill="#fff" d="M61 28h133.36v200H61z"/></clipPath></defs></g></svg>
));

FigmaLogo.displayName = 'FigmaLogo';

const FramerLogo = memo(({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <title>Framer icon</title>
    <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="black" />
  </svg>
));

FramerLogo.displayName = 'FramerLogo';

const IllustratorLogo = memo(({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256" className={className}><g fill="none"><rect width="256" height="256" fill="#300" rx="60"/><path fill="#ff9a00" d="M123.733 152.333h-39.68L75.946 177.4c-.213.96-1.066 1.6-2.026 1.493H53.866c-1.173 0-1.493-.64-1.173-1.92l34.347-98.88c.32-1.066.64-2.24 1.066-3.52c.427-2.24.64-4.586.64-6.933c-.106-.533.32-1.067.854-1.173h27.626c.854 0 1.28.32 1.387.853l38.933 109.867c.32 1.173 0 1.706-1.066 1.706h-22.294c-.746.107-1.493-.426-1.706-1.173zM90.24 130.68h27.093c-.64-2.24-1.493-4.907-2.453-7.68c-.96-2.88-1.92-5.973-2.88-9.173c-1.067-3.307-2.027-6.507-3.094-9.814c-1.066-3.306-2.026-6.4-2.88-9.493c-.853-2.986-1.6-5.76-2.346-8.32h-.214c-.96 4.587-2.133 9.174-3.626 13.76c-1.6 5.12-3.2 10.453-4.907 15.787a209 209 0 0 1-4.693 14.933m91.093-45.547c-3.52.107-6.933-1.28-9.493-3.733c-2.453-2.667-3.733-6.187-3.627-9.813c-.106-3.627 1.28-7.04 3.84-9.494s5.974-3.733 9.494-3.733c4.16 0 7.36 1.28 9.706 3.733a13.46 13.46 0 0 1 3.52 9.494c.107 3.626-1.173 7.146-3.733 9.813c-2.453 2.56-6.08 3.947-9.707 3.733m-11.946 92.587V95.587c0-1.067.426-1.494 1.386-1.494h21.12c.96 0 1.387.534 1.387 1.494v82.133c0 1.173-.427 1.707-1.387 1.707h-20.906c-1.067 0-1.6-.64-1.6-1.707"/></g></svg>
));
IllustratorLogo.displayName = 'IllustratorLogo';

const SkillMeter = memo(({ percentage, color }: { percentage: number; color: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const controls = animate(count, percentage, { duration: 1.5, ease: "circOut" });
    return controls.stop;
  }, [percentage, count]);

  return (
    <div className="w-full mt-auto pt-4">
      <div className="flex justify-between items-end mb-2">
        <span className="font-display text-[11px] font-bold text-gray-400 tracking-widest uppercase">Proficiency</span>
        <div className="flex items-baseline">
          <motion.span className="font-display text-2xl font-black text-gray-900 leading-none tracking-tight">
            {rounded}
          </motion.span>
          <span className="text-sm font-bold text-gray-400 ml-0.5">%</span>
        </div>
      </div>

      <div className="flex gap-[3px] h-3 w-full">
        {Array.from({ length: 20 }).map((_, i) => {
          const isActive = (i + 1) * 5 <= percentage;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 + 0.1, type: 'spring', stiffness: 300, damping: 20 }}
              className={cn(
                "flex-1 rounded-[1.5px] origin-bottom transition-all duration-300",
                isActive ? color : "bg-gray-100"
              )}
            />
          );
        })}
      </div>
    </div>
  );
});

SkillMeter.displayName = 'SkillMeter';

const Card = memo(({ children, className, index = 0 }: { children?: React.ReactNode; className?: string, index?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10% 0px" }}
    transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    className={cn(
      "relative flex flex-col p-5 rounded-[24px] bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_16px_32px_rgba(0,0,0,0.06)] hover:-translate-y-1 overflow-hidden group h-full min-h-[320px] md:min-h-0 gpu-accelerated",
      className
    )}
  >
    {children}
  </motion.div>
));

Card.displayName = 'Card';

const FigmaVisual = memo(() => (
  <div className="relative h-24 w-full my-3 border border-dashed border-gray-200 rounded-xl flex items-center justify-center bg-gray-50/50 group-hover:bg-white transition-colors overflow-hidden">
    <motion.div
      className="absolute flex gap-2"
      animate={{ x: [0, 10, 0, -10, 0], y: [0, -5, 0, 5, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="w-16 h-20 bg-white rounded-lg shadow-sm border border-gray-200 p-2 flex flex-col gap-1">
        <div className="w-full h-8 bg-purple-100 rounded-md" />
        <div className="w-2/3 h-2 bg-gray-100 rounded-full" />
        <div className="w-full h-2 bg-gray-100 rounded-full" />
      </div>
      <MousePointer2 className="absolute -bottom-4 -right-4 fill-black text-white w-5 h-5 drop-shadow-md" />
    </motion.div>
    <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent pointer-events-none" />
    <span className="absolute bottom-2 left-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-white/50 px-2 py-0.5 rounded-full backdrop-blur-sm">Auto Layout</span>
  </div>
));

FigmaVisual.displayName = 'FigmaVisual';

const FramerVisual = memo(() => (
  <div className="relative h-24 w-full my-3 border border-dashed border-gray-200 rounded-xl flex items-center justify-center bg-gray-50/50 group-hover:bg-white transition-colors overflow-hidden">
    <motion.div
      className="flex flex-wrap gap-2 w-32 justify-center items-center content-center"
      animate={{ gap: ["8px", "4px", "8px"] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
    >
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="bg-blue-500 rounded-[4px]"
          animate={{
            width: ["36px", "100px", "36px"],
            height: ["36px", "12px", "36px"],
            backgroundColor: ["#3b82f6", "#60a5fa", "#3b82f6"],
            borderRadius: ["8px", "6px", "8px"]
          }}
          transition={{
            duration: 4,
            ease: [0.22, 1, 0.36, 1],
            repeat: Infinity,
            repeatDelay: 1,
            delay: i * 0.05
          }}
        />
      ))}
    </motion.div>

    <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent pointer-events-none" />
    <span className="absolute bottom-2 left-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-white/50 px-2 py-0.5 rounded-full backdrop-blur-sm">Magic Motion</span>
  </div>
));

FramerVisual.displayName = 'FramerVisual';

const IllustratorVisual = memo(() => (
  <div className="relative h-24 w-full my-3 border border-gray-100 rounded-xl overflow-hidden bg-gray-50 group-hover:border-gray-200 transition-colors">
    <div className="absolute inset-0 w-full h-full">
      <video
        src="/Illustrator.webm"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ pointerEvents: 'none', transform: 'translateX(0%)' }}
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent pointer-events-none" />
    <span className="absolute bottom-2 left-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest bg-white/80 px-2 py-0.5 rounded-full backdrop-blur-sm z-10 shadow-sm">Vector Path</span>
  </div>
));

IllustratorVisual.displayName = 'IllustratorVisual';

const Skills: React.FC = memo(() => {
  return (
    <div className="w-full min-h-full flex flex-col items-center p-4 md:p-6 lg:p-8 overflow-visible pb-20">
      <div className="text-center mb-8 md:mb-10 shrink-0 relative z-10 mt-2">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-gray-900 tracking-tight flex items-baseline justify-center gap-2"
        >
          My
          <div className="relative inline-block">
            <span className="font-designer font-normal text-3xl md:text-4xl lg:text-5xl relative z-10">Skills</span>
            <svg
              className="absolute w-[110%] -left-[5%] h-[50%] bottom-[8%] -z-10"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
              style={{ overflow: 'visible' }}
            >
              <motion.path
                d="M 2 5 S 20 4 50 6 S 98 4 98 5"
                stroke="#FCDD00"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mix-blend-multiply opacity-80"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              />
            </svg>
          </div>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-2 text-gray-500 font-medium max-w-lg mx-auto text-xs md:text-sm tracking-wide"
        >
          The creative arsenal I use to bring ideas to life.
        </motion.p>
      </div>

      <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
        <Card className="justify-between" index={0}>
          <div>
            <div className="flex justify-between items-start mb-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500 overflow-hidden shadow-sm">
                <FigmaLogo className="w-full h-full" />
              </div>
              <div className="px-2 py-1 bg-purple-50 rounded-md border border-purple-100">
                <span className="text-[10px] font-bold text-purple-600 uppercase tracking-wide">UI/UX</span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-0.5">Figma</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Advanced prototyping, design systems, and auto-layout mastery.
            </p>

            <FigmaVisual />
          </div>

          <SkillMeter percentage={96} color="bg-purple-500" />
        </Card>

        <Card className="justify-between" index={1}>
          <div>
            <div className="flex justify-between items-start mb-3">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 group-hover:bg-white group-hover:scale-105 transition-all">
                <FigmaLogo className="w-full h-full" />
              </div>
              <div className="px-2 py-1 bg-blue-50 rounded-md border border-blue-100">
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wide">No-Code</span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-0.5">Animations</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Interactive sites, complex animations, and production deployment.
            </p>

            <FramerVisual />
          </div>

          <SkillMeter percentage={92} color="bg-blue-500" />
        </Card>

        <Card className="justify-between" index={2}>
          <div>
            <div className="flex justify-between items-start mb-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500 overflow-hidden shadow-sm">
                <IllustratorLogo className="w-full h-full" />
              </div>
              <div className="px-2 py-1 bg-orange-50 rounded-md border border-orange-100">
                <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wide">Vector</span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-0.5">Illustrator</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Logo design, iconography, and complex vector illustrations.
            </p>

            <IllustratorVisual />
          </div>

          <SkillMeter percentage={88} color="bg-orange-500" />
        </Card>
      </div>
    </div>
  );
});

Skills.displayName = 'Skills';

export default Skills;
