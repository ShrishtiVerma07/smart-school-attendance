import { useState } from "react";
import { Search, Plus, MoreVertical } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const studentData = [
  { id: 1, name: "Aarav Sharma", rollNo: "001", class: "10-A", gender: "Male", phone: "9876543210", attendance: 95 },
  { id: 2, name: "Priya Patel", rollNo: "002", class: "10-A", gender: "Female", phone: "9876543211", attendance: 92 },
  { id: 3, name: "Rahul Singh", rollNo: "003", class: "10-A", gender: "Male", phone: "9876543212", attendance: 88 },
  { id: 4, name: "Sneha Gupta", rollNo: "004", class: "10-A", gender: "Female", phone: "9876543213", attendance: 96 },
  { id: 5, name: "Vikram Kumar", rollNo: "005", class: "10-A", gender: "Male", phone: "9876543214", attendance: 78 },
  { id: 6, name: "Ananya Reddy", rollNo: "006", class: "10-B", gender: "Female", phone: "9876543215", attendance: 91 },
  { id: 7, name: "Karan Mehta", rollNo: "007", class: "10-B", gender: "Male", phone: "9876543216", attendance: 85 },
  { id: 8, name: "Divya Nair", rollNo: "008", class: "10-B", gender: "Female", phone: "9876543217", attendance: 97 },
];

const Students = () => {
  const [search, setSearch] = useState("");
  const filtered = studentData.filter((s) => s.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Students</h2>
        <Button size="sm" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="w-4 h-4" /> Add Student
        </Button>
      </div>

      <div className="relative w-72">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input placeholder="Search students..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
      </div>

      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              {["Roll No", "Name", "Class", "Gender", "Phone", "Attendance", ""].map((h) => (
                <th key={h} className="text-left text-xs font-medium text-muted-foreground px-4 py-3">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((s) => (
              <tr key={s.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 text-sm font-mono text-foreground">{s.rollNo}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-semibold">{s.name.charAt(0)}</div>
                    <span className="text-sm font-medium text-foreground">{s.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-muted-foreground">{s.class}</td>
                <td className="px-4 py-3 text-sm text-muted-foreground">{s.gender}</td>
                <td className="px-4 py-3 text-sm text-muted-foreground">{s.phone}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${s.attendance >= 90 ? "bg-success" : s.attendance >= 80 ? "bg-warning" : "bg-destructive"}`} style={{ width: `${s.attendance}%` }} />
                    </div>
                    <span className="text-xs font-medium text-foreground">{s.attendance}%</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <button className="p-1 hover:bg-muted rounded"><MoreVertical className="w-4 h-4 text-muted-foreground" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;
