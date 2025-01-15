"use client";
import React, { useState } from 'react';

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async () => {
    setIsSubmitting(true);
    setMessage('');

    if (!email) {
      setMessage('Please enter a valid email.');
      setIsSubmitting(false);
      return;
    }

    // Simulating an API call or form submission
    setTimeout(() => {
      setMessage('Thank you for subscribing!');
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="col-12 col-md-6 col-xl-5">
      <p className="text-lg font-medium mb-4">Get the latest updates by subscribing to our newsletter.</p>

      <div className="newsletter-form">
        <div className="form-floating flex items-center relative gap-3">
          <div className="input-wrapper">
            <input
              type="email"
              id="newsletter"
              className="form-control py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="newsletter" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              Email Address
            </label>
          </div>

          <button
            type="button"
            onClick={handleSubscribe}
            className={`base-button py-2 px-4 rounded-lg text-white ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>

        {message && (
          <div
            className={`mt-4 ${message.includes('Thank you') ? 'text-green-500' : 'text-red-500'}`}
            id={message.includes('Thank you') ? 'newsletter-success' : message.includes('valid') ? 'newsletter-validation' : 'newsletter-error'}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default NewsletterForm;
