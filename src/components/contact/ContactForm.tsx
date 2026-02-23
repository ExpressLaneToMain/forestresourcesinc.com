"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Calendar, Send, Loader2 } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { submitContactForm } from "@/app/actions/contact";

const services = [
  "Forest Stewardship Plans",
  "Tree Planting",
  "Wildlife Enhancement",
  "Food Plots & CRP Seeding",
  "Timber Appraisals & Sales",
  "Forest Stand Improvement",
  "CRP Management",
  "Invasive Species Control",
  "Other",
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Forest Stewardship Plans",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        setStatus("sent");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "Forest Stewardship Plans",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      {/* Contact Info */}
      <SectionReveal direction="left">
        <div className="bg-forest-50 p-10 rounded-3xl border border-forest-100">
          <h2 className="text-2xl font-serif font-bold text-forest-900 mb-8">
            Contact Information
          </h2>
          <div className="space-y-8">
            <a
              href="tel:2172591500"
              className="flex items-start gap-4 group"
            >
              <div className="bg-white p-3 rounded-xl shadow-sm text-forest-600 group-hover:bg-forest-600 group-hover:text-white transition-colors">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-stone-500 uppercase tracking-wide">
                  Phone
                </p>
                <p className="text-xl font-semibold text-stone-900">
                  217-259-1500
                </p>
                <p className="text-xs text-stone-500">
                  Call for appointments
                </p>
              </div>
            </a>

            <a
              href="mailto:perrybushue@forestresourcesinc.com"
              className="flex items-start gap-4 group"
            >
              <div className="bg-white p-3 rounded-xl shadow-sm text-forest-600 group-hover:bg-forest-600 group-hover:text-white transition-colors">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-stone-500 uppercase tracking-wide">
                  Email
                </p>
                <p className="text-lg font-semibold text-stone-900">
                  perrybushue@forestresourcesinc.com
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-xl shadow-sm text-forest-600">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-stone-500 uppercase tracking-wide">
                  Location
                </p>
                <p className="text-lg font-semibold text-stone-900">
                  Perry Bushue
                </p>
                <p className="text-stone-600">Shumway, IL</p>
              </div>
            </div>

            <div className="pt-8 border-t border-forest-200">
              <div className="flex items-center text-forest-700 font-medium gap-2">
                <Calendar size={20} />
                <span>
                  Available for on-site visits throughout Central &
                  Southern Illinois.
                </span>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* Form */}
      <SectionReveal direction="right">
        {status === "sent" ? (
          <div className="flex flex-col items-center justify-center h-full text-center py-16">
            <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mb-6">
              <Send size={28} className="text-forest-600" />
            </div>
            <h3 className="text-2xl font-bold text-stone-900 mb-3">
              Message Sent!
            </h3>
            <p className="text-stone-600 text-lg max-w-md">
              Thank you for reaching out. We&apos;ll review your inquiry
              and contact you shortly.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-8 text-forest-700 font-semibold hover:text-forest-800 transition-colors"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-stone-700 mb-1.5"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-forest-500 focus:border-forest-500 outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-stone-700 mb-1.5"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-forest-500 focus:border-forest-500 outline-none transition-all"
                  placeholder="(217) ..."
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-stone-700 mb-1.5"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-forest-500 focus:border-forest-500 outline-none transition-all"
                placeholder="email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium text-stone-700 mb-1.5"
              >
                Service of Interest
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-forest-500 focus:border-forest-500 outline-none transition-all bg-white"
              >
                {services.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-stone-700 mb-1.5"
              >
                Message / Property Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-forest-500 focus:border-forest-500 outline-none transition-all"
                placeholder="Please describe your property location (County) and acreage..."
              />
            </div>

            {status === "error" && (
              <p className="text-red-600 text-sm">
                Something went wrong. Please try again or call us directly
                at 217-259-1500.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-forest-700 hover:bg-forest-800 disabled:opacity-60 text-white font-bold py-4 rounded-xl shadow-lg transition-colors text-lg flex items-center justify-center gap-2"
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Inquiry
                </>
              )}
            </button>
          </form>
        )}
      </SectionReveal>
    </div>
  );
}
