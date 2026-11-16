"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Clock, Mail, MapPin, Menu, Package, Phone, Printer, Search, Ship, TrainFront, X } from "lucide-react";
import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import styles from "./landing.module.css";

const content = {
  en: {
    nav: ["Home", "About Us", "Services", "Quote Request", "Network & Lanes", "Contact"],
    aboutSubNav: ["ITL CO., LTD.", "Facilities", "Company History"],
    ctaContact: "Contact Us",
    quote: "Request a quote", browse: "Explore services", skip: "Skip to content",
    heroLabel: "INTERNATIONAL FREIGHT FORWARDING",
    hero: ["Global freight.", "Ocean, rail & project cargo."],
    intro: "ITL coordinates international freight around your cargo, route and schedule.",
    services: "Freight services",
    serviceIntro: "Choose the right transport for your cargo and delivery schedule.",
    modes: [
      ["Ocean freight", "International container freight backed by our own container operations in Busan."],
      ["Rail freight", "Rail transport across Eurasian trade corridors."],
      ["Project cargo", "Transport planning for oversized and specialized cargo."],
    ],
    busan: "Busan, South Korea", owned: "ITL-owned containers",
    companyLabel: "ABOUT ITL",
    company: "Based in Korea. Connected worldwide.",
    companyIntro: "ITL owns and operates containers in Busan, including dry, open top and flat rack units. We work with overseas logistics partners to arrange transport based on your cargo and route.",
    facilities: "Explore our facilities", about: "About ITL", network: "Explore our network",
    quoteTitle: "Planning your next shipment?",
    quoteIntro: "Share your origin, destination and cargo details so our team can review your request.",
    contact: "Contact ITL", office: "Head office",
    address: "Room 404, Peugeot Building, 844 Hosu-ro, Ilsanseo-gu, Goyang-si, Gyeonggi-do, South Korea",
    hours: "Mon–Fri, 08:00–18:00 KST", directions: "View directions",
    form: "General inquiries", name: "Name", email: "Email", message: "Message",
    send: "Send inquiry", sending: "Sending…", sent: "Your message was sent.",
    error: "Your message could not be sent. Try again or contact us by email.",
  },
  ko: {
    nav: ["홈", "회사소개", "서비스", "견적요청", "네트워크", "연락처"],
    aboutSubNav: ["주식회사 아이티엘", "회사설비", "회사연혁"],
    ctaContact: "연락처",
    quote: "운송 견적 요청", browse: "서비스 보기", skip: "본문 바로가기",
    heroLabel: "국제 화물 포워딩",
    hero: ["해상·철도부터", "프로젝트 화물까지"],
    intro: "화물의 특성과 운송 구간, 납기에 맞춰 아이티엘이 국제 운송을 주선합니다.",
    services: "운송 서비스",
    serviceIntro: "화물의 특성과 납기에 맞는 운송 방식을 찾아보세요.",
    modes: [
      ["해상 운송", "부산 자체 컨테이너 운영을 바탕으로 국제 해상 운송을 주선합니다."],
      ["철도 운송", "유라시아 주요 운송 구간을 잇는 철도 운송입니다."],
      ["프로젝트 화물", "대형·특수 화물의 규격과 취급 조건에 맞춰 운송을 계획합니다."],
    ],
    busan: "대한민국 부산", owned: "자체 보유 컨테이너",
    companyLabel: "아이티엘 소개",
    company: "부산의 운영 기반과 해외 물류 네트워크",
    companyIntro: "아이티엘은 부산에서 드라이, 오픈탑, 플랫랙 등 자체 보유 컨테이너를 운영합니다. 해외 물류 파트너와 협력해 화물의 특성과 운송 구간에 맞는 운송을 주선합니다.",
    facilities: "회사설비 보기", about: "회사 소개 보기", network: "운송 네트워크 보기",
    quoteTitle: "다음 운송을 준비하고 계신가요?",
    quoteIntro: "출발지, 도착지, 화물 정보를 알려주시면 담당자가 견적 요청을 검토합니다.",
    contact: "아이티엘에 연락하기", office: "본사",
    address: "경기도 고양시 일산서구 호수로 844, 푸조빌딩 404호",
    hours: "월–금 08:00–18:00 (한국 시간)", directions: "지도에서 보기",
    form: "일반 문의", name: "성함", email: "이메일", message: "문의 내용",
    send: "문의 보내기", sending: "전송 중…", sent: "문의가 전송되었습니다.",
    error: "전송에 실패했습니다. 다시 시도하거나 이메일로 문의해 주세요.",
  },
} as const;

const modes = [
  { Icon: Ship, anchor: "ocean" },
  { Icon: TrainFront, anchor: "railway" },
  { Icon: Package, anchor: "project" },
];
const emailAddress = "itl@itlshipping.com";
const officePhone = "+82-31-911-5612~4";

export default function ITLHomepage({ locale = "en" }: { locale?: keyof typeof content }) {
  const t = content[locale];
  const base = locale === "ko" ? "/ko" : "";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const quote = base + "/quote";
  const services = base + "/services";
  const network = base + "/network";
  const about = base + "/about/why-hwarang";

  async function sendInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    setStatus("sending");
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "hye.option",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_5ummn9h",
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "7Kk7gV6Kf6nVSj8Fa",
      );
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className={styles.page} lang={locale} data-testid="page-root">
      <a className={styles.skip} href="#main">{t.skip}</a>
      {/* Top info bar */}
      <div className="font-noto-sans-kr hidden md:flex items-center justify-between px-6 py-2 text-sm bg-neutral-100 text-neutral-600">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-2">
            <Mail className="w-4 h-4" /> itl@itlshipping.com
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="w-4 h-4" /> {locale === "ko" ? "월-금 08:00-18:00" : "Mon-Fri 08:00-18:00"}
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
      <nav className="font-noto-sans-kr text-neutral-800 sticky top-0 z-40 bg-white/95 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => window.location.href = locale === "ko" ? "/ko" : "/"}
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
                              window.location.href = locale === "ko" ? "/ko/about/why-hwarang" : "/about/why-hwarang";
                            } else if (subIdx === 1) {
                              window.location.href = locale === "ko" ? "/ko/about/facilities" : "/about/facilities";
                            } else if (subIdx === 2) {
                              window.location.href = locale === "ko" ? "/ko/about/history" : "/about/history";
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
                        window.location.href = locale === "ko" ? "/ko/services" : "/services";
                      } else if (item === "Home" || item === "홈") {
                        window.location.href = locale === "ko" ? "/ko" : "/";
                      } else if (item === "Quote Request" || item === "견적요청") {
                        window.location.href = locale === "ko" ? "/ko/quote" : "/quote";
                      } else if (item === "Network & Lanes" || item === "네트워크") {
                        window.location.href = locale === "ko" ? "/ko/network" : "/network";
                      } else if (item === "Contact" || item === "연락처") {
                        setMobileOpen(false);
                        window.location.hash = "contact";
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
                  onClick={() => window.location.assign("/")}
                  className={`text-sm font-medium transition-colors ${
                    locale === "en" ? "text-blue-900" : "hover:text-blue-900"
                  }`}
                >
                  EN
                </button>
                <span className="text-gray-300">|</span>
                <button
                  onClick={() => window.location.assign("/ko")}
                  className={`text-sm font-medium transition-colors ${
                    locale === "ko" ? "text-blue-900" : "hover:text-blue-900"
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
            aria-expanded={mobileOpen}
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
                                window.location.href = locale === "ko" ? "/ko/about/why-hwarang" : "/about/why-hwarang";
                              } else if (subIdx === 1) {
                                window.location.href = locale === "ko" ? "/ko/about/facilities" : "/about/facilities";
                              } else if (subIdx === 2) {
                                window.location.href = locale === "ko" ? "/ko/about/history" : "/about/history";
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
                          window.location.href = locale === "ko" ? "/ko/services" : "/services";
                        } else if (item === "Home" || item === "홈") {
                          window.location.href = locale === "ko" ? "/ko" : "/";
                        } else if (item === "Quote Request" || item === "견적요청") {
                          window.location.href = locale === "ko" ? "/ko/quote" : "/quote";
                        } else if (item === "Network & Lanes" || item === "네트워크") {
                          window.location.href = locale === "ko" ? "/ko/network" : "/network";
                        } else if (item === "Contact" || item === "연락처") {
                          setMobileOpen(false);
                          window.location.hash = "contact";
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
                onClick={() => {
                  setMobileOpen(false);
                  window.location.hash = "contact";
                }}
                className="mt-2 px-4 py-2 rounded-xl text-white bg-red-600"
              >
                {t.ctaContact}
              </button>
              <div className="flex items-center gap-2 pt-3 border-t mt-3">
                <button
                  onClick={() => window.location.assign("/")}
                  className={`text-sm font-medium transition-colors ${
                    locale === "en" ? "text-blue-900" : "hover:text-blue-900"
                  }`}
                >
                  EN
                </button>
                <span className="text-gray-300">|</span>
                <button
                  onClick={() => window.location.assign("/ko")}
                  className={`text-sm font-medium transition-colors ${
                    locale === "ko" ? "text-blue-900" : "hover:text-blue-900"
                  }`}
                >
                  한국어
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main id="main" className="itl-content">
        <section className={styles.hero} aria-labelledby="landing-title">
          <Image src="/images/landing-ocean.jpg" alt="" fill priority sizes="100vw" className={styles.heroImage} />
          <div className={`itl-wrap ${styles.heroContent}`}>
            <p className={styles.eyebrow}>{t.heroLabel}</p>
            <h1 id="landing-title">{t.hero[0]}<br />{t.hero[1]}</h1>
            <p className={styles.intro}>{t.intro}</p>
            <div className={styles.heroActions}>
              <Link className="itl-button" href={quote}>{t.quote}<ArrowUpRight size={19} /></Link>
              <a className="itl-button itl-button-outline" href="#services">{t.browse}<ArrowDown size={18} /></a>
            </div>
          </div>
        </section>

        <section className={styles.company} aria-labelledby="company-title">
          <div className={`itl-wrap ${styles.companyGrid}`}>
            <div className={styles.companyPhoto}>
              <Image src="/images/warehouse-logistics.jpg" alt="" fill sizes="(max-width: 760px) 100vw, 50vw" />
              <div><MapPin size={19} /><span><strong>{t.busan}</strong><small>{t.owned}</small></span></div>
            </div>
            <div className={styles.companyCopy}>
              <p className={styles.eyebrow}>{t.companyLabel}</p>
              <h2 id="company-title">{t.company}</h2>
              <p>{t.companyIntro}</p>
              <div className={styles.textLinks}>
                <Link className="itl-text-link" href={base + "/about/facilities"}>{t.facilities}<ArrowRight size={17} /></Link>
                <Link className="itl-text-link" href={about}>{t.about}<ArrowRight size={17} /></Link>
                <Link className="itl-text-link" href={network}>{t.network}<ArrowRight size={17} /></Link>
              </div>
            </div>
          </div>
        </section>

        <section className={`itl-wrap itl-section`} id="services" aria-labelledby="services-title">
          <div className={styles.sectionHeading}>
            <h2 id="services-title">{t.services}</h2>
            <p>{t.serviceIntro}</p>
          </div>
          <div className={styles.services}>
            {t.modes.map(([name, description], index) => {
              const { Icon, anchor } = modes[index];
              return (
                <Link href={`${services}#${anchor}`} className={`itl-card ${styles.service}`} key={name}>
                  <div className={styles.serviceTop}><Icon size={29} strokeWidth={1.6} /><ArrowUpRight size={19} /></div>
                  <h3>{name}</h3><p>{description}</p>
                </Link>
              );
            })}
          </div>
        </section>

        <section className={`itl-band ${styles.quoteBand}`} aria-labelledby="quote-title">
          <div className="itl-wrap">
            <div><h2 id="quote-title">{t.quoteTitle}</h2><p>{t.quoteIntro}</p></div>
            <Link href={quote} className="itl-button">{t.quote}<ArrowUpRight size={19} /></Link>
          </div>
        </section>

        <section id="contact" className={`itl-wrap itl-section ${styles.contact}`}>
          <div>
            <h2>{t.contact}</h2>
            <address>
              <div><MapPin size={20} /><span><strong>{t.office}</strong><br />{t.address}</span></div>
              <a href="tel:+82319115612"><Phone size={20} />{officePhone}</a>
              <a href={`mailto:${emailAddress}`}><Mail size={20} />{emailAddress}</a>
              <div><Clock size={20} />{t.hours}</div>
              <div><span className={styles.fax}>FAX</span>+82-31-902-8130</div>
            </address>
            <a className="itl-text-link" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t.address)}`} target="_blank" rel="noreferrer">
              {t.directions}<ArrowUpRight size={17} />
            </a>
          </div>
          <form className={`itl-form-panel ${styles.form}`} onSubmit={sendInquiry}>
            <h3>{t.form}</h3>
            <div className={styles.fields}>
              <label>{t.name}<input className="itl-field" name="name" autoComplete="name" required pattern=".*\\S.*" disabled={status === "sending"} /></label>
              <label>{t.email}<input className="itl-field" name="email" type="email" autoComplete="email" required disabled={status === "sending"} /></label>
            </div>
            <label>{t.message}<textarea className="itl-field" name="message" rows={4} required disabled={status === "sending"} /></label>
            <button className="itl-button" type="submit" disabled={status === "sending"}>{status === "sending" ? t.sending : t.send}<ArrowRight size={17} /></button>
            <p className={styles.formStatus} role="status">{status === "sent" ? t.sent : status === "error" ? t.error : ""}</p>
          </form>
        </section>
      </main>
      <footer className={`itl-footer ${styles.footer}`}>
        <div className="itl-wrap"><strong>ITL CO., LTD.</strong><span>© {new Date().getFullYear()} ITL Co., Ltd.</span></div>
      </footer>
    </div>
  );
}
