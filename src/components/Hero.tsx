
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, FileText, Send } from 'lucide-react';
import { Section } from '../type';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-12 sm:pt-20 bg-slate-50 dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center lg:text-left"
        >
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="inline-flex items-center px-4 py-1.5 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 text-[10px] sm:text-sm font-black mb-6 sm:mb-8 border border-violet-200 dark:border-violet-800"
          >
            Second-year B.Tech CSE @ IGDTUW
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Shraddha
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
            Building <span className="text-violet-600 dark:text-violet-400 font-bold">Intelligent Systems</span> through Machine Learning, DSA mastery, and robust Web Engineering.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
            <motion.button
              onClick={() => scrollTo(Section.Projects)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3.5 sm:py-4 bg-violet-600 text-white rounded-2xl font-black text-sm sm:text-base shadow-xl shadow-violet-500/25 flex items-center gap-2 hover:bg-violet-700 transition-all"
            >
              View Projects <ChevronRight size={18} />
            </motion.button>
            <motion.button
              onClick={() => scrollTo(Section.Contact)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-2xl font-black text-sm sm:text-base border-2 border-slate-200 dark:border-slate-700 shadow-lg flex items-center gap-2 hover:border-violet-500 transition-all"
            >
              Hire Me <Send size={18} />
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative hidden lg:flex justify-center"
        >
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            <motion.div 
              animate={{ rotate: 360, scale: [1, 1.05, 1] }}
              transition={{ rotate: { duration: 30, repeat: Infinity, ease: 'linear' }, scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
              className="absolute inset-0 rounded-[3rem] border-8 border-dashed border-violet-200 dark:border-violet-900/50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="grid grid-cols-2 gap-4 lg:gap-6">
                 {['DSA', 'ML', 'Kotlin', 'Web'].map((skill, idx) => (
                   <motion.div 
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (idx * 0.1) }}
                    className="w-24 h-24 lg:w-28 lg:h-28 rounded-3xl bg-white dark:bg-slate-800 shadow-2xl flex items-center justify-center border border-slate-50 dark:border-slate-700"
                   >
                     <span className="text-lg lg:text-xl font-black text-violet-600 dark:text-violet-400">{skill}</span>
                   </motion.div>
                 ))}
               </div>
            </div>
            <div className="absolute -z-10 w-[120%] h-[120%] bg-violet-200/20 dark:bg-violet-900/10 rounded-full blur-[100px] -top-10 -left-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
