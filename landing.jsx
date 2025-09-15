"use client";
import React, { useState } from "react";
import {
  Globe,
  Ship,
  Plane,
  Train,
  Shield,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  CheckCircle,
  Clock,
  Search
} from "lucide-react";

export default function HwarangHomepage() {
  const [lang, setLang] = useState("en");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const translations = {
    en: {
      brand: "HWARANG CO., LTD.",
      nav: ["Home", "Corporate", "Services", "Network & Lanes", "Contact"],
      heroTitle: "DEDICATED TO DELIVERING EXCELLENCE",
      heroSubtitle:
        "Professional logistics and forwarding services with reliable partners and on‑time delivery.",
      ctaQuote: "Get in Touch",
      ctaContact: "Contact Us",
      aboutTitle: "Corporate",
      about:
        "Hwarang Co., Ltd, founded in 1943 as a leading logistics and forwarding company. We specialize in multimodal freight solutions across global corridors.",
      servicesTitle: "Core Services",
      coverageTitle: "Network & Lanes",
      coverageDesc:
        "Providing strategic delivery solutions and lanes specifically designed for your needs.",
      stats: [
        { k: "20+", v: "YEARS OF EXPERIENCE" },
        { k: "WORLDWIDE", v: "GLOBAL PARTNERS" },
        { k: "1M+", v: "TONS TRANSPORTED" }
      ],
      whyTitle: "Why Hwarang",
      why: [
        "Commitment to quality and safety  ",
        "Flexible and efficient solutions",
        "Customer satisfaction and reliability"
      ],
      contactTitle: "Get in Touch",
      contactForm: {
        title: "Send us a Message",
        name: "Your Name",
        email: "Your Email",
        message: "Message",
        button: "Send"
      },
      footer: "© 2025 Hwarang Co., Ltd. All rights reserved."
    }
  };

  const services = [
    {
      title: "Ocean Freight",
      icon: Ship,
      description: "Service to transportation and logistics"
    },
    {
      title: "Rail Transport",
      icon: Train,
      description: "Rail transportation solutions"
    },
    {
      title: "Sea Freight",
      icon: Plane,
      description: "Sea freight provides"
    },
    {
      title: "Warehousing",
      icon: Shield,
      description: "Facilitates warehouse"
    }
  ];

  const t = translations[lang];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Message sent!\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`
    );
    setForm({ name: "", email: "", message: "" });
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  // hero background — truck/trailer
  const heroBg =
    "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=1920&auto=format&fit=crop";

  return (
    <div className="bg-white text-neutral-800" data-testid="page-root">
      {/* Top info bar */}
      <div className="hidden md:flex items-center justify-between px-6 py-2 text-sm bg-neutral-100 text-neutral-600">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-2">
            <Mail className="w-4 h-4" /> info@hwarang.com
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="w-4 h-4" /> Mon Fri 08.00-18.00
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-4 h-4" />
          <span>+82-31-994-68/0~2</span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/75 border-b">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold">US</div>
            <span className="text-xl font-bold tracking-tight text-neutral-900">{t.brand}</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {t.nav.map((item, idx) => (
              <button
                key={idx}
                onClick={() =>
                  scrollTo(["home", "about", "services", "coverage", "contact"][idx])
                }
                className="text-sm font-medium hover:text-red-600 transition-colors"
              >
                {item}
              </button>
            ))}
            <div className="flex items-center gap-2 pl-3 border-l">
              <Search className="w-4 h-4" />
            </div>
          </div>
          {/* mobile */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-6 py-3 flex flex-col gap-3">
              {t.nav.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() =>
                    scrollTo(["home", "about", "services", "coverage", "contact"][idx])
                  }
                  className="text-left py-1"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollTo("contact")}
                className="mt-2 px-4 py-2 rounded-xl text-white bg-red-600"
              >
                {t.ctaContact}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" className="relative isolate">
        {/* Background Image */}
        <div
          className="h-[56vh] md:h-[64vh] bg-center bg-cover"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        
        {/* Content - Exactly matching Services Cards structure */}
        <div className="absolute inset-0">
          <div className="py-16 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Exactly matching Ocean Freight card position */}
                <div className="md:col-span-4 lg:col-span-3 xl:col-span-2">
                  <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight drop-shadow-sm tracking-tight">
                    {t.heroTitle}
                  </h1>
                  <p className="mt-5 text-white/90 max-w-[68ch] leading-[1.9] md:leading-8 tracking-[0.005em] drop-shadow-sm">
                    {t.heroSubtitle}
                  </p>
                  <div className="mt-6">
                    <button
                      onClick={() => scrollTo("contact")}
                      className="px-6 py-3 rounded-lg bg-red-600 text-white font-medium shadow-lg hover:bg-red-700 transition-colors"
                    >
                      {t.ctaQuote}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards - overlapping hero */}
      <section className="relative -mt-20 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {services.map((svc, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-lg p-6 border"
              >
                <div className="flex items-center gap-3 mb-3">
                  <svc.icon className="w-6 h-6 text-red-600" />
                  <h3 className="text-lg font-semibold text-neutral-900">{svc.title}</h3>
                </div>
                <p className="text-sm text-neutral-600">{svc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate/About */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">
              {t.aboutTitle}
            </h2>
            <p className="mt-5 text-neutral-700 max-w-[68ch] leading-[1.9] md:leading-8 tracking-[0.005em]">
              {t.about}
            </p>
            <ul className="mt-6 space-y-2 text-sm text-neutral-700 leading-7">
              {t.why.map((li, i) => (
                <li key={i} className="inline-flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  {li}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-8">
            {t.stats.map((stat, i) => (
              <div key={i} className="bg-red-600 text-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform">
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold mb-3">{stat.k}</div>
                  <div className="text-sm font-semibold uppercase tracking-widest opacity-90">
                    {stat.v}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network & Lanes */}
      <section id="coverage" className="py-16 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">
            {t.coverageTitle}
          </h2>
          <p className="mt-2 text-center text-neutral-600 max-w-2xl mx-auto">
            {t.coverageDesc}
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl shadow-sm border p-6">
            <h2 className="text-xl md:text-2xl font-semibold">{t.contactTitle}</h2>
            <div className="mt-4 text-sm">
              <p className="font-medium">Head Office</p>
              <p>240, Kintex-ro</p>
              <p>Ilsanseo-gu, Goyang-si</p>
              <p>Gyeonggi-do, Korea</p>
              <div className="mt-4 space-y-1">
                <p className="inline-flex items-center gap-2">
                  <Phone className="w-4 h-4" /> +82-31-994-68/0~2
                </p>
                <p className="inline-flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a className="underline" href="mailto:info@hwarang.com">
                    info@hwarang.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border p-6">
            <h3 className="text-lg font-semibold mb-4">{t.contactForm.title}</h3>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-4"
              data-testid="contact-form"
            >
              <input
                type="text"
                name="name"
                placeholder={t.contactForm.name}
                value={form.name}
                onChange={handleChange}
                required
                className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <input
                type="email"
                name="email"
                placeholder={t.contactForm.email}
                value={form.email}
                onChange={handleChange}
                required
                className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <textarea
                name="message"
                placeholder={t.contactForm.message}
                value={form.message}
                onChange={handleChange}
                required
                className="border rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-red-600 text-white rounded-xl shadow hover:bg-red-700"
              >
                {t.contactForm.button}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-100">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
          <div>
            <p className="font-semibold">About Us</p>
            <ul className="mt-3 text-sm space-y-1 text-neutral-300">
              <li>About Us</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Services</p>
            <ul className="mt-3 text-sm space-y-1 text-neutral-300">
              <li>Transportation</li>
              <li>Philosophy</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Quick Links</p>
            <ul className="mt-3 text-sm space-y-1 text-neutral-300">
              <li>Website</li>
              <li>Blog</li>
              <li>Address</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Contact Us</p>
            <ul className="mt-3 text-sm space-y-1 text-neutral-300">
              <li className="inline-flex items-center gap-2">
                <Phone className="w-4 h-4" /> +82-31-994-68/0~2
              </li>
              <li className="inline-flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a className="underline" href="mailto:info@hwarang.com">
                  info@hwarang.com
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <Globe className="w-4 h-4" /> hwarang.com
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-800 text-center text-xs py-4">
          <div className="flex justify-between items-center max-w-7xl mx-auto px-6">
            <div className="flex gap-4">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
            <div className="flex gap-2">
              <span>About Us</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
