"use client";
import React, { useState, useEffect } from "react";
import {
  Clock,
  MapPin,
  Menu,
  X,
  Search,
  Phone,
  Mail,
  Printer,
  Package,
  Warehouse
} from "lucide-react";

export default function FacilitiesPageKo() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const t = {
    brand: "HWARANG CO., LTD.",
    nav: ["홈", "회사소개", "서비스", "견적요청", "네트워크", "연락처"],
    aboutSubNav: ["주식회사 화랑", "회사설비", "회사연혁"],
    
    companyName: "주식회사 화랑",
    
    intro: "고객의 물류 요구사항을 충족하기 위한 포괄적인 시설과 컨테이너 재고입니다.",
    
    containerInventoryTitle: "컨테이너 재고 현황",
    containerInventorySubtitle: "실시간 컨테이너 보유 현황",
    
    warehouseTitle: "창고 위치",
    warehouseSubtitle: "효율적인 물류 운영을 위한 전략적 위치",
    
    containers: [
      {
        type: "20' Dry 컨테이너",
        count: "1,140대",
        description: "일반 화물 운송을 위한 표준 드라이 컨테이너"
      },
      {
        type: "20' Open Top 컨테이너",
        count: "307대", 
        description: "대형 화물 및 간편한 적재를 위한 오픈탑 컨테이너"
      },
      {
        type: "40' High Cube 컨테이너",
        count: "301대",
        description: "대용량 선적을 위한 고용량 컨테이너"
      },
      {
        type: "20' 냉동 컨테이너",
        count: "150대",
        description: "냉장/냉동 화물을 위한 온도 조절 컨테이너"
      },
      {
        type: "40' Open Top 컨테이너",
        count: "127대",
        description: "중량물 및 대형 화물을 위한 대형 오픈탑 컨테이너"
      },
      {
        type: "20' 플랫랙 컨테이너",
        count: "97대",
        description: "기계류 및 건설장비를 위한 플랫랙 컨테이너"
      }
    ],
    
    warehouseInfo: {
      name: "화랑 창고",
      address: "부산광역시 기장군 장안읍 고무로 288",
      phone: "051-714-3950",
      features: [
        "부산항 인근 전략적 위치",
        "현대적 보관 시설",
        "온도 조절 구역",
        "24시간 보안 모니터링",
        "효율적인 적재/하역 시스템"
      ]
    }
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
            <Clock className="w-4 h-4" /> 월-금 08:00-18:00
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
                              window.location.href = `/ko/about/why-hwarang`;
                            } else if (subIndex === 1) {
                              return; // Current page
                            } else if (subIndex === 2) {
                              window.location.href = `/ko/about/history`;
                            }
                          }}
                          className={`block w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors ${
                            subIndex === 1 ? "text-blue-900 font-medium bg-blue-50" : "text-gray-700"
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
                      } else if (item === "견적요청") {
                        window.location.href = `/ko/quote`;
                      } else if (item === "네트워크") {
                        window.location.href = `/ko/network`;
                      } else if (item === "연락처") {
                        window.location.href = "/ko#contact";
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
                  onClick={() => window.location.href = "/about/facilities"}
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
                              if (subIndex === 0) {
                                window.location.href = `/ko/about/why-hwarang`;
                              } else if (subIndex === 1) {
                                return; // Current page
                              } else if (subIndex === 2) {
                                window.location.href = `/ko/about/history`;
                              }
                            }}
                            className={`block text-left py-1 text-sm ${
                              subIndex === 1 ? "text-blue-900 font-medium" : "text-gray-600"
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
                        } else if (item === "견적요청") {
                          window.location.href = `/ko/quote`;
                        } else if (item === "네트워크") {
                          window.location.href = `/ko/network`;
                        } else if (item === "연락처") {
                          window.location.href = "/ko#contact";
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
                  onClick={() => window.location.href = "/about/facilities"}
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
              onClick={() => window.location.href = "/ko/about/why-hwarang"}
              className="hover:text-blue-900 transition-colors"
            >
              회사소개
            </button>
            <span className="mx-2">/</span>
            <span className="text-blue-900 font-medium">회사설비</span>
          </div>
        </div>
      </div>

      {/* Container Inventory Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              {t.containerInventoryTitle}
            </h2>
            <div className="w-16 h-0.5 bg-blue-900 mx-auto mb-4"></div>
            <p className="text-lg text-neutral-600">
              {t.containerInventorySubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.containers.map((container, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-neutral-50 border border-neutral-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-neutral-900 text-center mb-2">
                  {container.type}
                </h3>
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-blue-900">{container.count}</span>
                </div>
                <p className="text-sm text-neutral-600 text-center leading-relaxed">
                  {container.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warehouse Information Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              {t.warehouseTitle}
            </h2>
            <div className="w-16 h-0.5 bg-blue-900 mx-auto mb-4"></div>
            <p className="text-lg text-neutral-600">
              {t.warehouseSubtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <div>
              <div className="bg-white border border-neutral-200 rounded-lg p-8 shadow-lg h-full">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-blue-900" />
                  <h3 className="text-xl font-bold text-neutral-900">
                    {t.warehouseInfo.name}
                  </h3>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Package className="w-5 h-5 text-blue-900 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-neutral-900 mb-1">
                        주소
                      </div>
                      <div className="text-neutral-600">
                        {t.warehouseInfo.address}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-blue-900 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-neutral-900 mb-1">
                        전화번호
                      </div>
                      <div className="text-neutral-600">
                        {t.warehouseInfo.phone}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-neutral-900 mb-3">
                    주요 특징
                  </h4>
                  <ul className="space-y-2">
                    {t.warehouseInfo.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-900 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-neutral-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-8">
              <div className="bg-white border border-neutral-200 rounded-lg p-8 shadow-lg h-full flex flex-col">
                <div className="bg-neutral-200 rounded-lg overflow-hidden flex-1 mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3257.4824282145984!2d129.2166!3d35.3288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568e9c1b2b5e5e5%3A0x1234567890abcdef!2z7ZmU652567mA!5e0!3m2!1sko!2skr!4v1620000000000!5m2!1sko!2skr&q=부산광역시+기장군+장안읍+고무로+288"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="화랑 창고 위치"
                  ></iframe>
                </div>
                <div className="text-center">
                  <button
                    onClick={() => window.open('https://maps.google.com?q=부산광역시+기장군+장안읍+고무로+288', '_blank')}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm font-medium shadow-md"
                  >
                    <MapPin className="w-4 h-4" />
                    Google Maps에서 보기
                  </button>
                </div>
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
              onClick={() => window.location.href = "/ko/services"}
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
