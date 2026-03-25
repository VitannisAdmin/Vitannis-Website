import React from 'react';
import { Page } from '../types';
import { HeartHandshake, Umbrella, Activity, TrendingUp } from 'lucide-react';

interface Props {
  navigateTo: (page: Page) => void;
}

const Individuals: React.FC<Props> = ({ navigateTo }) => {
  return (
    <div className="animate-fade-in">
      <section className="bg-brand-teal text-white py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 text-brand-gold text-sm font-bold uppercase tracking-wider mb-4">
            <button onClick={() => navigateTo(Page.HOME)} className="hover:text-white transition">Home</button> / Solutions
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Successful Individuals & Families</h1>
          <p className="text-xl text-brand-cream/80 max-w-3xl font-light">Objective market analysis and guidance for your most critical protection decisions.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl text-brand-teal font-bold mb-6">Preserving Your Legacy</h2>
              <p className="text-gray-600 leading-relaxed text-lg font-light">
                We don't just sell policies; we shop the entire market to provide clear guidance and education. Our goal is to ensure you understand your choices and feel confident that your wealth and family are protected.
              </p>
            </div>

            <div className="bg-brand-cream-light rounded-2xl p-8 md:p-12 mb-16 relative overflow-hidden shadow-lg border border-brand-cream">
              <div className="absolute top-0 right-0 bg-brand-gold text-white text-xs font-bold px-6 py-2 rounded-bl-xl uppercase tracking-wider shadow-sm">Primary Focus</div>
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="bg-white p-8 rounded-full shadow-md text-brand-teal shrink-0">
                  <HeartHandshake className="w-14 h-14" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-brand-teal font-bold mb-4">Long Term Care Planning</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Long term care is a critical component of wealth preservation. We provide specialized expertise in navigating the complex landscape of LTC insurance, helping you secure care without depleting your estate.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Umbrella, title: "Life Insurance", desc: "Strategic liquidity for estate taxes and family security." },
                { icon: Activity, title: "Disability Insurance", desc: "Income protection for high-earning professionals." },
                { icon: TrendingUp, title: "Annuities", desc: "Guaranteed income solutions for retirement stability." }
              ].map((item, idx) => (
                <div key={idx} className="p-8 border border-gray-100 rounded-xl hover:shadow-xl transition-all duration-300 group bg-white">
                  <item.icon className="w-10 h-10 text-brand-gold mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="font-serif text-xl text-brand-teal font-bold mb-3">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Individuals;