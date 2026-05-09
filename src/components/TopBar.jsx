import React from "react";
import { useNavigate } from "react-router-dom";

export default function TopBar({ title, subtitle }) {
  const navigate = useNavigate();
  return (
    <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:28, flexWrap:"wrap", gap:16 }}>
      <div>
        <div style={{ fontSize:26, fontWeight:800, color:"#0f172a", letterSpacing:"-0.03em" }}>{title}</div>
        {subtitle && <div style={{ fontSize:13, color:"#94a3b8", marginTop:5 }}>{subtitle}</div>}
      </div>
      <button
        onClick={() => navigate("/sync")}
        style={{
          display:"flex", alignItems:"center", gap:8,
          background:"linear-gradient(135deg, #6366f1, #8b5cf6)",
          color:"#fff", border:"none", borderRadius:12,
          padding:"11px 20px", fontSize:13, fontWeight:700,
          cursor:"pointer", boxShadow:"0 4px 16px rgba(99,102,241,0.35)",
          transition:"all 0.2s",
        }}
        onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 8px 24px rgba(99,102,241,0.45)";}}
        onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 4px 16px rgba(99,102,241,0.35)";}}
      >↻ Sync Now</button>
    </div>
  );
}