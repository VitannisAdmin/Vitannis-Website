import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, AlertCircle, Check, Sparkles, User, Briefcase } from 'lucide-react';
import Button from '../components/Button';
import { Page } from '../types';
import { ObfuscatedPhone, ObfuscatedEmail } from '../components/ContactLinks';

interface ContactProps {
  navigateTo?: (page: Page) => void;
}

const Contact: React.FC<ContactProps> = ({ navigateTo }) => {
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
      // For local development or AI Studio preview (where Netlify forms backend isn't available)
      if (window.location.hostname === 'localhost' || window.location.hostname.includes('.run.app')) {
        await new Promise(resolve => setTimeout(resolve, 800));
        setSubmitted(true);
        form.reset();
        setSubmitting(false);
        return;
      }

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setSubmitError(true);
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="animate-fade-in">
      <section className="bg-brand-teal text-white py-16 md:py-20">
        <div className="container mx-auto px-6">
           <div className="flex items-center gap-2 text-brand-gold text-sm font-bold uppercase tracking-wider mb-4">
             <span className="opacity-70">Home</span> / Contact
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-brand-cream/80 max-w-3xl font-light">Ready to protect what matters most? We're here to help.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Info Column */}
            <div className="lg:w-1/3 space-y-10">
              <h2 className="font-serif text-3xl text-brand-teal font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="bg-brand-cream-light p-4 rounded-full text-brand-teal group-hover:bg-brand-teal group-hover:text-brand-gold transition-colors duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">Phone</h3>
                    <ObfuscatedPhone className="text-gray-600 mt-1 hover:text-brand-teal transition block" />
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="bg-brand-cream-light p-4 rounded-full text-brand-teal group-hover:bg-brand-teal group-hover:text-brand-gold transition-colors duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">Email</h3>
                    <ObfuscatedEmail className="text-gray-600 mt-1 hover:text-brand-teal transition block" />
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="bg-brand-cream-light p-4 rounded-full text-brand-teal group-hover:bg-brand-teal group-hover:text-brand-gold transition-colors duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">Office</h3>
                    <p className="text-gray-600 mt-1">420 The Parkway # I-A<br/>Greer SC 29650</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:w-2/3">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden transition-all duration-300 hover:shadow-2xl">
                <div className="absolute top-0 left-0 w-2.5 h-full bg-brand-gold"></div>
                
                {submitted ? (
                  <div className="text-center py-16 px-6 animate-fade-in flex flex-col items-center justify-center">
                    <div className="h-20 w-20 rounded-full bg-brand-cream flex items-center justify-center mb-6 shadow-sm border border-brand-cream">
                      <Check className="w-10 h-10 text-brand-teal" />
                    </div>
                    <h3 className="font-serif text-3xl text-brand-teal font-bold mb-4">Message Sent</h3>
                    <p className="text-gray-600 max-w-md mx-auto font-light leading-relaxed mb-8">
                      Thank you for contacting Vitannis. Our team of fiduciary insurance advisors has received your request and will follow up with you within one business day.
                    </p>
                    <button 
                      type="button" 
                      onClick={() => setSubmitted(false)} 
                      className="px-8 py-3 bg-brand-teal hover:bg-brand-teal-light text-white font-bold rounded-full text-sm shadow-md transition duration-200 cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center gap-2 bg-brand-gold/15 text-brand-teal px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-brand-gold/25 w-fit">
                      <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-pulse" /> Advisory Inquiry
                    </div>
                    <h2 className="font-serif text-3xl text-brand-teal font-bold mb-2">Send us a Message</h2>
                    <p className="text-gray-500 font-light text-sm mb-8">
                      Submit details below and our team will prepare a highly tailored risk analysis for your private wealth or business profiles.
                    </p>

                    <form 
                      id="contactForm" 
                      name="clientContact" 
                      method="POST" 
                      data-netlify="true" 
                      className="space-y-6"
                      onSubmit={handleFormSubmit}
                    >
                      {/* Hidden input for Netlify routing */}
                      <input type="hidden" name="form-name" value="clientContact" />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                              <User className="w-4 h-4" />
                            </div>
                            <input 
                              type="text" 
                              name="firstName" 
                              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition bg-slate-50 hover:bg-white text-slate-850 shadow-sm" 
                              placeholder="Jane" 
                              required 
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                              <User className="w-4 h-4" />
                            </div>
                            <input 
                              type="text" 
                              name="lastName" 
                              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition bg-slate-50 hover:bg-white text-slate-850 shadow-sm" 
                              placeholder="Doe" 
                              required 
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                            <Mail className="w-4 h-4" />
                          </div>
                          <input 
                            type="email" 
                            name="email" 
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition bg-slate-50 hover:bg-white text-slate-850 shadow-sm" 
                            placeholder="jane@example.com" 
                            required 
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">I am a...</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                            <Briefcase className="w-4 h-4" />
                          </div>
                          <select 
                            name="userType" 
                            className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition bg-slate-50 hover:bg-white text-slate-850 shadow-sm appearance-none cursor-pointer"
                          >
                            <option>Business Owner</option>
                            <option>Individual / Family</option>
                            <option>Financial Advisor</option>
                            <option>Other</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                        <textarea 
                          name="message" 
                          rows={4} 
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition bg-slate-50 hover:bg-white text-slate-850 shadow-sm resize-none" 
                          placeholder="How can our fiduciary team assist with your risk management and strategic advisory needs?" 
                          required
                        ></textarea>
                      </div>

                      {submitError && (
                        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm text-red-700 font-medium">There was an issue sending your message. Please check your network and try again, or connect with us directly.</p>
                          </div>
                        </div>
                      )}
                      
                      <Button 
                        type="submit" 
                        disabled={submitting} 
                        fullWidth
                        className="flex justify-center items-center gap-2.5 py-4 focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold"
                      >
                        {submitting ? 'Sending Message...' : 'Send Message'} <Send className="w-4 h-4" />
                      </Button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Intake CTA Section */}
      <section className="py-16 bg-brand-cream-light border-t border-brand-cream">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="font-serif text-3xl text-brand-teal font-bold mb-4">Ready for a Strategic Analysis?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 font-light">
            Skip the delay. Complete our secure online Client Intake form to provide us with details of your existing protection, lifestyle goals, and legacy priorities.
          </p>
          <div className="flex justify-center">
            {navigateTo ? (
              <Button onClick={() => navigateTo(Page.INTAKE)} className="px-10 py-4 shadow-md bg-brand-teal text-white hover:bg-brand-teal-light">
                Launch Secure Client Intake Form
              </Button>
            ) : (
              <a href="/intake" className="inline-flex justify-center items-center px-10 py-4 rounded-full bg-brand-teal text-white font-bold hover:bg-brand-teal-light shadow-md transition">
                Launch Secure Client Intake Form
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;