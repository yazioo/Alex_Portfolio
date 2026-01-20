import React, { memo, useMemo } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowUpRight, Github, Code2, Layers, Box } from 'lucide-react';
import { cn } from '../lib/utils';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  { id: 1, title: "Website 1", category: "Dashboard", description: "Website 1 Description", tags: ["Figma", "React"], link: "#" },
  { id: 2, title: "Website 2", category: "Mobile App", description: "Website 2 Description", tags: ["iOS", "SwiftUI"], link: "#" },
  { id: 3, title: "Website 3", category: "Landing Page", description: "Website 3 Description", tags: ["Framer"], link: "#" },
  { id: 4, title: "Website 4", category: "Implementation", description: "Website 4 Description", tags: ["React"], link: "#" }
];

const TechIcons: Record<string, React.ReactNode> = {
  "Figma": <svg viewBox="0 0 15 23" className="w-full h-full"><path d="M7.5 17.25C7.5 18.83 6.22 20.12 4.65 20.12C3.07 20.12 1.8 18.83 1.8 17.25V11.5H7.5V17.25Z" fill="#0ACF83" /><path d="M1.8 11.5C1.8 9.92 3.07 8.63 4.65 8.63H7.5V14.37H4.65C3.07 14.37 1.8 13.09 1.8 11.5Z" fill="#A259FF" /><path d="M1.8 5.75C1.8 4.17 3.07 2.88 4.65 2.88H7.5V8.63H4.65C3.07 8.63 1.8 7.35 1.8 5.75Z" fill="#F24E1E" /><path d="M7.5 2.88H10.35C11.92 2.88 13.2 4.17 13.2 5.75C13.2 7.33 11.92 8.62 10.35 8.62H7.5V2.88Z" fill="#FF7262" /><path d="M10.35 14.37C11.92 14.37 13.2 13.09 13.2 11.5C13.2 9.92 11.92 8.63 10.35 8.63H7.5V14.37H10.35Z" fill="#1ABCFE" /></svg>,
  "React": <svg viewBox="0 0 256 256" className="w-full h-full"><g fill="none"><rect width="256" height="256" fill="#f4f2ed" rx="60" /><path fill="#00d8ff" d="M128.001 146.951c10.304 0 18.656-8.353 18.656-18.656s-8.352-18.656-18.656-18.656s-18.656 8.353-18.656 18.656s8.353 18.656 18.656 18.656" /><path stroke="#00d8ff" strokeWidth="8.911" d="M128.002 90.363c25.048 0 48.317 3.594 65.862 9.635C215.003 107.275 228 118.306 228 128.295c0 10.409-13.774 22.128-36.475 29.649c-17.162 5.686-39.746 8.654-63.523 8.654c-24.378 0-47.463-2.786-64.819-8.717C41.225 150.376 28 138.506 28 128.295c0-9.908 12.41-20.854 33.252-28.12c17.61-6.14 41.453-9.812 66.746-9.812z" clipRule="evenodd" /><path stroke="#00d8ff" strokeWidth="8.911" d="M94.981 109.438c12.514-21.698 27.251-40.06 41.249-52.24c16.864-14.677 32.914-20.425 41.566-15.436c9.017 5.2 12.288 22.988 7.463 46.41c-3.645 17.707-12.359 38.753-24.238 59.351c-12.179 21.118-26.124 39.724-39.931 51.792c-17.471 15.272-34.362 20.799-43.207 15.698c-8.583-4.946-11.865-21.167-7.747-42.852c3.479-18.323 12.21-40.812 24.841-62.723z" clipRule="evenodd" /><path stroke="#00d8ff" strokeWidth="8.911" d="M95.012 147.578c-12.549-21.674-21.093-43.616-24.659-61.826c-4.293-21.941-1.258-38.716 7.387-43.72c9.009-5.216 26.052.834 43.934 16.712c13.52 12.004 27.403 30.061 39.316 50.639c12.214 21.098 21.368 42.473 24.929 60.461c4.506 22.764.859 40.157-7.978 45.272c-8.574 4.964-24.265-.291-40.996-14.689c-14.136-12.164-29.26-30.959-41.933-52.849Z" clipRule="evenodd" /></g></svg>,
  "iOS": <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-black"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" /></svg>,
  "SwiftUI": <svg viewBox="0 0 256 256" className="w-full h-full"><g fill="none"><rect width="256" height="256" fill="#f05138" rx="60" /><path fill="#fff" d="m202.677 158.04l.724-2.896c10.616-42.224-15.201-92.41-59.114-118.71c19.302 26.058 27.747 57.666 20.267 85.172c-.724 2.413-1.448 4.826-2.413 7.239c-.965-.724-2.171-1.448-3.86-2.172c0 0-43.672-27.024-90.963-74.556c-1.207-1.206 25.334 37.881 55.253 69.489c-14.235-7.962-53.564-36.675-78.658-59.355c3.137 5.067 6.756 10.134 10.617 14.718c20.75 26.541 48.015 59.114 80.588 84.207c-22.922 13.995-55.254 15.201-87.344 0c-7.962-3.619-15.442-8.203-22.44-13.27c13.512 21.715 34.504 40.535 60.08 51.634c30.401 13.029 60.803 12.306 83.242.241c0 0 .241 0 .241-.241c.965-.482 1.931-1.206 2.896-1.689c10.857-5.549 32.09-11.099 43.672 11.099c3.378 5.067 9.41-23.887-12.788-50.91" /></g></svg>,
  "Framer": <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-black"><path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="currentColor" /></svg>,
  "WebGL": <Box className="w-full h-full text-red-500" strokeWidth={2} />,
  "Tokens": <Layers className="w-full h-full text-indigo-500" strokeWidth={2} />,
};

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
          {project.tags.map((tag, i) => (
            <span key={i} className="flex items-center gap-1.5 text-[10px] font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded-md border border-gray-100/50 hover:bg-white hover:shadow-sm transition-all duration-300 group/tag cursor-default">
              <span className="w-3.5 h-3.5 relative flex items-center justify-center overflow-hidden rounded-sm transition-transform group-hover/tag:scale-110">
                {TechIcons[tag] || <Code2 size={12} className="text-gray-400" />}
              </span>
              {tag}
            </span>
          ))}
          <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
            <ArrowUpRight size={14} className="text-gray-300" />
          </div>
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
          href="#"
          onClick={(e) => e.preventDefault()}
          className="flex items-center gap-2 text-gray-900 text-xs md:text-sm font-bold border-b border-black hover:text-blue-600 hover:border-blue-600 transition-colors pb-0.5"
        >
          <Github size={14} />
          More on Github
        </a>
      </motion.div>
    </div>
  );
});

Works.displayName = 'Works';

export default Works;