export default function DayCell({
  day,
  onClick,
  isStart,
  isEnd,
  inRange,
  isToday,
  isHoliday,
  onHover
}) {
  if (!day) {
    return <div className="day empty"></div>;
  }

  return (
    <div
      onClick={onClick}
      onMouseEnter={onHover}
      className={[
        "day",
        isStart && "start",
        isEnd && "end",
        inRange && "range",
        isToday && "today"
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {day}

      {/* ✅ ONLY USE THIS */}
      {isHoliday && <div className="holiday-dot"></div>}
    </div>
  );
}