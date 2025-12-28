
import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, ShieldCheck, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      type: 'RESEARCH',
      title: 'Artificial Intelligence Models for Supercapacitor Performance Prediction',
      organization: 'Indira Gandhi Delhi Technical University for Women (IGDTUW)',
      supervisor: 'Prof. Chhaya Ravi Kant',
      date: 'June 2025 – August 2025',
      icon: <Microscope className="w-6 h-6 text-pink-500" />,
      description: 'A review-based research paper analyzing AI model accuracies (ANN, SVM, CatBoost, XGBoost) for predicting supercapacitor performance trends.',
      details: [
        'Studied and compared multiple research papers focused on supercapacitor efficiency.',
        'Analyzed efficiency of Linear Regression and Support Vector Machines.',
        'Focused on model accuracy and prediction efficiency metrics.',
      ],
      link: 'https://doi.org/10.1016/j.est.2025.119919',
      linkText: 'View Publication'
    },
    {
      type: 'INTERNSHIP',
      title: 'AI Based Digital Forensics Intern (DIFA)',
      organization: 'Indira Gandhi Delhi Technical University for Women (IGDTUW)',
      date: 'May 2025 – July 2025',
      icon: <ShieldCheck className="w-6 h-6 text-cyan-500" />,
      description: 'Digital Investigation for Android (DIFA) – An AI-based forensics program focused on automated investigation workflows.',
      details: [
        'Built DIFA system for automated Android OSINT analysis.',
        'Streamlined evidence extraction from mobile storage and networks.',
        'Automated investigation workflows using Python and Streamlit.',
      ],
      link: 'https://github.com/Shraddhasajwan2004/DIFA-digital-investigator-for-android',
      linkText: 'View on GitHub'
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-900 dark:text-white">Professional Milestones</h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium">Deep dives into research and hands-on industrial training</p>
          <div className="h-2 w-24 bg-gradient-to-r from-violet-600 to-cyan-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800"
            >
              <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-2 border-violet-500 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-violet-500" />
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
                  <div className="flex-1">
                    <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-black tracking-widest mb-3 uppercase ${exp.type === 'RESEARCH' ? 'bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400' : 'bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400'}`}>
                      {exp.type === 'RESEARCH' ? 'Research Publication' : 'Technical Internship'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-tight mb-2">{exp.title}</h3>
                    <p className="text-violet-600 dark:text-violet-400 font-bold">{exp.organization}</p>
                    {exp.supervisor && <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">Under {exp.supervisor}</p>}
                  </div>
                  <div className="text-slate-400 dark:text-slate-500 font-black text-xs whitespace-nowrap bg-slate-50 dark:bg-slate-900/50 px-3 py-1.5 rounded-xl border border-slate-100 dark:border-slate-800">
                    {exp.date}
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 mb-6 font-medium italic">
                  {exp.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {exp.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base font-medium">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {exp.link && (
                  <a 
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-slate-700 text-white rounded-2xl font-black text-sm hover:bg-violet-600 transition-colors group"
                  >
                    {exp.linkText} <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
