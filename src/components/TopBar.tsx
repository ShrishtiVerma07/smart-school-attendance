import { Search, Bell, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";

const TopBar = () => (
  <header className="flex items-center justify-between px-6 py-4 bg-card border-b border-border">
    <div className="flex items-center gap-4">
      <h1 className="text-lg font-semibold text-foreground">Welcome to <span className="text-primary">Smart</span></h1>
      <div className="relative w-64">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input placeholder="Search..." className="pl-9 bg-muted border-0 h-9" />
      </div>
    </div>
    <div className="flex items-center gap-3">
      <button className="relative p-2 rounded-lg hover:bg-muted transition-colors">
        <Bell className="w-5 h-5 text-muted-foreground" />
        <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
      </button>
      <button className="p-2 rounded-lg hover:bg-muted transition-colors">
        <MessageSquare className="w-5 h-5 text-muted-foreground" />
      </button>
      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-semibold">
        A
      </div>
    </div>
  </header>
);

export default TopBar;
