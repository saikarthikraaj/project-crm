import React from "react";
import { NavLink } from "react-router-dom";

const NAV = [
  { to:"/",          icon:"📊", label:"Dashboard"  },
  { to:"/contacts",  icon:"👥", label:"Contacts"   },
  { to:"/companies", icon:"🏢", label:"Companies"  },
  { to:"/audit",     icon:"📋", label:"Audit Log"  },
  { to:"/sync",      icon:"🔄", label:"Sync"       },
  { to:"/reports",   icon:"📈", label:"Reports"    },
];

export default function Sidebar() {
  return (
    <aside style={{
      width: 240,
      minHeight: "100vh",
      background: "#ffffff",
      borderRight: "1.5px solid #e2e8f0",
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      top: 0, left: 0,
      zIndex: 100,
      boxShadow: "4px 0 24px rgba(99,102,241,0.06)",
    }}>
      <div style={{ padding:"28px 22px 22px", borderBottom:"1.5px solid #f1f5f9" }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <div style={{
            width:38, height:38, borderRadius:12,
            background:"linear-gradient(135deg, #6366f1, #8b5cf6)",
            display:"flex", alignItems:"center", justifyContent:"center",
            fontSize:18, fontWeight:800, color:"#fff",
            boxShadow:"0 4px 12px rgba(99,102,241,0.35)",
          }}>Z</div>
          <div>
            <div style={{ fontSize:16, fontWeight:800, color:"#0f172a" }}>
              Zoho<span style={{ color:"#6366f1" }}>CRM</span>
            </div>
            <div style={{ fontSize:10, color:"#94a3b8", letterSpacing:"0.06em", textTransform:"uppercase" }}>Outreach Suite</div>
          </div>
        </div>
      </div>

      <nav style={{ padding:"14px 12px", flex:1, display:"flex", flexDirection:"column", gap:3 }}>
        {NAV.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            style={({ isActive }) => ({
              display:"flex", alignItems:"center", gap:11,
              padding:"11px 14px", borderRadius:12,
              fontSize:13.5, fontWeight: isActive ? 700 : 500,
              color: isActive ? "#6366f1" : "#64748b",
              background: isActive ? "linear-gradient(135deg, #eef2ff, #ede9fe)" : "transparent",
              boxShadow: isActive ? "0 2px 8px rgba(99,102,241,0.15)" : "none",
              border: isActive ? "1.5px solid #c7d2fe" : "1.5px solid transparent",
              textDecoration:"none",
              transition:"all 0.18s ease",
            })}
          >
            <span style={{ fontSize:16 }}>{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div style={{ padding:"16px 20px", borderTop:"1.5px solid #f1f5f9" }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <div style={{
            width:34, height:34, borderRadius:"50%",
            background:"linear-gradient(135deg, #6366f1, #8b5cf6)",
            display:"flex", alignItems:"center", justifyContent:"center",
            fontSize:14, fontWeight:700, color:"#fff",
          }}>A</div>
          <div>
            <div style={{ fontSize:13, fontWeight:600, color:"#0f172a" }}>Admin User</div>
            <div style={{ fontSize:11, color:"#94a3b8" }}>admin@zohocrm.io</div>
          </div>
        </div>
      </div>
    </aside>
  );
}