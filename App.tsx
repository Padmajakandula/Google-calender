import { useState } from 'react';
import dayjs from 'dayjs';
import { Calendar } from './components/Calendar';
import { Sidebar } from './components/Sidebar';
import { RightSidebar } from './components/RightSidebar';
import eventsData from './data/events.json';
import { Event } from './types/event';

function App() {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const events: Event[] = eventsData;

  const handleMonthChange = (newMonth: dayjs.Dayjs) => {
    setCurrentMonth(newMonth);
  };

  return (
    <div className="min-h-screen bg-white flex overflow-hidden">
      <Sidebar
        selectedDate={selectedDate}
        onDateSelect={setSelectedDate}
        currentMonth={currentMonth}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-auto">
          <Calendar
            selectedDate={selectedDate}
            onDateSelect={setSelectedDate}
            currentMonth={currentMonth}
            onMonthChange={handleMonthChange}
            events={events}
          />
        </div>
      </div>

      <RightSidebar selectedDate={selectedDate} events={events} />
    </div>
  );
}

export default App;
