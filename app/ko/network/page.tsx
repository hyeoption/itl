"use client";
import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Globe,
  Shield,
  Truck,
  Users,
  Clock,
  Target,
  Award,
  CheckCircle,
  Menu,
  X,
  Search,
  Phone,
  Mail,
  Printer,
  MapPin,
  Building,
  Ship,
  Plane
} from "lucide-react";

export default function NetworkPageKo() {
  const [lang, setLang] = useState("ko");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const translations = {
    en: {
      brand: "HWARANG CO., LTD.",
      nav: ["Home", "About Us", "Services", "Quote Request", "Network & Lanes", "Contact"],
      aboutSubNav: ["Why Hwarang?", "Facilities", "Company History"],
      heroTitle: "Network & Lanes",
      heroSubtitle: "Strategic partnerships connecting Asia and the world",
      
      companyName: "HWARANG CO., LTD.",
      
      intro: "Our extensive global network and trusted partnerships ensure reliable logistics solutions across key trade corridors.",
      
      russiaPartnerTitle: "Partner in Russia",
      chinaPartnerTitle: "Partners in China",
      
      russiaPartner: {
        companyName: "RUSSIAN TRANSPORT LINES CO LTD",
        offices: [
          {
            name: "Vostochny Port Office (Head Quarter)",
            address: "692941, 29a, Vnutriportovaya St., Nakhodka"
          },
          {
            name: "Vladivostok Office",
            address: "690012, of.606, 25 Berezovaya St., Vladivostok"
          },
          {
            name: "Moscow Office",
            address: "2B office, 15 floor, Business center \"NEO GEO\", Butlerova St, 17, Moscow, 117342"
          },
          {
            name: "Yekaterinburg Office",
            address: "620027, Of. 702/2, 36 Engels Str., Yekaterinburg"
          },
          {
            name: "Novosibirsk Office",
            address: "620027, Of. 509, 22 Titova Str., Novosibirsk"
          }
        ]
      },
      
      chinaPartners: [
        {
          companyName: "YUANLI INTERNATIONAL CO., LTD.",
          coverage: "Shenzhen, Guangdong, HKG, Huangpu",
          address: "RM1309, KERRY CENTRE, RENMIN NAN ROAD, LUOHU DISTRICT, SHENZHEN CITY, CHINA"
        },
        {
          companyName: "SHANGHAI MANGROVE BAY LOGISTICS CO., LTD.",
          coverage: "Shanghai, Ningbo, Inland River Port of Chang Jiang (Chongqing, Changsha, Jiujiang, Yangzhou, Nanjing, Wuhan)",
          address: "Room 501, Building 19, Lane 421, Siping Road, Hongkou District, Shanghai, China"
        },
        {
          companyName: "SHANGHAI MANGROVE BAY LOGISTICS CO., LTD. Tianjin Office",
          coverage: "Xingang (Tianjin), Dalian, Qingdao",
          address: "ROOM5015B,5F HAOWAI CENTRE, 199 NANJING ROAD TIANJIN 300041, CHINA"
        }
      ]
    },
    ko: {
      brand: "HWARANG CO., LTD.",
      nav: ["홈", "회사소개", "서비스", "견적요청", "네트워크", "연락처"],
      aboutSubNav: ["왜 화랑인가?", "회사설비", "회사연혁"],
      heroTitle: "네트워크 & 항로",
      heroSubtitle: "아시아와 세계를 연결하는 전략적 파트너십",
      
      companyName: "주식회사 화랑",
      
      intro: "광범위한 글로벌 네트워크와 신뢰할 수 있는 파트너십을 통해 주요 무역 통로에서 안정적인 물류 솔루션을 보장합니다.",
      
      russiaPartnerTitle: "러시아 파트너",
      chinaPartnerTitle: "중국 파트너",
      
      russiaPartner: {
        companyName: "RUSSIAN TRANSPORT LINES CO LTD",
        offices: [
          {
            name: "보스토치니 항만 사무소 (본사)",
            address: "692941, 29a, Vnutriportovaya St., Nakhodka"
          },
          {
            name: "블라디보스토크 사무소",
            address: "690012, of.606, 25 Berezovaya St., Vladivostok"
          },
          {
            name: "모스크바 사무소",
            address: "2B office, 15 floor, Business center \"NEO GEO\", Butlerova St, 17, Moscow, 117342"
          },
          {
            name: "예카테린부르크 사무소",
            address: "620027, Of. 702/2, 36 Engels Str., Yekaterinburg"
          },
          {
            name: "노보시비르스크 사무소",
            address: "620027, Of. 509, 22 Titova Str., Novosibirsk"
          }
        ]
      },
      
      chinaPartners: [
        {
          companyName: "YUANLI INTERNATIONAL CO., LTD.",
          coverage: "심천, 광동, 홍콩, 황푸",
          address: "RM1309, KERRY CENTRE, RENMIN NAN ROAD, LUOHU DISTRICT, SHENZHEN CITY, CHINA"
        },
        {
          companyName: "SHANGHAI MANGROVE BAY LOGISTICS CO., LTD.",
          coverage: "상하이, 닝보, 창강 내륙항 (충칭, 창사, 주장, 양저우, 난징, 우한)",
          address: "Room 501, Building 19, Lane 421, Siping Road, Hongkou District, Shanghai, China"
        },
        {
          companyName: "SHANGHAI MANGROVE BAY LOGISTICS CO., LTD. 톈진 사무소",
          coverage: "신강(톈진), 다롄, 칭다오",
          address: "ROOM5015B,5F HAOWAI CENTRE, 199 NANJING ROAD TIANJIN 300041, CHINA"
        }
      ]
    }
  };

  const t = translations[lang as keyof typeof translations];

  useEffect(() => {
    setMounted(true);
    // Korean page should always be set to 'ko'
    setLang('ko');
  }, []);

  const navigateToHome = () => {
    window.location.href = "/ko";
  };

  return (
    <div className={`bg-white text-neutral-800 ${lang === "ko" ? "font-noto-sans-kr" : "font-sans"}`}>
      {/* Top info bar */}
      <div className="hidden md:flex items-center justify-between px-6 py-2 text-sm bg-neutral-100 text-neutral-600">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-2">
            <Mail className="w-4 h-4" /> hr@hwarangshipping.com
          </span>
          <span className="inline-flex items-center gap-2">
            <Phone className="w-4 h-4" /> TEL. +82-31-994-68/0~2
          </span>
          <span className="inline-flex items-center gap-2">
            <Printer className="w-4 h-4" /> FAX. +82-31-994-6873
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="w-4 h-4" /> Mon-Fri 9:00-18:00 KST
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4" />
          <span>Global Logistics Solutions</span>
        </div>
      </div>

      {/* Navigation */}
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
                    <button
                      className="text-sm font-medium transition-colors hover:text-blue-900 flex items-center gap-1"
                    >
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
                      if (item === "서비스") {
                        window.location.href = `/ko/services`;
                      } else if (item === "홈") {
                        window.location.href = "/ko";
                      } else if (item === "견적요청") {
                        window.location.href = `/ko/quote`;
                      } else if (item === "네트워크") {
                        return; // Current page
                      } else if (item === "연락처") {
                        window.location.href = "/ko#contact";
                      } else {
                        navigateToHome();
                      }
                    }}
                    className={`text-sm font-medium transition-colors ${
                      index === 4 ? "text-blue-900" : "hover:text-blue-900"
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
                  onClick={() => window.location.href = "/network"}
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
                <div key={index}>
                  {index === 1 ? (
                    <div>
                      <div className="text-gray-900 font-medium py-1">{item}</div>
                      <div className="ml-4 space-y-2">
                        {t.aboutSubNav.map((subItem, subIndex) => (
                          <button
                            key={subIndex}
                            onClick={() => {
                              if (subIndex === 0) {
                                window.location.href = `/ko/about/why-hwarang`;
                              } else if (subIndex === 1) {
                                window.location.href = `/ko/about/history`;
                              } else if (subIndex === 2) {
                                window.location.href = `/ko/about/facilities`;
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
                        if (item === "서비스") {
                          window.location.href = `/ko/services`;
                        } else if (item === "홈") {
                          window.location.href = "/ko";
                        } else if (item === "견적요청") {
                          window.location.href = `/ko/quote`;
                        } else if (item === "네트워크") {
                          return; // Current page
                        } else if (item === "연락처") {
                          window.location.href = "/ko#contact";
                        } else {
                          navigateToHome();
                        }
                      }}
                      className={`text-left py-1 ${
                        index === 4 ? "text-blue-900 font-medium" : ""
                      }`}
                    >
                      {item}
                    </button>
                  )}
                </div>
              ))}
              <div className="flex items-center gap-2 pt-3 border-t mt-3">
                <button
                  onClick={() => window.location.href = "/network"}
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
        )}
      </nav>

      {/* Breadcrumb */}
      <div className="bg-neutral-50 border-b">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center text-sm text-neutral-600">
            <button 
              onClick={() => window.location.href = "/ko"}
              className="hover:text-blue-900 transition-colors"
            >
              {lang === "ko" ? "홈" : "Home"}
            </button>
            <span className="mx-2">/</span>
            <span className="text-blue-900 font-medium">{t.heroTitle}</span>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              {t.companyName}
            </h2>
            <div className="w-16 h-0.5 bg-blue-900 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              {t.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Russia Partner Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              {t.russiaPartnerTitle}
            </h2>
            <div className="w-16 h-0.5 bg-blue-900 mx-auto"></div>
          </div>

          <div className="bg-white border border-neutral-200 rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-bold text-neutral-900 mb-6">
              {t.russiaPartner.companyName}
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.russiaPartner.offices.map((office, index) => (
                <div key={index} className="border border-neutral-200 rounded-lg p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-blue-900 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">
                        {office.name}
                      </h4>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {office.address}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* China Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              {t.chinaPartnerTitle}
            </h2>
            <div className="w-16 h-0.5 bg-blue-900 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {t.chinaPartners.map((partner, index) => (
              <div key={index} className="bg-gradient-to-r from-neutral-50 to-white border border-neutral-200 rounded-lg p-8 shadow-lg">
                <h3 className="text-xl font-bold text-neutral-900 mb-6">
                  {partner.companyName}
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-start gap-3 mb-4">
                      <Globe className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-2">
                          {lang === "ko" ? "서비스 지역" : "Service Coverage"}
                        </h4>
                        <p className="text-neutral-600 leading-relaxed">
                          {partner.coverage}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-2">
                          {lang === "ko" ? "주소" : "Address"}
                        </h4>
                        <p className="text-neutral-600 leading-relaxed">
                          {partner.address}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {lang === "ko" ? "함께 성장할 준비가 되셨나요?" : "Ready to Grow Together?"}
          </h2>
          <p className="text-base md:text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
            {lang === "ko" 
              ? "화랑과 함께 더 큰 미래를 열어보세요. 전문 물류 팀이 고객의 성공을 위해 최선을 다하겠습니다."
              : "Open a greater future with Hwarang. Our professional logistics team will do our best for your success."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = "/ko#contact"}
              className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold text-base"
            >
              {lang === "ko" ? "문의하기" : "Get in Touch"}
            </button>
            <button 
              onClick={() => window.location.href = `/ko/services`}
              className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-neutral-900 transition-colors font-semibold text-base"
            >
              {lang === "ko" ? "서비스 보기" : "View Services"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}