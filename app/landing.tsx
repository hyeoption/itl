"use client";
import React, { useState, useEffect } from "react";
import {
  Globe,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  CheckCircle,
  Clock,
  Search,
  Printer
} from "lucide-react";

export default function HwarangHomepage() {
  const [lang, setLang] = useState("en");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [currentSlide, setCurrentSlide] = useState(0);

    const translations = {
    en: {
      brand: "HWARANG CO., LTD.",
      nav: ["Home", "About Us", "Services", "Quote Request", "Network & Lanes", "Contact"],
      aboutSubNav: ["Why Hwarang?", "Facilities", "Company History"],
      heroTitle: "SAFE LOGISTICS WORLDWIDE",
      heroSubtitle:
        "Professional forwarding services with reliable partners and on‑time delivery.",
      ctaQuote: "Get in Touch",
      ctaContact: "Contact Us",
      aboutTitle: "About Us",
      aboutSubtitle: "Hwarang Co., Ltd. is a leading logistics and forwarding company.",
      about:
        "We own our own containers in Busan to reduce costs.",
      servicesTitle: "Core Services",
      coverageTitle: "Network & Lanes",
      coverageDesc:
        "Providing strategic delivery solutions and lanes specifically designed for your needs.",
      stats: [
        { k: "20+", v: "YEARS OF EXPERIENCE" },
        { k: "10,000+", v: "OWNED CONTAINERS" },
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
    },
    ko: {
      brand: "HWARANG CO., LTD.",
      nav: ["홈", "회사소개", "서비스", "견적요청", "네트워크", "연락처"],
      aboutSubNav: ["왜 화랑인가?", "회사설비", "회사연혁"],
      heroTitle: "SAFE LOGISTICS WORLDWIDE",
      heroSubtitle:
        "신뢰할 수 있는 파트너와 정시 배송으로 전문적인 포워딩 서비스를 제공합니다.",
      ctaQuote: "문의하기",
      ctaContact: "연락처",
                      aboutTitle: "About Us",
      aboutSubtitle: "주식회사 화랑은 선도적인 물류 및 포워딩 회사입니다.",
        about:
        "우리는 부산에 자체 컨테이너를 보유하여 비용을 절감하고 있습니다.",
      servicesTitle: "Our Services",
      coverageTitle: "Network & Lanes",
      coverageDesc:
        "고객의 요구에 맞게 특별히 설계된 전략적 배송 솔루션과 항로를 제공합니다.",
      stats: [
        { k: "20+", v: "YEARS OF EXPERIENCE" },
        { k: "10,000+", v: "OWNED CONTAINERS" },
        { k: "1M+", v: "TONS TRANSPORTED" }
      ],
      whyTitle: "화랑을 선택하는 이유",
      why: [
        "품질과 안전에 대한 약속",
        "효율적인 비용의 Door to door",
        "고객 만족과 신뢰성"
      ],
      contactTitle: "Get in Touch",
      contactForm: {
        title: "메시지 보내기",
        name: "성함",
        email: "이메일",
        message: "메시지",
        button: "전송"
      },
      footer: "© 2025 주식회사 화랑. All rights reserved."
    }
  };

  const t = translations[lang as keyof typeof translations];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const heroImages = [
    "/images/warehouse-logistics.jpg",
    "/images/railway-container.jpg", 
    "/images/container-ship-aerial.jpg"
  ];

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
            onClick={() => window.location.href = lang === "ko" ? "/ko" : "/"}
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
            {t.nav.map((item: string, idx: number) => (
              <div key={idx} className="relative">
                {idx === 1 ? (
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
                              window.location.href = lang === "ko" ? "/ko/about/why-hwarang" : "/about/why-hwarang";
                            } else if (subIdx === 1) {
                              window.location.href = lang === "ko" ? "/ko/about/facilities" : "/about/facilities";
                            } else if (subIdx === 2) {
                              window.location.href = lang === "ko" ? "/ko/about/history" : "/about/history";
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
                      if (item === "Services" || item === "서비스") {
                        window.location.href = lang === "ko" ? "/ko/services" : "/services";
                      } else if (item === "Home" || item === "홈") {
                        window.location.href = lang === "ko" ? "/ko" : "/";
                      } else if (item === "Quote Request" || item === "견적요청") {
                        window.location.href = lang === "ko" ? "/ko/quote" : "/quote";
                      } else if (item === "Network & Lanes" || item === "네트워크") {
                        window.location.href = lang === "ko" ? "/ko/network" : "/network";
                      } else if (item === "Contact" || item === "연락처") {
                        window.location.href = lang === "ko" ? "/ko#contact" : "/#contact";
                      }
                    }}
                    className={`text-sm font-medium transition-colors ${
                      idx === 0 ? "text-blue-900" : "hover:text-blue-900"
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
                  onClick={() => setLang("en")}
                  className={`text-sm font-medium transition-colors ${
                    lang === "en" ? "text-blue-900" : "hover:text-blue-900"
                  }`}
                >
                  EN
                </button>
                <span className="text-gray-300">|</span>
                <button
                  onClick={() => setLang("ko")}
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
                                window.location.href = lang === "ko" ? "/ko/about/why-hwarang" : "/about/why-hwarang";
                              } else if (subIdx === 1) {
                                window.location.href = lang === "ko" ? "/ko/about/facilities" : "/about/facilities";
                              } else if (subIdx === 2) {
                                window.location.href = lang === "ko" ? "/ko/about/history" : "/about/history";
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
                        if (item === "Services" || item === "서비스") {
                          window.location.href = lang === "ko" ? "/ko/services" : "/services";
                        } else if (item === "Home" || item === "홈") {
                          window.location.href = lang === "ko" ? "/ko" : "/";
                        } else if (item === "Quote Request" || item === "견적요청") {
                          window.location.href = lang === "ko" ? "/ko/quote" : "/quote";
                        } else if (item === "Network & Lanes" || item === "네트워크") {
                          window.location.href = lang === "ko" ? "/ko/network" : "/network";
                        } else if (item === "Contact" || item === "연락처") {
                          window.location.href = lang === "ko" ? "/ko#contact" : "/#contact";
                        }
                      }}
                      className={`text-left py-1 ${
                        idx === 0 ? "text-blue-900 font-medium" : ""
                      }`}
                    >
                      {item}
                    </button>
                  )}
                </div>
              ))}
              <button
                onClick={() => window.location.href = lang === "ko" ? "/ko#contact" : "/#contact"}
                className="mt-2 px-4 py-2 rounded-xl text-white bg-red-600"
              >
                {t.ctaContact}
              </button>
              <div className="flex items-center gap-2 pt-3 border-t mt-3">
                <button
                  onClick={() => setLang("en")}
                  className={`text-sm font-medium transition-colors ${
                    lang === "en" ? "text-blue-900" : "hover:text-blue-900"
                  }`}
                >
                  EN
                </button>
                <span className="text-gray-300">|</span>
                <button
                  onClick={() => setLang("ko")}
                  className={`text-sm font-medium transition-colors ${
                    lang === "ko" ? "text-blue-900" : "hover:text-blue-900"
                  }`}
                >
                  한국어
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
            style={{
              backgroundImage: `url(${heroImages[currentSlide]})`
            }}
          />
          <div className="absolute inset-0 bg-neutral-900/60" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                {t.heroTitle}
              </h1>
              <p className="text-lg md:text-xl mb-8 text-neutral-200 leading-relaxed">
                {t.heroSubtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-start">
                <button 
                  onClick={() => window.location.href = lang === "ko" ? "/ko#contact" : "/#contact"}
                  className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold text-base shadow-lg"
                >
                  {t.ctaQuote}
                </button>
                <button 
                  onClick={() => window.location.href = lang === "ko" ? "/ko/services" : "/services"}
                  className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-neutral-900 transition-colors font-semibold text-base"
                >
                  {lang === "ko" ? "서비스 보기" : "View Services"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                {t.aboutTitle}
              </h2>
              <h3 className="text-lg text-neutral-600 mb-2">
                {t.aboutSubtitle}
              </h3>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                {t.about}
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  {t.whyTitle}
                </h3>
                {t.why.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-900 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {t.stats.map((stat, i) => (
                <div key={i} className="bg-neutral-100 rounded-xl p-4 border border-neutral-200 hover:bg-neutral-200 transition-colors min-h-[130px] flex items-center justify-center">
                  <div className="text-center w-full px-2">
                    <div className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">{stat.k}</div>
                    <div className="text-xs md:text-sm font-medium text-neutral-600 uppercase tracking-tight leading-tight break-words hyphens-auto">
                      {stat.v}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            {t.servicesTitle}
          </h2>
          <div className="w-16 h-0.5 bg-blue-900 mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                {lang === "ko" ? "해상 운송" : "Ocean Freight"}
              </h3>
              <p className="text-neutral-600">
                {lang === "ko" ? "전 세계 해상 운송 솔루션" : "Global ocean freight solutions"}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                {lang === "ko" ? "항공 운송" : "Air Freight"}
              </h3>
              <p className="text-neutral-600">
                {lang === "ko" ? "빠르고 안전한 항공 화물 서비스" : "Fast and secure air cargo services"}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                {lang === "ko" ? "철도 운송" : "Railway"}
              </h3>
              <p className="text-neutral-600">
                {lang === "ko" ? "유라시아 철도 운송 서비스" : "Eurasia railway transportation"}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                {lang === "ko" ? "프로젝트 화물" : "Project Cargo"}
              </h3>
              <p className="text-neutral-600">
                {lang === "ko" ? "특수 프로젝트 화물 처리" : "Specialized project cargo handling"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white text-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.contactTitle}
            </h2>
            <div className="w-16 h-0.5 bg-blue-900 mx-auto"></div>
          </div>
          
          {/* 구글맵 - 전체 너비 */}
          <div className="mb-12">
            <div className="bg-neutral-800 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.8!2d126.7451!3d37.6695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9e0c8f8b8b8b%3A0x8b8b8b8b8b8b8b8b!2s240%20Kintex-ro%2C%20Ilsanseo-gu%2C%20Goyang-si%2C%20Gyeonggi-do%2C%20South%20Korea!5e0!3m2!1sen!2sus!4v1699999999999"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* 왼쪽: 회사 주소와 구글맵 */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                {lang === "ko" ? "연락처 정보" : "Contact Information"}
              </h3>
              <div className="space-y-6 text-neutral-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-900 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-neutral-900">
                      {lang === "ko" ? "본사" : "Head Office"}
                    </p>
                    <p>240, Kintex-ro</p>
                    <p>Ilsanseo-gu, Goyang-si</p>
                    <p>Gyeonggi-do, Korea</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-900 flex-shrink-0" />
                  <span>+82-31-994-68/0~2</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-900 flex-shrink-0" />
                  <span>hr@hwarangshipping.com</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Printer className="w-5 h-5 text-blue-900 flex-shrink-0" />
                  <span>FAX. +82-31-994-6873</span>
                </div>
                
                <div className="flex items-center gap-3 mb-16">
                  <Clock className="w-5 h-5 text-blue-900 flex-shrink-0" />
                  <span>{lang === "ko" ? "월-금 08:00-18:00" : "Mon-Fri 08:00-18:00"}</span>
                </div>
              </div>
            </div>
            
            {/* 오른쪽: Get in Touch 폼 */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">{t.contactForm.title}</h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder={t.contactForm.name}
                    value={form.name}
                    onChange={(e) => setForm({...form, name: e.target.value})}
                    className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-neutral-900"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder={t.contactForm.email}
                    value={form.email}
                    onChange={(e) => setForm({...form, email: e.target.value})}
                    className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-neutral-900"
                  />
                </div>
                <div>
                  <textarea
                    placeholder={t.contactForm.message}
                    value={form.message}
                    onChange={(e) => setForm({...form, message: e.target.value})}
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-neutral-900"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold"
                >
                  {t.contactForm.button}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-8 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-neutral-400">{t.footer}</p>
        </div>
      </footer>
    </div>
  );
}