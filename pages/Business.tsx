import React from 'react';
import { Page } from '../types';
import Button from '../components/Button';
import { CheckCircle } from 'lucide-react';

interface Props {
  navigateTo: (page: Page) => void;
}

const Business: React.FC<Props> = ({ navigateTo }) => {
  return (
    <div className="animate-fade-in">
      <section className="bg-brand-teal text-white py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 text-brand-gold text-sm font-bold uppercase tracking-wider mb-4">
            <button onClick={() => navigateTo(Page.HOME)} className="hover:text-white transition">Home</button> / Solutions
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">For Business Owners</h1>
          <p className="text-xl text-brand-cream/80 max-w-3xl font-light">Strategic protection and tax-advantaged planning to secure your business's future.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-serif text-3xl text-brand-teal font-bold mb-6">Advanced Planning Strategies</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                As a business owner, your needs go beyond simple coverage. We specialize in structuring defined benefit plans that can offer owners significant tax deductions while securing their retirement.
              </p>
              
              <div className="bg-brand-cream-light border-l-4 border-brand-gold p-8 rounded-r-lg mb-10 shadow-sm">
                <p className="italic text-brand-teal font-medium text-lg">"We provide retirement plans that give owners significant tax advantages while retaining key talent."</p>
              </div>
              
              <Button onClick={() => navigateTo(Page.CONTACT)}>Schedule a Consultation</Button>
            </div>

            <div className="bg-gray-50 p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cream/30 rounded-bl-full -mr-4 -mt-4 opacity-50 pointer-events-none"></div>
              
              <h3 className="font-serif text-2xl text-brand-teal mb-8 border-b border-gray-200 pb-4">Core Solutions</h3>
              <ul className="space-y-6">
                {[
                  { title: "Defined Benefit Plans", desc: "High-contribution retirement vehicles for tax deduction." },
                  { title: "Key Employee Insurance", desc: "Protect the business against the loss of critical talent." },
                  { title: "Executive Carve Outs", desc: "Reward top performers with exclusive benefit packages." },
                  { title: "Business Overhead Expense", desc: "Keep the lights on during periods of disability." }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-brand-gold mt-1 shrink-0" />
                    <div>
                      <strong className="text-brand-teal block text-lg mb-1">{item.title}</strong>
                      <span className="text-sm text-gray-600 font-light">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Business;