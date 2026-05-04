import React from 'react';
// src/pages/Sync.jsx
import { useState } from "react";
import TopBar from "../components/TopBar";

const SOURCES = [
  { id:1, sector:"SaaS",       file:"zoho_saas.xlsx",      lastSync:"2024-04-21 10:00", status:"success", records:62 },
  { id:2, sector:"FinTech",    file:"zoho_fintech.xlsx",    lastSync:"2024-04-21 09:30", status:"success", records:48 },
  { id:3, sector:"HealthTech", file:"zoho_health.xlsx",     lastSync:"2024-04-20 18:00", status:"partial", records:36 },
  { id:4, sector:"EdTech",     file:"zoho_edtech.xlsx",     lastSync:"2024-04-20 17:00", status:"success", records:54 },
  { id:5, sector:"Logistics",  file:"zoho_logistics.xlsx",  lastSync:"2024-04-19 12:00", status:"failed",  records:0  },
  { id:6, sector:"HRTech",     file:"zoho_hrtech.xlsx",     lastSync:"2024-04-19 10:00", status:"success", records:40 },
];

const statusStyle = {
  success: { bg:"#dcfce7", color:"#15803d", label:"✓ Success"  },
  partial: { bg:"#fef3c7", color:"#b45309", label:"⚠ Partial"  },
  failed:  { bg:"#fee2e2", color:"#dc2626", label:"✗ Failed"   },
  syncing: { bg:"#dbeafe", color:"#1d4ed8", label:"⟳ Syncing…" },
};

export default function Sync() {
  const [sources, setSources] = useState(SOURCES);
  const [syncing, setSyncing] = useState({});
  const [toast,   setToast]   = useState(null);

  const triggerSync = (id) => {
    setSyncing(s=>({...s,[id]:true}));
    setTimeout(()=>{
      setSources(prev=>prev.map(s=>s.id===id?{...s,status:"success",lastSync:new Date().toLocaleString("en-IN")}:s));
      setSyncing(s=>{const n={...s};delete n[id];return n;});
      setToast(`Sync complete for ${SOURCES.find(s=>s.id===id)?.sector}`);
      setTimeout(()=>setToast(null),3000);
    },2000);
  };

  return (
    <div>
      <TopBar title="Sync Management" subtitle="Connect and sync Zoho Sheet sources" />
      {toast && <div style={{ background:"#dcfce7", color:"#15803d", padding:"12px 18px", borderRadius:10, marginBottom:18, fontWeight:600, fontSize:13 }}>✓ {toast}</div>}
      <div style={{ display:"flex", gap:14, marginBottom:22, flexWrap:"wrap" }}>
        {[{label:"Total Sources",value:SOURCES.length,color:"#38bdf8"},{label:"Success",value:SOURCES.filter(s=>s.status==="success").length,color:"#10b981"},{label:"Partial",value:SOURCES.filter(s=>s.status==="partial").length,color:"#f59e0b"},{label:"Failed",value:SOURCES.filter(s=>s.status==="failed").length,color:"#ef4444"}].map(c=>(
          <div key={c.label} style={{ background:"#fff", borderRadius:12, padding:"16px 20px", flex:1, minWidth:130, boxShadow:"0 2px 12px rgba(0,0,0,0.07)", borderLeft:`4px solid ${c.color}` }}>
            <div style={{ fontSize:11, color:"#64748b", fontWeight:700, textTransform:"uppercase" }}>{c.label}</div>
            <div style={{ fontSize:28, fontWeight:800, color:"#0f172a", marginTop:4 }}>{c.value}</div>
          </div>
        ))}
      </div>
      <div style={{ background:"#fff", borderRadius:14, padding:"22px 24px", boxShadow:"0 2px 12px rgba(0,0,0,0.07)" }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:16 }}>
          <div style={{ fontSize:15, fontWeight:700, color:"#0f172a" }}>Sync Sources</div>
          <button onClick={()=>sources.forEach(s=>triggerSync(s.id))} style={{ background:"#0f172a", color:"#38bdf8", border:"none", borderRadius:8, padding:"9px 18px", fontSize:13, fontWeight:700, cursor:"pointer" }}>⟳ Sync All</button>
        </div>
        <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
          <thead><tr style={{ borderBottom:"2px solid #f1f5f9" }}>
            {["Sector","File","Last Sync","Records","Status","Action"].map(h=>(
              <th key={h} style={{ padding:"8px 12px", textAlign:"left", color:"#64748b", fontWeight:700, fontSize:11, textTransform:"uppercase" }}>{h}</th>
            ))}
          </tr></thead>
          <tbody>
            {sources.map((src,i)=>{
              const isSyncing=syncing[src.id];
              const st=isSyncing?statusStyle.syncing:statusStyle[src.status];
              return (
                <tr key={src.id} style={{ borderBottom:"1px solid #f8fafc", background:i%2===0?"#fff":"#f8fafc" }}>
                  <td style={{ padding:"12px 12px", fontWeight:700, color:"#0f172a" }}>{src.sector}</td>
                  <td style={{ padding:"12px 12px", color:"#64748b", fontSize:12, fontFamily:"monospace" }}>{src.file}</td>
                  <td style={{ padding:"12px 12px", color:"#94a3b8", fontSize:12 }}>{src.lastSync}</td>
                  <td style={{ padding:"12px 12px" }}><span style={{ background:"#ede9fe", color:"#7c3aed", fontSize:12, fontWeight:700, padding:"2px 9px", borderRadius:99 }}>{src.records}</span></td>
                  <td style={{ padding:"12px 12px" }}><span style={{ background:st.bg, color:st.color, fontSize:11, fontWeight:700, padding:"3px 10px", borderRadius:99 }}>{st.label}</span></td>
                  <td style={{ padding:"12px 12px" }}><button onClick={()=>triggerSync(src.id)} disabled={isSyncing} style={{ background:isSyncing?"#f1f5f9":"#0f172a", color:isSyncing?"#94a3b8":"#38bdf8", border:"none", borderRadius:7, padding:"7px 14px", fontSize:12, fontWeight:700, cursor:isSyncing?"not-allowed":"pointer" }}>{isSyncing?"Syncing…":"⟳ Sync"}</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
