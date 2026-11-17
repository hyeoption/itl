"use client";
import CompanyHistory from "../../company-history";
import PageHero from "../../page-hero";
import React, { useState } from "react";
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

export default function WhyITLPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const t = {
    brand: "ITL CO., LTD.",
    nav: ["Home", "About Us", "Services", "Quote Request", "Network & Lanes", "Contact"],
    aboutSubNav: ["ITL CO., LTD.", "Facilities", "Company History"],
    pageTitle: "ITL CO., LTD.",
    pageSubtitle: "Professional logistics and forwarding services for global business",
    globalTitle: "Global Network",
    globalDesc: "Safe cargo transportation worldwide through partnerships with global partners.",
    serviceTitle: "Customized Services",
    serviceDesc: "Providing optimized logistics solutions tailored to customer requirements.",
    qualityTitle: "Quality Assurance",
    qualityDesc: "Operating systematic quality management system through ISO certification.",
    competitiveTitle: "Competitive Pricing",
    competitiveDesc: "Offering cost-effective solutions through our own diverse container fleet.",
    timelyTitle: "On-time Delivery",
    timelyDesc: "Delivering exactly on time as promised is our commitment.",
    safetyTitle: "Safety Management",
    safetyDesc: "Systematic management system prioritizing cargo safety above all.",
    customerTitle: "Customer Satisfaction",
    customerDesc: "We do our best with the mindset that customer success is our success.",
    footer: "© 2026 ITL Co., Ltd. All rights reserved."
  };

  return (
    <div className="bg-white text-neutral-800 font-sans">
      {/* Top info bar */}
      <div className="hidden md:flex items-center justify-between px-6 py-2 text-sm bg-neutral-100 text-neutral-600">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-2">
            <Mail className="w-4 h-4" /> itl@itlshipping.com
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="w-4 h-4" /> Mon-Fri 09:00-18:00
          </span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>TEL. +82-31-911-5612~4</span>
          </div>
          <div className="flex items-center gap-2">
            <Printer className="w-4 h-4" />
            <span>FAX. +82-31-902-8130</span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <button 
            onClick={() => window.location.href = "/"}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img 
              src="/images/logo_itl.jpg?v=2" 
              alt="ITL CO., LTD. Logo" 
              className="h-11 object-contain"
              onError={(e) => {
                console.error('Logo failed to load');
              }}
            />
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
                              setMobileOpen(false);
                              window.location.href = `/about/why-hwarang#history`;
                            }
                          }}
                          className={`block w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors ${
                            subIndex === 0 ? "text-blue-900 font-medium bg-blue-50" : "text-gray-700"
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
                      } else {
                        window.location.href = "/";
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
                                setMobileOpen(false);
                                window.location.href = `/about/why-hwarang#history`;
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
                        } else {
                          window.location.href = "/";
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
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>

      <main className="itl-content" lang="en">
        <PageHero title={t.pageTitle} description={t.pageSubtitle} />

        {/* Strengths Section */}
        <section className="itl-section">
          <div className="itl-wrap">
            <div className="grid lg:grid-cols-2 itl-grid-gap items-center mb-20">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-8 h-8 text-blue-900 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="mb-2">
                      {t.competitiveTitle}
                    </h3>
                    <p className="itl-muted">
                      {t.competitiveDesc}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-8 h-8 text-blue-900 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="mb-2">
                      {t.timelyTitle}
                    </h3>
                    <p className="itl-muted">
                      {t.timelyDesc}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-blue-900 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="mb-2">
                      {t.safetyTitle}
                    </h3>
                    <p className="itl-muted">
                      {t.safetyDesc}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Users className="w-8 h-8 text-blue-900 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="mb-2">
                      {t.customerTitle}
                    </h3>
                    <p className="itl-muted">
                      {t.customerDesc}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <img
                  src="/images/container-ship-aerial.jpg"
                  alt="Container Ship"
                  className="itl-media max-w-lg w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Service Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 itl-grid-gap">
              <div className="itl-card">
                <Globe className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <h3 className="mb-3">
                  {t.globalTitle}
                </h3>
                <p className="itl-muted">
                  {t.globalDesc}
                </p>
              </div>

              <div className="itl-card">
                <Target className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <h3 className="mb-3">
                  {t.serviceTitle}
                </h3>
                <p className="itl-muted">
                  {t.serviceDesc}
                </p>
              </div>

              <div className="itl-card">
                <Shield className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <h3 className="mb-3">
                  {t.qualityTitle}
                </h3>
                <p className="itl-muted">
                  {t.qualityDesc}
                </p>
              </div>
            </div>
          </div>
        </section>

        <CompanyHistory locale="en" />

        {/* CTA Section */}
        <section className="itl-band">
          <div className="itl-wrap text-center">
            <h2 className="mb-4">
              Partner with ITL
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              We arrange international freight around your cargo, route and delivery schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = "/#contact"}
                className="itl-button"
              >
                Contact Us
              </button>
              <button
                onClick={() => window.location.href = "/quote"}
                className="itl-button itl-button-outline"
              >
                Request Quote
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="itl-footer itl-content" lang="en">
        <div className="itl-wrap">
          <div className="grid md:grid-cols-3 itl-grid-gap text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <span className="text-lg font-bold">{t.brand}</span>
              </div>
              <p className="text-neutral-400 leading-relaxed">
                Supporting your global business through professional logistics and forwarding services.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-white">Contact</h4>
              <div className="space-y-2 text-sm text-neutral-400">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+82-31-911-5612~4</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Mail className="w-4 h-4" />
                  <span>itl@itlshipping.com</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Printer className="w-4 h-4" />
                  <span>+82-31-902-8130</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-white">Business Hours</h4>
              <div className="space-y-2 text-sm text-neutral-400">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Mon-Fri: 09:00-18:00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-neutral-800 mt-8 pt-6 text-center">
            <p className="text-neutral-500">{t.footer}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
