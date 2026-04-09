import { MONTH_NAMES } from "../data/constants";

export default function Notes({ rangeStart, rangeEnd, month }) {

  function getTitle() {
    if (rangeStart && rangeEnd) {
      return `NOTES FOR ${MONTH_NAMES[month].slice(0,3).toUpperCase()} ${rangeStart} – ${rangeEnd}`;
    }

    if (rangeStart) {
      return `NOTES FOR ${MONTH_NAMES[month].slice(0,3).toUpperCase()} ${rangeStart}`;
    }

    return "MONTH NOTES";
  }

  return (
    <div className="notes">
      <h4>{getTitle()}</h4>
      <textarea placeholder="Add notes, reminders..." />
    </div>
  );
}