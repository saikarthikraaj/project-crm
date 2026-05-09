import React from "react";

const colorMap = {
  "Category A": { bg:"#e0f2fe", color:"#0369a1", border:"#bae6fd" },
  "Category B": { bg:"#ffedd5", color:"#c2410c", border:"#fed7aa" },
  "Category C": { bg:"#f3e8ff", color:"#7e22ce", border:"#e9d5ff" },
  "Category D": { bg:"#dcfce7", color:"#166534", border:"#bbf7d0" },
};

export default function CategoryTag({ category }) {
  const s = colorMap[category] || { bg:"#f1f5f9", color:"#475569", border:"#e2e8f0" };
  return (
    <span style={{
      display:"inline-block", background:s.bg, color:s.color,
      fontSize:11, fontWeight:700, padding:"4px 10px",
      borderRadius:8, border:`1.5px solid ${s.border}`,
      letterSpacing:"0.03em",
    }}>{category}</span>
  );
}