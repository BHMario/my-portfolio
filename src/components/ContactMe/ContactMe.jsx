import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ContactMe.css';
import Footer from '../Footer/Footer.jsx';

function ContactMe({ isDarkMode, toggleDarkMode }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
      alert('Formulario enviado correctamente.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setFormErrors(errors);
      setIsSubmitted(false);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'El nombre es obligatorio.';
    if (!formData.email) errors.email = 'El email es obligatorio.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'El email no es válido.';
    if (!formData.subject) errors.subject = 'El asunto es obligatorio.';
    if (!formData.message) errors.message = 'El mensaje no puede estar vacío.';
    return errors;
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setFormErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="page-container">
      <main id="contact-me" className={`contact-me ${isDarkMode ? 'dark-mode' : ''}`}>
        <h2>Contact Me</h2>

        <button 
          className="dark-mode-toggle"
          onClick={toggleDarkMode}
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? '🌞' : '🌙'}
        </button>

        <Link to="/" className="back-icon" aria-label="Back to Home">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
            viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L4.414 8H17a1 1 0 011 1v2a1 1 0 01-1 1H4.414l4.293 4.293a1 1 0 010 1.414z" />
          </svg>
        </Link>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
            {formErrors.name && <p className="error">{formErrors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
            />
            {formErrors.email && <p className="error">{formErrors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Subject"
            />
            {formErrors.subject && <p className="error">{formErrors.subject}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
            ></textarea>
            {formErrors.message && <p className="error">{formErrors.message}</p>}
          </div>

          <button type="submit" className="btn-submit">Send Message</button>
          <button type="button" onClick={handleReset} className="btn-reset">Reset</button>

          {isSubmitted && <p className="success-message">Formulario enviado correctamente.</p>}
        </form>
      </main>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default ContactMe;
