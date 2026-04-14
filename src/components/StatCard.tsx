import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  color: "purple" | "yellow" | "green" | "blue";
}

const colorMap = {
  purple: "bg-stat-purple/10 text-stat-purple",
  yellow: "bg-stat-yellow/10 text-stat-yellow",
  green: "bg-stat-green/10 text-stat-green",
  blue: "bg-stat-blue/10 text-stat-blue",
};

const StatCard = ({ icon: Icon, label, value, color }: StatCardProps) => (
  <div className="bg-card rounded-lg border border-border p-4 flex items-center gap-4 animate-fade-in">
    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorMap[color]}`}>
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-2xl font-bold text-foreground">{value.toLocaleString()}</p>
    </div>
  </div>
);

export default StatCard;
