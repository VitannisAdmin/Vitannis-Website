import React from 'react';
import { 
  ShieldCheck, 
  HeartPulse, 
  BadgeDollarSign, 
  Heart, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles,
  Home as HomeIcon,
  Users,
  Building2,
  ClipboardCheck,
  Landmark,
  Scale
} from 'lucide-react';
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
            <h1 className="font-serif text-4xl md:text-6xl text-white font-bold mb-4 leading-tight tracking-tight">
              The Immediate <span className="text-brand-gold italic">Care Plan</span>
            </h1>
            <h2 className="font-serif text-[28px] md:text-[35px] lg:text-[42px] text-brand-gold font-bold mb-6 tracking-tight">
              Cap the Cost of Long Term Care
            </h2>
            <p className="text-lg md:text-xl text-brand-cream/80 mb-10 leading-relaxed font-light max-w-2xl mx-auto">
              A guaranteed financial solution designed specifically for individuals already receiving long-term care.
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
                  The <strong>Immediate Care Plan</strong> is a turnkey funding solution designed to cap care costs and provide guaranteed lifetime income for families navigating an active care need.
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
              <div className="bg-brand-cream-light p-8 md:p-10 rounded-3xl border border-brand-gold/30 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                  <ShieldCheck className="w-32 h-32 text-brand-teal" />
                </div>
                
                <div className="inline-flex items-center gap-1.5 bg-brand-gold/20 text-brand-teal text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 border border-brand-gold/30">
                  <Sparkles className="w-3 h-3 text-brand-teal" />
                  1 Turnkey Transaction
                </div>

                <h3 className="font-serif text-2xl md:text-3xl text-brand-teal font-bold mb-2">
                  Capping the Cost of Care
                </h3>
                <p className="text-gray-600 font-light text-sm mb-6 leading-relaxed">
                  How a single turnkey transaction locks in lifetime care and safeguards family assets.
                </p>

                {/* Financial figures */}
                <div className="space-y-3.5 mb-6">
                  <div className="flex justify-between items-center bg-white px-5 py-3.5 rounded-2xl border border-brand-cream shadow-xs">
                    <div>
                      <span className="block text-slate-500 text-xs uppercase tracking-wider font-semibold">Care Cost</span>
                      <span className="text-slate-600 text-xs font-light">Annual facility &amp; care expenses</span>
                    </div>
                    <span className="text-brand-teal font-bold text-xl md:text-2xl">$76,800<span className="text-xs font-normal text-slate-500">/yr</span></span>
                  </div>

                  <div className="bg-brand-teal text-white p-5 rounded-2xl shadow-md border border-brand-teal-light/30 relative overflow-hidden">
                    <div className="flex justify-between items-center relative z-10">
                      <div>
                        <span className="block text-brand-gold text-xs uppercase tracking-widest font-bold">Lump Sum</span>
                        <span className="text-brand-cream/80 text-xs font-light">One-time turnkey premium</span>
                      </div>
                      <span className="text-white font-black text-2xl md:text-3xl">$231,200</span>
                    </div>
                  </div>
                </div>

                {/* 3 Key Outcomes */}
                <div className="space-y-3 pt-4 border-t border-brand-gold/20">
                  <div className="flex items-start gap-3 bg-white/70 p-3 rounded-xl border border-brand-gold/15">
                    <CheckCircle2 className="w-5 h-5 text-brand-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="text-slate-800 text-sm font-semibold">LTC costs are capped at $231,200</p>
                      <p className="text-slate-600 text-xs font-light">Total out-of-pocket expenses never exceed the initial lump sum, regardless of duration.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white/70 p-3 rounded-xl border border-brand-gold/15">
                    <CheckCircle2 className="w-5 h-5 text-brand-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="text-slate-800 text-sm font-semibold">Guaranteed payments of $76,800 for life</p>
                      <p className="text-slate-600 text-xs font-light">Dependable monthly income flows seamlessly to cover care without market risk.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white/70 p-3 rounded-xl border border-brand-gold/15">
                    <CheckCircle2 className="w-5 h-5 text-brand-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="text-slate-800 text-sm font-semibold">No emotional burden of coordinating LTC payments</p>
                      <p className="text-slate-600 text-xs font-light">Eliminates financial anxiety, ongoing family stress, and care-funding disputes.</p>
                    </div>
                  </div>
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
            <h2 className="font-serif text-3xl md:text-4xl text-brand-teal font-bold mb-4">Why Choose Immediate Care Plan?</h2>
            <div className="h-1 w-20 bg-brand-gold mx-auto rounded-full mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-md border-b-4 border-brand-gold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-brand-teal/10 rounded-xl flex items-center justify-center mb-6">
                <HeartPulse className="w-6 h-6 text-brand-teal" />
              </div>
              <h3 className="text-xl font-bold text-brand-teal mb-3">Reduce Care Costs</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                Substantially lowers the total out-of-pocket cost of long-term care over a typical 2–5 year care period compared to self-funding.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border-b-4 border-brand-gold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-brand-teal/10 rounded-xl flex items-center justify-center mb-6">
                <BadgeDollarSign className="w-6 h-6 text-brand-teal" />
              </div>
              <h3 className="text-xl font-bold text-brand-teal mb-3">Asset Protection</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                Cap lifetime care expenses with a single turnkey transaction, keeping the remainder of your family's estate protected.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border-b-4 border-brand-gold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-brand-teal/10 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-brand-teal" />
              </div>
              <h3 className="text-xl font-bold text-brand-teal mb-3">Family Peace of Mind</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                Eliminate the anxiety of outliving assets and the ongoing emotional friction of managing and coordinating care bills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-brand-teal rounded-[3rem] p-8 md:p-14 text-white relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              {/* Case Study Details & Highlights */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 bg-brand-gold/20 text-brand-gold px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-brand-gold/30">
                  <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                  Real-World Case Study
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Meet "Lynne"</h2>
                <p className="text-brand-cream/80 mb-6 font-light leading-relaxed text-base md:text-lg">
                  Lynne, age 84, recently transitioned into assisted living facing a <span className="text-white font-medium">$55,000 annual care funding gap</span>. With $350,000 in total savings, self-funding would have completely drained her life savings in just 6 years.
                </p>

                {/* Highlight Cards: Amount Allocated & Guaranteed Income */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm border border-brand-gold/30 p-5 rounded-2xl">
                    <span className="block text-brand-gold text-xs uppercase tracking-widest font-bold mb-1">
                      Allocated to Plan
                    </span>
                    <span className="block text-white text-3xl font-black mb-1">
                      $190,000
                    </span>
                    <p className="text-xs text-brand-cream/70 font-light">
                      One-time turnkey allocation capping all future care expenses.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm border border-brand-gold/30 p-5 rounded-2xl">
                    <span className="block text-brand-gold text-xs uppercase tracking-widest font-bold mb-1">
                      Guaranteed Annual Income
                    </span>
                    <span className="block text-white text-3xl font-black mb-1">
                      $55,000<span className="text-sm font-normal text-brand-cream/80">/yr</span>
                    </span>
                    <p className="text-xs text-brand-cream/70 font-light">
                      Guaranteed for life to pay care bills directly without market risk.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 border border-white/10 p-4 rounded-xl">
                  <ShieldCheck className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <p className="text-xs md:text-sm font-light text-brand-cream/90 leading-relaxed">
                    <strong className="text-white">Protected Family Legacy:</strong> Lynne's remaining <strong>$160,000</strong> in personal savings stayed completely untouched in her bank account, preserved safely for her family from day one.
                  </p>
                </div>
              </div>
              
              {/* 6-Year Financial Outcome Breakdown */}
              <div className="lg:col-span-5 bg-white/5 backdrop-blur-sm border border-white/15 p-6 md:p-8 rounded-3xl">
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/10">
                  <h4 className="text-brand-gold font-bold uppercase text-xs tracking-widest">
                    6-Year Care Funding Analysis
                  </h4>
                  <span className="text-[11px] text-brand-cream/60 font-light">6-Year Horizon</span>
                </div>

                <div className="space-y-3.5 mb-6 text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <div>
                      <span className="text-brand-cream/80 block">Self-Funded Care (6 Yrs)</span>
                      <span className="text-[11px] text-brand-cream/50">6 × $55,000 care funding gap</span>
                    </div>
                    <span className="font-semibold text-rose-300">$330,000</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <div>
                      <span className="text-brand-cream/80 block">Immediate Care Plan Cost</span>
                      <span className="text-[11px] text-brand-cream/50">One-time turnkey premium</span>
                    </div>
                    <span className="font-semibold text-white">$190,000</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <div>
                      <span className="text-brand-cream/80 block">Care Payouts Received (6 Yrs)</span>
                      <span className="text-[11px] text-brand-cream/50">Guaranteed income for care</span>
                    </div>
                    <span className="font-semibold text-brand-gold">$330,000</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <div>
                      <span className="text-brand-cream/80 block">Savings Retained by Family</span>
                      <span className="text-[11px] text-brand-cream/50">Untouched from day one</span>
                    </div>
                    <span className="font-semibold text-brand-gold">$160,000</span>
                  </div>
                </div>

                {/* Net Savings Callout */}
                <div className="bg-brand-gold text-brand-teal p-5 rounded-2xl shadow-lg text-center">
                  <p className="text-xs font-bold uppercase tracking-wider mb-1">
                    Net Care Savings Over 6 Years
                  </p>
                  <p className="text-3xl font-black mb-1.5">$140,000+</p>
                  <p className="text-xs text-brand-teal/85 font-medium leading-tight">
                    Capping out-of-pocket costs saved $140,000 in care expenses while keeping $160,000 in family savings fully protected.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LTC Resources Section */}
      <section className="py-24 bg-white border-t border-brand-gold/15">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-brand-teal/10 text-brand-teal px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
              Comprehensive Care Support
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-teal font-bold mb-4">
              LTC Resources
            </h2>
            <p className="text-gray-600 font-light text-base md:text-lg leading-relaxed">
              Funding care is only one piece of the puzzle. Vitannis connects families with trusted, fiduciary-aligned specialists to guide every step of the long-term care journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Home Equity Solutions",
                icon: HomeIcon,
                desc: "Unlock housing wealth and liquidity through specialized reverse mortgages, senior bridge loans, or equity preservation options.",
              },
              {
                title: "Care Coordinators",
                icon: Users,
                desc: "Licensed geriatric care managers providing hands-on health navigation, medical provider alignment, and family advocacy.",
              },
              {
                title: "Care Placement Specialists",
                icon: Building2,
                desc: "Local advisors matching families with vetted assisted living, memory care, and continuing care retirement communities.",
              },
              {
                title: "Care Plan Specialists",
                icon: ClipboardCheck,
                desc: "Certified professionals conducting clinical ADL assessments, evaluating care levels, and forecasting multi-year expenses.",
              },
              {
                title: "Real Estate Advisors",
                icon: Landmark,
                desc: "Designated Senior Real Estate Specialists (SRES) assisting with home downsizing, clean-outs, estate sales, and property transitions.",
              },
              {
                title: "Attorneys",
                icon: Scale,
                desc: "Elder law and estate planning counsel safeguarding healthcare directives, financial powers of attorney, and asset protection trusts.",
              },
            ].map((resource, idx) => {
              const Icon = resource.icon;
              return (
                <div 
                  key={idx}
                  className="bg-brand-cream-light/70 hover:bg-white border border-brand-gold/20 hover:border-brand-teal/30 p-7 rounded-2xl transition-all duration-300 hover:shadow-lg group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-brand-teal/10 text-brand-teal group-hover:bg-brand-teal group-hover:text-brand-gold flex items-center justify-center mb-5 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-brand-teal mb-3 group-hover:text-brand-gold transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 text-sm font-light leading-relaxed">
                      {resource.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Link to LTC Resources Page */}
          <div className="bg-brand-teal text-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="max-w-xl text-center md:text-left">
              <h3 className="font-serif text-2xl font-bold mb-2 text-white">
                Explore Our Dedicated LTC Resources Directory
              </h3>
              <p className="text-brand-cream/80 text-sm font-light leading-relaxed">
                Browse detailed service descriptions, vetted provider placeholders, and request direct warm introductions to accredited care professionals.
              </p>
            </div>
            <Button 
              onClick={() => navigateTo(Page.LTC_RESOURCES)} 
              className="shrink-0"
            >
              View LTC Resources Page <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
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
