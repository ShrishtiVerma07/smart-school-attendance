const activities = [
  {
    school: "St. Xavier School",
    date: "02 Oct, 2024",
    text: "Annual parent-teacher meeting scheduled for next month. All parents and teachers are invited.",
  },
  {
    school: "Modern International School",
    date: "05 Oct, 2024",
    text: "Science fair registration open for students of class 6-12. Last date: 15th October.",
  },
  {
    school: "Green Valley Academy",
    date: "08 Oct, 2024",
    text: "Sports day practice begins next week. Students to report at 7 AM.",
  },
];

const ActivityFeed = () => (
  <div className="bg-card rounded-lg border border-border p-5">
    <div className="flex items-center justify-between mb-4">
      <h3 className="font-semibold text-foreground">Activities & Notifications</h3>
      <button className="text-xs text-primary font-medium hover:underline">View All</button>
    </div>
    <div className="space-y-3">
      {activities.map((a, i) => (
        <div key={i} className="p-3 rounded-lg bg-muted/50">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-semibold text-foreground">{a.school}</span>
            <span className="text-xs text-muted-foreground">{a.date}</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">{a.text}</p>
        </div>
      ))}
    </div>
  </div>
);

export default ActivityFeed;
