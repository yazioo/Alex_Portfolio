import React, { memo } from 'react';
import { motion, Variants } from 'framer-motion';
import { cn } from '../lib/utils';
import { MapPin, Calendar, Coffee } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, x: 40 },
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
};

const About: React.FC = memo(() => {
  return (
    <div className="w-full min-h-full md:h-full flex flex-col items-center justify-start md:justify-center p-6 md:p-0 overflow-visible">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 lg:gap-16 items-center mt-4 md:mt-0 md:px-12 lg:px-20">
        <motion.div
          className="order-2 md:order-1 flex flex-col items-start text-left z-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
        >
          <motion.div variants={itemVariants} className="mb-4 md:mb-4 relative">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 tracking-tight leading-tight">
              About
              <div className="relative inline-block ml-3">
                <span className="font-designer font-normal relative z-10">Me</span>
                <svg
                  className="absolute w-[120%] -left-[10%] h-[40%] bottom-[10%] -z-10"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                  style={{ overflow: 'visible' }}
                >
                  <motion.path
                    d="M 5 5 Q 50 10 95 5"
                    fill="none"
                    stroke="#FCDD00"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mix-blend-multiply opacity-80"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                  />
                </svg>
              </div>
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="prose prose-lg text-gray-600 mb-6 md:mb-6">
            <p className="text-lg md:text-xl leading-relaxed font-medium text-gray-800 mb-4 md:mb-4">
              I'm Alex, a UI/UX Designer crafting digital experiences where <span className="bg-yellow-100 px-1 rounded-md text-yellow-900">function</span> is driven by purpose and <span className="bg-blue-50 px-1 rounded-md text-blue-900">emotion</span> is woven into every interaction.
            </p>
            <p className="leading-relaxed text-base md:text-lg">
              Design is more than just aesthetics; it's about clarity, empathy, and problem-solving. I partner with forward-thinking brands to transform complex challenges into intuitive, seamless experiences. From the broad strokes of strategy to the finest pixel-perfect details, I ensure every product feels inevitable and effortless.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 md:gap-6 pt-6 md:pt-6 border-t border-gray-200 w-full">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded-full text-blue-600">
                <Calendar size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Experience</p>
                <p className="font-bold text-gray-900 text-sm">5+ Years</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-50 rounded-full text-orange-600">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Location</p>
                <p className="font-bold text-gray-900 text-sm">New York, NY</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-50 rounded-full text-yellow-600">
                <Coffee size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Fueled By</p>
                <p className="font-bold text-gray-900 text-sm">Espresso</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="order-1 md:order-2 relative w-full flex justify-center md:justify-end z-10"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
        >
          <div className={cn(
            "relative w-[280px] sm:w-[320px] aspect-[3/4] mx-auto mb-10",
            "bg-gray-50 rounded-[2rem] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)] overflow-hidden",
            "border-[6px] border-white ring-1 ring-black/5",
            "md:w-full md:aspect-auto md:mx-0 md:mb-0",
            "md:bg-transparent md:rounded-none md:shadow-none md:overflow-visible",
            "md:border-none md:ring-0"
          )}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50/50 md:hidden" />

            <img
              src="https://i.postimg.cc/43WWsqML/6010533498277530426-no-bg.webp"
              alt="Portrait"
              loading="eager"
              decoding="async"
              className={cn(
                "relative z-10 block transition-transform duration-700",
                "w-full h-full object-cover object-top scale-110 translate-y-6",
                "md:w-[135%] md:h-auto md:max-w-none md:object-contain md:object-bottom md:scale-100 md:translate-y-12 md:-translate-x-6 lg:-translate-x-16 lg:translate-y-12 lg:w-[165%]"
              )}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
});

About.displayName = 'About';

export default About;