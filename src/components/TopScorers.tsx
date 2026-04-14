import { Trophy } from "lucide-react";

const scorers = [
  { name: "Branden Harris", score: 99.9, rank: 1 },
  { name: "Charles James", score: 99.76, rank: 2 },
  { name: "Mike Rogers", score: 99.5, rank: 3 },
];

const rankColors = ["bg-secondary text-secondary-foreground", "bg-muted text-muted-foreground", "bg-accent text-accent-foreground"];

const TopScorers = () => (
  <div className="bg-card rounded-lg border border-border p-5">
    <div className="flex items-center justify-between mb-4">
      <h3 className="font-semibold text-foreground">Top Scorers</h3>
      <span className="text-xs text-muted-foreground">2024-2025</span>
    </div>
    <div className="flex gap-3">
      {scorers.map((s, i) => (
        <div key={s.name} className={`flex-1 rounded-lg p-3 text-center ${rankColors[i]}`}>
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
            <Trophy className="w-5 h-5 text-primary" />
          </div>
          <p className="text-xs font-medium truncate">{s.name}</p>
          <p className="text-lg font-bold">{s.score}%</p>
          <span className="text-xs">{i === 0 ? "1st" : i === 1 ? "2nd" : "3rd"}</span>
        </div>
      ))}
    </div>
  </div>
);

export default TopScorers;
