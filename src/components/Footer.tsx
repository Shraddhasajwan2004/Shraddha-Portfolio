
import React from 'react';
import { Github, Linkedin, Code2, Trophy, ExternalLink } from 'lucide-react';
import { LEETCODE_URL, GFG_URL, GITHUB_USERNAME, LINKEDIN_URL } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={22} />, href: `https://github.com/${GITHUB_USERNAME}`, label: 'GitHub' },
    { icon: <Linkedin size={22} />, href: LINKEDIN_URL, label: 'LinkedIn' },
    { icon: <Trophy size={22} />, href: LEETCODE_URL, label: 'LeetCode' },
    { icon: <Code2 size={22} />, href: GFG_URL, label: 'GFG' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
          
          <div className="col-span-1">
            <span className="text-3xl font-black bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
              Shraddha
            </span>
            <p className="mt-6 text-slate-400 text-lg font-medium leading-relaxed max-w-md">
              Computer Science student at IGDTUW specializing in DSA, ML and System Design.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-slate-900 text-slate-500 hover:text-violet-400 hover:bg-slate-800 transition-all border border-transparent hover:border-slate-700 shadow-sm"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="md:ml-auto">
             <h4 className="font-black text-white mb-6 uppercase tracking-widest text-sm text-left md:text-right">Coding Profiles</h4>
             <ul className="space-y-3 max-w-xs md:ml-auto">
               <li>
                 <a href={LEETCODE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-violet-500/50 transition-all group">
                    <span className="font-bold text-slate-300 group-hover:text-white">LeetCode</span>
                    <ExternalLink size={16} className="text-slate-600 group-hover:text-violet-400" />
                 </a>
               </li>
               <li>
                 <a href={GFG_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all group">
                    <span className="font-bold text-slate-300 group-hover:text-white">GeeksforGeeks</span>
                    <ExternalLink size={16} className="text-slate-600 group-hover:text-emerald-400" />
                 </a>
               </li>
             </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center">
          <p className="text-slate-500 font-bold text-sm tracking-tight italic">
            Developed with excellence by <span className="text-violet-400">Shraddha</span>
          </p>
          <p className="text-slate-600 font-bold text-xs">
            &copy; {currentYear} | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
