"use client";
import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Search,
  Phone,
  Mail,
  Printer,
  Clock
} from "lucide-react";

export default function ServicesPageKo() {
  const [lang, setLang] = useState("ko");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const translations = {
    en: {
      brand: "HWARANG CO., LTD.",
      nav: ["Home", "About Us", "Services", "Quote Request", "Network & Lanes", "Contact"],
      aboutSubNav: ["Why Hwarang?", "Facilities", "Company History"],
      heroTitle: "Professional Logistics Services",
      heroSubtitle: "Comprehensive forwarding solutions tailored to your global transportation needs",
      quickNavTitle: "Quick Navigation",
      oceanFreight: "Ocean Freight",
      airFreight: "Air Freight",
      projectPlant: "Project / Plant",
      railwayService: "Railway Service",
      oceanFreightDesc: "Complete ocean freight solutions for global shipping",
      airFreightDesc: "Fast and reliable air cargo services worldwide",
      projectPlantDesc: "Specialized project cargo and plant equipment handling",
      railwayServiceDesc: "Eurasia railway transportation services",
      servicesTitle: "Our Services",
      ctaTitle: "Ready to Ship?",
      ctaSubtitle: "Get in touch with our logistics experts today",
      ctaButton: "Get in Touch",
      contactButton: "Contact Us",
      additionalTitle: "Additional Services",
      customsTitle: "Customs Clearance",
      customsDesc: "Professional import/export customs services",
      warehouseTitle: "Warehouse Storage",
      warehouseDesc: "Safe and efficient cargo storage solutions",
      insuranceTitle: "Cargo Insurance",
      insuranceDesc: "Comprehensive cargo transportation coverage",
      consultingTitle: "Logistics Consulting",
      consultingDesc: "Optimized logistics solutions and advice",
      footer: "© 2025 Hwarang Co., Ltd. All rights reserved."
    },
    ko: {
      brand: "HWARANG CO., LTD.",
      nav: ["홈", "회사소개", "서비스", "견적요청", "네트워크", "연락처"],
      aboutSubNav: ["왜 화랑인가?", "회사설비", "회사연혁"],
      heroTitle: "전문 물류 서비스",
      heroSubtitle: "글로벌 운송 요구에 맞춘 포괄적인 포워딩 솔루션",
      quickNavTitle: "빠른 탐색",
      oceanFreight: "해상 운송",
      airFreight: "항공 운송",
      projectPlant: "프로젝트 / 플랜트",
      railwayService: "철도 서비스",
      oceanFreightDesc: "전 세계 해상 운송을 위한 완전한 솔루션",
      airFreightDesc: "전 세계 빠르고 신뢰할 수 있는 항공 화물 서비스",
      projectPlantDesc: "전문 프로젝트 화물 및 플랜트 장비 처리",
      railwayServiceDesc: "유라시아 철도 운송 서비스",
      servicesTitle: "Our Services",
      ctaTitle: "배송 준비 완료?",
      ctaSubtitle: "오늘 우리의 물류 전문가에게 연락하세요",
      ctaButton: "연락하기",
      contactButton: "문의하기",
      additionalTitle: "추가 서비스",
      customsTitle: "통관 서비스",
      customsDesc: "전문적인 수출입 통관 업무",
      warehouseTitle: "창고 보관",
      warehouseDesc: "안전하고 효율적인 화물 보관",
      insuranceTitle: "화물 보험",
      insuranceDesc: "화물 운송 위험 보장",
      consultingTitle: "물류 컨설팅",
      consultingDesc: "최적화된 물류 솔루션 제안",
      footer: "© 2025 주식회사 화랑. All rights reserved."
    }
  };

  const t = translations[lang as keyof typeof translations];

  const services = [
    {
      id: 'ocean',
      title: t.oceanFreight,
      description: t.oceanFreightDesc,
      subtitle: '해상 운송'
    },
    {
      id: 'air',
      title: t.airFreight,
      description: t.airFreightDesc,
      subtitle: '항공 운송'
    },
    {
      id: 'project',
      title: t.projectPlant,
      description: t.projectPlantDesc,
      subtitle: '프로젝트 화물'
    },
    {
      id: 'railway',
      title: t.railwayService,
      description: t.railwayServiceDesc,
      subtitle: '철도 운송'
    }
  ];

  const additionalServices = [
    {
      title: t.customsTitle,
      description: t.customsDesc
    },
    {
      title: t.warehouseTitle,
      description: t.warehouseDesc
    },
    {
      title: t.insuranceTitle,
      description: t.insuranceDesc
    },
    {
      title: t.consultingTitle,
      description: t.consultingDesc
    }
  ];

  useEffect(() => {
    setMounted(true);
    // URL에서 lang 파라미터 확인
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam === 'ko' || langParam === 'en') {
      setLang(langParam);
    }
  }, []);

  const navigateToHome = () => {
    window.location.href = `/ko`;
  };

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
            <Clock className="w-4 h-4" /> {lang === "ko" ? "월-금 08:00-18:00" : "Mon-Fri 08:00-18:00"}
          </span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>TEL. +82-31-994-687/0~2</span>
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
            onClick={() => window.location.href = "/ko"}
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
                    <button className="text-sm font-medium hover:text-blue-900 transition-colors flex items-center gap-1">
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
                              window.location.href = `/ko/about/why-hwarang`;
                            } else if (subIndex === 1) {
                              window.location.href = `/ko/about/facilities`;
                            } else if (subIndex === 2) {
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
                      if (index === 2) return; // Current page - Services
                      if (item === "회사소개") {
                        window.location.href = `/ko/about/why-hwarang`;
                      } else if (item === "홈") {
                        window.location.href = "/ko";
                      } else if (item === "견적요청") {
                        window.location.href = `/ko/quote`;
                      } else if (item === "네트워크") {
                        window.location.href = `/ko/network`;
                      } else if (item === "연락처") {
                        window.location.href = "/ko#contact";
                      } else {
                        window.location.href = "/ko";
                      }
                    }}
                    className={`text-sm font-medium transition-colors ${
                      index === 2 ? "text-blue-900" : "hover:text-blue-900"
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
                  onClick={() => window.location.href = "/services"}
                  className={`text-sm font-medium transition-colors ${
                    lang === "en" ? "text-blue-900" : "hover:text-blue-900"
                  }`}
                >
                  EN
                </button>
                <span className="text-gray-300">|</span>
                <button
                  className={`text-sm font-medium transition-colors ${
                    lang === "ko" ? "text-blue-900" : "hover:text-blue-900"
                  }`}
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
                <button
                  key={index}
                  onClick={() => {
                    if (index === 2) return; // Current page - Services
                    if (item === "회사소개") {
                      window.location.href = `/ko/about/why-hwarang`;
                    } else if (item === "홈") {
                      window.location.href = "/ko";
                    } else if (item === "견적요청") {
                      window.location.href = `/ko/quote`;
                    } else if (item === "네트워크") {
                        window.location.href = `/ko/network`;
                      } else if (item === "연락처") {
                        window.location.href = "/ko#contact";
                      } else {
                        window.location.href = "/ko";
                      }
                  }}
                  className={`text-left py-1 ${
                    index === 2 ? "text-blue-900 font-medium" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => window.location.href = "/ko#contact"}
                className="mt-2 px-4 py-2 rounded-xl text-white bg-red-600"
              >
                연락처
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{t.heroTitle}</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {t.heroSubtitle}
          </p>
        </div>
      </div>

      {/* Quick Navigation */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service) => (
              <button
                key={service.id}
                className="px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-sm font-medium text-neutral-700 hover:text-blue-900"
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              {t.servicesTitle}
            </h2>
            <div className="w-16 h-0.5 bg-blue-900 mx-auto mb-4"></div>
            <p className="text-lg text-neutral-600">
              {lang === "ko" ? "전문적인 물류 서비스를 제공합니다" : "Professional logistics services"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={service.id} className="bg-gradient-to-br from-white to-neutral-50 border border-neutral-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-neutral-900 text-center mb-2">
                  {service.title}
                </h3>
                <div className="text-center mb-4">
                  <span className="text-xl font-bold text-blue-900">{service.subtitle || "전문 서비스"}</span>
                </div>
                <p className="text-sm text-neutral-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              {t.additionalTitle}
            </h2>
            <div className="w-16 h-0.5 bg-blue-900 mx-auto mb-4"></div>
            <p className="text-lg text-neutral-600">
              {lang === "ko" ? "추가 전문 서비스" : "Additional professional services"}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-neutral-50 border border-neutral-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-neutral-900 text-center mb-2">
                  {service.title}
                </h3>
                <div className="text-center mb-4">
                  <span className="text-xl font-bold text-blue-900">전문 서비스</span>
                </div>
                <p className="text-sm text-neutral-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.ctaTitle}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = "/ko#contact"}
              className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold text-base"
            >
              {t.ctaButton}
            </button>
            <button 
              onClick={() => window.location.href = "/ko/quote"}
              className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-neutral-900 transition-colors font-semibold text-base"
            >
              {lang === "ko" ? "견적 요청" : "Get Quote"}
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
                {lang === "ko" 
                  ? "전문적인 물류 및 포워딩 서비스를 통해 고객의 글로벌 비즈니스를 지원합니다."
                  : "Professional logistics and forwarding services supporting your global business operations."
                }
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">{lang === "ko" ? "연락처" : "Contact"}</h4>
              <div className="space-y-2 text-sm text-neutral-400">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+82-31-994-687/0~2</span>
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
              <h4 className="font-semibold mb-4 text-white">
                {lang === "ko" ? "운영시간" : "Office Hours"}
              </h4>
              <div className="space-y-2 text-sm text-neutral-400">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{lang === "ko" ? "월-금: 08:00-18:00" : "Mon-Fri: 08:00-18:00"}</span>
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
