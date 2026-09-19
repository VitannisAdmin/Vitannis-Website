import React from 'react';
import { Briefcase, Users, Handshake, Sparkles, ArrowRight, HeartPulse } from 'lucide-react';
import Button from '../components/Button';
import FeatureCard from '../components/FeatureCard';
import { Page } from '../types';

interface HomeProps {
  navigateTo: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ navigateTo }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-brand-teal py-20 md:py-32 overflow-hidden animate-fade-in">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <circle cx="90%" cy="10%" r="300" fill="#c5a065" />
            <circle cx="10%" cy="90%" r="200" fill="#f0ebd8" />
          </svg>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-6xl text-white font-bold mb-6 leading-tight tracking-tight">
            Living Well. <span className="text-brand-gold italic">Secured.</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-cream/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            25+ years of expertise helping business owners, families, and advisors make smart, fiduciary-level insurance decisions.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button onClick={() => navigateTo(Page.ABOUT)}>Learn About Us</Button>
            <Button variant="outline" onClick={() => navigateTo(Page.CONTACT)}>Get in Touch</Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-teal font-bold mb-4">Tailored Solutions</h2>
            <div className="h-1 w-20 bg-brand-gold mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 font-light">
              We provide specialized expertise for every stage of your financial journey, ensuring your legacy and assets are protected with fiduciary care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <FeatureCard 
              title="Immediate Care Plan"
              description="A guaranteed solution for those currently receiving long-term care. Bridge the income gap."
              icon={<HeartPulse className="w-7 h-7" />}
              onClick={() => navigateTo(Page.IMMEDIATE_CARE)}
            />
            <FeatureCard 
              title="Business Owners"
              description="Strategic retirement plans and tax-deductible solutions designed to maximize wealth retention."
              icon={<Briefcase className="w-7 h-7" />}
              onClick={() => navigateTo(Page.BUSINESS)}
            />
            <FeatureCard 
              title="Individuals & Families"
              description="Comprehensive market shopping for Long Term Care, Life, and Disability insurance."
              icon={<Users className="w-7 h-7" />}
              onClick={() => navigateTo(Page.INDIVIDUALS)}
            />
            <FeatureCard 
              title="Advisor Partners"
              description="White-glove insurance extension services for your firm. We provide the documentation you need."
              icon={<Handshake className="w-7 h-7" />}
              onClick={() => navigateTo(Page.PARTNERS)}
            />
          </div>

          {/* AI Banner */}
          <div 
            className="mt-20 bg-gradient-to-r from-brand-teal to-brand-teal-light rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between text-white shadow-2xl relative overflow-hidden group cursor-pointer transition-all hover:scale-[1.01]" 
            onClick={() => navigateTo(Page.TOOLS)}
          >
            <div className="absolute inset-0 bg-brand-gold opacity-10 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
            <div className="relative z-10 md:w-2/3">
              <h3 className="font-serif text-2xl md:text-3xl font-bold flex items-center gap-3 mb-3">
                <Sparkles className="w-6 h-6 text-brand-gold" /> 
                Introducing Smart Insights
              </h3>
              <p className="text-brand-cream/90 max-w-xl font-light leading-relaxed">
                Use our new AI-powered tools to decode complex policies or assess your protection needs instantly.
              </p>
            </div>
            <div className="relative z-10 mt-8 md:mt-0">
              <button className="bg-brand-gold text-brand-teal px-8 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 hover:bg-white transition-all duration-300 transform group-hover:translate-x-2">
                Try AI Tools <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Carriers Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-400 text-sm font-semibold uppercase tracking-widest mb-12">We work with trusted carriers including</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            {["Ameritas", "Nationwide", "Guardian", "OneAmerica", "Corebridge", "Mass Mutual", "Mutual of Omaha", "Brighthouse"].map((carrier) => (
              <span key={carrier} className="text-xl font-bold text-slate-700 select-none cursor-default hover:text-brand-teal transition-colors">
                {carrier}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;