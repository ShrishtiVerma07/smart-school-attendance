import { useState } from "react";
import { Check, X, Clock, Download, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Status = "present" | "absent" | "late" | "unmarked";

interface Student {
  id: number;
  name: string;
  rollNo: string;
  class: string;
  status: Status;
}

const initialStudents: Student[] = [
  { id: 1, name: "Aarav Sharma", rollNo: "001", class: "10-A", status: "unmarked" },
  { id: 2, name: "Priya Patel", rollNo: "002", class: "10-A", status: "unmarked" },
  { id: 3, name: "Rahul Singh", rollNo: "003", class: "10-A", status: "unmarked" },
  { id: 4, name: "Sneha Gupta", rollNo: "004", class: "10-A", status: "unmarked" },
  { id: 5, name: "Vikram Kumar", rollNo: "005", class: "10-A", status: "unmarked" },
  { id: 6, name: "Ananya Reddy", rollNo: "006", class: "10-A", status: "unmarked" },
  { id: 7, name: "Karan Mehta", rollNo: "007", class: "10-A", status: "unmarked" },
  { id: 8, name: "Divya Nair", rollNo: "008", class: "10-A", status: "unmarked" },
  { id: 9, name: "Rohan Joshi", rollNo: "009", class: "10-A", status: "unmarked" },
  { id: 10, name: "Meera Iyer", rollNo: "010", class: "10-A", status: "unmarked" },
  { id: 11, name: "Arjun Das", rollNo: "011", class: "10-B", status: "unmarked" },
  { id: 12, name: "Pooja Rao", rollNo: "012", class: "10-B", status: "unmarked" },
];

const statusConfig: Record<Status, { icon: typeof Check; label: string; className: string }> = {
  present: { icon: Check, label: "Present", className: "bg-success/15 text-success border-success/30" },
  absent: { icon: X, label: "Absent", className: "bg-destructive/15 text-destructive border-destructive/30" },
  late: { icon: Clock, label: "Late", className: "bg-warning/15 text-warning border-warning/30" },
  unmarked: { icon: Clock, label: "Unmarked", className: "bg-muted text-muted-foreground border-border" },
};

const Attendance = () => {
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [selectedClass, setSelectedClass] = useState("10-A");
  const [search, setSearch] = useState("");

  const markStatus = (id: number, status: Status) => {
    setStudents((prev) => prev.map((s) => (s.id === id ? { ...s, status } : s)));
  };

  const markAll = (status: Status) => {
    setStudents((prev) => prev.map((s) => (s.class === selectedClass ? { ...s, status } : s)));
  };

  const filtered = students.filter(
    (s) => s.class === selectedClass && s.name.toLowerCase().includes(search.toLowerCase())
  );

  const counts = filtered.reduce(
    (acc, s) => ({ ...acc, [s.status]: (acc[s.status] || 0) + 1 }),
    { present: 0, absent: 0, late: 0, unmarked: 0 } as Record<Status, number>
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Attendance</h2>
          <p className="text-sm text-muted-foreground">{new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
        <Button variant="outline" size="sm" className="gap-2">
          <Download className="w-4 h-4" /> Export
        </Button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {(["present", "absent", "late", "unmarked"] as Status[]).map((s) => {
          const cfg = statusConfig[s];
          return (
            <div key={s} className={`rounded-lg border p-3 text-center ${cfg.className}`}>
              <p className="text-2xl font-bold">{counts[s]}</p>
              <p className="text-xs font-medium">{cfg.label}</p>
            </div>
          );
        })}
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 flex-wrap">
        <Select value={selectedClass} onValueChange={setSelectedClass}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10-A">Class 10-A</SelectItem>
            <SelectItem value="10-B">Class 10-B</SelectItem>
          </SelectContent>
        </Select>
        <Input placeholder="Search student..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-56" />
        <div className="ml-auto flex gap-2">
          <Button size="sm" variant="outline" onClick={() => markAll("present")} className="text-success border-success/30 hover:bg-success/10">Mark All Present</Button>
          <Button size="sm" variant="outline" onClick={() => markAll("absent")} className="text-destructive border-destructive/30 hover:bg-destructive/10">Mark All Absent</Button>
        </div>
      </div>

      {/* Student List */}
      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">Roll No</th>
              <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">Student Name</th>
              <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">Class</th>
              <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">Status</th>
              <th className="text-center text-xs font-medium text-muted-foreground px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((student) => {
              const cfg = statusConfig[student.status];
              const Icon = cfg.icon;
              return (
                <tr key={student.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                  <td className="px-4 py-3 text-sm font-mono text-foreground">{student.rollNo}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-semibold">
                        {student.name.charAt(0)}
                      </div>
                      <span className="text-sm font-medium text-foreground">{student.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{student.class}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${cfg.className}`}>
                      <Icon className="w-3 h-3" /> {cfg.label}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-center gap-1">
                      <button onClick={() => markStatus(student.id, "present")} className="p-1.5 rounded-md hover:bg-success/15 text-success transition-colors" title="Present">
                        <Check className="w-4 h-4" />
                      </button>
                      <button onClick={() => markStatus(student.id, "absent")} className="p-1.5 rounded-md hover:bg-destructive/15 text-destructive transition-colors" title="Absent">
                        <X className="w-4 h-4" />
                      </button>
                      <button onClick={() => markStatus(student.id, "late")} className="p-1.5 rounded-md hover:bg-warning/15 text-warning transition-colors" title="Late">
                        <Clock className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;
