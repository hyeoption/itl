export default function PageHero({ title, description }: { title: string; description: string }) {
  return (
    <section className="itl-page-hero" aria-labelledby="page-title">
      <div className="itl-wrap">
        <h1 id="page-title">{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
