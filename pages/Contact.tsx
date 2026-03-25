import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import Button from '../components/Button';

const Contact: React.FC = () => {
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
                    <p className="text-gray-600 mt-1">(843) 408-9653</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="bg-brand-cream-light p-4 rounded-full text-brand-teal group-hover:bg-brand-teal group-hover:text-brand-gold transition-colors duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">Email</h3>
                    <a href="mailto:info@vitannis.com" className="text-gray-600 mt-1 hover:text-brand-teal transition">info@vitannis.com</a>
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
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-brand-gold"></div>
                <h2 className="font-serif text-2xl text-brand-teal font-bold mb-8">Send us a Message</h2>
                
                <form action="https://formspree.io/f/mnjbvgqj" method="POST" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input type="text" name="firstName" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none transition bg-gray-50 hover:bg-white" placeholder="Jane" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input type="text" name="lastName" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none transition bg-gray-50 hover:bg-white" placeholder="Doe" required />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input type="email" name="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none transition bg-gray-50 hover:bg-white" placeholder="jane@example.com" required />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">I am a...</label>
                    <div className="relative">
                      <select name="userType" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none transition bg-gray-50 hover:bg-white appearance-none">
                        <option>Business Owner</option>
                        <option>Individual / Family</option>
                        <option>Financial Advisor</option>
                        <option>Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea name="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none transition bg-gray-50 hover:bg-white" placeholder="How can we help you?" required></textarea>
                  </div>
                  
                  <Button type="submit" fullWidth className="flex justify-center items-center gap-2">
                    Send Message <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;