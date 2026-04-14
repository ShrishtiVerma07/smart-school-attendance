import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", govt: 80, private: 65, avg: 72 },
  { name: "Feb", govt: 75, private: 70, avg: 68 },
  { name: "Mar", govt: 85, private: 78, avg: 76 },
  { name: "Apr", govt: 90, private: 82, avg: 80 },
  { name: "May", govt: 88, private: 75, avg: 78 },
  { name: "Jun", govt: 92, private: 85, avg: 83 },
];

const PerformanceChart = () => (
  <div className="bg-card rounded-lg border border-border p-5">
    <h3 className="font-semibold text-foreground mb-4">School Performance</h3>
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data} barGap={2} barSize={12}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(250 15% 90%)" />
        <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="hsl(250 10% 50%)" />
        <YAxis tick={{ fontSize: 12 }} stroke="hsl(250 10% 50%)" />
        <Tooltip />
        <Legend iconType="circle" wrapperStyle={{ fontSize: 12 }} />
        <Bar dataKey="govt" name="Govt. School" fill="hsl(262 60% 50%)" radius={[4, 4, 0, 0]} />
        <Bar dataKey="private" name="Private School" fill="hsl(45 100% 55%)" radius={[4, 4, 0, 0]} />
        <Bar dataKey="avg" name="Average" fill="hsl(142 70% 45%)" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default PerformanceChart;
