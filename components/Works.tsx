import React, { memo, useMemo } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowUpRight, Code2, Layers, Box } from 'lucide-react';
import { cn } from '../lib/utils';

const GithubIcon = memo(({ className = "" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256" className={className}><g fill="none"><rect width="256" height="256" fill="#fff" rx="60"/><path fill="#161614" d="M128.001 30C72.779 30 28 74.77 28 130.001c0 44.183 28.653 81.667 68.387 94.89c4.997.926 6.832-2.169 6.832-4.81c0-2.385-.093-10.262-.136-18.618c-27.82 6.049-33.69-11.799-33.69-11.799c-4.55-11.559-11.104-14.632-11.104-14.632c-9.073-6.207.684-6.079.684-6.079c10.042.705 15.33 10.305 15.33 10.305c8.919 15.288 23.394 10.868 29.1 8.313c.898-6.464 3.489-10.875 6.349-13.372c-22.211-2.529-45.56-11.104-45.56-49.421c0-10.918 3.906-19.839 10.303-26.842c-1.039-2.519-4.462-12.69.968-26.464c0 0 8.398-2.687 27.508 10.25c7.977-2.215 16.531-3.326 25.03-3.364c8.498.038 17.06 1.149 25.051 3.365c19.087-12.939 27.473-10.25 27.473-10.25c5.443 13.773 2.019 23.945.98 26.463c6.412 7.003 10.292 15.924 10.292 26.842c0 38.409-23.394 46.866-45.662 49.341c3.587 3.104 6.783 9.189 6.783 18.519c0 13.38-.116 24.149-.116 27.443c0 2.661 1.8 5.779 6.869 4.797C199.383 211.64 228 174.169 228 130.001C228 74.771 183.227 30 128.001 30M65.454 172.453c-.22.497-1.002.646-1.714.305c-.726-.326-1.133-1.004-.898-1.502c.215-.512.999-.654 1.722-.311c.727.326 1.141 1.01.89 1.508m4.919 4.389c-.477.443-1.41.237-2.042-.462c-.654-.697-.777-1.629-.293-2.078c.491-.442 1.396-.235 2.051.462c.654.706.782 1.631.284 2.078m3.374 5.616c-.613.426-1.615.027-2.234-.863c-.613-.889-.613-1.955.013-2.383c.621-.427 1.608-.043 2.236.84c.611.904.611 1.971-.015 2.406m5.707 6.504c-.548.604-1.715.442-2.57-.383c-.874-.806-1.118-1.95-.568-2.555c.555-.606 1.729-.435 2.59.383c.868.804 1.133 1.957.548 2.555m7.376 2.195c-.242.784-1.366 1.14-2.499.807c-1.13-.343-1.871-1.26-1.642-2.052c.235-.788 1.364-1.159 2.505-.803c1.13.341 1.871 1.252 1.636 2.048m8.394.932c.028.824-.932 1.508-2.121 1.523c-1.196.027-2.163-.641-2.176-1.452c0-.833.939-1.51 2.134-1.53c1.19-.023 2.163.639 2.163 1.459m8.246-.316c.143.804-.683 1.631-1.864 1.851c-1.161.212-2.236-.285-2.383-1.083c-.144-.825.697-1.65... [truncated]"/></g></svg>
));

GithubIcon.displayName = 'GithubIcon';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  link?: string;
}

const projects: Project[] = [
  { id: 1, title: "Website 1", category: "Dashboard", description: "Website 1 Description", link: "#" },
  { id: 2, title: "Website 2", category: "Mobile App", description: "Website 2 Description", link: "#" },
  { id: 3, title: "Website 3", category: "Landing Page", description: "Website 3 Description", link: "#" },
  { id: 4, title: "Website 4", category: "Implementation", description: "Website 4 Description", link: "#" }
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9, filter: "blur(10px)" },
  visible: {
    opacity: 1, y: 0, scale: 1, filter: "blur(0px)",
    transition: { type: "spring", damping: 20, stiffness: 100 }
  }
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20, filter: "blur(5px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } }
};

const ProjectCard = memo(({ project }: { project: Project }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative flex flex-col w-full bg-white rounded-[24px] p-2.5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-100 transition-all duration-500 hover:-translate-y-2 h-auto min-h-[320px] gpu-accelerated"
    >
      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[18px] bg-gray-100 shrink-0">
        <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100" />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <div className="bg-white/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2">
            <span className="text-xs font-bold text-gray-900">View Case</span>
            <ArrowUpRight size={14} className="text-gray-900" />
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-grow px-2 pt-4 pb-2">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-display font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase bg-gray-50 px-2 py-1 rounded-full border border-gray-100">
            {project.category}
          </span>
        </div>

        <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="mt-auto pt-3 border-t border-dashed border-gray-100 flex flex-wrap gap-1.5 items-center">
            <span className="text-sm font-medium text-gray-400">#Tags</span>
        </div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

const Works: React.FC = memo(() => {
  return (
    <div className="w-full min-h-full flex flex-col items-center p-4 md:p-6 pb-20 overflow-visible">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={headerVariants}
        className="text-center shrink-0 relative z-10 mt-2 mb-4 md:mb-8"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-gray-900 tracking-tight flex items-baseline justify-center gap-2">
          Selected
          <div className="relative inline-block">
            <span className="font-designer font-normal text-3xl md:text-4xl lg:text-5xl relative z-10">Works</span>
            <svg
              className="absolute w-[120%] -left-[10%] h-[40%] bottom-[10%] -z-10"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
              style={{ overflow: 'visible' }}
            >
              <motion.path
                d="M 2 5 Q 50 10 98 5"
                fill="none"
                stroke="#FCDD00"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mix-blend-multiply opacity-80"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              />
            </svg>
          </div>
        </h2>
      </motion.div>

      <div className="w-full max-w-[1500px] flex-1 min-h-0 flex flex-col justify-start md:justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full h-auto"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="shrink-0 pt-8 pb-4 flex flex-col items-center"
      >
        <a
          href="https://github.com/yazioo/Alex_Portfolio/"
          
          className="flex items-center gap-2 text-gray-900 text-xs md:text-sm font-bold border-b border-black hover:text-blue-600 hover:border-blue-600 transition-colors pb-0.5"
        >
          <GithubIcon className="w-4 h-4" />
          More on Github
        </a>
      </motion.div>
    </div>
  );
});

Works.displayName = 'Works';

export default Works;