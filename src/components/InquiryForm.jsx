'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  CheckCircle2,
  Sparkles,
  User,
  Mail,
  Phone,
  GraduationCap,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';

const InquiryForm = ({ onSubmitInquiry, inquirySubmitting, inquirySuccess }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    studentName: '',
    gradeApplyingFor: 'Grade 1',
    message: '',
  });

  const [submittedLocal, setSubmittedLocal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (onSubmitInquiry) {
      onSubmitInquiry(form, () => {
        setForm({
          name: '',
          email: '',
          phone: '',
          studentName: '',
          gradeApplyingFor: 'Grade 1',
          message: '',
        });
        setSubmittedLocal(true);
        setTimeout(() => setSubmittedLocal(false), 8000);
      });
    }
  };

  const isSuccess = inquirySuccess || submittedLocal;

  return (
    <div id="inquiry-form" className="bg-white rounded-3xl border border-[#dceee3] p-6 sm:p-10 shadow-xl shadow-[#0b3d2e]/5 relative overflow-hidden">
      {/* Top Colorful Accent Line */}
      <div className="h-2 w-full absolute top-0 left-0 bg-gradient-to-r from-[#0b3d2e] via-emerald-600 to-amber-500" />

      <div className="mb-6 space-y-1">
        <div className="inline-flex items-center gap-1.5 bg-[#edf7f2] border border-[#dceee3] text-[#0b3d2e] px-3 py-1 rounded-lg text-[11px] font-black uppercase tracking-wider">
          <Sparkles size={12} className="text-amber-500" />
          <span>Direct Admissions Desk</span>
        </div>
        <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#0b3d2e] tracking-tight">
          Send an Admission Inquiry
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
          Submit your query and our friendly counseling team will get back to you with prospectus, fee schedule, and test dates.
        </p>
      </div>

      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="mb-6 p-5 rounded-2xl bg-[#edf7f2] border border-[#dceee3] text-[#0b3d2e] text-xs sm:text-sm font-semibold flex items-start gap-3 shadow-emerald-glow"
          >
            <div className="w-8 h-8 rounded-xl bg-[#0b3d2e] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
              <CheckCircle2 size={18} />
            </div>
            <div>
              <h5 className="font-serif font-bold text-sm text-[#0b3d2e]">Inquiry Received Successfully!</h5>
              <p className="text-emerald-800 mt-0.5 font-medium leading-relaxed">
                Thank you for your interest. A copy has been registered in our admission portal. Our counseling counselor will call or email you within 24 hours.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleFormSubmit} className="space-y-4">
        {/* Parent Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-slate-700 uppercase text-[10px] font-black tracking-wider mb-1 flex items-center gap-1">
              <User size={11} className="text-[#0b3d2e]" />
              Parent / Guardian Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleInputChange}
              placeholder="e.g. Eleanor Rigby"
              className="w-full bg-[#f8fbf9] border border-[#dceee3] rounded-xl px-4 py-3 text-slate-900 text-xs sm:text-sm font-medium focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 focus:outline-none transition-all shadow-xs"
            />
          </div>

          <div>
            <label className="block text-slate-700 uppercase text-[10px] font-black tracking-wider mb-1 flex items-center gap-1">
              <Mail size={11} className="text-[#0b3d2e]" />
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleInputChange}
              placeholder="parent@example.com"
              className="w-full bg-[#f8fbf9] border border-[#dceee3] rounded-xl px-4 py-3 text-slate-900 text-xs sm:text-sm font-medium focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 focus:outline-none transition-all shadow-xs"
            />
          </div>
        </div>

        {/* Phone, Student Name, Grade */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-slate-700 uppercase text-[10px] font-black tracking-wider mb-1 flex items-center gap-1">
              <Phone size={11} className="text-emerald-600" />
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={form.phone}
              onChange={handleInputChange}
              placeholder="+1 (555) 000-0000"
              className="w-full bg-[#f8fbf9] border border-[#dceee3] rounded-xl px-4 py-3 text-slate-900 text-xs sm:text-sm font-medium focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 focus:outline-none transition-all shadow-xs"
            />
          </div>

          <div>
            <label className="block text-slate-700 uppercase text-[10px] font-black tracking-wider mb-1 flex items-center gap-1">
              <User size={11} className="text-emerald-700" />
              Student Full Name
            </label>
            <input
              type="text"
              name="studentName"
              value={form.studentName}
              onChange={handleInputChange}
              placeholder="e.g. Leo Rigby"
              className="w-full bg-[#f8fbf9] border border-[#dceee3] rounded-xl px-4 py-3 text-slate-900 text-xs sm:text-sm font-medium focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 focus:outline-none transition-all shadow-xs"
            />
          </div>

          <div>
            <label className="block text-slate-700 uppercase text-[10px] font-black tracking-wider mb-1 flex items-center gap-1">
              <GraduationCap size={11} className="text-amber-600" />
              Grade Applying For
            </label>
            <select
              name="gradeApplyingFor"
              value={form.gradeApplyingFor}
              onChange={handleInputChange}
              className="w-full bg-[#f8fbf9] border border-[#dceee3] rounded-xl px-4 py-3 text-slate-900 text-xs sm:text-sm font-medium focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 focus:outline-none transition-all shadow-xs"
            >
              <option>Pre-Nursery / Playgroup</option>
              <option>Kindergarten (KG 1 &amp; 2)</option>
              <option>Grade 1</option>
              <option>Grade 2</option>
              <option>Grade 3</option>
              <option>Grade 4</option>
              <option>Grade 5</option>
              <option>Grade 6</option>
              <option>Grade 7</option>
              <option>Grade 8</option>
              <option>Grade 9</option>
              <option>Grade 10</option>
              <option>Grade 11 (Science &amp; AI)</option>
              <option>Grade 11 (Commerce &amp; Econ)</option>
              <option>Grade 11 (Humanities &amp; Arts)</option>
              <option>Grade 12</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-slate-700 uppercase text-[10px] font-black tracking-wider mb-1 flex items-center gap-1">
            <MessageSquare size={11} className="text-emerald-700" />
            Questions or Learning Requirements *
          </label>
          <textarea
            name="message"
            required
            rows={4}
            value={form.message}
            onChange={handleInputChange}
            placeholder="Tell us about your child's background, any special interests (sports, arts, STEM), or specific queries..."
            className="w-full bg-[#f8fbf9] border border-[#dceee3] rounded-xl px-4 py-3 text-slate-900 text-xs sm:text-sm font-medium focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 focus:outline-none transition-all shadow-xs"
          />
        </div>

        {/* Security Notice */}
        <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
          <ShieldCheck size={14} className="text-emerald-600 flex-shrink-0" />
          <span>Your information is encrypted &amp; will only be used for admission communication.</span>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          type="submit"
          disabled={inquirySubmitting}
          className="w-full bg-gradient-to-r from-[#0b3d2e] via-[#0e523f] to-[#146049] hover:from-[#072c21] hover:to-[#0b3d2e] text-white font-heading font-black text-sm py-4 rounded-xl shadow-lg shadow-[#0b3d2e]/30 transition-all flex items-center justify-center gap-2 disabled:opacity-60 border border-emerald-500/30"
        >
          {inquirySubmitting ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Submitting Your Inquiry...
            </span>
          ) : (
            <>
              <Send size={16} /> Submit Inquiry to Admissions Office
            </>
          )}
        </motion.button>
      </form>
    </div>
  );
};

export default InquiryForm;
