import React from 'react';
import { ShieldCheck, HeartPulse, BadgeDollarSign, Heart, ArrowRight, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import Button from '../components/Button';
import { Page } from '../types';

interface ImmediateCareProps {
  navigateTo: (page: Page) => void;
}

const ImmediateCare: React.FC<ImmediateCareProps> = ({ navigateTo }) => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-brand-teal py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <circle cx="85%" cy="20%" r="250" fill="#c5a065" />
            <circle cx="15%" cy="80%" r="150" fill="#f0ebd8" />
          </svg>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-brand-gold/20 text-brand-gold px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-brand-gold/30">
              <Sparkles className="w-3 h-3" /> Exclusive Solution
            </div>
            <h1 className="font-serif text-4xl md:text-6xl text-white font-bold mb-6 leading-tight tracking-tight">
              The Immediate <span className="text-brand-gold italic">Care Plan</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-cream/80 mb-10 leading-relaxed font-light">
              Cap the cost of LTC. A guaranteed financial solution designed specifically for individuals already receiving long-term care.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
                How It Works
              </Button>
              <Button variant="outline" onClick={() => navigateTo(Page.CONTACT)}>
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Concept Section */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-gold/10 rounded-full -z-10"></div>
                <h2 className="font-serif text-3xl md:text-4xl text-brand-teal font-bold mb-6">A Smarter Way to Pay for Care</h2>
                <p className="text-gray-600 mb-6 leading-relaxed font-light">
                  Most long-term care insurance must be purchased years before you need it. The <strong>Immediate Care Plan</strong> is different. It is a medically underwritten annuity designed for those who are <em>already</em> in a care facility or about to enter one.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed font-light">
                  Because it is medically underwritten, your current health status actually works in your favor. Impaired health results in significantly larger guaranteed annual payments, often providing a much higher return than self-funding with your own assets.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Guaranteed income for life, no matter how long care is needed.",
                    "Medically underwritten for maximum payout efficiency.",
                    "Protects remaining assets for your heirs and legacy.",
                    "Eliminates the fear of outliving your savings."
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-gold mt-1 shrink-0" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-brand-cream-light p-8 md:p-12 rounded-3xl border border-brand-gold/20 shadow-xl relative">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                  <ShieldCheck className="w-32 h-32 text-brand-teal" />
                </div>
                <h3 className="font-serif text-2xl text-brand-teal font-bold mb-6">The "Care Gap" Challenge</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-end border-b border-brand-gold/20 pb-2">
                    <span className="text-slate-600 text-sm uppercase tracking-wider font-semibold">Annual Care Cost</span>
                    <span className="text-brand-teal font-bold text-xl">$85,000+</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-brand-gold/20 pb-2">
                    <span className="text-slate-600 text-sm uppercase tracking-wider font-semibold">Social Security & Pension</span>
                    <span className="text-brand-teal font-bold text-xl">-$30,000</span>
                  </div>
                  <div className="bg-brand-gold/10 p-4 rounded-xl border border-brand-gold/30">
                    <div className="flex justify-between items-center">
                      <span className="text-brand-teal font-bold uppercase text-xs tracking-widest">The Funding Gap</span>
                      <span className="text-brand-teal font-black text-2xl">$55,000/yr</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 italic text-center">
                    Without a plan, this gap can deplete a lifetime of savings in just a few years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-brand-cream-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-teal font-bold mb-4">Why Choose Immediate Care?</h2>
            <div className="h-1 w-20 bg-brand-gold mx-auto rounded-full mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-md border-b-4 border-brand-gold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-brand-teal/10 rounded-xl flex items-center justify-center mb-6">
                <HeartPulse className="w-6 h-6 text-brand-teal" />
              </div>
              <h3 className="text-xl font-bold text-brand-teal mb-4">Health-Based Efficiency</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                Traditional annuities penalize poor health. The Immediate Care Plan uses medical underwriting to increase your payments, recognizing that your need for care is immediate.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border-b-4 border-brand-gold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-brand-teal/10 rounded-xl flex items-center justify-center mb-6">
                <BadgeDollarSign className="w-6 h-6 text-brand-teal" />
              </div>
              <h3 className="text-xl font-bold text-brand-teal mb-4">Asset Protection</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                By using a portion of assets to guarantee care for life, you "cap" your maximum out-of-pocket expense, ensuring the rest of your estate remains intact for your family.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border-b-4 border-brand-gold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-brand-teal/10 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-brand-teal" />
              </div>
              <h3 className="text-xl font-bold text-brand-teal mb-4">Family Peace of Mind</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                Remove the burden from adult children who worry about their parents outliving their savings. The plan provides a predictable, guaranteed income stream for life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-brand-teal rounded-[3rem] p-8 md:p-16 text-white relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <div className="inline-block bg-brand-gold text-brand-teal px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                  Real World Impact
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Meet "Lynne"</h2>
                <p className="text-brand-cream/80 mb-6 font-light leading-relaxed italic">
                  "Lynne is 84 and recently moved into an Assisted Living Facility. Her family was worried that her $350,000 in savings would only last 6 years due to the $55,000 annual care gap."
                </p>
                <div className="space-y-6 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
                      <AlertCircle className="w-5 h-5" />
                    </div>
                    <p className="text-sm font-light text-brand-cream/90">
                      <strong>The Risk:</strong> Savings depleted in 6 years, leaving her without care options.
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <p className="text-sm font-light text-brand-cream/90">
                      <strong>The Solution:</strong> Allocated $225,000 to an Immediate Care Plan.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl">
                <h4 className="text-brand-gold font-bold uppercase text-xs tracking-widest mb-6">The Results</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-brand-cream/70 text-sm">Guaranteed Annual Income</span>
                    <span className="font-bold text-brand-gold">$55,000</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-brand-cream/70 text-sm">Duration of Payout</span>
                    <span className="font-bold text-brand-gold italic">For Life</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-brand-cream/70 text-sm">Savings Protected for Heirs</span>
                    <span className="font-bold text-brand-gold">$125,000</span>
                  </div>
                  <div className="pt-6">
                    <div className="bg-brand-gold text-brand-teal p-4 rounded-xl text-center">
                      <p className="text-xs font-bold uppercase tracking-tighter mb-1">Total Savings Over Standard Annuity</p>
                      <p className="text-2xl font-black">$155,000+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-cream-light">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-teal font-bold mb-6">Secure Your Care Today</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Don't let the cost of care compromise your legacy or your peace of mind. Contact our fiduciary-level advisors for a personalized assessment of the Immediate Care Plan.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button onClick={() => navigateTo(Page.CONTACT)}>
              Speak with an Advisor
            </Button>
            <Button variant="dark-outline" onClick={() => navigateTo(Page.TOOLS)}>
              Explore AI Insights <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImmediateCare;
