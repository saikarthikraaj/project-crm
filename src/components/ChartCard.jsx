import React from "react";

export default function ChartCard({ title, subtitle, children, style = {} }) {
  return (
    <div style={{
      background:"#fff", borderRadius:18, padding:"22px 22px",
      flex:1, boxShadow:"0 4px 20px rgba(0,0,0,0.06)",
      border:"1.5px solid #f1f5f9", ...style,
    }}>
      <div style={{ marginBottom:18 }}>
        <div style={{ fontSize:15, fontWeight:700, color:"#0f172a" }}>{title}</div>
        {subtitle && <div style={{ fontSize:12, color:"#94a3b8", marginTop:3 }}>{subtitle}</div>}
      </div>
      {children}
    </div>
  );
}