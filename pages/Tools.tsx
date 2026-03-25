import React, { useState } from 'react';
import { Sparkles, FileSearch, Compass, AlertCircle } from 'lucide-react';
import Markdown from 'react-markdown';
import Button from '../components/Button';
import { UserType } from '../types';
import { decodePolicy, generateAssessment } from '../services/geminiService';

const Tools: React.FC = () => {
  // Policy Decoder State
  const [decoderInput, setDecoderInput] = useState('');
  const [decoderResult, setDecoderResult] = useState('');
  const [decoderLoading, setDecoderLoading] = useState(false);
  const [decoderError, setDecoderError] = useState('');

  // Assessment State
  const [assessmentType, setAssessmentType] = useState<UserType>(UserType.BUSINESS_OWNER);
  const [assessmentInput, setAssessmentInput] = useState('');
  const [assessmentResult, setAssessmentResult] = useState('');
  const [assessmentLoading, setAssessmentLoading] = useState(false);
  const [assessmentError, setAssessmentError] = useState('');

  const handleDecoderSubmit = async () => {
    if (!decoderInput.trim()) return;
    setDecoderLoading(true);
    setDecoderResult('');
    setDecoderError('');
    try {
      const result = await decodePolicy(decoderInput);
      setDecoderResult(result);
    } catch (err) {
      setDecoderError('Failed to generate insight. Please check your connection and try again.');
    } finally {
      setDecoderLoading(false);
    }
  };

  const handleAssessmentSubmit = async () => {
    if (!assessmentInput.trim()) return;
    setAssessmentLoading(true);
    setAssessmentResult('');
    setAssessmentError('');
    try {
      const result = await generateAssessment(assessmentType, assessmentInput);
      setAssessmentResult(result);
    } catch (err) {
      setAssessmentError('Failed to generate assessment. Please try again.');
    } finally {
      setAssessmentLoading(false);
    }
  };

  return (
    <div className="animate-fade-in">
      <section className="bg-brand-teal text-white py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 text-brand-gold text-sm font-bold uppercase tracking-wider mb-4">
            <span className="opacity-70">Home</span> / AI Tools
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 flex items-center gap-4">
            Smart Insights <Sparkles className="text-brand-gold w-8 h-8 animate-pulse-slow" />
          </h1>
          <p className="text-xl text-brand-cream/80 max-w-3xl font-light">Leverage our intelligent tools to bring clarity to your financial protection strategies.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <p className="text-gray-600 mb-6 text-lg">
              Vitannis uses advanced technology to empower our clients. Select a tool below to get started. 
            </p>
            <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-800 px-4 py-2 rounded-full text-xs font-semibold border border-yellow-100">
               <AlertCircle className="w-3 h-3" />
               AI insights are for educational purposes and do not replace professional fiduciary advice.
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            
            {/* Tool 1: Policy Decoder */}
            <div className="bg-brand-cream-light rounded-2xl shadow-xl overflow-hidden border border-brand-cream flex flex-col">
              <div className="bg-brand-teal p-6 flex justify-between items-center">
                <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
                  <FileSearch className="text-brand-gold" /> Policy Decoder
                </h3>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <p className="text-sm text-gray-600 mb-4">Confused by insurance jargon? Paste it below for a plain-English explanation.</p>
                <textarea 
                  rows={5} 
                  className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold outline-none mb-6 text-sm resize-none" 
                  placeholder="Paste confusing policy text here..."
                  value={decoderInput}
                  onChange={(e) => setDecoderInput(e.target.value)}
                ></textarea>
                
                <Button 
                  onClick={handleDecoderSubmit} 
                  isLoading={decoderLoading} 
                  disabled={!decoderInput.trim()} 
                  fullWidth
                >
                  Simplify with AI
                </Button>

                {(decoderResult || decoderError) && (
                  <div className={`mt-6 p-6 rounded-lg border-l-4 shadow-sm animate-fade-in ${decoderError ? 'bg-red-50 border-red-400' : 'bg-white border-brand-gold'}`}>
                    {decoderError ? (
                      <p className="text-red-600 text-sm">{decoderError}</p>
                    ) : (
                      <>
                        <h4 className="font-bold text-brand-teal mb-3 text-sm uppercase tracking-wide">Explanation:</h4>
                        <div className="text-gray-700 text-sm leading-relaxed markdown-body">
                          <Markdown>{decoderResult}</Markdown>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Tool 2: Strategic Assessment */}
            <div className="bg-brand-cream-light rounded-2xl shadow-xl overflow-hidden border border-brand-cream flex flex-col">
              <div className="bg-brand-teal p-6 flex justify-between items-center">
                <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
                  <Compass className="text-brand-gold" /> Strategic Assessment
                </h3>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <p className="text-sm text-gray-600 mb-4">Describe your situation. We'll suggest focus areas.</p>
                
                <div className="relative mb-3">
                    <select 
                      className="w-full p-3 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-brand-gold outline-none appearance-none bg-white"
                      value={assessmentType}
                      onChange={(e) => setAssessmentType(e.target.value as UserType)}
                    >
                      <option value={UserType.BUSINESS_OWNER}>I am a Business Owner</option>
                      <option value={UserType.INDIVIDUAL}>I am an Individual / Head of Family</option>
                      <option value={UserType.ADVISOR}>I am a Financial Advisor</option>
                    </select>
                     <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                      </div>
                </div>

                <textarea 
                  rows={4} 
                  className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold outline-none mb-6 text-sm resize-none" 
                  placeholder="e.g., I have a successful dental practice with 5 employees and want to save on taxes..."
                  value={assessmentInput}
                  onChange={(e) => setAssessmentInput(e.target.value)}
                ></textarea>
                
                <Button 
                  onClick={handleAssessmentSubmit} 
                  isLoading={assessmentLoading} 
                  disabled={!assessmentInput.trim()} 
                  fullWidth
                  variant='primary'
                  className="bg-brand-gold text-brand-teal"
                >
                  Analyze Needs
                </Button>

                {(assessmentResult || assessmentError) && (
                  <div className={`mt-6 p-6 rounded-lg border-l-4 shadow-sm animate-fade-in ${assessmentError ? 'bg-red-50 border-red-400' : 'bg-white border-brand-teal'}`}>
                    {assessmentError ? (
                      <p className="text-red-600 text-sm">{assessmentError}</p>
                    ) : (
                      <>
                        <h4 className="font-bold text-brand-teal mb-3 text-sm uppercase tracking-wide">Strategic Recommendations:</h4>
                        <div className="text-gray-700 text-sm leading-relaxed markdown-body">
                          <Markdown>{assessmentResult}</Markdown>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Tools;