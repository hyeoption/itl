import Image from "next/image";
import styles from "./container-gallery.module.css";

const photographs = [
  { number: 2, en: "ITL container with its doors and long side visible", ko: "출입문과 측면이 보이는 ITL 컨테이너" },
  { number: 1, en: "ITL container doors and locking bars", ko: "ITL 컨테이너 출입문과 잠금 장치" },
  { number: 3, en: "ITL container roof and doors viewed from above", ko: "위에서 본 ITL 컨테이너 지붕과 출입문" },
  { number: 4, en: "Side and closed end of the ITL container", ko: "ITL 컨테이너 측면과 막힌 끝면" },
  { number: 5, en: "ITL lettering on the closed end of the container", ko: "ITL 로고가 표시된 컨테이너 끝면" },
] as const;

export default function ContainerGallery({ locale }: { locale: "en" | "ko" }) {
  return (
    <section className="itl-section itl-section-tint" aria-labelledby="container-gallery-title">
      <div className="itl-wrap">
        <div className="itl-section-heading">
          <h2 id="container-gallery-title">{locale === "ko" ? "자체 보유 컨테이너" : "ITL-owned containers"}</h2>
        </div>
        <div className={styles.gallery}>
          {photographs.map((photo, index) => {
            const src = `/images/containers/itl-${photo.number}.jpg`;

            return (
              <a key={photo.number} href={src} className={styles.photo}>
                <Image
                  src={src}
                  alt={photo[locale]}
                  width={1448}
                  height={1086}
                  sizes={index === 0 ? "(max-width: 767px) 100vw, 50vw" : "(max-width: 767px) 50vw, 25vw"}
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
