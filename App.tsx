import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, GraduationCap, Users, Calendar, ArrowRight, CheckCircle2, Download } from 'lucide-react';
import { SectionTitle } from './components/SectionTitle';
import { DepartmentCard } from './components/DepartmentCard';
import { Department, DegreeType } from './types';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDegree, setActiveDegree] = useState<DegreeType>(DegreeType.BACHELOR);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const departments: Department[] = [
    {
      id: 'computing',
      name: 'Department of AI Computing',
      description: 'Educating AI-Native talents who can design, develop, and operate the latest AI models. Focuses on algorithms, LLMs, MLOps, and foundational AI theory.',
      iconName: 'cpu'
    },
    {
      id: 'systems',
      name: 'Department of AI Systems',
      description: 'Training experts in HW/SW integration for AI. Covers AI semiconductor devices, high-speed networking, and system architecture optimization.',
      iconName: 'server'
    },
    {
      id: 'ax',
      name: 'Department of AI Transformation (AX)',
      description: 'Fostering convergence talents for AI+X. Applies AI to resolve industrial and social problems in sectors like manufacturing, bio-health, and materials.',
      iconName: 'zap'
    },
    {
      id: 'futures',
      name: 'Department of AI Futures',
      description: 'Focusing on AI ethics, policy, governance, and economics. Shapes the future strategy of AI and ensures sustainable social acceptance.',
      iconName: 'scale'
    }
  ];

  const renderDegreeContent = () => {
    switch (activeDegree) {
      case DegreeType.BACHELOR:
        return (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h4 className="text-xl font-bold text-blue-900 mb-2 flex items-center">
                <GraduationCap className="w-5 h-5 mr-2" />
                Total Required: 138 Credits
              </h4>
              <p className="text-slate-700">Undergraduate students must complete a comprehensive curriculum balancing general studies and intensive AI coursework.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-slate-200">
                <h5 className="font-bold text-slate-800 mb-3 border-b pb-2">Major Requirements (44 Credits)</h5>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5" /> <span>AIC.20100 AI Mathematics</span></li>
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5" /> <span>AIC.20101 Introduction to AI</span></li>
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5" /> <span>AIC.20102 Introduction to Machine Learning</span></li>
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5" /> <span>AIC.20103 Introduction to Deep Learning</span></li>
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5" /> <span>AI Electives: 32 Credits (10-11 Courses)</span></li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-lg border border-slate-200">
                <h5 className="font-bold text-slate-800 mb-3 border-b pb-2">Other Requirements</h5>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-slate-400 mr-2 mt-0.5" /> <span>Advanced Major: 12 Credits</span></li>
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-slate-400 mr-2 mt-0.5" /> <span>Interdisciplinary Major: 12 Credits</span></li>
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-slate-400 mr-2 mt-0.5" /> <span>Research: 3 Credits (Graduation Research)</span></li>
                </ul>
              </div>
            </div>
          </div>
        );
      case DegreeType.MASTER:
        return (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h4 className="text-xl font-bold text-blue-900 mb-2 flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                Total Required: 33 Credits
              </h4>
              <p className="text-slate-700">Focus on specialized research capability and fundamental leadership in AI technology.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-slate-200">
                <h5 className="font-bold text-slate-800 mb-3 border-b pb-2">Coursework</h5>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5" /> <span>Common Mandatory: 3 Credits (CC courses)</span></li>
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5" /> <span>Major Electives: 18 Credits Total</span></li>
                  <li className="flex items-start ml-6 text-slate-500 text-xs">Must include 12 credits from AIC/CS/IS 500-level+</li>
                  <li className="flex items-start ml-6 text-slate-500 text-xs">Max 6 credits from other departments recognized</li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-lg border border-slate-200">
                <h5 className="font-bold text-slate-800 mb-3 border-b pb-2">Research</h5>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-blue-500 mr-2 mt-0.5" /> <span>Thesis Research: 4 Credits minimum</span></li>
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-blue-500 mr-2 mt-0.5" /> <span>Seminar: 2 Credits (AIC.93100)</span></li>
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-blue-500 mr-2 mt-0.5" /> <span>Mandatory Ethics & Safety I</span></li>
                </ul>
              </div>
            </div>
          </div>
        );
      case DegreeType.PHD:
        return (
           <div className="space-y-6 animate-fadeIn">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h4 className="text-xl font-bold text-blue-900 mb-2 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Total Required: 60 Credits
              </h4>
              <p className="text-slate-700">Advanced research contributions to the field of Artificial Intelligence.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-slate-200">
                <h5 className="font-bold text-slate-800 mb-3 border-b pb-2">Coursework</h5>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5" /> <span>Common Mandatory: 3 Credits</span></li>
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5" /> <span>Major Electives: 27 Credits Total</span></li>
                  <li className="flex items-start ml-6 text-slate-500 text-xs">Must include 18 credits from AIC/CS/IS 500-level+</li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-lg border border-slate-200">
                <h5 className="font-bold text-slate-800 mb-3 border-b pb-2">Research</h5>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-blue-500 mr-2 mt-0.5" /> <span>Thesis Research: 30 Credits minimum</span></li>
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-blue-500 mr-2 mt-0.5" /> <span>Seminar: 4 Credits</span></li>
                  <li className="flex items-start ml-6 text-slate-500 text-xs">Master's credits can accumulate for Integrated course</li>
                </ul>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold text-xl">AI</div>
              <div className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}>
                KAIST <span className="font-light">College of AI</span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Departments', 'Academics', 'Admissions'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm font-medium hover:text-blue-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}
                >
                  {item}
                </a>
              ))}
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors">
                Apply Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-md ${isScrolled ? 'text-slate-900' : 'text-white'}`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {['About', 'Departments', 'Academics', 'Admissions'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-blue-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="AI Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-blue-900 z-10"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-800/50 border border-blue-700 text-blue-200 text-sm font-semibold mb-6 backdrop-blur-sm">
            Leading the Future of Innovation
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            KAIST <br/>
            <span className="text-blue-400">College of AI</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-300 leading-relaxed">
            Shaping the future through Artifical Intelligence. We foster full-stack AI talents who lead national AI transformation and scientific discovery.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a href="#about" className="px-8 py-3.5 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-50 transition-colors shadow-lg">
              Discover More
            </a>
            <a href="#admissions" className="px-8 py-3.5 bg-transparent border border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors">
              Admission Guide
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Defining the Future Direction of AI</h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  Artificial Intelligence has emerged as a fundamental force reshaping scientific discovery, industrial innovation, and the very structure of society.
                </p>
                <p>
                  The <strong className="text-blue-900">College of AI at KAIST</strong> was established not merely to respond to immediate technological demands, but to proactively define the future direction and role of AI. Beyond advancing what AI can do, the College is committed to exploring what AI should do for science, industry, and humanity.
                </p>
                <p>
                  With a forward-looking vision, we aim to cultivate individuals who can grow continuously amid rapid technological change.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                  <img src="https://picsum.photos/100/100" alt="Dean" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Dean of AI College</p>
                  <p className="text-sm text-slate-500">Korea Advanced Institute of Science & Technology</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-2xl transform rotate-2"></div>
              <img 
                src="https://picsum.photos/800/600" 
                alt="KAIST Campus" 
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section id="departments" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Our Departments" 
            subtitle="An integrated educational framework spanning the entire AI lifecycle—from algorithms and systems to applications and ethics."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept) => (
              <DepartmentCard key={dept.id} department={dept} />
            ))}
          </div>
        </div>
      </section>

      {/* Academics / Requirements Section */}
      <section id="academics" className="py-24 bg-white relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -mr-64 -mt-64 w-96 h-96 rounded-full bg-blue-50 opacity-50 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle 
            title="Academic Requirements" 
            subtitle="Curriculum designed to build strong foundations and specialized capabilities."
          />

          <div className="max-w-4xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {[DegreeType.BACHELOR, DegreeType.MASTER, DegreeType.PHD].map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveDegree(type)}
                  className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                    activeDegree === type
                      ? 'bg-blue-900 text-white shadow-lg scale-105'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {type} Program
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 min-h-[400px]">
              {renderDegreeContent()}
            </div>

            <div className="mt-8 text-center">
              <a href="#" className="inline-flex items-center text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors">
                <Download className="w-4 h-4 mr-2" />
                Download Full 2026 Spring Course List (Excel)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions CTA */}
      <section id="admissions" className="py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Join the Future of AI</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            We are accepting applications for the 2026 Spring Semester. Start your journey at Korea's premier science and technology institute.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <div className="bg-blue-800/50 p-8 rounded-2xl border border-blue-700 hover:bg-blue-800 transition-colors w-full max-w-sm text-left">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-blue-300 mr-3" />
                <h3 className="text-xl font-bold">Undergraduate</h3>
              </div>
              <p className="text-blue-200 mb-6 text-sm">For high school graduates or transfer students aiming to build a strong foundation in full-stack AI.</p>
              <button className="w-full py-3 bg-white text-blue-900 font-bold rounded-lg hover:bg-blue-50 transition-colors">
                View Requirements
              </button>
            </div>

            <div className="bg-blue-800/50 p-8 rounded-2xl border border-blue-700 hover:bg-blue-800 transition-colors w-full max-w-sm text-left">
              <div className="flex items-center mb-4">
                <Calendar className="w-8 h-8 text-blue-300 mr-3" />
                <h3 className="text-xl font-bold">Graduate (MS/PhD)</h3>
              </div>
              <p className="text-blue-200 mb-6 text-sm">For researchers who want to define complex problems and design sophisticated AI systems.</p>
              <button className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors">
                View Requirements
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-white font-bold text-xl mb-4">KAIST College of AI</h3>
              <p className="max-w-xs text-sm">
                291 Daehak-ro, Yuseong-gu, Daejeon 34141, Republic of Korea
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#departments" className="hover:text-white transition-colors">Departments</a></li>
                <li><a href="#academics" className="hover:text-white transition-colors">Academics</a></li>
                <li><a href="https://kaist.ac.kr" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">KAIST Main</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>Email: admin@kaist.ac.kr</li>
                <li>Phone: +82-42-350-0000</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center text-xs">
            <p>&copy; {new Date().getFullYear()} KAIST College of Artificial Intelligence. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;