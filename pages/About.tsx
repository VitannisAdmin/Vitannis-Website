import React from 'react';
import { Page } from '../types';
import { Users, Sparkles } from 'lucide-react';

interface Props {
  navigateTo: (page: Page) => void;
}

interface TeamMember {
  id: string;
  name: string;
  title: string;
  image: string;
  description: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'thomas',
    name: 'Thomas Deleot',
    title: 'SENIOR CHAIRMAN',
    image: 'https://res.cloudinary.com/dqazb2m7w/image/upload/v1781702788/1516628039111_avnjfc.jpg',
    description:
      "Serving as the firm's Senior Chairman, Tom leverages over 50 years of industry experience. A trusted advisor to countless families and business owners, his profound life experience and strategic foresight guide our firm's mission in long-term care protection.",
  },
  {
    id: 'tyler',
    name: 'Tyler Maddox',
    title: 'SENIOR ADVISOR',
    image: 'https://res.cloudinary.com/dqazb2m7w/image/upload/v1781702788/1712848344163_po3k2d.jpg',
    description:
      'With 20 years of specialized experience in insurance and long-term care planning, Tyler is an analytical problem-solver. He excels at optimizing funding solutions, ensuring families find the most efficient financial path during a care crisis.',
  },
  {
    id: 'forrest',
    name: 'Forrest Deleot',
    title: 'SENIOR ADVISOR',
    image: 'https://res.cloudinary.com/dqazb2m7w/image/upload/v1782499052/unnamed_motimy.png',
    description:
      'A compassionate and dedicated advisor, Forrest brings invaluable expertise from his background in Medicare and senior care communities. His empathetic, client-first approach makes him uniquely suited to help families navigate complex care transitions.',
  },
];

const About: React.FC<Props> = ({ navigateTo }) => {
  return (
    <div className="animate-fade-in">
      <section className="bg-brand-teal text-white py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 text-brand-gold text-sm font-bold uppercase tracking-wider mb-4">
            <button onClick={() => navigateTo(Page.HOME)} className="hover:text-white transition cursor-pointer">Home</button> / Company
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">About Vitannis</h1>
          <h2 className="text-xl md:text-2xl text-brand-cream/90 max-w-3xl font-light leading-relaxed">Delivering high-quality advice and smart insurance decisions.</h2>
        </div>
      </section>

      {/* Philosophy & Stats Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="font-serif text-3xl text-brand-teal font-bold mb-8">Our Philosophy</h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12 font-light">
            At Vitannis, we believe that insurance is not just a product—it is the foundation of a secure financial future. For over two decades, we have served as trusted advisors to business owners, families, and partner firms. We don't just sell; we guide. We help people make smart insurance decisions that allow them to live well, knowing they are protected.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-8 bg-brand-cream-light rounded-2xl shadow-sm border border-transparent hover:border-brand-gold/20 transition-all">
              <h3 className="text-5xl font-serif font-bold text-brand-gold mb-3">50+</h3>
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

      {/* Leadership & Advisory Team Section */}
      <section id="our-team-section" className="py-24 bg-brand-cream-light border-t border-brand-cream/80">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-brand-gold/15 text-brand-teal px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-brand-gold/25">
              <Users className="w-3.5 h-3.5 text-brand-teal" />
              Leadership &amp; Advisors
            </div>
            <h2 id="team-heading" className="font-serif text-3xl md:text-4xl text-brand-teal font-bold mb-4">
              Our Leadership Team
            </h2>
            <div className="h-1 w-20 bg-brand-gold mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 font-light text-lg leading-relaxed">
              Decades of specialized experience protecting families, business enterprises, and long-term care legacies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto items-stretch">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                id={`team-member-card-${member.id}`}
                className="bg-white rounded-3xl px-8 py-10 md:px-10 md:py-12 shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-slate-100/80 flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.09)]"
              >
                {/* Member Headshot */}
                <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden mx-auto mb-6 flex-shrink-0 bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover ${member.id === 'thomas' ? 'object-top' : 'object-center'}`}
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Member Name */}
                <h3 className="font-sans text-2xl md:text-[26px] font-bold text-[#1a343c] tracking-tight mb-2">
                  {member.name}
                </h3>

                {/* Member Title */}
                <p className="text-xs md:text-[13px] font-bold uppercase tracking-[0.15em] text-[#c5a065] mb-6">
                  {member.title}
                </p>

                {/* Member Bio */}
                <p className="text-gray-600 font-light text-[15px] md:text-base leading-relaxed text-center">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Consultation Section */}
      <section id="about-cta-section" className="py-20 bg-white border-t border-brand-cream/60">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-brand-gold/15 text-brand-teal px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-brand-gold/25">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            Strategic Protection
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-teal font-bold mb-4">
            Ready for Conflict-Free Advisory Guidance?
          </h2>
          <p className="text-gray-600 font-light max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
            Whether you need to cap the cost of care with an Immediate Care Plan, evaluate key person insurance, or review retirement transitions, our partners are ready to assist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              id="about-cta-contact-btn"
              onClick={() => navigateTo(Page.CONTACT)}
              className="bg-brand-gold text-brand-teal px-8 py-3.5 rounded-full font-bold shadow-md hover:bg-brand-teal hover:text-white transition-all duration-300 cursor-pointer"
            >
              Get in Touch with Our Team
            </button>
            <button
              id="about-cta-intake-btn"
              onClick={() => navigateTo(Page.INTAKE)}
              className="bg-brand-cream-light text-brand-teal border border-brand-teal/20 px-8 py-3.5 rounded-full font-bold hover:bg-brand-cream transition-all duration-300 cursor-pointer"
            >
              Start Client Intake
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;