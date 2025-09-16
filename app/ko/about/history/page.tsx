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
  Calendar,
  Building
} from "lucide-react";

export default function CompanyHistoryPageKo() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const t = {
    brand: "HWARANG CO., LTD.",
    nav: ["홈", "회사소개", "서비스", "견적요청", "네트워크 & 항로", "연락처"],
    aboutSubNav: ["주식회사 화랑", "회사설비", "회사연혁"],
    heroTitle: "회사연혁",
    heroSubtitle: "수년간의 헌신적인 서비스를 통해 쌓아온 신뢰와 전문성",
    
    companyName: "주식회사 화랑",
    
    intro: "물류 업계에서의 성장과 발전의 여정입니다.",
    
    historyIntro: "2021년 설립 이후, 주식회사 화랑은 러시아-아시아 무역 통로에 특화된 종합 물류 전문 기업으로 꾸준히 성장해왔습니다. 전문성을 구축하고 역량을 확장해온 저희의 여정을 소개합니다.",
    
    timelineItems: [
      {
        date: "2021.11.15",
        title: "회사 설립 및 대표이사 정병렬 사장 취임",
        description: "아시아-러시아 무역의 선도적인 물류 파트너가 되겠다는 비전으로 주식회사 화랑을 설립"
      },
      {
        date: "2022.02.23",
        title: "국제 물류주선업 등록 - 고양시",
        description: "국제 물류주선업 등록증을 취득하여 글로벌 물류 운영의 기반을 마련"
      },
      {
        date: "2023.01.03", 
        title: "화물운송주선업자 등록 - 부산세관",
        description: "부산세관을 통한 화물운송주선업자 공식 등록으로 역량을 확장"
      },
      {
        date: "2023.01.05",
        title: "한국 국제물류 주선업협회 회원 가입",
        description: "한국 국제물류 주선업협회에 가입하여 업계 네트워크와 신뢰성을 강화"
      },
      {
        date: "2023.02.08",
        title: "한국무역협회 회원 가입 및 무역업 고유번호 부여",
        description: "한국무역협회(KITA) 회원이 되고 공식 무역업 고유번호를 부여받음"
      }
    ]
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-white text-neutral-800 font-noto-sans-kr">
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
            <Clock className="w-4 h-4" /> 월-금 9:00-18:00 KST
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4" />
          <span>글로벌 물류 솔루션</span>
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
                      className="text-sm font-medium transition-colors text-blue-900 flex items-center gap-1"
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
                            if (subIndex === 2) return; // Current page
                            if (subIndex === 0) {
                              window.location.href = `/ko/about/why-hwarang`;
                            } else if (subIndex === 1) {
                              window.location.href = `/ko/about/facilities`;
                            }
                          }}
                          className={`block w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors ${
                            subIndex === 2 ? "text-blue-900 font-medium bg-blue-50" : "text-gray-700"
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
                      if (item === "서비스") {
                        window.location.href = `/ko/services`;
                      } else if (item === "홈") {
                        window.location.href = "/ko";
                      } else if (item === "네트워크 & 항로") {
                        window.location.href = `/ko/network`;
                      } else if (item === "견적요청") {
                        window.location.href = `/ko/quote`;
                      } else if (item === "연락처") {
                        window.location.href = "/ko#contact";
                      } else {
                        window.location.href = "/ko";
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
                  onClick={() => window.location.href = "/about/history"}
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
              {t.nav.map((item, index) => (
                <div key={index}>
                  {index === 1 ? (
                    <div>
                      <div className="text-blue-900 font-medium py-1">{item}</div>
                      <div className="ml-4 space-y-2">
                        {t.aboutSubNav.map((subItem, subIndex) => (
                          <button
                            key={subIndex}
                            onClick={() => {
                              if (subIndex === 2) return; // Current page
                              if (subIndex === 0) {
                                window.location.href = `/ko/about/why-hwarang`;
                              } else if (subIndex === 1) {
                                window.location.href = `/ko/about/facilities`;
                              }
                            }}
                            className={`block text-left py-1 text-sm ${
                              subIndex === 2 ? "text-blue-900 font-medium" : "text-gray-600"
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
                        if (item === "서비스") {
                          window.location.href = `/ko/services`;
                        } else if (item === "홈") {
                          window.location.href = "/ko";
                        } else if (item === "네트워크 & 항로") {
                          window.location.href = `/ko/network`;
                        } else if (item === "견적요청") {
                          window.location.href = `/ko/quote`;
                        } else if (item === "연락처") {
                          window.location.href = "/ko#contact";
                        } else {
                          window.location.href = "/ko";
                        }
                      }}
                      className="text-left py-1"
                    >
                      {item}
                    </button>
                  )}
                </div>
              ))}
              <div className="flex items-center gap-2 pt-3 border-t mt-3">
                <button
                  onClick={() => window.location.href = "/about/history"}
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

      {/* Breadcrumb */}
      <div className="bg-neutral-50 border-b">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center text-sm text-neutral-600">
            <button 
              onClick={() => window.location.href = "/ko"}
              className="hover:text-blue-900 transition-colors"
            >
              홈
            </button>
            <span className="mx-2">/</span>
            <button 
              onClick={() => window.location.href = `/ko/about/why-hwarang`}
              className="hover:text-blue-900 transition-colors"
            >
              회사소개
            </button>
            <span className="mx-2">/</span>
            <span className="text-blue-900 font-medium">{t.heroTitle}</span>
          </div>
        </div>
      </div>

      {/* Company History Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              {t.companyName}
            </h2>
            <div className="w-16 h-0.5 bg-blue-900 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              {t.intro}
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-neutral-50 to-white border border-neutral-200 rounded-lg p-8">
              <p className="text-base md:text-lg text-neutral-700 leading-relaxed text-center max-w-4xl mx-auto">
                {t.historyIntro}
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                주요 연혁
              </h3>
              <div className="w-16 h-0.5 bg-blue-900 mx-auto"></div>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 md:transform md:-translate-x-0.5"></div>
              
              {/* Timeline items */}
              <div className="space-y-8">
                {t.timelineItems.map((item, index) => (
                  <div key={index} className="relative flex items-start md:justify-center">
                    {/* Timeline dot */}
                    <div className="absolute left-4 w-3 h-3 bg-blue-900 rounded-full md:left-1/2 md:transform md:-translate-x-1.5"></div>
                    
                    {/* Content */}
                    <div className={`ml-10 md:ml-0 ${index % 2 === 0 ? 'md:w-1/2 md:pr-8 md:text-right' : 'md:w-1/2 md:pl-8'}`}>
                      <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center gap-2 mb-3">
                          <Building className="w-5 h-5 text-blue-900" />
                          <div className="text-lg font-bold text-blue-900">{item.date}</div>
                        </div>
                        <h4 className="text-lg font-semibold text-neutral-900 mb-3">
                          {item.title}
                        </h4>
                        <p className="text-sm text-neutral-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Future Vision */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">
                  미래를 향한 도약
                </h3>
                <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
                  화랑은 지난 성과를 바탕으로 더욱 혁신적이고 신뢰할 수 있는 물류 서비스를 제공하며, 고객과 함께 성장하는 글로벌 물류 파트너로 발전해 나가겠습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            함께 성장할 준비가 되셨나요?
          </h2>
          <p className="text-base md:text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
            화랑과 함께 더 큰 미래를 열어보세요. 전문 물류 팀이 고객의 성공을 위해 최선을 다하겠습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = "/ko#contact"}
              className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold text-base"
            >
              문의하기
            </button>
            <button 
              onClick={() => window.location.href = `/ko/services`}
              className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-neutral-900 transition-colors font-semibold text-base"
            >
              서비스 보기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
