"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const requirementTypes = [
  "Custom Doll Depiction",
  "Festival/Golu Curation",
  "Cultural Storytelling Session",
  "Workshop",
  "Rangoli/Poo Kolam",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    requirementType: "",
    date: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        requirementType: "",
        date: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again."
      );
      console.error("Form submission error:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setStatus("idle");
    setErrorMessage("");
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="font-display text-2xl text-cream-950 mb-2">
          Message Sent Successfully!
        </h3>
        <p className="text-cream-700 mb-6">
          Thank you for reaching out. Chitra will get back to you within 2-3
          business days.
        </p>
        <button
          onClick={resetForm}
          className="text-temple-gold hover:text-temple-copper transition-colors font-medium"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-red-800">
              Error sending message
            </p>
            <p className="text-sm text-red-600 mt-1">{errorMessage}</p>
          </div>
        </div>
      )}

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
            disabled={status === "loading"}
            className="w-full px-4 py-3 rounded-lg border border-cream-300 bg-white text-cream-900 placeholder-cream-500 focus:outline-none focus:ring-2 focus:ring-temple-gold focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
            disabled={status === "loading"}
            className="w-full px-4 py-3 rounded-lg border border-cream-300 bg-white text-cream-900 placeholder-cream-500 focus:outline-none focus:ring-2 focus:ring-temple-gold focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
            disabled={status === "loading"}
            className="w-full px-4 py-3 rounded-lg border border-cream-300 bg-white text-cream-900 placeholder-cream-500 focus:outline-none focus:ring-2 focus:ring-temple-gold focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
            disabled={status === "loading"}
            className="w-full px-4 py-3 rounded-lg border border-cream-300 bg-white text-cream-900 placeholder-cream-500 focus:outline-none focus:ring-2 focus:ring-temple-gold focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
            disabled={status === "loading"}
            className="w-full px-4 py-3 rounded-lg border border-cream-300 bg-white text-cream-900 focus:outline-none focus:ring-2 focus:ring-temple-gold focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
            disabled={status === "loading"}
            min={new Date().toISOString().split("T")[0]}
            className="w-full px-4 py-3 rounded-lg border border-cream-300 bg-white text-cream-900 focus:outline-none focus:ring-2 focus:ring-temple-gold focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
          disabled={status === "loading"}
          className="w-full px-4 py-3 rounded-lg border border-cream-300 bg-white text-cream-900 placeholder-cream-500 focus:outline-none focus:ring-2 focus:ring-temple-gold focus:border-transparent transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="Tell us about your event, theme, or any specific requirements..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-temple-gold to-temple-copper text-white font-medium rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={20} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
