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
import { sendQuoteEmail, validateQuoteForm, initEmailJS, type QuoteFormData } from "../../../lib/emailService";

export default function QuotePageKo() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    companyName: "",
    contact: "",
    division: "수출",
    shipmentCondition: "항공",
    transportCondition: "EXW",
    originPort: "",
    destinationPort: "",
    originCountry: "",
    destinationCountry: "",
    cbm: "",
    productName: "",
    hsCode: "",
    volume: "",
    cargoType: "수출 수입 통관",
    title: "",
    content: "",
    attachment: null as File | null,
    contactEmail: ""
  });

  const t = {
    brand: "ITL CO., LTD.",
    nav: ["홈", "회사소개", "서비스", "견적요청", "네트워크", "연락처"],
    aboutSubNav: ["왜 아이티엘인가?", "회사설비", "회사연혁"],
    pageTitle: "견적요청",
    pageSubtitle: "맞춤형 배송 견적을 받아보세요",
    formTitle: "견적요청서",
    companyName: "담당자 성명 or 상호",
    contact: "담당자 연락처",
    division: "구분",
    export: "수출",
    import: "수입",
    shipmentCondition: "선적조건",
    air: "항공",
    ocean: "해운 LCL(소량화물)",
    oceanFCL: "해운 FCL(컨테이너)",
    bulk: "해운 BULK(벌크 화물)",
    transportCondition: "무역조건",
    originPort: "선적지 포트",
    destinationPort: "도착지 포트",
    originCountry: "선적지 국가",
    destinationCountry: "도착지 국가",
    cbm: "총 CBM",
    productName: "제품명",
    hsCode: "HS CODE(세무번호)",
    volume: "물품가격",
    volumeNote: "원화시는 국가의 금액 작성",
    cargoType: "서비스 유형",
    exportSurvey: "수출입 통관",
    domesticTransport: "국제 운송",
    nationalTransport: "국내 운송",
    storage: "보관",
    insurance: "보험",
    title: "제목",
    content: "내용",
    attachment: "첨부파일",
    contactEmail: "담당자 이메일",
    submitButton: "견적요청 제출",
    requiredField: "★필수 항목 작성 부탁드립니다★",
    footer: "© 2025 주식회사 아이티엘. All rights reserved."
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
          division: "수출",
          shipmentCondition: "항공",
          transportCondition: "EXW",
          originPort: "",
          destinationPort: "",
          originCountry: "",
          destinationCountry: "",
          cbm: "",
          productName: "",
          hsCode: "",
          volume: "",
          cargoType: "수출통관",
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
    window.location.href = "/ko";
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
            <Clock className="w-4 h-4" /> 월-금 08:00-18:00
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
            onClick={() => window.location.href = "/ko"}
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
                              window.location.href = `/ko/about/why-hwarang`;
                            } else if (subIdx === 1) {
                              window.location.href = `/ko/about/facilities`;
                            } else if (subIdx === 2) {
                              window.location.href = `/ko/about/history`;
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
                      if (item === "서비스") {
                        window.location.href = `/ko/services`;
                      } else if (item === "홈") {
                        window.location.href = "/ko";
                      } else if (item === "견적요청") {
                        return; // Current page - Quote
                      } else if (item === "네트워크") {
                        window.location.href = `/ko/network`;
                      } else if (item === "연락처") {
                        window.location.href = "/ko#contact";
                      }
                    }}
                    className={`text-sm font-medium transition-colors ${
                      item === "견적요청" ? "text-blue-900" : "hover:text-blue-900"
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
                  onClick={() => window.location.href = "/quote"}
                  className="text-sm font-medium transition-colors hover:text-blue-900"
                >
                  EN
                </button>
                <span className="text-gray-300">|</span>
                <button
                  className="text-sm font-medium transition-colors text-blue-900"
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
                                window.location.href = `/ko/about/why-hwarang`;
                              } else if (subIdx === 1) {
                                window.location.href = `/ko/about/facilities`;
                              } else if (subIdx === 2) {
                                window.location.href = `/ko/about/history`;
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
                        if (item === "서비스") {
                          window.location.href = `/ko/services`;
                        } else if (item === "홈") {
                          window.location.href = "/ko";
                        } else if (item === "견적요청") {
                          return; // Current page - Quote
                        } else if (item === "네트워크") {
                          window.location.href = `/ko/network`;
                        } else if (item === "연락처") {
                          window.location.href = "/ko#contact";
                        }
                      }}
                      className={`text-left py-1 ${
                        item === "견적요청" ? "text-blue-900 font-medium" : ""
                      }`}
                    >
                      {item}
                    </button>
                  )}
                </div>
              ))}
              <button
                onClick={() => window.location.href = "/ko#contact"}
                className="mt-2 px-4 py-2 rounded-xl text-white bg-red-600"
              >
                연락처
              </button>
              <div className="flex items-center gap-2 pt-3 border-t mt-3">
                <button
                  onClick={() => window.location.href = "/quote"}
                  className="text-sm font-medium transition-colors hover:text-blue-900"
                >
                  EN
                </button>
                <span className="text-gray-300">|</span>
                <button
                  className="text-sm font-medium transition-colors text-blue-900"
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
                      value="수출"
                      checked={formData.division === "수출"}
                      onChange={(e) => handleInputChange("division", e.target.value)}
                      className="mr-2"
                    />
                    {t.export}
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="division"
                      value="수입"
                      checked={formData.division === "수입"}
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
                      value="항공"
                      checked={formData.shipmentCondition === "항공"}
                      onChange={(e) => handleInputChange("shipmentCondition", e.target.value)}
                      className="mr-2"
                    />
                    {t.air}
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="shipmentCondition"
                      value="해운 LCL"
                      checked={formData.shipmentCondition === "해운 LCL"}
                      onChange={(e) => handleInputChange("shipmentCondition", e.target.value)}
                      className="mr-2"
                    />
                    {t.ocean}
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="shipmentCondition"
                      value="해운 FCL"
                      checked={formData.shipmentCondition === "해운 FCL"}
                      onChange={(e) => handleInputChange("shipmentCondition", e.target.value)}
                      className="mr-2"
                    />
                    {t.oceanFCL}
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="shipmentCondition"
                      value="해운 BULK"
                      checked={formData.shipmentCondition === "해운 BULK"}
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
                    선택된 파일: {(formData.attachment as File)?.name}
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
                    견적요청이 성공적으로 전송되었습니다! 곧 연락드리겠습니다.
                  </div>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  견적요청 전송에 실패했습니다. 다시 시도하거나 직접 연락해주세요.
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
                    {isSubmitting ? "전송 중..." : t.submitButton}
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
                전문적인 물류 및 포워딩 서비스를 통해 고객의 글로벌 비즈니스를 지원합니다.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">연락처</h4>
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
              <h4 className="font-semibold mb-4 text-white">운영시간</h4>
              <div className="space-y-2 text-sm text-neutral-400">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Clock className="w-4 h-4" />
                  <span>월-금: 08:00-18:00</span>
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
