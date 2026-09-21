import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Sparkles, MapPin, Phone, Mail, Linkedin } from 'lucide-react';
import { useNavigate, Routes, Route, useLocation } from 'react-router-dom';
import { Page } from './types';

// Page Imports
import Home from './pages/Home';
import Business from './pages/Business';
import Individuals from './pages/Individuals';
import Partners from './pages/Partners';
import About from './pages/About';
import Contact from './pages/Contact';
import Tools from './pages/Tools';
import ImmediateCare from './pages/ImmediateCare';
import ClientIntake from './pages/ClientIntake';
import LTCResources from './pages/LTCResources';
import { ObfuscatedPhone, ObfuscatedEmail } from './components/ContactLinks';

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Map paths to Page enum for styling
  const getActivePage = (): Page => {
    const path = location.pathname;
    if (path === '/') return Page.HOME;
    if (path === '/business') return Page.BUSINESS;
    if (path === '/individuals') return Page.INDIVIDUALS;
    if (path === '/partners') return Page.PARTNERS;
    if (path === '/about') return Page.ABOUT;
    if (path === '/contact') return Page.CONTACT;
    if (path === '/insights' || path === '/qa') return Page.TOOLS;
    if (path === '/immediate-care') return Page.IMMEDIATE_CARE;
    if (path === '/ltc-resources') return Page.LTC_RESOURCES;
    if (path === '/intake') return Page.INTAKE;
    return Page.HOME;
  };

  const activePage = getActivePage();

  // Handle scroll for sticky header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page: Page) => {
    let path = '/';
    switch (page) {
      case Page.HOME: path = '/'; break;
      case Page.BUSINESS: path = '/business'; break;
      case Page.INDIVIDUALS: path = '/individuals'; break;
      case Page.PARTNERS: path = '/partners'; break;
      case Page.ABOUT: path = '/about'; break;
      case Page.CONTACT: path = '/contact'; break;
      case Page.TOOLS: path = '/qa'; break;
      case Page.IMMEDIATE_CARE: path = '/immediate-care'; break;
      case Page.LTC_RESOURCES: path = '/ltc-resources'; break;
      case Page.INTAKE: path = '/intake'; break;
    }
    navigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-brand-cream-light selection:bg-brand-gold selection:text-brand-teal">
      
      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-teal shadow-xl py-2' : 'bg-brand-teal py-4'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="/" onClick={(e) => { e.preventDefault(); navigateTo(Page.HOME); }} className="block hover:opacity-90 transition transform hover:scale-105 duration-300 origin-left">
             {/* Using a text placeholder for logo if image fails, but keeping image logic */}
             <div className="flex items-center gap-3">
                <img 
                  src="https://res.cloudinary.com/srinsurance/image/upload/v1771170905/Screenshot_2026-02-09_161610_icwgpg.png" 
                  alt="Vitannis" 
                  className={`object-contain transition-all duration-300 ${scrolled ? 'h-12' : 'h-16'}`}
                />
             </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            <button onClick={() => navigateTo(Page.HOME)} className={`text-sm font-medium transition uppercase tracking-wide ${activePage === Page.HOME ? 'text-brand-gold' : 'text-brand-cream hover:text-brand-gold'}`}>Home</button>
            
            <div className="relative group" onMouseLeave={() => setSolutionsOpen(false)}>
              <button 
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                onMouseEnter={() => setSolutionsOpen(true)}
                className={`text-sm font-medium transition uppercase tracking-wide flex items-center gap-1 py-2 ${[Page.BUSINESS, Page.INDIVIDUALS, Page.PARTNERS, Page.IMMEDIATE_CARE, Page.LTC_RESOURCES].includes(activePage) ? 'text-brand-gold' : 'text-brand-cream hover:text-brand-gold'}`}>
                Solutions <ChevronDown className="w-4 h-4" />
              </button>
              <div className={`absolute left-0 top-full pt-2 w-56 z-50 ${solutionsOpen ? 'block' : 'hidden'}`}>
                <div className="bg-white text-brand-teal shadow-xl rounded-md overflow-hidden transition-all transform origin-top-left border border-gray-100 animate-fade-in">
                  <button onClick={() => { navigateTo(Page.IMMEDIATE_CARE); setSolutionsOpen(false); }} className="block w-full text-left px-4 py-3 hover:bg-brand-cream-light text-sm border-b border-gray-100 hover:text-brand-gold transition-colors font-semibold">Immediate Care Plan</button>
                  <button onClick={() => { navigateTo(Page.LTC_RESOURCES); setSolutionsOpen(false); }} className="block w-full text-left px-4 py-3 hover:bg-brand-cream-light text-sm border-b border-gray-100 hover:text-brand-gold transition-colors font-semibold">LTC Resources</button>
                  <button onClick={() => { navigateTo(Page.BUSINESS); setSolutionsOpen(false); }} className="block w-full text-left px-4 py-3 hover:bg-brand-cream-light text-sm border-b border-gray-100 hover:text-brand-gold transition-colors">Business Owners</button>
                  <button onClick={() => { navigateTo(Page.INDIVIDUALS); setSolutionsOpen(false); }} className="block w-full text-left px-4 py-3 hover:bg-brand-cream-light text-sm border-b border-gray-100 hover:text-brand-gold transition-colors">Wealth Protection</button>
                  <button onClick={() => { navigateTo(Page.PARTNERS); setSolutionsOpen(false); }} className="block w-full text-left px-4 py-3 hover:bg-brand-cream-light text-sm hover:text-brand-gold transition-colors">Advisor Partners</button>
                </div>
              </div>
            </div>

            <button onClick={() => navigateTo(Page.TOOLS)} className={`text-sm font-medium transition uppercase tracking-wide flex items-center gap-1 ${activePage === Page.TOOLS ? 'text-brand-gold' : 'text-brand-cream hover:text-brand-gold'}`}>
              <Sparkles className="w-3 h-3 text-brand-gold" /> Q&A
            </button>
            <button onClick={() => navigateTo(Page.ABOUT)} className={`text-sm font-medium transition uppercase tracking-wide ${activePage === Page.ABOUT ? 'text-brand-gold' : 'text-brand-cream hover:text-brand-gold'}`}>About Us</button>
            
            <button 
              onClick={() => navigateTo(Page.CONTACT)} 
              className="bg-brand-gold text-brand-teal px-5 py-2 rounded-full font-semibold hover:bg-white transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-brand-cream focus:outline-none p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-brand-teal-light border-t border-brand-teal animate-fade-in">
            <button onClick={() => navigateTo(Page.HOME)} className="block w-full text-left px-6 py-4 hover:bg-brand-teal text-sm text-brand-cream border-b border-brand-teal/30">Home</button>
            <div className="px-6 py-2 text-xs font-bold text-brand-gold uppercase tracking-widest opacity-70">Solutions</div>
            <button onClick={() => navigateTo(Page.IMMEDIATE_CARE)} className="block w-full text-left pl-10 pr-6 py-3 hover:bg-brand-teal text-sm text-brand-gold font-semibold italic">Immediate Care Plan</button>
            <button onClick={() => navigateTo(Page.LTC_RESOURCES)} className="block w-full text-left pl-10 pr-6 py-3 hover:bg-brand-teal text-sm text-brand-gold font-medium">LTC Resources</button>
            <button onClick={() => navigateTo(Page.BUSINESS)} className="block w-full text-left pl-10 pr-6 py-3 hover:bg-brand-teal text-sm text-brand-cream">Business Owners</button>
            <button onClick={() => navigateTo(Page.INDIVIDUALS)} className="block w-full text-left pl-10 pr-6 py-3 hover:bg-brand-teal text-sm text-brand-cream">Wealth Protection</button>
            <button onClick={() => navigateTo(Page.PARTNERS)} className="block w-full text-left pl-10 pr-6 py-3 hover:bg-brand-teal text-sm text-brand-cream border-b border-brand-teal/30">Advisor Partners</button>
            <button onClick={() => navigateTo(Page.TOOLS)} className="block w-full text-left px-6 py-4 hover:bg-brand-teal text-sm text-brand-cream flex items-center gap-2 border-b border-brand-teal/30"><Sparkles className="w-3 h-3 text-brand-gold" /> Q&A</button>
            <button onClick={() => navigateTo(Page.ABOUT)} className="block w-full text-left px-6 py-4 hover:bg-brand-teal text-sm text-brand-cream border-b border-brand-teal/30">About Us</button>
            <button onClick={() => navigateTo(Page.CONTACT)} className="block w-full text-left px-6 py-4 hover:bg-brand-teal text-sm font-bold text-brand-gold">Contact Us</button>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow animate-fade-in">
        <Routes>
          <Route path="/" element={<Home navigateTo={navigateTo} />} />
          <Route path="/business" element={<Business navigateTo={navigateTo} />} />
          <Route path="/individuals" element={<Individuals navigateTo={navigateTo} />} />
          <Route path="/wealth-protection" element={<Individuals navigateTo={navigateTo} />} />
          <Route path="/partners" element={<Partners navigateTo={navigateTo} />} />
          <Route path="/about" element={<About navigateTo={navigateTo} />} />
          <Route path="/contact" element={<Contact navigateTo={navigateTo} />} />
          <Route path="/insights" element={<Tools />} />
          <Route path="/qa" element={<Tools />} />
          <Route path="/immediate-care" element={<ImmediateCare navigateTo={navigateTo} />} />
          <Route path="/ltc-resources" element={<LTCResources navigateTo={navigateTo} />} />
          <Route path="/intake" element={<ClientIntake navigateTo={navigateTo} />} />
          <Route path="*" element={<Home navigateTo={navigateTo} />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-brand-teal text-brand-cream border-t border-brand-teal-light mt-auto">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <img src="https://res.cloudinary.com/srinsurance/image/upload/v1771170905/Screenshot_2026-02-09_161610_icwgpg.png" alt="Vitannis Logo" className="h-10 w-auto object-contain mb-6 opacity-90" />
              <p className="text-brand-cream/70 text-sm leading-relaxed mb-6 font-light">
                Providing fiduciary level guidance to help you make smart insurance decisions.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-brand-cream/60 hover:text-brand-gold transition"><Linkedin className="w-5 h-5" /></a>
              </div>
            </div>
            <div>
              <h4 className="text-brand-gold font-bold uppercase text-xs tracking-widest mb-6">Navigation</h4>
              <ul className="space-y-3 text-sm text-brand-cream/80 font-light">
                <li><button onClick={() => navigateTo(Page.HOME)} className="hover:text-white transition">Home</button></li>
                <li><button onClick={() => navigateTo(Page.BUSINESS)} className="hover:text-white transition">Business Solutions</button></li>
                <li><button onClick={() => navigateTo(Page.INDIVIDUALS)} className="hover:text-white transition">Wealth Protection</button></li>
                <li><button onClick={() => navigateTo(Page.LTC_RESOURCES)} className="hover:text-white transition">LTC Resources</button></li>
                <li><button onClick={() => navigateTo(Page.TOOLS)} className="hover:text-white transition flex items-center gap-1"><Sparkles className="w-3 h-3" /> Q&A</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-brand-gold font-bold uppercase text-xs tracking-widest mb-6">Company</h4>
              <ul className="space-y-3 text-sm text-brand-cream/80 font-light">
                <li><button onClick={() => navigateTo(Page.ABOUT)} className="hover:text-white transition">About Us</button></li>
                <li><button onClick={() => navigateTo(Page.CONTACT)} className="hover:text-white transition">Contact Us</button></li>
                <li><button onClick={() => navigateTo(Page.INTAKE)} className="hover:text-white transition text-brand-gold font-medium">Client Intake Form</button></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-brand-gold font-bold uppercase text-xs tracking-widest mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-brand-cream/80 font-light">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1 text-brand-gold shrink-0" />
                  <span>420 The Parkway # I-A,<br/>Greer SC 29650</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                  <ObfuscatedPhone className="hover:text-white transition" />
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                  <ObfuscatedEmail className="hover:text-white transition" />
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-brand-teal-light/50 mt-12 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-brand-cream/40 font-light">
              &copy; {new Date().getFullYear()} Vitannis. All rights reserved.
            </p>
            <p className="text-xs text-brand-cream/40 font-light mt-2 md:mt-0">
                Designed with precision.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
