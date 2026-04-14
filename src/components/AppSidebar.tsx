import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard, Users, GraduationCap, UserCheck, BookOpen,
  ClipboardCheck, FileText, Building, UserCircle, Settings
} from "lucide-react";

const navItems = [
  { to: "/", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/students", icon: Users, label: "Students" },
  { to: "/teachers", icon: GraduationCap, label: "Teachers" },
  { to: "/parents", icon: UserCheck, label: "Parents" },
  { to: "/library", icon: BookOpen, label: "Library" },
  { to: "/attendance", icon: ClipboardCheck, label: "Attendance" },
  { to: "/exams", icon: FileText, label: "Exams" },
  { to: "/hostel", icon: Building, label: "Hostel" },
  { to: "/account", icon: UserCircle, label: "Account" },
  { to: "/settings", icon: Settings, label: "Settings" },
];

const AppSidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-56 min-h-screen flex-shrink-0 text-sidebar-fg p-4 flex flex-col" style={{ background: "linear-gradient(180deg, hsl(262 55% 40%), hsl(262 60% 28%))" }}>
      <div className="flex items-center gap-2 mb-8 px-2">
        <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
          <GraduationCap className="w-5 h-5 text-secondary-foreground" />
        </div>
        <span className="text-lg font-bold text-sidebar-fg">Smart</span>
      </div>

      <nav className="flex flex-col gap-1 flex-1">
        {navItems.map(({ to, icon: Icon, label }) => {
          const isActive = location.pathname === to;
          return (
            <NavLink
              key={to}
              to={to}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-primary-foreground/20 text-sidebar-fg"
                  : "text-sidebar-fg/70 hover:bg-primary-foreground/10 hover:text-sidebar-fg"
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default AppSidebar;
