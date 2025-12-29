"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const requirementTypes = [
  "Custom Doll Depiction",
  "Festival/Golu Curation",
  "Cultural Storytelling Session",
  "Workshop",
  "Rangoli/Poo Kolam",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    requirementType: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = encodeURIComponent(
      `Inquiry: ${formData.requirementType} - from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `City: ${formData.city}\n` +
        `Requirement: ${formData.requirementType}\n` +
        `Preferred Date: ${formData.date}\n\n` +
        `Message:\n${formData.message}`
    );

    window.location.href = `mailto:chitraraman2008@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="font-display text-2xl text-cream-950 mb-2">
          Thank You!
        </h3>
        <p className="text-cream-700">
          Your email client should open with your message. If not, please email
          directly at chitraraman2008@gmail.com
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-temple-gold hover:text-temple-copper transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-cream-800 mb-2"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-cream-300 bg-white text-cream-900 placeholder-cream-500 transition-colors"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-cream-800 mb-2"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-cream-300 bg-white text-cream-900 placeholder-cream-500 transition-colors"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-cream-800 mb-2"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-cream-300 bg-white text-cream-900 placeholder-cream-500 transition-colors"
            placeholder="+91 98765 43210"
          />
        </div>

        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-cream-800 mb-2"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-cream-300 bg-white text-cream-900 placeholder-cream-500 transition-colors"
            placeholder="Mumbai"
          />
        </div>

        <div>
          <label
            htmlFor="requirementType"
            className="block text-sm font-medium text-cream-800 mb-2"
          >
            Requirement Type *
          </label>
          <select
            id="requirementType"
            name="requirementType"
            required
            value={formData.requirementType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-cream-300 bg-white text-cream-900 transition-colors"
          >
            <option value="">Select a service</option>
            {requirementTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-cream-800 mb-2"
          >
            Preferred Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-cream-300 bg-white text-cream-900 transition-colors"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-cream-800 mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-cream-300 bg-white text-cream-900 placeholder-cream-500 transition-colors resize-none"
          placeholder="Tell us about your event, theme, or any specific requirements..."
        />
      </div>

      <button
        type="submit"
        className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-temple-gold to-temple-copper text-white font-medium rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
      >
        <Send size={20} />
        Send Message
      </button>
    </form>
  );
}
