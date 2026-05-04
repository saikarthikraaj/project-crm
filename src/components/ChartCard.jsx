import React from 'react';
// src/components/ChartCard.jsx
export default function ChartCard({ title, children, style = {} }) {
    return (
      <div style={{
        background: "#fff",
        borderRadius: 14,
        padding: "20px 20px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
        flex: 1,
        ...style,
      }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", marginBottom: 18 }}>
          {title}
        </div>
        {children}
      </div>
    );
  }
