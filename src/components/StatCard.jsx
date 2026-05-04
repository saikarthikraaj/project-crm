import React from 'react';
// src/components/StatCard.jsx
export default function StatCard({ label, value, sub, color }) {
    return (
      <div style={{
        background: "#fff",
        borderRadius: 14,
        padding: "20px 24px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
        borderLeft: `5px solid ${color}`,
        flex: 1,
        minWidth: 170,
      }}>
        <div style={{ fontSize: 11, color: "#64748b", fontWeight: 700, marginBottom: 8, letterSpacing: "0.06em", textTransform: "uppercase" }}>
          {label}
        </div>
        <div style={{ fontSize: 34, fontWeight: 800, color: "#0f172a", lineHeight: 1 }}>
          {value}
        </div>
        {sub && (
          <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 6 }}>{sub}</div>
        )}
      </div>
    );
  }
