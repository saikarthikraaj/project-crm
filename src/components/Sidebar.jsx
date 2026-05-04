import React from "react";
import { NavLink } from "react-router-dom";

const NAV = [
  { to: "/",          label: "📊  Dashboard"  },
  { to: "/contacts",  label: "👥  Contacts"   },
  { to: "/companies", label: "🏢  Companies"  },
  { to: "/audit",     label: "📋  Audit Log"  },
  { to: "/sync",      label: "🔄  Sync"       },
  { to: "/reports",   label: "📈  Reports"    },
];

export default function Sidebar() {
  return (
    <aside style={{
      width: 220,
      minHeight: "100vh",
      background: "#0f172a",
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      top: 0, left: 0,
      zIndex: 100,
    }}>
      <div style={{ padding: "24px 22px 20px", borderBottom: "1px solid #1e293b" }}>
        <div style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>
          Zoho <span style={{ color: "#38bdf8" }}>CRM</span>
        </div>
        <div style={{ fontSize: 11, color: "#475569", marginTop: 2 }}>Outreach Manager</div>
      </div>
      <nav style={{ padding: "12px 0", flex: 1 }}>
        {NAV.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            style={({ isActive }) => ({
              display: "block",
              padding: "11px 22px",
              fontSize: 13,
              fontWeight: 600,
              color: isActive ? "#38bdf8" : "#94a3b8",
              background: isActive ? "#1e3a5f" : "transparent",
              borderLeft: isActive ? "3px solid #38bdf8" : "3px solid transparent",
              textDecoration: "none",
            })}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div style={{ padding: "16px 22px", borderTop: "1px solid #1e293b" }}>
        <div style={{ fontSize: 11, color: "#334155" }}>Logged in as</div>
        <div style={{ fontSize: 13, fontWeight: 600, color: "#94a3b8", marginTop: 2 }}>admin</div>
      </div>
    </aside>
  );
}