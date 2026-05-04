import React from 'react';
// src/components/StatusBadge.jsx
const colorMap = {
    "Response Received - Positive": { bg: "#dcfce7", color: "#15803d" },
    "Response Received - Negative": { bg: "#fee2e2", color: "#dc2626" },
    "Outreach Message Sent":        { bg: "#ede9fe", color: "#7c3aed" },
    "Connection Accepted":          { bg: "#dbeafe", color: "#1d4ed8" },
    "Connection Request Sent":      { bg: "#fef3c7", color: "#b45309" },
    "None":                         { bg: "#f1f5f9", color: "#64748b" },
  };
  
  export default function StatusBadge({ status }) {
    const style = colorMap[status] || colorMap["None"];
    return (
      <span style={{
        background: style.bg,
        color: style.color,
        fontSize: 11,
        fontWeight: 700,
        padding: "3px 10px",
        borderRadius: 99,
        whiteSpace: "nowrap",
      }}>
        {status}
      </span>
    );
  }
