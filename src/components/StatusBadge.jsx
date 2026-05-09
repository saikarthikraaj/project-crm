import React from "react";

const colorMap = {
  "Response Received - Positive": { bg:"#dcfce7", color:"#15803d", dot:"#22c55e", border:"#bbf7d0" },
  "Response Received - Negative": { bg:"#fee2e2", color:"#dc2626", dot:"#ef4444", border:"#fecaca" },
  "Outreach Message Sent":        { bg:"#ede9fe", color:"#7c3aed", dot:"#8b5cf6", border:"#ddd6fe" },
  "Connection Accepted":          { bg:"#dbeafe", color:"#1d4ed8", dot:"#3b82f6", border:"#bfdbfe" },
  "Connection Request Sent":      { bg:"#fef3c7", color:"#b45309", dot:"#f59e0b", border:"#fde68a" },
  "None":                         { bg:"#f1f5f9", color:"#64748b", dot:"#94a3b8", border:"#e2e8f0" },
};

export default function StatusBadge({ status }) {
  const s = colorMap[status] || colorMap["None"];
  return (
    <span style={{
      display:"inline-flex", alignItems:"center", gap:6,
      background:s.bg, color:s.color, fontSize:11, fontWeight:600,
      padding:"4px 10px", borderRadius:99, whiteSpace:"nowrap",
      border:`1.5px solid ${s.border}`,
    }}>
      <span style={{ width:6, height:6, borderRadius:"50%", background:s.dot, flexShrink:0 }} />
      {status}
    </span>
  );
}