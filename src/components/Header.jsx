export default function Header({ month, year, changeMonth }) {
  return (
    <div className="header">
      <button onClick={() => changeMonth(-1)}>‹</button>
      <h2>{month} {year}</h2>
      <button onClick={() => changeMonth(1)}>›</button>
    </div>
  );
}