import React, { useState } from 'react';
import { Page } from '../types';
import Button from '../components/Button';
import { 
  Home, 
  Users, 
  Building2, 
  ClipboardCheck, 
  Landmark, 
  Scale, 
  Search, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  PhoneCall, 
  FileText, 
  Sparkles,
  ExternalLink,
  ChevronRight,
  Filter,
  Check
} from 'lucide-react';

interface Props {
  navigateTo: (page: Page) => void;
}

interface ResourceItem {
  id: string;
  category: string;
  categoryKey: 'home-equity' | 'care-coordinators' | 'care-placement' | 'care-plan' | 'real-estate' | 'attorneys';
  title: string;
  providerPlaceholder: string;
  badge: string;
  description: string;
  keyServices: string[];
  idealFor: string;
  turnaroundTime: string;
}

const resourcesData: ResourceItem[] = [
  {
    id: 'res-1',
    category: 'Home Equity Solutions',
    categoryKey: 'home-equity',
    title: 'Senior Home Equity & Transition Financing',
    providerPlaceholder: '[Premier Home Equity Advisory Partner]',
    badge: 'Financing & Liquidity',
    description: 'Specialized mortgage and equity release strategies designed to unlock housing wealth without requiring immediate liquidation or distressed property sales.',
    keyServices: [
      'Home Equity Conversion Mortgages (HECM for Care)',
      'Jumbo proprietary reverse mortgages',
      'Senior transition bridge loans',
      'HELOC care-contingency reserves'
    ],
    idealFor: 'Families with substantial home equity who need liquidity for care facility move-ins or in-home care remodeling.',
    turnaroundTime: 'Evaluation in 48-72 hours'
  },
  {
    id: 'res-2',
    category: 'Care Coordinators',
    categoryKey: 'care-coordinators',
    title: 'Aging Life Care & Geriatric Care Management',
    providerPlaceholder: '[Certified Geriatric Care Management Group]',
    badge: 'Clinical & Family Support',
    description: 'Licensed clinical professionals who assess care requirements, coordinate health providers, and serve as an objective advocate for the senior and their family.',
    keyServices: [
      'Comprehensive in-home functional safety assessments',
      'Coordination between doctors, therapies, and care staff',
      'Local family proxy and regular on-site monitoring',
      'Crisis intervention & hospitalization discharge planning'
    ],
    idealFor: 'Families managing care from out of state or overwhelmed by complex medical routines and facility transitions.',
    turnaroundTime: 'Initial consultation within 24 hours'
  },
  {
    id: 'res-3',
    category: 'Care Placement Specialists',
    categoryKey: 'care-placement',
    title: 'Senior Living & Memory Care Advisory',
    providerPlaceholder: '[Vetted Senior Living Placement Advisory]',
    badge: 'Facility Matching',
    description: 'Local experts who match seniors to vetted assisted living, memory care, and continuing care retirement communities (CCRCs) tailored to budget and care needs.',
    keyServices: [
      'Curated facility recommendations based on state inspection records',
      'Accompanied facility tours and admission contract review',
      'Negotiation of community fees and care level surcharges',
      'Urgent placement assistance during acute hospital discharges'
    ],
    idealFor: 'Families needing expedited, trusted community placement without the conflict of generic internet referral mills.',
    turnaroundTime: 'Immediate placement matching'
  },
  {
    id: 'res-4',
    category: 'Care Plan Specialists',
    categoryKey: 'care-plan',
    title: 'Functional Care Assessments & Cost Forecasting',
    providerPlaceholder: '[Certified Care Plan & ADL Assessment Specialist]',
    badge: 'Clinical Cost Audits',
    description: 'Formal assessments that accurately evaluate Activities of Daily Living (ADLs), project future care trajectory, and establish clinical budgets.',
    keyServices: [
      'Formal ADL & cognitive impairment certification',
      'Multi-year care progression cost forecasting',
      'Facility level-of-care tier verification and appeal',
      'Clinical care plan documentation for insurance & tax purposes'
    ],
    idealFor: 'Families wanting clarity on exact care level charges and long-term financial trajectory before signing long-term contracts.',
    turnaroundTime: 'Reports completed in 3-5 business days'
  },
  {
    id: 'res-5',
    category: 'Real Estate Advisors',
    categoryKey: 'real-estate',
    title: 'Senior Real Estate Specialists (SRES) & Downsizing',
    providerPlaceholder: '[Designated Senior Real Estate Advisory Firm]',
    badge: 'Property & Estate Transition',
    description: 'Compassionate real estate professionals certified in late-stage transitions, estate sales, decluttering, and maximizing home sale value.',
    keyServices: [
      'Full-service property preparation, staging, and estate sales',
      'Turnkey clean-out, packing, and sentimental item dispersal',
      'As-is senior cash buyout options for immediate care funding',
      'Senior market valuations and tax-basis coordination'
    ],
    idealFor: 'Families vacating a family residence to fund care where children are unable to manage a time-intensive clean-out.',
    turnaroundTime: 'Complimentary home assessment in 48 hours'
  },
  {
    id: 'res-6',
    category: 'Attorneys',
    categoryKey: 'attorneys',
    title: 'Elder Law, Medicaid & Estate Planning Counsel',
    providerPlaceholder: '[Specialized Elder Law & Estate Planning Practice]',
    badge: 'Legal & Fiduciary Protection',
    description: 'Specialized legal counsel focused on powers of attorney, healthcare directives, irrevocable trusts, asset protection, and fiduciary compliance.',
    keyServices: [
      'Durable Financial & Healthcare Powers of Attorney',
      'Living Trusts & Special Needs Trusts',
      'Medicaid spend-down and crisis asset protection planning',
      'Guardianship and conservatorship legal proceedings'
    ],
    idealFor: 'Families needing ironclad fiduciary authority and legal protection to manage accounts, property, and healthcare decisions.',
    turnaroundTime: 'Priority scheduling for care crises'
  }
];

const categoryTabs = [
  { key: 'all', label: 'All Resources', icon: Building2 },
  { key: 'home-equity', label: 'Home Equity Solutions', icon: Home },
  { key: 'care-coordinators', label: 'Care Coordinators', icon: Users },
  { key: 'care-placement', label: 'Care Placement Specialists', icon: Building2 },
  { key: 'care-plan', label: 'Care Plan Specialists', icon: ClipboardCheck },
  { key: 'real-estate', label: 'Real Estate Advisors', icon: Landmark },
  { key: 'attorneys', label: 'Attorneys & Legal', icon: Scale },
];

const LTCResources: React.FC<Props> = ({ navigateTo }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedResourceForReferral, setSelectedResourceForReferral] = useState<ResourceItem | null>(null);
  const [referralSent, setReferralSent] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  const filteredResources = resourcesData.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.categoryKey === selectedCategory;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.keyServices.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleReferralSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReferralSent(true);
    setTimeout(() => {
      setSelectedResourceForReferral(null);
      setReferralSent(false);
      setContactName('');
      setContactPhone('');
    }, 2500);
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Header */}
      <section className="bg-brand-teal text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-wider mb-4">
            <button onClick={() => navigateTo(Page.HOME)} className="hover:text-white transition">Home</button> 
            <span>/</span>
            <button onClick={() => navigateTo(Page.IMMEDIATE_CARE)} className="hover:text-white transition">Immediate Care</button>
            <span>/</span>
            <span className="text-white">LTC Resources</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-gold/20 text-brand-gold px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-brand-gold/30">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              Trusted Care Ecosystem
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight">
              Long-Term Care Resources
            </h1>
            <p className="text-lg md:text-xl text-brand-cream/85 font-light leading-relaxed mb-8">
              Navigating long-term care requires more than insurance alone. Vitannis connects families with vetted professional specialists to orchestrate housing, legal authority, clinical coordination, and financing seamlessly.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button onClick={() => navigateTo(Page.CONTACT)}>
                Request a Vetted Referral
              </Button>
              <Button variant="outline" onClick={() => navigateTo(Page.IMMEDIATE_CARE)}>
                Explore Immediate Care Plan
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Six Pillars Quick Overview */}
      <section className="py-12 bg-white border-b border-brand-gold/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { title: 'Home Equity Solutions', icon: Home, key: 'home-equity' },
              { title: 'Care Coordinators', icon: Users, key: 'care-coordinators' },
              { title: 'Care Placement', icon: Building2, key: 'care-placement' },
              { title: 'Care Plan Specialists', icon: ClipboardCheck, key: 'care-plan' },
              { title: 'Real Estate Advisors', icon: Landmark, key: 'real-estate' },
              { title: 'Attorneys & Legal', icon: Scale, key: 'attorneys' },
            ].map((col, idx) => {
              const Icon = col.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(col.key)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 group flex flex-col justify-between ${
                    selectedCategory === col.key 
                      ? 'bg-brand-teal text-white border-brand-teal shadow-md' 
                      : 'bg-brand-cream-light hover:bg-white text-slate-800 border-brand-gold/20 hover:border-brand-gold/40 shadow-xs'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                    selectedCategory === col.key ? 'bg-brand-gold text-brand-teal' : 'bg-brand-teal/10 text-brand-teal group-hover:bg-brand-teal group-hover:text-white'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-xs font-bold leading-snug ${selectedCategory === col.key ? 'text-white' : 'text-slate-800'}`}>
                    {col.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resource Directory Section */}
      <section className="py-16 md:py-24 bg-brand-cream-light">
        <div className="container mx-auto px-6">
          {/* Section Header & Search / Filters */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-teal font-bold mb-3">
                Vetted Resource Directory
              </h2>
              <p className="text-gray-600 font-light max-w-2xl text-sm md:text-base">
                Discover accredited specialists hand-selected for fiduciary integrity, senior healthcare expertise, and compassionate family service.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search resources, services..."
                className="w-full bg-white border border-brand-gold/30 rounded-full pl-11 pr-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 shadow-xs"
              />
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-10 overflow-x-auto pb-2">
            <span className="text-xs uppercase tracking-wider font-bold text-slate-500 flex items-center gap-1.5 mr-2">
              <Filter className="w-3.5 h-3.5 text-brand-gold" /> Filter:
            </span>
            {categoryTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setSelectedCategory(tab.key)}
                className={`text-xs px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === tab.key
                    ? 'bg-brand-teal text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-brand-gold/15 border border-brand-gold/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Directory Cards Grid */}
          {filteredResources.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-brand-gold/20 max-w-xl mx-auto shadow-xs">
              <Building2 className="w-12 h-12 text-brand-gold mx-auto mb-4 opacity-50" />
              <h3 className="font-serif text-xl text-brand-teal font-bold mb-2">No matching resources found</h3>
              <p className="text-gray-600 text-sm mb-6">
                Try clearing your search query or choosing "All Resources" to explore our full specialist network.
              </p>
              <Button variant="secondary" onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}>
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white rounded-3xl border border-brand-gold/25 p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div>
                    {/* Category Pill & Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] uppercase tracking-wider font-bold text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                      <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md">
                        {item.turnaroundTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl font-bold text-brand-teal mb-2 group-hover:text-brand-gold transition-colors">
                      {item.title}
                    </h3>

                    {/* Partner Placeholder Tag */}
                    <div className="flex items-center gap-2 mb-4">
                      <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
                      <span className="text-xs font-semibold text-slate-700">
                        {item.providerPlaceholder}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm font-light leading-relaxed mb-5">
                      {item.description}
                    </p>

                    {/* Key Services Offered */}
                    <div className="mb-6 pt-4 border-t border-brand-cream">
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                        Core Capabilities
                      </span>
                      <ul className="space-y-2">
                        {item.keyServices.map((service, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Footer: Ideal For & Action */}
                  <div className="pt-4 border-t border-brand-cream">
                    <p className="text-[11px] text-slate-500 italic mb-4">
                      <strong className="font-semibold text-slate-700 not-italic">Best For: </strong> 
                      {item.idealFor}
                    </p>

                    <button 
                      onClick={() => setSelectedResourceForReferral(item)}
                      className="w-full bg-brand-cream-light hover:bg-brand-teal hover:text-white text-brand-teal text-xs font-bold uppercase tracking-wider py-3 px-4 rounded-xl border border-brand-gold/30 transition-all flex items-center justify-center gap-2 group-hover:border-brand-teal"
                    >
                      <span>Request Vetted Introduction</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* How Vitannis Coordinates Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-brand-teal text-white rounded-3xl p-8 md:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 bg-brand-gold/20 text-brand-gold px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-brand-gold/30">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
                  Fiduciary Ecosystem
                </div>
                <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                  Seamless Coordination for Families
                </h3>
                <p className="text-brand-cream/80 font-light text-base leading-relaxed mb-6">
                  While Vitannis acts as your fiduciary insurance advisor to fund and cap the cost of care via the Immediate Care Plan, these trusted partners handle the physical, legal, and operational realities on the ground.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-brand-cream/90 font-light">
                    <Check className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>Conflict-free referrals with vetted ethical standards</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-brand-cream/90 font-light">
                    <Check className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>Direct collaboration between your attorney, care coordinator, and Vitannis</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-brand-cream/90 font-light">
                    <Check className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>No hidden referral fees or commercial vendor kickbacks</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 text-center">
                <h4 className="font-serif text-xl font-bold text-white mb-2">Need a Guided Referral?</h4>
                <p className="text-brand-cream/80 text-xs font-light mb-6 leading-relaxed">
                  Tell our team about your loved one's care timeline and location. We will connect you directly with the appropriate licensed professional.
                </p>
                <Button onClick={() => navigateTo(Page.CONTACT)} fullWidth>
                  Speak with an Advisor
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Modal / Inline Form Drawer */}
      {selectedResourceForReferral && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 relative shadow-2xl border border-brand-gold/30 animate-fade-in">
            <h3 className="font-serif text-2xl font-bold text-brand-teal mb-2">
              Request an Introduction
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Connect with our vetted partner for: <strong className="text-brand-teal">{selectedResourceForReferral.title}</strong>
            </p>

            {referralSent ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
                <h4 className="font-bold text-lg mb-1">Referral Request Received</h4>
                <p className="text-xs text-emerald-700 font-light">
                  A Vitannis fiduciary advisor will facilitate your warm introduction to our vetted specialist within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleReferralSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Jane Smith"
                    className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-teal focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Phone Number or Email
                  </label>
                  <input
                    type="text"
                    required
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="(555) 000-0000 or jane@example.com"
                    className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-teal focus:outline-none"
                  />
                </div>

                <div className="bg-brand-cream-light p-3 rounded-xl border border-brand-gold/20 text-xs text-slate-600">
                  <p className="font-semibold text-brand-teal mb-0.5">Fiduciary Standard Guarantee</p>
                  <p className="font-light">Your information is never sold. We only introduce you to vetted, licensed specialists relevant to your care plan.</p>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button type="submit" fullWidth>
                    Confirm Introduction Request
                  </Button>
                  <button
                    type="button"
                    onClick={() => setSelectedResourceForReferral(null)}
                    className="px-5 py-2.5 rounded-full text-xs font-semibold text-slate-500 hover:text-slate-800"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LTCResources;
