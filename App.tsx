import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, Download, ExternalLink, ChevronRight, Globe, Award, BookOpen } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS, EXPERIENCES, SKILLS, EDUCATION, CERTIFICATIONS } from './constants';
import AIChat from './components/AIChat';
import SkillsChart from './components/SkillsChart';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll spy for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-teal-500/30">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('home')}>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                BB.
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Home', 'About', 'Experience', 'Skills', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.toLowerCase()
                        ? 'text-teal-400'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-white p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-b border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Home', 'About', 'Experience', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h2 className="text-teal-400 font-semibold tracking-wide uppercase text-sm">Senior Software Engineer</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Hi, I'm <br />
            <span className="text-slate-300">{PERSONAL_INFO.name}</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            Building scalable, user-focused applications with modern technologies. 
            Specializing in React, Node.js, and Full Stack Development for enterprise and health-tech sectors.
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium transition-colors shadow-lg shadow-teal-500/20"
            >
              Contact Me
            </button>
            <div className="flex gap-4 items-center">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-teal-400 transition-colors border border-slate-700"
                  aria-label={link.platform}
                >
                  {link.icon === 'github' && <Github size={20} />}
                  {link.icon === 'linkedin' && <Linkedin size={20} />}
                  {link.icon === 'mail' && <Mail size={20} />}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto group">
            {/* Decorative blobs - Colors matched to photo (Green/Teal/Sky) */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-emerald-500/30 rounded-full mix-blend-screen filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-sky-500/30 rounded-full mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-500/30 rounded-full mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            
            {/* Image Container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500">
              <img 
                src={PERSONAL_INFO.profileImage} 
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-12 h-1 bg-teal-500 rounded-full"></span>
                About Me
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                {PERSONAL_INFO.summary}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Globe className="text-teal-400 mt-1 shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-white">Location</h4>
                    <p className="text-slate-400 text-sm">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="text-teal-400 mt-1 shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-white">Experience</h4>
                    <p className="text-slate-400 text-sm">7+ Years</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="text-teal-400 mt-1 shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-white">Education</h4>
                    <p className="text-slate-400 text-sm">{EDUCATION[0].degree}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700 shadow-xl">
               <h3 className="text-xl font-semibold text-white mb-6">Skill Proficiency</h3>
               <SkillsChart />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
          <span className="w-12 h-1 bg-teal-500 rounded-full"></span>
          Work Experience
        </h2>
        
        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 md:pl-0">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-700 -ml-px"></div>
              
              <div className={`md:flex items-start justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
                
                {/* Content Box */}
                <div className="md:w-[45%] mb-8 md:mb-0">
                  <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-teal-500/50 transition-colors shadow-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    </div>
                    <div className="text-teal-400 font-medium mb-1">{exp.company}</div>
                    <div className="text-sm text-slate-500 mb-4 flex items-center gap-2">
                       <span>{exp.period}</span> • <span>{exp.location}</span>
                    </div>
                    <p className="text-slate-300 text-sm mb-4 leading-relaxed">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.slice(0, 3).map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                          <ChevronRight size={14} className="mt-1 text-teal-500 shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-teal-500 rounded-full border-4 border-slate-900 -translate-x-[5px] md:-translate-x-1/2 mt-6 z-10 shadow-[0_0_10px_rgba(20,184,166,0.5)]"></div>

                {/* Empty space for the other side */}
                <div className="md:w-[45%]"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <span className="w-12 h-1 bg-teal-500 rounded-full"></span>
            Tech Stack
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-slate-900 p-6 rounded-xl border border-slate-700/50 hover:border-teal-500/30 transition-all hover:transform hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-white mb-4 border-b border-slate-800 pb-2">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700 hover:text-teal-400 hover:border-teal-500/50 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Mini Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Certifications</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-lg border border-slate-700 text-sm text-slate-300 hover:border-teal-500/30 transition-colors">
                  <Award size={16} className="text-teal-500" />
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-teal-900/20 to-slate-900 rounded-3xl p-8 md:p-16 border border-slate-800 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
            I'm currently available for freelance projects and full-time opportunities. 
            If you're looking for a developer to build scalable web applications, get in touch.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center justify-center gap-3 px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white rounded-xl font-bold transition-all shadow-lg shadow-teal-500/20">
              <Mail size={20} />
              Say Hello
            </a>
            <a href="/resume.pdf" download className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-all border border-slate-700">
              <Download size={20} />
              Download CV
            </a>
          </div>

          <div className="pt-8 border-t border-slate-800 flex justify-center gap-8">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-teal-400 transition-colors flex flex-col items-center gap-1 group"
              >
                <div className="p-3 bg-slate-900 rounded-full group-hover:scale-110 transition-transform">
                  {link.icon === 'github' && <Github size={24} />}
                  {link.icon === 'linkedin' && <Linkedin size={24} />}
                  {link.icon === 'mail' && <Mail size={24} />}
                </div>
                <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">{link.platform}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Bagaja Birhanu Nura. All rights reserved.</p>
          <p className="mt-2">Built with React, TypeScript, Tailwind & Gemini AI.</p>
        </div>
      </footer>

      {/* Chat Widget */}
      <AIChat />
    </div>
  );
};

export default App;