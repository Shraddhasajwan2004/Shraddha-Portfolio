
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Droplets, Mic, MonitorCheck } from 'lucide-react';
import { SMART_WATER_URL, DIFA_GITHUB_URL } from '../constants';

const Projects: React.FC = () => {
  const highlightProjects = [
    {
      name: 'Smart Water Project',
      description: 'IoT system monitoring water levels and tap automation via ThingSpeak API. Includes a real-time analytics dashboard.',
      tech: ['IoT', 'ThingSpeak API', 'Node.js'],
      category: 'IoT',
      icon: <Droplets className="text-blue-500" size={32} />,
      github: 'https://github.com/Shraddhasajwan2004/SmartWaterProject',
      live: SMART_WATER_URL
    },
    {
      name: 'Biznest (Android)',
      description: 'A student-entrepreneurship platform built for Android. Enabling a digital marketplace within college campuses.',
      tech: ['Kotlin', 'Android SDK', 'Firebase'],
      category: 'Mobile',
      icon: <Smartphone className="text-emerald-500" size={32} />,
      github: 'https://github.com/Shraddhasajwan2004/Biznest',
      live: '#'
    },
    {
      name: 'Jerry - AI Voice Assistant',
      description: 'A Python-based Jarvis clone that automates daily desktop tasks using Natural Language Processing.',
      tech: ['Python', 'NLP', 'Speech-to-Text'],
      category: 'ML',
      icon: <Mic className="text-violet-500" size={32} />,
      github: 'https://github.com/Shraddhasajwan2004/Jerry-Assistant',
      live: '#'
    },
    {
      name: 'DIFA Forensics',
      description: 'Digital Investigation for Android - An AI-integrated toolkit for forensic analysis of Android devices.',
      tech: ['Python', 'Forensics', 'Streamlit'],
      category: 'Security',
      icon: <MonitorCheck className="text-cyan-500" size={32} />,
      github: DIFA_GITHUB_URL,
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">Portfolio Showcase</h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium italic">Practical implementations of technology to solve real problems</p>
          <div className="h-2 w-24 bg-gradient-to-r from-violet-600 to-cyan-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {highlightProjects.map((proj, idx) => (
            <motion.div
              key={proj.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] p-6 sm:p-10 border border-slate-100 dark:border-slate-800 group hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-500 relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-6 sm:mb-8 relative z-10">
                <div className="p-4 sm:p-5 rounded-3xl bg-white dark:bg-slate-800 shadow-sm group-hover:scale-110 transition-transform duration-500">
                  {proj.icon}
                </div>
                <div className="flex gap-2 sm:gap-3">
                  {proj.github !== '#' && (
                    <a href={proj.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-800 rounded-2xl text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 shadow-sm transition-all hover:scale-110" aria-label={`GitHub for ${proj.name}`}>
                      <Github size={20} />
                    </a>
                  )}
                  {proj.live !== '#' && (
                    <a href={proj.live} target="_blank" rel="noopener noreferrer" className="p-3 bg-violet-600 rounded-2xl text-white shadow-lg shadow-violet-500/20 transition-all hover:scale-110" aria-label={`Live site for ${proj.name}`}>
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-violet-600 transition-colors">{proj.name}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 text-base sm:text-lg font-medium leading-relaxed sm:h-20 overflow-hidden">
                {proj.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {proj.tech.map(t => (
                  <span key={t} className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest px-3 sm:px-4 py-2 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-700 rounded-full group-hover:border-violet-200 transition-all">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
