import React from 'react';
// src/pages/AuditLog.jsx
import { useState } from "react";
import TopBar      from "../components/TopBar";
import SourceBadge from "../components/SourceBadge";
import { AUDIT_LOG, FOLLOWUP_HISTORY } from "../data/mockData";

const sel = { padding:"8px 12px", borderRadius:8, border:"1px solid #e2e8f0", fontSize:13, color:"#0f172a", background:"#fff", cursor:"pointer" };

export default function AuditLog() {
  const [filterField,  setFilterField]  = useState("all");
  const [filterSource, setFilterSource] = useState("all");
  const [filterType,   setFilterType]   = useState("all");

  const filtered = AUDIT_LOG.filter(r =>
    (filterField==="all"||r.field===filterField) &&
    (filterSource==="all"||r.source===filterSource) &&
    (filterType==="all"||r.entityType===filterType)
  );

  return (
    <div>
      <TopBar title="Audit Log" subtitle="Full history of all CRM changes" />
      <div style={{ background:"#fff", borderRadius:14, padding:"22px 24px", boxShadow:"0 2px 12px rgba(0,0,0,0.07)", marginBottom:22 }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:16, flexWrap:"wrap", gap:10 }}>
          <div style={{ fontSize:15, fontWeight:700, color:"#0f172a" }}>General Audit Log</div>
          <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
            <select style={sel} value={filterType}   onChange={e=>setFilterType(e.target.value)}><option value="all">All Types</option><option value="Contact">Contact</option><option value="Company">Company</option></select>
            <select style={sel} value={filterField}  onChange={e=>setFilterField(e.target.value)}><option value="all">All Fields</option><option value="last_followed_up">last_followed_up</option><option value="outreach_status">outreach_status</option><option value="category">category</option><option value="comments">comments</option><option value="region">region</option></select>
            <select style={sel} value={filterSource} onChange={e=>setFilterSource(e.target.value)}><option value="all">All Sources</option><option value="crm_ui">crm_ui</option><option value="sheet_sync">sheet_sync</option><option value="api">api</option></select>
            <button onClick={()=>{setFilterField("all");setFilterSource("all");setFilterType("all");}} style={{ ...sel, background:"#f1f5f9", color:"#475569", fontWeight:600 }}>Clear</button>
          </div>
        </div>
        <div style={{ overflowX:"auto" }}>
          <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12 }}>
            <thead><tr style={{ borderBottom:"2px solid #f1f5f9" }}>
              {["#","Timestamp","Entity","Type","Field","Old Value","New Value","By","Source"].map(h=>(
                <th key={h} style={{ padding:"7px 10px", textAlign:"left", color:"#64748b", fontWeight:700, fontSize:11, textTransform:"uppercase" }}>{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {filtered.map((row,i)=>(
                <tr key={row.id} style={{ borderBottom:"1px solid #f8fafc", background:i%2===0?"#fff":"#f8fafc" }}>
                  <td style={{ padding:"9px 10px", color:"#94a3b8" }}>{row.id}</td>
                  <td style={{ padding:"9px 10px", color:"#475569", whiteSpace:"nowrap" }}>{row.time}</td>
                  <td style={{ padding:"9px 10px", fontWeight:600, color:"#0f172a" }}>{row.entity}</td>
                  <td style={{ padding:"9px 10px" }}><span style={{ fontSize:11, fontWeight:700, padding:"2px 7px", borderRadius:99, background:row.entityType==="Contact"?"#eff6ff":"#fdf4ff", color:row.entityType==="Contact"?"#2563eb":"#7c3aed" }}>{row.entityType}</span></td>
                  <td style={{ padding:"9px 10px" }}><span style={{ background:"#fef3c7", color:"#92400e", fontSize:11, fontWeight:700, padding:"2px 7px", borderRadius:99 }}>{row.field}</span></td>
                  <td style={{ padding:"9px 10px", color:"#94a3b8" }}>{row.oldVal||"—"}</td>
                  <td style={{ padding:"9px 10px", color:"#10b981", fontWeight:600 }}>{row.newVal}</td>
                  <td style={{ padding:"9px 10px", color:"#475569" }}>{row.by}</td>
                  <td style={{ padding:"9px 10px" }}><SourceBadge source={row.source} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ background:"#fff", borderRadius:14, padding:"22px 24px", boxShadow:"0 2px 12px rgba(0,0,0,0.07)" }}>
        <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:6 }}>
          <div style={{ fontSize:15, fontWeight:700, color:"#0f172a" }}>Last Followed Up — Change History</div>
          <span style={{ background:"#fef2f2", color:"#dc2626", fontSize:11, fontWeight:700, padding:"2px 9px", borderRadius:99 }}>READ-ONLY · APPEND-ONLY</span>
        </div>
        <div style={{ fontSize:12, color:"#94a3b8", marginBottom:16 }}>Every change permanently recorded. Cannot be edited or deleted.</div>
        <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12 }}>
          <thead><tr style={{ borderBottom:"2px solid #f1f5f9" }}>
            {["#","Contact","Company","Previous Date","New Date","Changed At","By","Source","Note"].map(h=>(
              <th key={h} style={{ padding:"7px 10px", textAlign:"left", color:"#64748b", fontWeight:700, fontSize:11, textTransform:"uppercase" }}>{h}</th>
            ))}
          </tr></thead>
          <tbody>
            {FOLLOWUP_HISTORY.map((row,i)=>(
              <tr key={row.id} style={{ borderBottom:"1px solid #f8fafc", background:i%2===0?"#fff":"#fafafa" }}>
                <td style={{ padding:"9px 10px", color:"#94a3b8" }}>{row.id}</td>
                <td style={{ padding:"9px 10px", fontWeight:600, color:"#0f172a" }}>{row.contact}</td>
                <td style={{ padding:"9px 10px", color:"#475569" }}>{row.company}</td>
                <td style={{ padding:"9px 10px", color:"#ef4444" }}>{row.oldVal}</td>
                <td style={{ padding:"9px 10px", color:"#10b981", fontWeight:600 }}>{row.newVal}</td>
                <td style={{ padding:"9px 10px", color:"#64748b" }}>{row.changedAt}</td>
                <td style={{ padding:"9px 10px", color:"#475569" }}>{row.by}</td>
                <td style={{ padding:"9px 10px" }}><SourceBadge source={row.source} /></td>
                <td style={{ padding:"9px 10px", color:"#64748b", fontStyle:row.note?"normal":"italic" }}>{row.note||"—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
