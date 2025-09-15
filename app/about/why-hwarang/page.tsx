"use client";
import React, { useState, useEffect } from "react";
import {
  Shield,
  Clock,
  Users,
  Globe,
  CheckCircle,
  Award,
  TrendingUp,
  Target,
  Menu,
  X,
  Search,
  Phone,
  Mail,
  Printer
} from "lucide-react";

export default function WhyHwarangPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const t = {
    brand: "HWARANG CO., LTD.",
    nav: ["Home", "About Us", "Services", "Quote Request", "Network & Lanes", "Contact"],
    aboutSubNav: ["Why Hwarang?", "Facilities", "Company History"],
    pageTitle: "Why Hwarang?",
    pageSubtitle: "Why customers choose Hwarang for their logistics needs",
    globalTitle: "Global Network",
    globalDesc: "Safe cargo transportation worldwide through partnerships with global partners.",
    serviceTitle: "Customized Services",
    serviceDesc: "Providing optimized logistics solutions tailored to customer requirements.",
    qualityTitle: "Quality Assurance",
    qualityDesc: "Operating systematic quality management system through ISO certification.",
    strengthsTitle: "Hwarang's Strengths",
    competitiveTitle: "Competitive Pricing",
    competitiveDesc: "Offering cost-effective solutions through our own diverse container fleet.",
    timelyTitle: "On-time Delivery",
    timelyDesc: "Delivering exactly on time as promised is our commitment.",
    safetyTitle: "Safety Management",
    safetyDesc: "Systematic management system prioritizing cargo safety above all.",
    customerTitle: "Customer Satisfaction",
    customerDesc: "We do our best with the mindset that customer success is our success.",
    whyChooseTitle: "Why Choose Hwarang",
    footer: "© 2025 Hwarang Co., Ltd. All rights reserved."
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-white text-neutral-800 font-noto-sans-kr" data-testid="page-root">
      {/* Top info bar */}
      <div className="hidden md:flex items-center justify-between px-6 py-2 text-sm bg-neutral-100 text-neutral-600">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-2">
            <Mail className="w-4 h-4" /> hr@hwarangshipping.com
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="w-4 h-4" /> Mon-Fri 08:00-18:00
          </span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>TEL. +82-31-994-68/0~2</span>
          </div>
          <div className="flex items-center gap-2">
            <Printer className="w-4 h-4" />
            <span>FAX. +82-31-994-6873</span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <button 
            onClick={() => window.location.href = "/"}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img 
              src="/images/hwarang-logo-alt.jpeg" 
              alt="HWARANG CO., LTD. Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold tracking-tight text-neutral-900">{t.brand}</span>
          </button>
          <div className="hidden md:flex items-center gap-8">
            {t.nav.map((item, index) => (
              <div key={index} className="relative">
                {index === 1 ? (
                  <div className="relative group">
                    <button className="text-sm font-medium text-blue-900 transition-colors flex items-center gap-1">
                      {item}
                      <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      {t.aboutSubNav.map((subItem, subIndex) => (
                        <button
                          key={subIndex}
                          onClick={() => {
                            if (subIndex === 0) {
                              return; // Current page
                            } else if (subIndex === 1) {
                              window.location.href = `/about/facilities`;
                            } else if (subIndex === 2) {
                              window.location.href = `/about/history`;
                            }
                          }}
                          className={`block w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors ${
                            subIndex === 0 ? "text-blue-900 font-medium" : "text-gray-700"
                          }`}
                        >
                          {subItem}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      if (item === "Services") {
                        window.location.href = `/services`;
                      } else if (item === "Home") {
                        window.location.href = "/";
                      } else if (item === "Quote Request") {
                        window.location.href = `/quote`;
                      } else if (item === "Network & Lanes") {
                        window.location.href = `/network`;
                      } else if (item === "Contact") {
                        window.location.href = "/#contact";
                      }
                    }}
                    className="text-sm font-medium transition-colors hover:text-blue-900"
                  >
                    {item}
                  </button>
                )}
              </div>
            ))}
            <div className="flex items-center gap-4 pl-3 border-l">
              <Search className="w-4 h-4" />
              <div className="flex items-center gap-2">
                <button
                  className="text-sm font-medium transition-colors text-blue-900"
                >
                  EN
                </button>
                <span className="text-gray-300">|</span>
                <button
                  onClick={() => window.location.href = "/ko/about/why-hwarang"}
                  className="text-sm font-medium transition-colors hover:text-blue-900"
                >
                  한국어
                </button>
              </div>
            </div>
          </div>
          {/* mobile */}
          {mounted && (
            <button
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          )}
        </div>
        {mounted && mobileOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-6 py-3 flex flex-col gap-3">
              {t.nav.map((item, index) => (
                <div key={index}>
                  {index === 1 ? (
                    <div>
                      <div className="text-gray-900 font-medium py-1 text-blue-900">{item}</div>
                      <div className="ml-4 space-y-2">
                        {t.aboutSubNav.map((subItem, subIndex) => (
                          <button
                            key={subIndex}
                            onClick={() => {
                              if (subIndex === 0) {
                                return; // Current page
                              } else if (subIndex === 1) {
                                window.location.href = `/about/facilities`;
                              } else if (subIndex === 2) {
                                window.location.href = `/about/history`;
                              }
                            }}
                            className={`block text-left py-1 text-sm ${
                              subIndex === 0 ? "text-blue-900 font-medium" : "text-gray-600"
                            }`}
                          >
                            {subItem}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        if (item === "Services") {
                          window.location.href = `/services`;
                        } else if (item === "Home") {
                          window.location.href = "/";
                        } else if (item === "Quote Request") {
                          window.location.href = `/quote`;
                        } else if (item === "Network & Lanes") {
                          window.location.href = `/network`;
                        } else if (item === "Contact") {
                          window.location.href = "/#contact";
                        }
                      }}
                      className="text-left py-1"
                    >
                      {item}
                    </button>
                  )}
                </div>
              ))}
              <button
                onClick={() => window.location.href = "/#contact"}
                className="mt-2 px-4 py-2 rounded-xl text-white bg-red-600"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{t.pageTitle}</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {t.pageSubtitle}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              {t.whyChooseTitle}
            </h2>
            <div className="w-16 h-0.5 bg-blue-900 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="text-center p-6 bg-neutral-50 rounded-xl">
              <Globe className="w-12 h-12 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                {t.globalTitle}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {t.globalDesc}
              </p>
            </div>
            
            <div className="text-center p-6 bg-neutral-50 rounded-xl">
              <Target className="w-12 h-12 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                {t.serviceTitle}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {t.serviceDesc}
              </p>
            </div>
            
            <div className="text-center p-6 bg-neutral-50 rounded-xl">
              <Shield className="w-12 h-12 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                {t.qualityTitle}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {t.qualityDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              {t.strengthsTitle}
            </h2>
            <div className="w-16 h-0.5 bg-blue-900 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-8 h-8 text-blue-900 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {t.competitiveTitle}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {t.competitiveDesc}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 text-blue-900 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {t.timelyTitle}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {t.timelyDesc}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-blue-900 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {t.safetyTitle}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {t.safetyDesc}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Users className="w-8 h-8 text-blue-900 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {t.customerTitle}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {t.customerDesc}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <img 
                src="/images/container-ship-aerial.jpg" 
                alt="Container" 
                className="rounded-lg shadow-lg max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Partner with Hwarang
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            With over 20 years of experience and expertise, we perfectly solve your logistics requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = "/#contact"}
              className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold text-base"
            >
              Get in Touch
            </button>
            <button 
              onClick={() => window.location.href = "/quote"}
              className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-neutral-900 transition-colors font-semibold text-base"
            >
              Request Quote
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <img 
                  src="/images/hwarang-logo-alt.jpeg" 
                  alt="HWARANG CO., LTD. Logo" 
                  className="w-8 h-8 object-contain"
                />
                <span className="text-lg font-bold">{t.brand}</span>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Professional logistics and forwarding services supporting your global business operations.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <div className="space-y-2 text-sm text-neutral-400">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+82-31-994-68/0~2</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Mail className="w-4 h-4" />
                  <span>hr@hwarangshipping.com</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Printer className="w-4 h-4" />
                  <span>+82-31-994-6873</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Office Hours</h4>
              <div className="space-y-2 text-sm text-neutral-400">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Mon-Fri: 08:00-18:00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-neutral-800 mt-8 pt-6 text-center">
            <p className="text-neutral-500 text-sm">{t.footer}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}