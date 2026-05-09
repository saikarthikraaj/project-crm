import React from "react";

const colorMap = {
  crm_ui:     { bg:"#eff6ff", color:"#2563eb", border:"#bfdbfe" },
  sheet_sync: { bg:"#f0fdf4", color:"#16a34a", border:"#bbf7d0" },
  api:        { bg:"#faf5ff", color:"#7c3aed", border:"#e9d5ff" },
  system:     { bg:"#fff7ed", color:"#c2410c", border:"#fed7aa" },
};

export default function SourceBadge({ source }) {
  const s = colorMap[source] || { bg:"#f1f5f9", color:"#475569", border:"#e2e8f0" };
  return (
    <span style={{
      display:"inline-block", background:s.bg, color:s.color,
      fontSize:10, fontWeight:700, padding:"3px 9px",
      borderRadius:99, border:`1.5px solid ${s.border}`,
      letterSpacing:"0.05em", textTransform:"uppercase",
      fontFamily:"monospace",
    }}>{source}</span>
  );
}