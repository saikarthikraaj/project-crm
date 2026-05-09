import React from "react";

export default function StatCard({ label, value, sub, color }) {
  return (
    <div style={{
      background:"#fff", borderRadius:18, padding:"22px 24px",
      flex:1, minWidth:175,
      boxShadow:"0 4px 20px rgba(0,0,0,0.06)",
      border:"1.5px solid #f1f5f9",
      position:"relative", overflow:"hidden",
      transition:"all 0.25s ease", cursor:"default",
    }}
      onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="0 12px 32px rgba(0,0,0,0.1)";e.currentTarget.style.borderColor=color+"44";}}
      onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 4px 20px rgba(0,0,0,0.06)";e.currentTarget.style.borderColor="#f1f5f9";}}
    >
      <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:`linear-gradient(90deg, ${color}, ${color}88)`, borderRadius:"18px 18px 0 0" }} />
      <div style={{ position:"absolute", top:-16, right:-16, width:80, height:80, borderRadius:"50%", background:color+"18", filter:"blur(16px)" }} />
      <div style={{ fontSize:10, fontWeight:700, color:"#94a3b8", textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:12 }}>{label}</div>
      <div style={{ fontSize:40, fontWeight:800, color:"#0f172a", lineHeight:1, letterSpacing:"-0.04em" }}>{value}</div>
      {sub && <div style={{ fontSize:12, color:"#94a3b8", marginTop:8 }}>{sub}</div>}
    </div>
  );
}