import React from 'react';
import { Page } from '../types';
import Button from '../components/Button';
import { Check, ShieldCheck } from 'lucide-react';

interface Props {
  navigateTo: (page: Page) => void;
}

const Partners: React.FC<Props> = ({ navigateTo }) => {
  return (
    <div className="animate-fade-in">
      <section className="bg-brand-teal text-white py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 text-brand-gold text-sm font-bold uppercase tracking-wider mb-4">
            <button onClick={() => navigateTo(Page.HOME)} className="hover:text-white transition">Home</button> / Solutions
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">For Advisor Partners</h1>
          <p className="text-xl text-brand-cream/80 max-w-3xl font-light">The dedicated insurance arm of your practice. We protect your clients and your reputation.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="font-serif text-3xl text-brand-teal font-bold mb-6">An Extension of Your Firm</h2>
              <p className="text-gray-600 leading-relaxed mb-6 font-light text-lg">
                You focus on AUM and financial planning; we handle the risk management. We partner with RIAs and financial advisors to provide a "white glove" insurance experience that matches your high standards.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We act as a fiduciary in our advice, ensuring recommendations are solely in the client's best interest.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Complete Documentation for Your Records",
                  "Fiduciary-Level Advice",
                  "Turnkey Protection Solutions"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="bg-brand-teal/10 p-1 rounded-full">
                      <Check className="w-4 h-4 text-brand-teal" />
                    </div>
                    <span className="font-medium text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:w-1/2 w-full">
              <div className="bg-brand-cream-light p-12 rounded-2xl border border-brand-cream flex flex-col justify-center items-center text-center shadow-xl transform hover:translate-y-1 transition duration-500">
                <ShieldCheck className="w-20 h-20 text-brand-gold mb-6" />
                <h3 className="font-serif text-3xl text-brand-teal font-bold mb-4">Partner with Vitannis</h3>
                <p className="text-gray-600 mb-8 max-w-xs mx-auto">Enhance your value proposition today with our expert support.</p>
                <Button onClick={() => navigateTo(Page.CONTACT)} fullWidth>Discuss a Partnership</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;