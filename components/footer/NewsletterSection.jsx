"use client";
import React, { useState } from "react";

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async () => {
    setIsSubmitting(true);
    setMessage("");

    if (!email) {
      setMessage("Please enter a valid email.");
      setIsSubmitting(false);
      return;
    }

    // Simulating an API call or form submission
    setTimeout(() => {
      setMessage("Thank you for subscribing!");
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div>
      <p className="text-[1rem] leading-6 text-[#515151] font-medium mb-[1rem]">
        Get the latest updates by subscribing to our newsletter.
      </p>

      <div>
        <div className="form-floating flex items-center relative gap-[1rem] tracking-[1px]">
          <div className="">
            <input
              type="email"
              id="newsletter"
              className="py-[16px] px-[14px] border border-[#ddd] color-[#101010] font-[1rem] focus:outline-none focus:bg-[#efefef] focus:border-[#8f8e8e]"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="button"
            onClick={handleSubscribe}
            className={`base-button py-[16px] px-[35px] text-[#656565] ${
              isSubmitting
                ? "bg-[#f0f0f0]"
                : "bg-[#efefef] hover:bg-[#e0e0e0] cursor-pointer"
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </button>
        </div>

        {message && (
          <div
            className={`mt-4 ${
              message.includes("Thank you") ? "text-green-500" : "text-red-500"
            }`}
            id={
              message.includes("Thank you")
                ? "newsletter-success"
                : message.includes("valid")
                ? "newsletter-validation"
                : "newsletter-error"
            }
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default NewsletterForm;
