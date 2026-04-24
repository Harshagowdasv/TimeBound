import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarView({ selectedDate, setSelectedDate }) {
  return (
    <div className="calendar-wrapper">
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        minDate={new Date()}
      />
    </div>
  );
}

export default CalendarView;