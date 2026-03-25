import React from 'react';
import { Page } from '../types';

interface Props {
  navigateTo: (page: Page) => void;
}

const About: React.FC<Props> = ({ navigateTo }) => {
  return (
    <div className="animate-fade-in">
      <section className="bg-brand-teal text-white py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 text-brand-gold text-sm font-bold uppercase tracking-wider mb-4">
            <button onClick={() => navigateTo(Page.HOME)} className="hover:text-white transition">Home</button> / Company
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">About Vitannis</h1>
          <p className="text-xl text-brand-cream/80 max-w-3xl font-light">Over 25 years of expertise in delivering high-quality advice and smart insurance decisions.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="font-serif text-3xl text-brand-teal font-bold mb-8">Our Philosophy</h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12 font-light">
            At Vitannis, we believe that insurance is not just a product—it is the foundation of a secure financial future. For over two decades, we have served as trusted advisors to business owners, families, and partner firms. We don't just sell; we guide. We help people make smart insurance decisions that allow them to live well, knowing they are protected.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-8 bg-brand-cream-light rounded-2xl shadow-sm border border-transparent hover:border-brand-gold/20 transition-all">
              <h3 className="text-5xl font-serif font-bold text-brand-gold mb-3">25+</h3>
              <p className="text-brand-teal font-bold uppercase tracking-widest text-xs">Years Expertise</p>
            </div>
            <div className="p-8 bg-brand-cream-light rounded-2xl shadow-sm border border-transparent hover:border-brand-gold/20 transition-all">
              <h3 className="text-5xl font-serif font-bold text-brand-gold mb-3">100%</h3>
              <p className="text-brand-teal font-bold uppercase tracking-widest text-xs">Fiduciary Focus</p>
            </div>
            <div className="p-8 bg-brand-cream-light rounded-2xl shadow-sm border border-transparent hover:border-brand-gold/20 transition-all">
              <h3 className="text-5xl font-serif font-bold text-brand-gold mb-3">16+</h3>
              <p className="text-brand-teal font-bold uppercase tracking-widest text-xs">Major Carriers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;