
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Projects', value: '15+', icon: <Code className="text-violet-500" /> },
    { label: 'Research', value: '1 Paper', icon: <BookOpen className="text-pink-500" /> },
  ];

  const roadmapItems = [
    { name: 'Machine Learning', status: 'Deepening', icon: '🤖' },
    { name: 'DSA & OOPS', status: 'Core Focus', icon: '⚖️' },
    { name: 'DBMS & CN', status: 'In Progress', icon: '🌐' },
  ];

  return (
    <section id="about" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">About Me</h2>
          <div className="h-2 w-24 bg-gradient-to-r from-violet-600 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 text-xl text-slate-300 leading-relaxed font-medium"
          >
            <p>
              I am <span className="text-violet-400 font-extrabold">Shraddha</span>, a 2nd-year CSE student at IGDTUW. I am a dedicated problem solver driven by curiosity and a commitment to engineering excellence.
            </p>
            <p>
              My focus lies in building systems that aren't just functional, but <span className="text-cyan-400 italic">intelligent</span>. Whether it's mastering complex Data Structures or exploring AI-based forensics, I enjoy diving deep into technical challenges.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 rounded-3xl bg-slate-900 border border-slate-800 shadow-sm text-center hover:shadow-md transition-all"
                >
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-3xl font-black text-white">{stat.value}</div>
                  <div className="text-xs uppercase tracking-widest font-bold text-slate-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-violet-900/20 to-cyan-900/20 p-1 rounded-[3rem]">
              <div className="bg-slate-900 rounded-[2.8rem] p-10 shadow-2xl border border-slate-800">
                <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
                  <div className="w-10 h-10 bg-violet-600 rounded-xl flex items-center justify-center text-white text-lg">🚀</div>
                  Enhancing My Skills
                </h3>
                
                <div className="space-y-6">
                  {roadmapItems.map((item, idx) => (
                    <motion.div 
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (idx * 0.1) }}
                      className="flex items-center justify-between p-5 bg-slate-800/50 rounded-2xl border border-slate-800 group hover:border-violet-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <p className="font-extrabold text-white">{item.name}</p>
                          <p className="text-xs font-bold text-violet-500 uppercase tracking-tighter">{item.status}</p>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shadow-sm">
                        <div className={`w-3 h-3 rounded-full ${item.status === 'Core Focus' ? 'bg-violet-600 animate-pulse' : item.status === 'In Progress' ? 'bg-amber-400' : 'bg-emerald-400'}`} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
