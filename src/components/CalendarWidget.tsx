import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const CalendarWidget = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const today = new Date();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let i = 1; i <= daysInMonth; i++) cells.push(i);

  const isToday = (d: number) =>
    d === today.getDate() && month === today.getMonth() && year === today.getFullYear();

  const navigate = (dir: number) => {
    setCurrentDate(new Date(year, month + dir, 1));
  };

  const monthName = currentDate.toLocaleString("default", { month: "long", year: "numeric" });

  // Mock attendance data
  const presentDays = [2, 5, 7, 10, 12, 14, 17, 19, 21, 24, 26];
  const absentDays = [3, 11, 23, 28];

  return (
    <div className="bg-card rounded-lg border border-border p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-foreground">Calendar & Attendance</h3>
        <div className="flex items-center gap-2">
          <button onClick={() => navigate(-1)} className="p-1 hover:bg-muted rounded">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-sm font-medium">{monthName}</span>
          <button onClick={() => navigate(1)} className="p-1 hover:bg-muted rounded">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {DAYS.map((d) => (
          <div key={d} className="text-xs font-medium text-muted-foreground py-1">{d}</div>
        ))}
        {cells.map((day, i) => (
          <div key={i} className="py-1">
            {day && (
              <span
                className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm transition-colors ${
                  isToday(day)
                    ? "bg-primary text-primary-foreground font-bold"
                    : presentDays.includes(day)
                    ? "bg-success/15 text-success font-medium"
                    : absentDays.includes(day)
                    ? "bg-destructive/15 text-destructive font-medium"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {day}
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-3 text-xs text-muted-foreground">
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-success" /> Present</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-destructive" /> Absent</span>
      </div>
    </div>
  );
};

export default CalendarWidget;
