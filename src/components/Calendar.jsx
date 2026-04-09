import { useState } from "react";
import "../styles/calendar.css";
import { MONTH_NAMES, DAY_NAMES, MONTH_IMAGES } from "../data/constants";
import { getDaysInMonth, getFirstDay } from "../utils/dateUtils";
import HeroSection from "./HeroSection";
import Header from "./Header";
import CalendarGrid from "./CalendarGrid";
import { HOLIDAYS } from "../data/constants";
import Notes from "./Notes";

export default function Calendar() {
  const today = new Date();

  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const [rangeStart, setRangeStart] = useState(null);
  const [rangeEnd, setRangeEnd] = useState(null);
  const [hoverDate, setHoverDate] = useState(null);

  const [darkMode, setDarkMode] = useState(false);

  const data = MONTH_IMAGES[3]; // April design

  function changeMonth(dir) {
    let newMonth = month + dir;
    let newYear = year;

    if (newMonth > 11) {
        newMonth = 0;
        newYear = year + 1;
    } else if (newMonth < 0) {
        newMonth = 11;
        newYear = year - 1;
    }

    setMonth(newMonth);
    setYear(newYear);
    }

  function handleDayClick(day) {
    if (!rangeStart || (rangeStart && rangeEnd)) {
      setRangeStart(day);
      setRangeEnd(null);
    } else {
      setRangeEnd(day);
    }
  }
  function isToday(day) {
    return (
        day === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear()
    );
    }
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDay(year, month);

  const days = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let d = 1; d <= daysInMonth; d++) days.push(d);

  function isInRange(day) {
  if (!rangeStart || !rangeEnd) return false;

  const start = Math.min(rangeStart, rangeEnd);
  const end = Math.max(rangeStart, rangeEnd);

  return day > start && day < end;
}

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="calendar-card">

        {/* Spiral */}
        <div className="spiral">
          {Array.from({ length: 18 }).map((_, i) => <div key={i} />)}
          <button onClick={() => setDarkMode(!darkMode)}>🌙</button>
        </div>

        <div className="layout">
          <HeroSection data={data} month={MONTH_NAMES[month]} year={year} />

          <div className="right">
            <Header month={MONTH_NAMES[month]} year={year} changeMonth={changeMonth} />

            <div className="days">
              {DAY_NAMES.map(d => <div key={d}>{d}</div>)}
            </div>

            <CalendarGrid
              days={days}
              onClick={handleDayClick}
              rangeStart={rangeStart}
              rangeEnd={rangeEnd}
              isInRange={isInRange}
              setHoverDate={setHoverDate}
              holidays={HOLIDAYS}   // ✅ ADD THIS
              month={month}
              isToday={isToday}
            />
            {(rangeStart || rangeEnd) && (
              <div className="range-info">
                <span>
                  {rangeStart && `Apr ${rangeStart}`}
                  {rangeEnd && ` → Apr ${rangeEnd}`}
                  {rangeEnd && ` (${Math.abs(rangeEnd - rangeStart) + 1} days)`}
                </span>

                <button
                  onClick={() => {
                    setRangeStart(null);
                    setRangeEnd(null);
                  }}
                >
                  ✕
                </button>
              </div>
            )}

            <Notes 
                rangeStart={rangeStart} 
                rangeEnd={rangeEnd}
                month={month}
                />
          </div>
        </div>
      </div>
    </div>
  );
}