"use client";
import React, { useState, useEffect } from "react";
import {
  Ship,
  Plane,
  Train,
  Package,
  Globe,
  Shield,
  Clock,
  MapPin,
  Truck,
  FileText,
  Users,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Search,
  Phone,
  Mail,
  Printer,
  Upload,
  Download
} from "lucide-react";
import { sendQuoteEmail, validateQuoteForm, initEmailJS, type QuoteFormData } from "../../lib/emailService";

export default function QuotePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    companyName: "",
    contact: "",
    division: "Export",
    shipmentCondition: "Air",
    transportCondition: "EXW",
    originPort: "",
    destinationPort: "",
    originCountry: "",
    destinationCountry: "",
    cbm: "",
    productName: "",
    hsCode: "",
    volume: "",
    cargoType: "Export Customs",
    title: "",
    content: "",
    attachment: null as File | null,
    contactEmail: ""
  });

  const t = {
    brand: "ITL CO., LTD.",
    nav: ["Home", "About Us", "Services", "Quote Request", "Network & Lanes", "Contact"],
    aboutSubNav: ["Why ITL?", "Facilities", "Company History"],
    pageTitle: "Quote Request",
    pageSubtitle: "Get your customized shipping quote",
    formTitle: "Quote Request Form",
    companyName: "Contact Person Name or Company",
    contact: "Contact Information",
    division: "Division",
    export: "Export",
    import: "Import",
    shipmentCondition: "Shipping Condition",
    air: "Air",
    ocean: "Ocean LCL (Less Container Load)",
    oceanFCL: "Ocean FCL (Full Container Load)",
    bulk: "Ocean BULK (Bulk Cargo)",
    transportCondition: "Trade Terms",
    originPort: "Origin Port",
    destinationPort: "Destination Port",
    originCountry: "Origin Country",
    destinationCountry: "Destination Country",
    cbm: "Total CBM",
    productName: "Product Name",
    hsCode: "HS CODE (Customs Code)",
    volume: "Cargo Value",
    volumeNote: "Please specify currency if not USD",
    cargoType: "Service Type",
    exportSurvey: "Export/Import Customs",
    domesticTransport: "International Transport",
    nationalTransport: "Domestic Transport",
    storage: "Storage",
    insurance: "Insurance",
    title: "Subject",
    content: "Content",
    attachment: "Attachment",
    contactEmail: "Contact Email",
    submitButton: "Submit Quote Request",
    requiredField: "★ Please fill in required fields ★",
    footer: "© 2025 ITL Co., Ltd. All rights reserved."
  };

  useEffect(() => {
    setMounted(true);
    // Initialize EmailJS
    initEmailJS();
  }, []);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Convert form data for validation and submission
    const submissionData: QuoteFormData = {
      ...formData,
      attachment: formData.attachment?.name || undefined
    };

    // Validate form
    const errors = validateQuoteForm(submissionData);
    if (errors.length > 0) {
      alert(errors.join('\n'));
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const success = await sendQuoteEmail(submissionData);
      if (success) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          companyName: "",
          contact: "",
          division: "Export",
          shipmentCondition: "Air",
          transportCondition: "EXW",
          originPort: "",
          destinationPort: "",
          originCountry: "",
          destinationCountry: "",
          cbm: "",
          productName: "",
          hsCode: "",
          volume: "",
          cargoType: "Export Customs",
          title: "",
          content: "",
          attachment: null,
          contactEmail: ""
        });
        setTimeout(() => setSubmitStatus('idle'), 5000); // Reset status after 5 seconds
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Quote submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        attachment: file
      }));
    }
  };

  if (!mounted) return null;

  const navigateToHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="bg-white text-neutral-800 font-noto-sans-kr" data-testid="page-root">
      {/* Top info bar */}
      <div className="hidden md:flex items-center justify-between px-6 py-2 text-sm bg-neutral-100 text-neutral-600">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-2">
            <Mail className="w-4 h-4" /> itl@itlshipping.com
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="w-4 h-4" /> Mon-Fri 08:00-18:00
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
            {t.nav.map((item: string, index: number) => (
              <div key={index} className="relative">
                {index === 1 ? (
                  <div className="relative group">
                    <button className="text-sm font-medium hover:text-blue-900 transition-colors flex items-center gap-1">
                      {item}
                      <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      {t.aboutSubNav.map((subItem: string, subIdx: number) => (
                        <button
                          key={subIdx}
                          onClick={() => {
                            if (subIdx === 0) {
                              window.location.href = `/about/why-hwarang`;
                            } else if (subIdx === 1) {
                              window.location.href = `/about/facilities`;
                            } else if (subIdx === 2) {
                              window.location.href = `/about/history`;
                            }
                          }}
                          className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
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
                        return; // Current page - Quote
                      } else if (item === "Network & Lanes") {
                        window.location.href = `/network`;
                      } else if (item === "Contact") {
                        window.location.href = "/#contact";
                      }
                    }}
                    className={`text-sm font-medium transition-colors ${
                      item === "Quote Request" ? "text-blue-900" : "hover:text-blue-900"
                    }`}
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
                  onClick={() => window.location.href = "/ko/quote"}
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
              {t.nav.map((item: string, idx: number) => (
                <div key={idx}>
                  {idx === 1 ? (
                    <div>
                      <div className="text-gray-900 font-medium py-1">{item}</div>
                      <div className="ml-4 space-y-2">
                        {t.aboutSubNav.map((subItem: string, subIdx: number) => (
                          <button
                            key={subIdx}
                            onClick={() => {
                              if (subIdx === 0) {
                                window.location.href = `/about/why-hwarang`;
                              } else if (subIdx === 1) {
                                window.location.href = `/about/facilities`;
                              } else if (subIdx === 2) {
                                window.location.href = `/about/history`;
                              }
                            }}
                            className="block text-left py-1 text-sm text-gray-600"
                          >
                            {subItem}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        console.log('Mobile menu clicked:', item);
                        if (item === "Services") {
                          window.location.href = `/services`;
                        } else if (item === "Home") {
                          window.location.href = "/";
                        } else if (item === "Quote Request") {
                          return; // Current page - Quote
                        } else if (item === "Network & Lanes") {
                          window.location.href = `/network`;
                        } else if (item === "Contact") {
                          window.location.href = "/#contact";
                        }
                      }}
                      className={`text-left py-1 ${
                        item === "Quote Request" ? "text-blue-900 font-medium" : ""
                      }`}
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
              <div className="flex items-center gap-2 pt-3 border-t mt-3">
                <button
                  className="text-sm font-medium transition-colors text-blue-900"
                >
                  EN
                </button>
                <span className="text-gray-300">|</span>
                <button
                  onClick={() => window.location.href = "/ko/quote"}
                  className="text-sm font-medium transition-colors hover:text-blue-900"
                >
                  한국어
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white py-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/warehouse-logistics.jpg)'
          }}
        />
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white drop-shadow-lg">{t.pageTitle}</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            {t.pageSubtitle}
          </p>
        </div>
      </div>

      {/* Quote Form */}
      <div className="bg-neutral-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-neutral-200">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
              {t.formTitle}
            </h2>
            
            <div className="text-center mb-8">
              <p className="text-red-600 font-medium text-lg">{t.requiredField}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Company Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.companyName} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => handleInputChange("companyName", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={t.requiredField}
                />
              </div>

              {/* Contact Person */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.contact}
                  onChange={(e) => handleInputChange("contact", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={t.requiredField}
                />
              </div>

              {/* Division */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.division} <span className="text-red-500">*</span>
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="division"
                      value="Export"
                      checked={formData.division === "Export"}
                      onChange={(e) => handleInputChange("division", e.target.value)}
                      className="mr-2"
                    />
                    {t.export}
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="division"
                      value="Import"
                      checked={formData.division === "Import"}
                      onChange={(e) => handleInputChange("division", e.target.value)}
                      className="mr-2"
                    />
                    {t.import}
                  </label>
                </div>
              </div>

              {/* Shipment Condition */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.shipmentCondition}
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="shipmentCondition"
                      value="Air"
                      checked={formData.shipmentCondition === "Air"}
                      onChange={(e) => handleInputChange("shipmentCondition", e.target.value)}
                      className="mr-2"
                    />
                    {t.air}
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="shipmentCondition"
                      value="Ocean LCL"
                      checked={formData.shipmentCondition === "Ocean LCL"}
                      onChange={(e) => handleInputChange("shipmentCondition", e.target.value)}
                      className="mr-2"
                    />
                    {t.ocean}
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="shipmentCondition"
                      value="Ocean FCL"
                      checked={formData.shipmentCondition === "Ocean FCL"}
                      onChange={(e) => handleInputChange("shipmentCondition", e.target.value)}
                      className="mr-2"
                    />
                    {t.oceanFCL}
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="shipmentCondition"
                      value="Ocean BULK"
                      checked={formData.shipmentCondition === "Ocean BULK"}
                      onChange={(e) => handleInputChange("shipmentCondition", e.target.value)}
                      className="mr-2"
                    />
                    {t.bulk}
                  </label>
                </div>
              </div>

              {/* Transport Terms */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.transportCondition}
                </label>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                  {["EXW", "FCA", "FAS", "FOB", "CFR", "CIF", "CIP", "DAP", "DDP"].map((term) => (
                    <label key={term} className="flex items-center">
                      <input
                        type="radio"
                        name="transportCondition"
                        value={term}
                        checked={formData.transportCondition === term}
                        onChange={(e) => handleInputChange("transportCondition", e.target.value)}
                        className="mr-2"
                      />
                      {term}
                    </label>
                  ))}
                </div>
              </div>

              {/* Origin Port */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.originPort}
                </label>
                <input
                  type="text"
                  value={formData.originPort}
                  onChange={(e) => handleInputChange("originPort", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Destination Port */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.destinationPort}
                </label>
                <input
                  type="text"
                  value={formData.destinationPort}
                  onChange={(e) => handleInputChange("destinationPort", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Origin Country */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.originCountry} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.originCountry}
                  onChange={(e) => handleInputChange("originCountry", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={t.requiredField}
                />
              </div>

              {/* Destination Country */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.destinationCountry} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.destinationCountry}
                  onChange={(e) => handleInputChange("destinationCountry", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={t.requiredField}
                />
              </div>

              {/* Total CBM */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.cbm}
                </label>
                <input
                  type="text"
                  value={formData.cbm}
                  onChange={(e) => handleInputChange("cbm", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Product Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.productName}
                </label>
                <input
                  type="text"
                  value={formData.productName}
                  onChange={(e) => handleInputChange("productName", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* HS Code */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.hsCode}
                </label>
                <input
                  type="text"
                  value={formData.hsCode}
                  onChange={(e) => handleInputChange("hsCode", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Volume */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.volume}
                </label>
                <input
                  type="text"
                  value={formData.volume}
                  onChange={(e) => handleInputChange("volume", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={t.volumeNote}
                />
              </div>

              {/* Cargo Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.cargoType}
                </label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {[t.exportSurvey, t.domesticTransport, t.nationalTransport, t.storage, t.insurance].map((type, index) => (
                    <label key={index} className="flex items-center">
                      <input
                        type="radio"
                        name="cargoType"
                        value={type}
                        checked={formData.cargoType === type}
                        onChange={(e) => handleInputChange("cargoType", e.target.value)}
                        className="mr-2"
                      />
                      {type}
                    </label>
                  ))}
                </div>
              </div>

              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.title} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={t.requiredField}
                />
              </div>

              {/* Content */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.content}
                </label>
                <textarea
                  value={formData.content}
                  onChange={(e) => handleInputChange("content", e.target.value)}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* File Attachment */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.attachment}
                </label>
                <input
                  type="file"
                  onChange={handleFileUpload}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {formData.attachment && (
                  <p className="mt-2 text-sm text-gray-600">
                    Selected file: {(formData.attachment as File)?.name}
                  </p>
                )}
              </div>

              {/* Contact Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contactEmail}
                </label>
                <input
                  type="email"
                  value={formData.contactEmail}
                  onChange={(e) => handleInputChange("contactEmail", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Quote request sent successfully! We will contact you soon.
                  </div>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  Failed to send quote request. Please try again or contact us directly.
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold flex items-center justify-center space-x-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  <FileText size={20} />
                  <span>
                    {isSubmitting ? "Sending..." : t.submitButton}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
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