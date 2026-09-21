import React from 'react';
import { Briefcase, Users, Handshake, Sparkles, ArrowRight, HeartPulse, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';
import FeatureCard from '../components/FeatureCard';
import { Page } from '../types';

interface HomeProps {
  navigateTo: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ navigateTo }) => {
  const scrollToAboutVitannis = () => {
    const section = document.getElementById('about-vitannis-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
            50+ years of expertise helping with smart insurance decisions.
          </p>
          <div className="flex justify-center">
            <Button id="hero-learn-about-btn" onClick={scrollToAboutVitannis}>Learn About Us</Button>
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
              title="Wealth Protection"
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
                Interactive Questions &amp; Advice
              </h3>
              <p className="text-brand-cream/90 max-w-xl font-light leading-relaxed">
                Get immediate clarity on the Immediate Care Plan, business tax strategies, and wealth protection.
              </p>
            </div>
            <div className="relative z-10 mt-8 md:mt-0">
              <button className="bg-brand-gold text-brand-teal px-8 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 hover:bg-white transition-all duration-300 transform group-hover:translate-x-2">
                Ask Questions &amp; Advice <ArrowRight className="w-4 h-4" />
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

      {/* About Vitannis Section */}
      <section id="about-vitannis-section" className="py-20 md:py-28 bg-brand-cream-light border-t border-brand-cream/80">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Story & Mission */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-brand-gold/15 text-brand-teal px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5 border border-brand-gold/25">
                <Users className="w-3.5 h-3.5 text-brand-teal" />
                About Vitannis
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-teal font-bold mb-6 leading-tight">
                Dedicated Protection for Families &amp; Fellow Advisors
              </h2>
              <p className="text-gray-600 font-light text-base md:text-lg leading-relaxed mb-6">
                At Vitannis, we partner with families and fellow wealth advisors to navigate the critical intersections of wealth management and asset preservation. Backed by over 50 years of collective industry experience, we specialize in <strong>Long-Term Care (LTC) Protection</strong>—helping clients proactively safeguard their life savings, relieve caregiving burdens, and secure their legacies.
              </p>
              <p className="text-gray-600 font-light text-base md:text-lg leading-relaxed mb-8">
                Whether you are an individual planning ahead or a wealth advisory firm seeking a specialized insurance partner, we deliver independent analysis and objective guidance tailored to your specific financial goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => navigateTo(Page.ABOUT)}>
                  Learn More About Us
                </Button>
                <Button 
                  variant="dark-outline" 
                  className="border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white shadow-xs"
                  onClick={() => navigateTo(Page.PARTNERS)}
                >
                  For Advisor Partners
                </Button>
              </div>
            </div>

            {/* Immediate Care Plan Highlight Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-brand-cream hover:border-brand-gold/40 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-bl-full pointer-events-none"></div>
                <div className="inline-flex items-center gap-1.5 bg-brand-teal text-brand-gold text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-5 shadow-xs">
                  <HeartPulse className="w-3.5 h-3.5 text-brand-gold" />
                  Exclusive Care Solution
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-brand-teal mb-2">
                  The Immediate Care Plan
                </h3>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-4">
                  Cap the Cost of Long-Term Care
                </p>
                <p className="text-gray-600 font-light text-sm md:text-[15px] leading-relaxed mb-6">
                  For individuals <em>already receiving care</em> in assisted living, memory care, or nursing facilities, traditional insurance is no longer an option. Vitannis provides the <strong>Immediate Care Plan</strong>—a revolutionary, medically underwritten solution designed to cap lifetime care expenses and ensure predictable, guaranteed income for life.
                </p>
                <ul className="space-y-3 text-sm text-gray-700 font-light mb-8">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                    <span>Eliminates the fear of outliving assets during an active care crisis</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                    <span>Converts existing savings into guaranteed monthly care income</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                    <span>Protects the remaining family estate and legacy</span>
                  </li>
                </ul>
                <button
                  id="home-about-explore-immediate-care"
                  onClick={() => navigateTo(Page.IMMEDIATE_CARE)}
                  className="w-full py-3.5 px-6 rounded-full bg-brand-teal hover:bg-brand-gold text-white hover:text-brand-teal font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Explore the Immediate Care Plan</span>
                  <ArrowRight className="w-4 h-4 text-brand-gold group-hover:text-brand-teal group-hover:translate-x-1 transition-all" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;