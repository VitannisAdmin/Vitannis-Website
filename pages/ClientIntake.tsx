import React, { useState } from 'react';
import { ShieldCheck, User, Check, Briefcase, AlertCircle, Sparkles, Send, HelpCircle, FileText } from 'lucide-react';
import Button from '../components/Button';

interface ClientIntakeProps {
  navigateTo?: (page: any) => void;
}

const ClientIntake: React.FC<ClientIntakeProps> = () => {
  const [isBusinessOwner, setIsBusinessOwner] = useState(false);
  const [hasRetirementPlan, setHasRetirementPlan] = useState(false);
  const [retirementPlanType, setRetirementPlanType] = useState('');
  
  // Submission State
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setSubmitError(false);

    const form = event.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
        setIsBusinessOwner(false);
        setHasRetirementPlan(false);
        setRetirementPlanType('');
      } else {
        setSubmitError(true);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  const closeModal = () => {
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="animate-fade-in bg-brand-cream-light/30 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      
      {/* Page Title Header */}
      <div className="max-w-4xl mx-auto mb-10 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-gold/20 text-brand-teal px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-brand-gold/30">
          <Sparkles className="w-3 h-3 text-brand-gold" /> Comprehensive Strategy
        </div>
        <h1 className="font-serif text-3xl md:text-4xl text-brand-teal font-bold mb-4">
          Client Intake Form
        </h1>
        <div className="h-1 w-20 bg-brand-gold mx-auto rounded-full mb-6"></div>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        
        {/* Banner */}
        <div className="bg-brand-teal px-8 py-10 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <circle cx="95%" cy="30%" r="150" fill="#c5a065" />
            </svg>
          </div>
          <div className="flex items-center justify-between relative z-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-brand-cream">
                Secure Client Intake Form
              </h2>
              <p className="mt-2 text-brand-cream/80 text-sm md:text-base max-w-2xl font-light">
                Please provide your details below. This structure securely helps us tailor our comprehensive insurance and high-level fiduciary advisory services to your unique situation.
              </p>
            </div>
            {/* Logo Icon */}
            <div className="hidden sm:block p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
              <ShieldCheck className="w-8 h-8 text-brand-gold" />
            </div>
          </div>
        </div>

        {/* Form Body */}
        <form 
          id="intakeForm" 
          name="clientIntake" 
          method="POST" 
          data-netlify="true" 
          className="p-8 sm:p-10 space-y-10" 
          onSubmit={handleFormSubmit}
        >
          {/* Hidden input for Netlify routing */}
          <input type="hidden" name="form-name" value="clientIntake" />
          
          {/* Personal Information */}
          <div>
            <h3 className="text-xl font-bold text-brand-teal border-b border-gray-100 pb-3 mb-6 flex items-center gap-2">
              <User className="w-5 h-5 text-brand-gold" />
              Personal Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Location */}
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input 
                  type="text" 
                  id="city" 
                  name="city" 
                  required 
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-gold focus:ring focus:ring-brand-gold/20 bg-slate-50 hover:bg-white border py-2.5 px-4 text-slate-900 outline-none transition"
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State</label>
                <select 
                  id="state" 
                  name="state" 
                  required 
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-gold focus:ring focus:ring-brand-gold/20 bg-slate-50 hover:bg-white border py-2.5 px-4 text-slate-900 outline-none transition appearance-none"
                  style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='gray' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>")`, backgroundPosition: 'right 12px center', backgroundRepeat: 'no-repeat' }}
                >
                  <option value="">Select State</option>
                  <option value="AL">Alabama</option><option value="AK">Alaska</option><option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option><option value="CA">California</option><option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option><option value="DE">Delaware</option><option value="FL">Florida</option>
                  <option value="GA">Georgia</option><option value="HI">Hawaii</option><option value="ID">Idaho</option>
                  <option value="IL">Illinois</option><option value="IN">Indiana</option><option value="IA">Iowa</option>
                  <option value="KS">Kansas</option><option value="KY">Kentucky</option><option value="LA">Louisiana</option>
                  <option value="ME">Maine</option><option value="MD">Maryland</option><option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option><option value="MN">Minnesota</option><option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option><option value="MT">Montana</option><option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option><option value="NH">New Hampshire</option><option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option><option value="NY">New York</option><option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option><option value="OH">Ohio</option><option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option><option value="PA">Pennsylvania</option><option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option><option value="SD">South Dakota</option><option value="TN">Tennessee</option>
                  <option value="TX">Texas</option><option value="UT">Utah</option><option value="VT">Vermont</option>
                  <option value="VA">Virginia</option><option value="WA">Washington</option><option value="WV">West Virginia</option>
                  <option value="WY">Wyoming</option>
                </select>
              </div>

              {/* Client Name & Age */}
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-4 gap-6">
                <div className="sm:col-span-3">
                  <label htmlFor="clientName" className="block text-sm font-medium text-gray-700 mb-1">Client Full Name</label>
                  <input 
                    type="text" 
                    id="clientName" 
                    name="clientName" 
                    required 
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-gold focus:ring focus:ring-brand-gold/20 bg-slate-50 hover:bg-white border py-2.5 px-4 text-slate-900 outline-none transition"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="clientAge" className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                  <input 
                    type="number" 
                    id="clientAge" 
                    name="clientAge" 
                    min="0" 
                    required 
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-gold focus:ring focus:ring-brand-gold/20 bg-slate-50 hover:bg-white border py-2.5 px-4 text-slate-900 outline-none transition"
                  />
                </div>
              </div>
              
              {/* Spouse Full Name & Age */}
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-4 gap-6">
                <div className="sm:col-span-3">
                  <label htmlFor="spouseName" className="block text-sm font-medium text-gray-700 mb-1">Spouse Full Name <span className="text-gray-400 font-normal">(If applicable)</span></label>
                  <input 
                    type="text" 
                    id="spouseName" 
                    name="spouseName" 
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-gold focus:ring focus:ring-brand-gold/20 bg-slate-50 hover:bg-white border py-2.5 px-4 text-slate-900 outline-none transition"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="spouseAge" className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                  <input 
                    type="number" 
                    id="spouseAge" 
                    name="spouseAge" 
                    min="0" 
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-gold focus:ring focus:ring-brand-gold/20 bg-slate-50 hover:bg-white border py-2.5 px-4 text-slate-900 outline-none transition"
                  />
                </div>
              </div>

              {/* Children */}
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-4 gap-6">
                <div className="sm:col-span-1">
                  <label htmlFor="kids" className="block text-sm font-medium text-gray-700 mb-1">Number of Children</label>
                  <input 
                    type="number" 
                    id="kids" 
                    name="kids" 
                    min="0" 
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-gold focus:ring focus:ring-brand-gold/20 bg-slate-50 hover:bg-white border py-2.5 px-4 text-slate-900 outline-none transition"
                  />
                </div>
                <div className="sm:col-span-3">
                  <label htmlFor="kidsAges" className="block text-sm font-medium text-gray-700 mb-1">Ages of Children</label>
                  <input 
                    type="text" 
                    id="kidsAges" 
                    name="kidsAges" 
                    placeholder="e.g., 5, 8, 12" 
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-gold focus:ring focus:ring-brand-gold/20 bg-slate-50 hover:bg-white border py-2.5 px-4 text-slate-900 outline-none transition"
                  />
                </div>
              </div>

              {/* Other Financial Dependents */}
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-4 gap-6">
                <div className="sm:col-span-3">
                  <label htmlFor="otherDependents" className="block text-sm font-medium text-gray-700 mb-1">Other Financial Dependents <span className="text-gray-400 font-normal">(Brief description)</span></label>
                  <input 
                    type="text" 
                    id="otherDependents" 
                    name="otherDependents" 
                    placeholder="e.g., Elder parent, sibling with special needs" 
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-gold focus:ring focus:ring-brand-gold/20 bg-slate-50 hover:bg-white border py-2.5 px-4 text-slate-900 outline-none transition"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="otherDependentsAges" className="block text-sm font-medium text-gray-700 mb-1">Ages</label>
                  <input 
                    type="text" 
                    id="otherDependentsAges" 
                    name="otherDependentsAges" 
                    placeholder="e.g., 78" 
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-gold focus:ring focus:ring-brand-gold/20 bg-slate-50 hover:bg-white border py-2.5 px-4 text-slate-900 outline-none transition"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Current Insurance Coverage */}
          <div>
            <h3 className="text-xl font-bold text-brand-teal border-b border-gray-100 pb-3 mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-gold" />
              Current Insurance Coverage
            </h3>
            
            <p className="text-sm text-gray-500 mb-6">
              Identify the styles of risk protection you currently have active. Please distinguish between employer-sponsored benefits and private coverage.
            </p>

            <div className="space-y-6">
              
              {/* Life Insurance */}
              <div className="bg-brand-cream-light/40 p-6 rounded-xl border border-brand-cream flex flex-col gap-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="font-bold text-brand-teal w-48">Life Insurance</div>
                  <div className="flex flex-wrap gap-6">
                    <label className="inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        name="lifeInsuranceWork" 
                        className="rounded border-gray-350 text-brand-teal focus:border-brand-gold focus:ring focus:ring-brand-gold/20 h-4.5 w-4.5"
                      />
                      <span className="ml-2 text-sm text-slate-700">Work Provided</span>
                    </label>
                    <label className="inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        name="lifeInsuranceIndiv" 
                        className="rounded border-gray-350 text-brand-teal focus:border-brand-gold focus:ring focus:ring-brand-gold/20 h-4.5 w-4.5"
                      />
                      <span className="ml-2 text-sm text-slate-700">Individually Owned</span>
                    </label>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-brand-cream">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Coverage Amount</label>
                    <input 
                      type="text" 
                      name="lifeCoverageAmt" 
                      placeholder="e.g., $1,000,000" 
                      className="w-full rounded-lg border-gray-305 shadow-sm focus:border-brand-gold focus:ring focus:ring-brand-gold/20 bg-white border py-2 px-3 text-sm text-slate-900 outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Policy Type</label>
                    <input 
                      type="text" 
                      name="lifePolicyType" 
                      placeholder="e.g., 20-Year Term, Whole Life" 
                      className="w-full rounded-lg border-gray-305 shadow-sm focus:border-brand-gold focus:ring focus:ring-brand-gold/20 bg-white border py-2 px-3 text-sm text-slate-900 outline-none transition"
                    />
                  </div>
                </div>
              </div>

              {/* Disability Insurance */}
              <div className="bg-brand-cream-light/40 p-6 rounded-xl border border-brand-cream flex flex-col gap-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="font-bold text-brand-teal w-48">Disability Insurance</div>
                  <div className="flex flex-wrap gap-6">
                    <label className="inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        name="disabilityWork" 
                        className="rounded border-gray-350 text-brand-teal focus:border-brand-gold focus:ring focus:ring-brand-gold/20 h-4.5 w-4.5"
                      />
                      <span className="ml-2 text-sm text-slate-700">Work Provided</span>
                    </label>
                    <label className="inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        name="disabilityIndiv" 
                        className="rounded border-gray-350 text-brand-teal focus:border-brand-gold focus:ring focus:ring-brand-gold/20 h-4.5 w-4.5"
                      />
                      <span className="ml-2 text-sm text-slate-700">Individually Owned</span>
                    </label>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-brand-cream">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Coverage Amount</label>
                    <input 
                      type="text" 
                      name="disabilityCoverageAmt" 
                      placeholder="e.g., $5,000/mo or 60% of salary" 
                      className="w-full rounded-lg border-gray-305 shadow-sm focus:border-brand-gold focus:ring focus:ring-brand-gold/20 bg-white border py-2 px-3 text-sm text-slate-900 outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Policy Type</label>
                    <input 
                      type="text" 
                      name="disabilityPolicyType" 
                      placeholder="e.g., Short-Term, Long-Term" 
                      className="w-full rounded-lg border-gray-305 shadow-sm focus:border-brand-gold focus:ring focus:ring-brand-gold/20 bg-white border py-2 px-3 text-sm text-slate-900 outline-none transition"
                    />
                  </div>
                </div>
              </div>

              {/* Long-Term Care */}
              <div className="bg-brand-cream-light/40 p-6 rounded-xl border border-brand-cream flex flex-col gap-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="font-bold text-brand-teal w-48">Long-Term Care (LTC)</div>
                  <div className="flex flex-wrap gap-6">
                    <label className="inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        name="ltcWork" 
                        className="rounded border-gray-350 text-brand-teal focus:border-brand-gold focus:ring focus:ring-brand-gold/20 h-4.5 w-4.5"
                      />
                      <span className="ml-2 text-sm text-slate-700">Work Provided</span>
                    </label>
                    <label className="inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        name="ltcIndiv" 
                        className="rounded border-gray-350 text-brand-teal focus:border-brand-gold focus:ring focus:ring-brand-gold/20 h-4.5 w-4.5"
                      />
                      <span className="ml-2 text-sm text-slate-700">Individually Owned</span>
                    </label>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-brand-cream">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Coverage Amount</label>
                    <input 
                      type="text" 
                      name="ltcCoverageAmt" 
                      placeholder="e.g., $3,000/mo or $150k pool" 
                      className="w-full rounded-lg border-gray-305 shadow-sm focus:border-brand-gold focus:ring focus:ring-brand-gold/20 bg-white border py-2 px-3 text-sm text-slate-900 outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Policy Type</label>
                    <input 
                      type="text" 
                      name="ltcPolicyType" 
                      placeholder="e.g., Traditional, Hybrid Asset-Based" 
                      className="w-full rounded-lg border-gray-305 shadow-sm focus:border-brand-gold focus:ring focus:ring-brand-gold/20 bg-white border py-2 px-3 text-sm text-slate-900 outline-none transition"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="coverageConcerns" className="block text-sm font-medium text-gray-700 mb-1">Do you have any specific concerns or questions regarding your current protection?</label>
              <textarea 
                id="coverageConcerns" 
                name="coverageConcerns" 
                rows={3} 
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-gold focus:ring focus:ring-brand-gold/20 bg-slate-50 hover:bg-white border py-2.5 px-4 text-slate-900 outline-none transition resize-none"
              ></textarea>
            </div>
          </div>

          {/* Financial Overview & Goals */}
          <div>
            <h3 className="text-xl font-bold text-brand-teal border-b border-gray-100 pb-3 mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-brand-gold" />
              Financial Overview & Goals
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="income" className="block text-sm font-medium text-gray-700 mb-1">Estimated Annual Household Income</label>
                <select 
                  id="income" 
                  name="income" 
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-gold focus:ring focus:ring-brand-gold/20 bg-slate-50 hover:bg-white border py-2.5 px-4 text-slate-900 outline-none transition appearance-none"
                  style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='gray' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>")`, backgroundPosition: 'right 12px center', backgroundRepeat: 'no-repeat' }}
                >
                  <option value="">Select Range</option>
                  <option value="Under $75k">Under $75,000</option>
                  <option value="$75k - $150k">$75,000 - $150,000</option>
                  <option value="$150k - $250k">$150,000 - $250,000</option>
                  <option value="$250k - $350k">$250,000 - $350,000</option>
                  <option value="$350k - $500k">$350,000 - $500,000</option>
                  <option value="$500k - $750k">$500,000 - $750,000</option>
                  <option value="$75k - $1M">$750,000 - $1,000,000</option>
                  <option value="Over $1M">Over $1,000,000</option>
                </select>
              </div>
              <div>
                <label htmlFor="netWorth" className="block text-sm font-medium text-gray-700 mb-1">Estimated Liquid Net Worth</label>
                <select 
                  id="netWorth" 
                  name="netWorth" 
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-gold focus:ring focus:ring-brand-gold/20 bg-slate-50 hover:bg-white border py-2.5 px-4 text-slate-900 outline-none transition appearance-none"
                  style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='gray' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>")`, backgroundPosition: 'right 12px center', backgroundRepeat: 'no-repeat' }}
                >
                  <option value="">Select Range</option>
                  <option value="Under $500k">Under $500,000</option>
                  <option value="$500k - $1M">$500,000 - $1,000,000</option>
                  <option value="$1M - $2M">$1,000,000 - $2,000,000</option>
                  <option value="$2M - $3M">$2,000,000 - $3,000,000</option>
                  <option value="$3M - $4M">$3,000,000 - $4,000,000</option>
                  <option value="$4M - $5M">$4,000,000 - $5,000,000</option>
                  <option value="$5M - $7.5M">$5,000,000 - $7,500,000</option>
                  <option value="$7.5M - $10M">$7,500,000 - $10,000,000</option>
                  <option value="Over $10M">Over $10,000,000</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-1">Overall Financial, Lifestyle, and Family Goals</label>
              <p className="text-xs text-slate-400 mb-2">What does success look like for you and your legacy over the next 5, 10, or 20+ years?</p>
              <textarea 
                id="goals" 
                name="goals" 
                rows={4} 
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-gold focus:ring focus:ring-brand-gold/20 bg-slate-50 hover:bg-white border py-2.5 px-4 text-slate-900 outline-none transition resize-none"
              ></textarea>
            </div>

            {/* Business Owner checkbox style */}
            <div className="bg-brand-cream-light border border-brand-cream rounded-xl p-5 flex items-start">
              <div className="flex items-center h-5">
                <input 
                  id="isBusinessOwner" 
                  name="isBusinessOwner" 
                  type="checkbox" 
                  checked={isBusinessOwner}
                  onChange={(e) => setIsBusinessOwner(e.target.checked)}
                  className="focus:ring-brand-gold h-5 w-5 text-brand-teal border-brand-cream rounded cursor-pointer"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="isBusinessOwner" className="font-bold text-brand-teal cursor-pointer text-base">
                  I am a Business Owner / Corporate Partner
                </label>
                <p className="text-brand-teal-light mt-1 text-sm font-light">
                  Check this box directly to input additional business protection detail.
                </p>
              </div>
            </div>
          </div>

          {/* Business Overview Section (Collapsible) */}
          {isBusinessOwner && (
            <div className="animate-fade-in bg-white border border-brand-cream rounded-2xl overflow-hidden shadow-sm relative">
              <div className="h-2 w-full bg-brand-gold"></div>
              
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-bold text-brand-teal border-b border-brand-cream pb-3 mb-6 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-brand-gold" />
                  Business Overview
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label htmlFor="bizName" className="block text-sm font-medium text-slate-700 mb-1">Name of Business</label>
                    <input 
                      type="text" 
                      id="bizName" 
                      name="bizName" 
                      className="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-gold focus:ring-brand-gold/20 bg-slate-50 hover:bg-white border py-2.5 px-4 text-slate-900 outline-none transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="bizIndustry" className="block text-sm font-medium text-slate-700 mb-1">Industry</label>
                    <input 
                      type="text" 
                      id="bizIndustry" 
                      name="bizIndustry" 
                      className="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-gold focus:ring-brand-gold/20 bg-slate-50 hover:bg-white border py-2.5 px-4 text-slate-900 outline-none transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="bizAge" className="block text-sm font-medium text-slate-700 mb-1">Years in Business</label>
                    <input 
                      type="number" 
                      id="bizAge" 
                      name="bizAge" 
                      min="0" 
                      className="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-gold focus:ring focus:ring-brand-gold/20 bg-slate-50 hover:bg-white border py-2.5 px-4 text-slate-900 outline-none transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="bizOwnership" className="block text-sm font-medium text-slate-700 mb-1">Your Ownership Percentage (%)</label>
                    <input 
                      type="number" 
                      id="bizOwnership" 
                      name="bizOwnership" 
                      min="0" 
                      max="100" 
                      className="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-gold focus:ring focus:ring-brand-gold/20 bg-slate-50 hover:bg-white border py-2.5 px-4 text-slate-900 outline-none transition"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="bizEmployees" className="block text-sm font-medium text-slate-700 mb-1">Full-Time Employees <span className="text-gray-400 font-normal">(Excluding yourself)</span></label>
                    <input 
                      type="number" 
                      id="bizEmployees" 
                      name="bizEmployees" 
                      min="0" 
                      className="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-gold focus:ring focus:ring-brand-gold/20 bg-slate-50 hover:bg-white border py-2.5 px-4 text-slate-900 outline-none transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="bizStructure" className="block text-sm font-medium text-slate-700 mb-1">Business Structure</label>
                    <select 
                      id="bizStructure" 
                      name="bizStructure" 
                      className="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-gold focus:ring focus:ring-brand-gold/20 bg-slate-50 hover:bg-white border py-2.5 px-4 text-slate-900 outline-none transition appearance-none"
                      style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='gray' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>")`, backgroundPosition: 'right 12px center', backgroundRepeat: 'no-repeat' }}
                    >
                      <option value="">Select Structure</option>
                      <option value="LLC">LLC</option>
                      <option value="S-Corp">S-Corp</option>
                      <option value="C-Corp">C-Corp</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Sole Proprietorship">Sole Proprietorship</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <h4 className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-4 font-sans">Current Corporate Structure & Benefits</h4>
                
                <div className="space-y-3 mb-8">
                  <label className="flex items-start cursor-pointer">
                    <input 
                      type="checkbox" 
                      name="hasBuySell" 
                      className="mt-1 rounded border-gray-350 text-brand-teal focus:border-brand-gold focus:ring focus:ring-brand-gold/20 h-4.5 w-4.5"
                    />
                    <span className="ml-3 text-sm text-slate-700">We have a formalized <strong>Buy/Sell Agreement</strong></span>
                  </label>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <label className="flex items-start cursor-pointer shrink-0">
                      <input 
                        type="checkbox" 
                        id="hasRetirementPlan" 
                        name="hasRetirementPlan" 
                        checked={hasRetirementPlan}
                        onChange={(e) => setHasRetirementPlan(e.target.checked)}
                        className="mt-1 rounded border-gray-350 text-brand-teal focus:border-brand-gold focus:ring focus:ring-brand-gold/20 h-4.5 w-4.5"
                      />
                      <span className="ml-3 text-sm text-slate-700">We offer a <strong>Retirement Plan</strong></span>
                    </label>
                    {hasRetirementPlan && (
                      <input 
                        type="text" 
                        id="retirementPlanType" 
                        name="retirementPlanType" 
                        value={retirementPlanType}
                        onChange={(e) => setRetirementPlanType(e.target.value)}
                        placeholder="Specify type (e.g., 401k, SEP IRA)" 
                        className="ml-7 sm:ml-2 text-sm rounded-lg border-gray-300 shadow-sm focus:border-brand-gold focus:ring focus:ring-brand-gold/20 bg-slate-50 border py-1.5 px-3 text-slate-900 flex-1 outline-none transition"
                      />
                    )}
                  </div>
                  <label className="flex items-start cursor-pointer">
                    <input 
                      type="checkbox" 
                      name="hasKeyEmployeeIns" 
                      className="mt-1 rounded border-gray-350 text-brand-teal focus:border-brand-gold focus:ring focus:ring-brand-gold/20 h-4.5 w-4.5"
                    />
                    <span className="ml-3 text-sm text-slate-700">We currently hold active <strong>Key Employee Insurance</strong></span>
                  </label>
                  <label className="flex items-start cursor-pointer">
                    <input 
                      type="checkbox" 
                      name="hasExecutiveBenefits" 
                      className="mt-1 rounded border-gray-350 text-brand-teal focus:border-brand-gold focus:ring focus:ring-brand-gold/20 h-4.5 w-4.5"
                    />
                    <span className="ml-3 text-sm text-slate-700">We offer specialized <strong>Executive/Managerial Benefits</strong></span>
                  </label>
                </div>

                <h4 className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-4 font-sans">Strategic Business Needs & Goals</h4>
                
                <div className="space-y-4 bg-brand-cream-light/40 p-5 rounded-xl border border-brand-cream">
                  <label className="flex items-start cursor-pointer">
                    <input 
                      type="checkbox" 
                      name="keyEmployeeAbsenceRisk" 
                      className="mt-1 rounded border-gray-350 text-brand-teal focus:border-brand-gold focus:ring focus:ring-brand-gold/20 h-4.5 w-4.5"
                    />
                    <span className="ml-3 text-sm text-slate-700">Are there <strong>Key Employees</strong> whose sudden absence would cause material financial strain?</span>
                  </label>
                  <label className="flex items-start cursor-pointer">
                    <input 
                      type="checkbox" 
                      name="wantsTaxDeductions" 
                      className="mt-1 rounded border-gray-350 text-brand-teal focus:border-brand-gold focus:ring focus:ring-brand-gold/20 h-4.5 w-4.5"
                    />
                    <span className="ml-3 text-sm text-slate-700">Are you interested in exploring high-impact strategies for <strong>Additional Tax Deductions</strong>?</span>
                  </label>
                  <label className="flex items-start cursor-pointer">
                    <input 
                      type="checkbox" 
                      name="wantsKeyEmployeeRetention" 
                      className="mt-1 rounded border-gray-350 text-brand-teal focus:border-brand-gold focus:ring focus:ring-brand-gold/20 h-4.5 w-4.5"
                    />
                    <span className="ml-3 text-sm text-slate-700">Are you looking for specialized, competitive solutions for <strong>Key Employee Retention</strong>?</span>
                  </label>
                  
                  <div className="pt-4 mt-3 border-t border-brand-cream">
                    <p className="text-sm font-bold text-brand-teal mb-3">We are interested in complimentary reviews for:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <label className="inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          name="reviewEmployeeBenefits" 
                          className="rounded border-gray-350 text-brand-teal focus:border-brand-gold focus:ring focus:ring-brand-gold/20 h-4 w-4"
                        />
                        <span className="ml-2 text-sm text-slate-700">Employee Benefits</span>
                      </label>
                      <label className="inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          name="reviewRetirementPlan" 
                          className="rounded border-gray-350 text-brand-teal focus:border-brand-gold focus:ring focus:ring-brand-gold/20 h-4 w-4"
                        />
                        <span className="ml-2 text-sm text-slate-700">Retirement Plan</span>
                      </label>
                      <label className="inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          name="reviewRiskManagement" 
                          className="rounded border-gray-350 text-brand-teal focus:border-brand-gold focus:ring focus:ring-brand-gold/20 h-4 w-4"
                        />
                        <span className="ml-2 text-sm text-slate-700">Risk Management</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Form Submit Error Banner */}
          {submitError && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-red-700 font-medium">There was an issue submitting your intake form. Please check your network and try again, or connect with us directly.</p>
              </div>
            </div>
          )}

          {/* Guidelines Footer Policy */}
          <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-xs text-gray-400 order-2 sm:order-1 max-w-md font-light leading-relaxed">
              By submitting this secure form, you acknowledge that your profiles will be kept strictly confidential under fiduciary guidelines and used solely for strategic insurance assessment.
            </p>
            <button 
              type="submit" 
              disabled={submitting}
              className="order-1 sm:order-2 w-full sm:w-auto inline-flex justify-center items-center px-10 py-3.5 border border-transparent text-base font-bold rounded-full text-brand-teal bg-brand-gold hover:bg-white hover:text-brand-teal hover:border-brand-gold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {submitting ? 'Submitting...' : 'Submit Information'}
              <Send className="ml-2 w-4 h-4 shrink-0" />
            </button>
          </div>
        </form>
      </div>

      {/* Success Modal */}
      {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative z-10 shadow-2xl border border-gray-100 text-center animate-fade-in">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-brand-cream mb-6">
              <ShieldCheck className="h-8 w-8 text-brand-teal" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-brand-teal mb-3">Submission Received</h3>
            <p className="text-sm text-gray-600 font-light leading-relaxed mb-8">
              Thank you for trusting us with your details. Our fiduciary team is reviewing your intake profile and will connect with you shortly with strategic guidance.
            </p>
            <button 
              type="button" 
              onClick={closeModal} 
              className="w-full inline-flex justify-center rounded-full border border-transparent shadow-md hover:shadow-lg px-6 py-2.5 bg-brand-teal text-base font-bold text-white hover:bg-brand-teal-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-teal transition duration-200 cursor-pointer"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientIntake;
