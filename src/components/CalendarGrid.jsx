import DayCell from "./DayCell";

export default function CalendarGrid({
  days,
  onClick,
  rangeStart,
  rangeEnd,
  isInRange,
  isToday,
  holidays,
  month,
  setHoverDate
}) {
  return (
    <div className="grid">
      {days.map((d, i) => (
        <DayCell
          key={i}
          day={d}
          onClick={() => d && onClick(d)}
          
          isStart={d && d === rangeStart}
          isEnd={d && d === rangeEnd}
          inRange={d && isInRange(d)}
          
          isToday={d && isToday(d)}
          
          isHoliday={d && holidays?.[`${month + 1}-${d}`]}
          
          onHover={() => d && setHoverDate(d)}
        />
      ))}
    </div>
  );
}