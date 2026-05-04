import React from 'react';
// src/components/TopBar.jsx
import { useNavigate } from "react-router-dom";

export default function TopBar({ title, subtitle }) {
  const navigate = useNavigate();
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 28,
      flexWrap: "wrap",
      gap: 12,
    }}>
      <div>
        <div style={{ fontSize: 22, fontWeight: 800, color: "#0f172a", letterSpacing: "-0.02em" }}>
          {title}
        </div>
        {subtitle && (
          <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 2 }}>{subtitle}</div>
        )}
      </div>
      <button
        onClick={() => navigate("/sync")}
        style={{
          background: "#0f172a", color: "#38bdf8",
          border: "none", borderRadius: 8,
          padding: "9px 18px", fontSize: 13,
          fontWeight: 700, cursor: "pointer",
        }}
      >
        ⟳ Sync Now
      </button>
    </div>
  );
}
