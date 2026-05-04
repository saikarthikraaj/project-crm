import React from 'react';
// src/components/SourceBadge.jsx
const colorMap = {
    crm_ui:     { bg: "#eff6ff", color: "#2563eb" },
    sheet_sync: { bg: "#f0fdf4", color: "#16a34a" },
    api:        { bg: "#faf5ff", color: "#7c3aed" },
    system:     { bg: "#fff7ed", color: "#c2410c" },
  };
  
  export default function SourceBadge({ source }) {
    const style = colorMap[source] || { bg: "#f1f5f9", color: "#475569" };
    return (
      <span style={{
        background: style.bg,
        color: style.color,
        fontSize: 11,
        fontWeight: 700,
        padding: "2px 9px",
        borderRadius: 99,
      }}>
        {source}
      </span>
    );
  }
