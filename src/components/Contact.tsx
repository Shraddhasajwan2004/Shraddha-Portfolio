
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create SMS link - This opens the native messaging app
    const smsMessage = `Hi Shraddha, I'm ${formData.name}. ${formData.subject}: ${formData.message}`;
    const smsUrl = `sms:${PHONE_NUMBER}?body=${encodeURIComponent(smsMessage)}`;
    
    globalThis.location.href = smsUrl;

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">Let's Connect</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-12 text-xl font-medium leading-relaxed">
              I'm always open to discussing new <span className="text-violet-600 dark:text-violet-400 font-extrabold underline decoration-violet-200">internships, research roles, or tech collaborations</span>. Reach out and I'll get back to you!
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-[1.5rem] bg-white dark:bg-slate-800 shadow-md flex items-center justify-center text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Text Me</p>
                  <p className="text-xl font-black text-slate-900 dark:text-white">{PHONE_NUMBER}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-[1.5rem] bg-white dark:bg-slate-800 shadow-md flex items-center justify-center text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Email</p>
                  <p className="text-xl font-black text-slate-900 dark:text-white">shraddhasajwan2004@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 p-12 rounded-[3.5rem] shadow-2xl border border-slate-100 dark:border-slate-700 relative"
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center py-20 text-center">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}>
                  <CheckCircle size={100} className="text-emerald-500 mb-6" />
                </motion.div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-3">Opening SMS!</h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium">Please send the message from your phone.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name-input" className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Your Name</label>
                  <input 
                    id="name-input"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    type="text" 
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border-2 border-transparent focus:border-violet-600 focus:bg-white dark:focus:bg-slate-900 outline-none transition-all font-bold text-slate-900 dark:text-white"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message-input" className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                  <textarea 
                    id="message-input"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border-2 border-transparent focus:border-violet-600 focus:bg-white dark:focus:bg-slate-900 outline-none transition-all font-bold text-slate-900 dark:text-white resize-none"
                    placeholder="Tell me more..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-5 bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-black text-lg rounded-2xl shadow-xl shadow-violet-500/30 flex items-center justify-center gap-3"
                >
                  Send to SMS <Send size={22} />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
