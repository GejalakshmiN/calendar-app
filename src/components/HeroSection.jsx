export default function HeroSection({ data, month, year }) {
  return (
    <div className="hero">
      <img src={data.url} />
      <div className="hero-overlay" />

      <div className="hero-text">
        <span>{data.label}</span>
        <h1>{month}</h1>
        <p>{year}</p>
      </div>
    </div>
  );
}