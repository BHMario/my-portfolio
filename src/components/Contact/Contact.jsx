import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './Contact.css';

/* --- Animation variants --- */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/* --- EmailJS Configuration --- */
const EMAILJS_SERVICE = 'service_0v217sh';
const EMAILJS_TEMPLATE = 'template_de0dalk';
const EMAILJS_KEY = 'mZVqIuie_VDpKBONJ';
const COOLDOWN_MS = 60_000;
const MAX_MESSAGE_LENGTH = 2000;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState('');
  const [lastSentAt, setLastSentAt] = useState(0);
  const [focusedField, setFocusedField] = useState(null);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'message' && value.length > MAX_MESSAGE_LENGTH) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required.';
    else if (formData.name.trim().length < 2) errors.name = 'Name must be at least 2 characters.';

    if (!formData.email.trim()) errors.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errors.email = 'Please enter a valid email address.';

    if (!formData.subject.trim()) errors.subject = 'Subject is required.';
    if (!formData.message.trim()) errors.message = 'Message cannot be empty.';
    else if (formData.message.trim().length < 10)
      errors.message = 'Message must be at least 10 characters.';

    return errors;
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      // Honeypot check
      const honeypot = formRef.current?.querySelector('[name="website"]');
      if (honeypot && honeypot.value) return;

      // Rate limiting
      const now = Date.now();
      if (now - lastSentAt < COOLDOWN_MS) {
        const remainingSec = Math.ceil((COOLDOWN_MS - (now - lastSentAt)) / 1000);
        setErrorMessage(`Please wait ${remainingSec}s before sending another message.`);
        setStatus('error');
        return;
      }

      const errors = validateForm();
      setFormErrors(errors);

      if (Object.keys(errors).length > 0) return;

      setStatus('sending');
      setErrorMessage('');
      formRef.current.time.value = new Date().toLocaleString();

      emailjs
        .sendForm(EMAILJS_SERVICE, EMAILJS_TEMPLATE, formRef.current, EMAILJS_KEY)
        .then(() => {
          setStatus('success');
          setLastSentAt(Date.now());
          setFormData({ name: '', email: '', subject: '', message: '' });
          setTimeout(() => setStatus('idle'), 8000);
        })
        .catch((error) => {
          console.error('EmailJS Error:', error);
          setErrorMessage(
            error?.text || 'Something went wrong. Please try again or email me directly.'
          );
          setStatus('error');
        });
    },
    [formData, lastSentAt]
  );

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setFormErrors({});
    setStatus('idle');
    setErrorMessage('');
  };

  const isSending = status === 'sending';
  const isSuccess = status === 'success';
  const isError = status === 'error';
  const isCooldown = Date.now() - lastSentAt < COOLDOWN_MS;

  // Calculate how many fields are filled (for progress indicator)
  const filledFields = ['name', 'email', 'subject', 'message'].filter(
    (f) => formData[f].trim().length > 0
  ).length;

  return (
    <section id="contact" className="contact section" aria-label="Contact Me">
      {/* Background decorative elements */}
      <div className="contact__bg-glow contact__bg-glow--1" />
      <div className="contact__bg-glow contact__bg-glow--2" />
      <div className="contact__bg-grid" />

      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="section-label">Contact</span>
          <h2>Let's Work Together</h2>
          <p>Have a project in mind or want to collaborate? I'd love to hear from you.</p>
        </motion.div>

        <div className="contact__layout">
          {/* Info sidebar */}
          <motion.div
            className="contact__sidebar"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div className="contact__sidebar-intro" variants={fadeUp}>
              <div className="contact__avatar-ring">
                <div className="contact__avatar-placeholder">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                  </svg>
                </div>
              </div>
              <h3>Get in Touch</h3>
              <p>
                Feel free to reach out through the form or contact me directly.
                I'm always open to new opportunities and interesting projects.
              </p>
            </motion.div>

            <motion.div className="contact__channels" variants={fadeUp}>
              <a href="mailto:mariosanrui1612@gmail.com" className="contact__channel">
                <div className="contact__channel-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="contact__channel-text">
                  <span className="contact__channel-label">Email</span>
                  <span className="contact__channel-value">mariosanrui1612@gmail.com</span>
                </div>
                <svg className="contact__channel-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>

              <a href="https://github.com/BHMario" target="_blank" rel="noopener noreferrer" className="contact__channel">
                <div className="contact__channel-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div className="contact__channel-text">
                  <span className="contact__channel-label">GitHub</span>
                  <span className="contact__channel-value">BHMario</span>
                </div>
                <svg className="contact__channel-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>

              <a href="https://www.linkedin.com/in/mario-s%C3%A1nchez-ruiz-52a4a733b/" target="_blank" rel="noopener noreferrer" className="contact__channel">
                <div className="contact__channel-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div className="contact__channel-text">
                  <span className="contact__channel-label">LinkedIn</span>
                  <span className="contact__channel-value">Mario Sánchez Ruiz</span>
                </div>
                <svg className="contact__channel-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </motion.div>

            {/* Response time indicator */}
            <motion.div className="contact__response-time" variants={scaleIn}>
              <div className="contact__response-dot" />
              <span>Usually responds within 24 hours</span>
            </motion.div>
          </motion.div>

          {/* Form card */}
          <motion.div
            className="contact__form-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Progress bar */}
            <div className="contact__progress">
              <div
                className="contact__progress-fill"
                style={{ width: `${(filledFields / 4) * 100}%` }}
              />
            </div>

            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  className="contact__success-state"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key="success-state"
                >
                  <div className="contact__success-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn btn-outline"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="contact__form"
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key="form-state"
                >
                  <input type="hidden" name="time" />
                  {/* Honeypot — hidden field to catch bots */}
                  <input
                    type="text"
                    name="website"
                    className="contact__honeypot"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  <div className="contact__form-grid">
                    <div className={`contact__field ${focusedField === 'name' ? 'contact__field--focused' : ''} ${formErrors.name ? 'contact__field--error' : ''}`}>
                      <label htmlFor="contact-name">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                        Name
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="John Doe"
                        autoComplete="name"
                        disabled={isSending}
                      />
                      <AnimatePresence>
                        {formErrors.name && (
                          <motion.p
                            className="contact__error"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                          >
                            {formErrors.name}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className={`contact__field ${focusedField === 'email' ? 'contact__field--focused' : ''} ${formErrors.email ? 'contact__field--error' : ''}`}>
                      <label htmlFor="contact-email">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="4" width="20" height="16" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                        Email
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="john@example.com"
                        autoComplete="email"
                        disabled={isSending}
                      />
                      <AnimatePresence>
                        {formErrors.email && (
                          <motion.p
                            className="contact__error"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                          >
                            {formErrors.email}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className={`contact__field ${focusedField === 'subject' ? 'contact__field--focused' : ''} ${formErrors.subject ? 'contact__field--error' : ''}`}>
                    <label htmlFor="contact-subject">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                        <path d="M18 14h-8" />
                        <path d="M15 18h-5" />
                        <path d="M10 6h8v4h-8V6Z" />
                      </svg>
                      Subject
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="What's this about?"
                      disabled={isSending}
                    />
                    <AnimatePresence>
                      {formErrors.subject && (
                        <motion.p
                          className="contact__error"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          {formErrors.subject}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className={`contact__field ${focusedField === 'message' ? 'contact__field--focused' : ''} ${formErrors.message ? 'contact__field--error' : ''}`}>
                    <label htmlFor="contact-message">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      Message
                      <span className="contact__char-count">
                        {formData.message.length}/{MAX_MESSAGE_LENGTH}
                      </span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Tell me about your project, idea, or just say hello..."
                      rows="5"
                      disabled={isSending}
                    />
                    <AnimatePresence>
                      {formErrors.message && (
                        <motion.p
                          className="contact__error"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          {formErrors.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="contact__form-actions">
                    <button
                      type="submit"
                      className="contact__submit-btn"
                      disabled={isSending || isCooldown}
                    >
                      {isSending ? (
                        <>
                          <div className="contact__spinner" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13" />
                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                          </svg>
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="btn btn-ghost"
                      disabled={isSending}
                    >
                      Reset
                    </button>
                  </div>

                  <AnimatePresence>
                    {isError && errorMessage && (
                      <motion.div
                        className="contact__error-msg"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        key="error"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="15" y1="9" x2="9" y2="15" />
                          <line x1="9" y1="9" x2="15" y2="15" />
                        </svg>
                        {errorMessage}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
