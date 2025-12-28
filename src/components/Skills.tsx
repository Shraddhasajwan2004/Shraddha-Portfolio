
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { SKILLS } from '../constants';
import type { Skill } from '../type';

const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(SKILLS[0]);

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">Technical Arsenal</h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium">A deep dive into my core competencies and learning journey</p>
          <div className="h-2 w-24 bg-gradient-to-r from-violet-600 to-cyan-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            {SKILLS.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`group cursor-pointer p-4 sm:p-5 rounded-3xl transition-all border-2 ${selectedSkill?.name === skill.name ? 'bg-white dark:bg-slate-800 border-violet-600 shadow-xl shadow-violet-500/10 scale-[1.02]' : 'bg-white/50 dark:bg-slate-800/30 border-transparent hover:border-slate-200 dark:hover:border-slate-700 shadow-sm'}`}
                onClick={() => {
                  setSelectedSkill(skill);
                  if (window.innerWidth < 1024) {
                    const detailEl = document.getElementById('skill-detail');
                    detailEl?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-black text-slate-900 dark:text-white text-base sm:text-lg">{skill.name}</span>
                  <span className="text-xs sm:text-sm font-black text-violet-600 dark:text-violet-400">{skill.proficiency === 0 ? 'Learning' : `${skill.proficiency}%`}</span>
                </div>
                
                <div className="h-3 sm:h-4 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden relative border border-slate-50 dark:border-slate-600">
                  {skill.proficiency > 0 ? (
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                      className="h-full bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    </motion.div>
                  ) : (
                    <div className="h-full w-full bg-slate-200/50 dark:bg-slate-800/50 flex items-center justify-center">
                       <span className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest">Foundation Phase</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div id="skill-detail" className="lg:sticky lg:top-28 scroll-mt-24">
            <AnimatePresence mode="wait">
              {selectedSkill && (
                <motion.div
                  key={selectedSkill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="p-6 sm:p-10 rounded-[2.5rem] sm:rounded-[3rem] bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-2xl"
                >
                  <div className="flex items-center gap-4 sm:gap-6 mb-8">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-violet-600/10 flex items-center justify-center text-3xl sm:text-4xl shadow-inner shrink-0">
                       {selectedSkill.proficiency === 0 ? '📚' : '🚀'}
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight">{selectedSkill.name}</h3>
                      <p className="text-violet-600 dark:text-violet-400 font-extrabold uppercase text-[10px] sm:text-xs tracking-widest mt-1">{selectedSkill.category}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-8 text-base sm:text-lg font-medium leading-relaxed">
                    {selectedSkill.proficiency > 0 
                      ? `Extensive hands-on experience through project building and competitive programming. This skill is a core part of my technical identity.`
                      : `Currently prioritizing this domain to strengthen my core computer science foundations. Focused on theoretical concepts and early implementation.`}
                  </p>

                  <h4 className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 font-black mb-4">Related Focus Area</h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {selectedSkill.projects.map((proj) => {
                      const isObject = typeof proj !== 'string';
                      const name = isObject ? proj.name : proj;
                      const url = isObject ? proj.url : undefined;

                      if (url) {
                        return (
                          <a 
                            key={name}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-2xl bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 text-xs sm:text-sm font-bold border border-violet-200 dark:border-violet-700 hover:bg-violet-600 hover:text-white dark:hover:bg-violet-600 transition-all flex items-center gap-2 group/link"
                          >
                            {name} <ExternalLink size={14} className="opacity-50 group-hover/link:opacity-100" />
                          </a>
                        );
                      }

                      return (
                        <span key={name} className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-2xl bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-xs sm:text-sm font-bold border border-violet-100 dark:border-violet-800">
                          {name}
                        </span>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
