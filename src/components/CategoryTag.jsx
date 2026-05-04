import React from 'react';
// src/components/CategoryTag.jsx
const colorMap = {
    "Category A": { bg: "#e0f2fe", color: "#0369a1" },
    "Category B": { bg: "#ffedd5", color: "#c2410c" },
    "Category C": { bg: "#f3e8ff", color: "#7e22ce" },
    "Category D": { bg: "#dcfce7", color: "#166534" },
  };
  
  export default function CategoryTag({ category }) {
    const style = colorMap[category] || { bg: "#f1f5f9", color: "#475569" };
    return (
      <span style={{
        background: style.bg,
        color: style.color,
        fontSize: 11,
        fontWeight: 700,
        padding: "3px 10px",
        borderRadius: 6,
      }}>
        {category}
      </span>
    );
  }
