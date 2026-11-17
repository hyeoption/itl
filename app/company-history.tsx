import styles from "./company-history.module.css";

const history = {
  en: {
    title: "Company History",
    historyIntro: "Since our establishment in 2008, ITL Co., Ltd. has been steadily growing as a comprehensive logistics company specializing in Russia-Asia trade corridors. Here's our journey of building expertise and expanding our capabilities.",
    visionTitle: "Looking Towards the Future",
    vision: "Building on our past achievements, ITL will continue to provide more innovative and reliable logistics services, developing as a global logistics partner that grows together with our customers.",
    timelineItems: [
      {
        date: "2008.10.09",
        title: "Company Establishment",
        description: "Founded ITL Co., Ltd., opening a new chapter in logistics services"
      },
      {
        date: "2008.10.29",
        title: "International Forwarding Business Registration - Goyang City",
        description: "Registered International Forwarding Business in Goyang City, establishing our foundation for global logistics operations"
      },
      {
        date: "2008.11.05",
        title: "Korea International Logistics Association Membership",
        description: "Joined the Korea International Logistics Association, strengthening our industry network and expertise"
      },
      {
        date: "2011.01.07",
        title: "Freight Forwarding Business Registration - Busan Customs",
        description: "Expanded our capabilities with official freight forwarding business registration through Busan Customs"
      },
      {
        date: "2015.11.11",
        title: "Korea International Trade Association Membership",
        description: "Became a member of Korea International Trade Association (KITA), securing credibility in the trade industry"
      },
      {
        date: "2023.03.03",
        title: "Exemplary Taxpayer Award - Commissioner of National Tax Service",
        description: "Received the Exemplary Taxpayer Award from the Commissioner of National Tax Service, recognized as a transparent and trustworthy company"
      }
    ],
  },
  ko: {
    title: "회사연혁",
    historyIntro: "2008년 설립 이후, 주식회사 아이티엘은 러시아-아시아 무역 통로에 특화된 종합 물류 전문 기업으로 꾸준히 성장해왔습니다. 전문성을 구축하고 역량을 확장해온 저희의 여정을 소개합니다.",
    visionTitle: "미래를 향한 도약",
    vision: "아이티엘은 지난 성과를 바탕으로 더욱 혁신적이고 신뢰할 수 있는 물류 서비스를 제공하며, 고객과 함께 성장하는 글로벌 물류 파트너로 발전해 나가겠습니다.",
    timelineItems: [
      {
        date: "2008.10.09",
        title: "회사 설립",
        description: "주식회사 아이티엘을 설립하여 물류 서비스의 새로운 장을 열었습니다"
      },
      {
        date: "2008.10.29",
        title: "국제물류주선업 등록 – 고양시",
        description: "고양시에 국제물류주선업을 등록하여 글로벌 물류 운영의 기반을 마련했습니다"
      },
      {
        date: "2008.11.05",
        title: "한국국제물류협회 가입",
        description: "한국국제물류협회에 가입하여 업계 네트워크와 전문성을 강화했습니다"
      },
      {
        date: "2011.01.07",
        title: "화물운송주선업자 등록 – 부산세관",
        description: "부산세관을 통한 화물운송주선업자 공식 등록으로 역량을 확장했습니다"
      },
      {
        date: "2015.11.11",
        title: "한국무역협회 가입",
        description: "한국무역협회(KITA) 회원이 되어 무역 업계의 신뢰성을 확보했습니다"
      },
      {
        date: "2023.03.03",
        title: "모범납세자 표창 – 국세청장",
        description: "국세청장으로부터 모범납세자 표창을 수상하여 투명하고 신뢰할 수 있는 기업으로 인정받았습니다"
      }
    ],
  },
} as const;

export default function CompanyHistory({ locale }: { locale: keyof typeof history }) {
  const content = history[locale];

  return (
    <section id="history" className="itl-section itl-section-tint scroll-mt-24" aria-labelledby="history-title">
      <div className="itl-wrap">
        <header className={styles.heading}>
          <h2 id="history-title">{content.title}</h2>
          <p className="itl-muted">{content.historyIntro}</p>
        </header>

        <ol className={styles.timeline} role="list">
          {content.timelineItems.map(({ date, title, description }) => (
            <li key={date} className={styles.milestone}>
              <time dateTime={date.replace(/\./g, "-")} className={styles.date}>{date}</time>
              <div className={`itl-card ${styles.card}`}>
                <h3>{title}</h3>
                <p className="itl-muted">{description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className={`itl-band-panel ${styles.vision}`}>
          <h3>{content.visionTitle}</h3>
          <p>{content.vision}</p>
        </div>
      </div>
    </section>
  );
}
