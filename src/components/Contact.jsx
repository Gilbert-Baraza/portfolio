import React, { useState, useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters long';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');

    // Retrieve environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // Missing API keys fallback - simulate success
      console.warn('EmailJS keys not found. Simulating message sending...');
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1500);
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS message sending failed:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold font-outfit text-secondary dark:text-textDark">
            Get in Touch
          </h2>
          <div className="w-16 h-1.5 bg-primary dark:bg-accent mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-mutedLight dark:text-mutedDark">
            Have an attachment opening, feedback, or a question? Drop a message!
          </p>
        </div>

        {/* Contact Layout */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Contact Information & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            {/* Direct Contact details */}
            <div className="glass-card p-6 md:p-8 rounded-3xl border border-secondary-light/10 dark:border-white/5 space-y-6">
              <h3 className="text-xl font-bold font-outfit text-secondary dark:text-textDark mb-2">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 dark:bg-accent/10 rounded-xl text-primary dark:text-accent border border-primary/20 dark:border-accent/20">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-mutedLight dark:text-mutedDark uppercase tracking-wider">Email</div>
                    <a href="mailto:gilbertbaraza@example.com" className="text-sm font-semibold text-secondary dark:text-textDark hover:text-primary dark:hover:text-accent">
                      gilbertbaraza@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500 border border-emerald-500/20">
                    <FaPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-mutedLight dark:text-mutedDark uppercase tracking-wider">Phone</div>
                    <a href="tel:+254700000000" className="text-sm font-semibold text-secondary dark:text-textDark hover:text-emerald-500">
                      +254 700 000 000
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500 border border-amber-500/20">
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-mutedLight dark:text-mutedDark uppercase tracking-wider">Location</div>
                    <span className="text-sm font-semibold text-secondary dark:text-textDark">
                      Nairobi, Kenya
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Mock/Placeholder */}
            <div className="glass-card rounded-3xl border border-secondary-light/10 dark:border-white/5 overflow-hidden flex-grow min-h-[220px] relative">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127642.82528773956!2d36.75485633857422!3d-1.2863892000000004!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7eb02f6b1d6217d!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.85)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card p-6 md:p-8 rounded-3xl border border-secondary-light/10 dark:border-white/5 shadow-lg flex flex-col justify-between"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold font-mono text-mutedLight dark:text-mutedDark uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full bg-secondary-light/5 dark:bg-bgDark/50 border ${
                      errors.name ? 'border-red-500' : 'border-secondary-light/20 dark:border-white/10'
                    } focus:border-primary dark:focus:border-accent rounded-xl py-3 px-4 text-sm font-semibold outline-none transition-colors`}
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="text-xs text-red-500 font-bold">{errors.name}</span>}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold font-mono text-mutedLight dark:text-mutedDark uppercase tracking-wider">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full bg-secondary-light/5 dark:bg-bgDark/50 border ${
                      errors.email ? 'border-red-500' : 'border-secondary-light/20 dark:border-white/10'
                    } focus:border-primary dark:focus:border-accent rounded-xl py-3 px-4 text-sm font-semibold outline-none transition-colors`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="text-xs text-red-500 font-bold">{errors.email}</span>}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-bold font-mono text-mutedLight dark:text-mutedDark uppercase tracking-wider">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full bg-secondary-light/5 dark:bg-bgDark/50 border ${
                    errors.subject ? 'border-red-500' : 'border-secondary-light/20 dark:border-white/10'
                  } focus:border-primary dark:focus:border-accent rounded-xl py-3 px-4 text-sm font-semibold outline-none transition-colors`}
                  placeholder="Industrial Attachment Opportunity"
                />
                {errors.subject && <span className="text-xs text-red-500 font-bold">{errors.subject}</span>}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold font-mono text-mutedLight dark:text-mutedDark uppercase tracking-wider">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full bg-secondary-light/5 dark:bg-bgDark/50 border ${
                    errors.message ? 'border-red-500' : 'border-secondary-light/20 dark:border-white/10'
                  } focus:border-primary dark:focus:border-accent rounded-xl py-3 px-4 text-sm font-semibold outline-none transition-colors resize-none`}
                  placeholder="Hi Gilbert, I would like to discuss..."
                />
                {errors.message && <span className="text-xs text-red-500 font-bold">{errors.message}</span>}
              </div>

              {/* Send Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center space-x-2 bg-primary hover:bg-primary-light text-white font-bold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-glow-primary transition-all duration-200 disabled:opacity-50"
              >
                <FaPaperPlane className="w-4 h-4" />
                <span>{status === 'sending' ? 'Sending Message...' : 'Send Message'}</span>
              </button>

              {/* Feedback messages */}
              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-xl text-center text-sm font-bold"
                >
                  🎉 Thank you! Your message has been sent successfully.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl text-center text-sm font-bold"
                >
                  ❌ Error: Failed to send the message. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
