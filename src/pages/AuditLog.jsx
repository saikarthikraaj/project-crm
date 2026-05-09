import React, { useState } from "react";
import TopBar from "../components/TopBar";
import SourceBadge from "../components/SourceBadge";
import { AUDIT_LOG, FOLLOWUP_HISTORY } from "../data/mockData";

const iS = { background:"#fff", border:"1.5px solid #e2e8f0", borderRadius:10, color:"#0f172a", fontFamily:"inherit", fontSize:12, padding:"8px 12px", outline:"none", cursor:"pointer", boxShadow:"0 1px 3px rgba(0,0,0,0.05)" };

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
    <div className="fade-up">
      <TopBar title="Audit Log" subtitle="Complete change history across the CRM" />

      <div style={{ display:"flex", gap:12, marginBottom:22, flexWrap:"wrap" }}>
        {[
          { label:"Total Changes",  value:AUDIT_LOG.length,                                    color:"#6366f1", bg:"#eef2ff" },
          { label:"Contacts",       value:AUDIT_LOG.filter(r=>r.entityType==="Contact").length, color:"#8b5cf6", bg:"#f5f3ff" },
          { label:"Companies",      value:AUDIT_LOG.filter(r=>r.entityType==="Company").length, color:"#06b6d4", bg:"#ecfeff" },
          { label:"Follow-Up Logs", value:FOLLOWUP_HISTORY.length,                             color:"#ef4444", bg:"#fef2f2" },
        ].map(s=>(
          <div key={s.label} style={{ background:s.bg, borderRadius:14, padding:"14px 20px", display:"flex", alignItems:"center", gap:12, flex:1, minWidth:140, border:`1.5px solid ${s.color}22`, boxShadow:"0 2px 8px rgba(0,0,0,0.04)" }}>
            <div style={{ fontSize:28, fontWeight:800, color:s.color }}>{s.value}</div>
            <div style={{ fontSize:11, fontWeight:600, color:s.color, opacity:0.75 }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ background:"#fff", borderRadius:18, boxShadow:"0 4px 20px rgba(0,0,0,0.06)", border:"1.5px solid #f1f5f9", overflow:"hidden", marginBottom:24 }}>
        <div style={{ padding:"18px 22px", borderBottom:"1.5px solid #f8fafc", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:12 }}>
          <div>
            <div style={{ fontSize:15, fontWeight:700, color:"#0f172a" }}>General Audit Log</div>
            <div style={{ fontSize:12, color:"#94a3b8", marginTop:2 }}>{filtered.length} records</div>
          </div>
          <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
            <select style={iS} value={filterType} onChange={e=>setFilterType(e.target.value)}>
              <option value="all">All Types</option><option value="Contact">Contact</option><option value="Company">Company</option>
            </select>
            <select style={iS} value={filterField} onChange={e=>setFilterField(e.target.value)}>
              <option value="all">All Fields</option>
              <option value="last_followed_up">last_followed_up</option>
              <option value="outreach_status">outreach_status</option>
              <option value="category">category</option>
              <option value="comments">comments</option>
              <option value="region">region</option>
            </select>
            <select style={iS} value={filterSource} onChange={e=>setFilterSource(e.target.value)}>
              <option value="all">All Sources</option><option value="crm_ui">crm_ui</option><option value="sheet_sync">sheet_sync</option><option value="api">api</option>
            </select>
            <button onClick={()=>{setFilterField("all");setFilterSource("all");setFilterType("all");}} style={{ ...iS, color:"#94a3b8", fontWeight:600 }}>✕</button>
          </div>
        </div>
        <div style={{ overflowX:"auto" }}>
          <table className="premium-table">
            <thead><tr>{["#","Timestamp","Entity","Type","Field","Old Value","New Value","By","Source"].map(h=><th key={h}>{h}</th>)}</tr></thead>
            <tbody>
              {filtered.map((row,i)=>(
                <tr key={row.id}>
                  <td style={{ color:"#cbd5e1", fontSize:11, fontWeight:600 }}>{String(row.id).padStart(2,"0")}</td>
                  <td style={{ fontFamily:"monospace", fontSize:11, color:"#94a3b8", whiteSpace:"nowrap" }}>{row.time}</td>
                  <td style={{ fontWeight:700, color:"#0f172a" }}>{row.entity}</td>
                  <td><span style={{ fontSize:10, fontWeight:700, padding:"3px 9px", borderRadius:99, background:row.entityType==="Contact"?"#eff6ff":"#f5f3ff", color:row.entityType==="Contact"?"#2563eb":"#7c3aed", border:row.entityType==="Contact"?"1.5px solid #bfdbfe":"1.5px solid #e9d5ff" }}>{row.entityType}</span></td>
                  <td><span style={{ background:"#fef3c7", color:"#92400e", fontSize:10, fontWeight:700, padding:"3px 9px", borderRadius:99, fontFamily:"monospace", border:"1.5px solid #fde68a" }}>{row.field}</span></td>
                  <td style={{ color:"#94a3b8" }}>{row.oldVal||"—"}</td>
                  <td style={{ color:"#15803d", fontWeight:600 }}>{row.newVal}</td>
                  <td style={{ color:"#64748b" }}>{row.by}</td>
                  <td><SourceBadge source={row.source} /></td>
                </tr>
              ))}
              {filtered.length===0&&<tr><td colSpan={9} style={{ padding:48, textAlign:"center" }}><div style={{ fontSize:32, marginBottom:10 }}>🔍</div><div style={{ fontSize:14, fontWeight:600, color:"#334155" }}>No records match</div></td></tr>}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ background:"#fff", borderRadius:18, boxShadow:"0 4px 20px rgba(0,0,0,0.06)", border:"1.5px solid #fecaca", overflow:"hidden" }}>
        <div style={{ padding:"18px 22px", borderBottom:"1.5px solid #fff5f5", display:"flex", alignItems:"center", gap:14, flexWrap:"wrap" }}>
          <div>
            <div style={{ fontSize:15, fontWeight:700, color:"#0f172a" }}>Last Followed Up — Change History</div>
            <div style={{ fontSize:12, color:"#94a3b8", marginTop:2 }}>Permanently recorded. Cannot be edited or deleted.</div>
          </div>
          <span style={{ background:"#fef2f2", color:"#dc2626", fontSize:10, fontWeight:700, padding:"4px 12px", borderRadius:99, border:"1.5px solid #fecaca", letterSpacing:"0.05em", whiteSpace:"nowrap" }}>🔒 READ-ONLY · APPEND-ONLY</span>
        </div>
        <div style={{ overflowX:"auto" }}>
          <table className="premium-table">
            <thead><tr>{["#","Contact","Company","Previous Date","New Date","Changed At","By","Source","Note"].map(h=><th key={h}>{h}</th>)}</tr></thead>
            <tbody>
              {FOLLOWUP_HISTORY.map((row,i)=>(
                <tr key={row.id}>
                  <td style={{ color:"#cbd5e1", fontSize:11, fontWeight:600 }}>{String(row.id).padStart(2,"0")}</td>
                  <td>
                    <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                      <div style={{ width:28, height:28, borderRadius:8, background:"linear-gradient(135deg,#6366f1,#8b5cf6)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:"#fff" }}>{row.contact[0]}</div>
                      <span style={{ fontWeight:700, color:"#0f172a" }}>{row.contact}</span>
                    </div>
                  </td>
                  <td style={{ color:"#64748b" }}>{row.company}</td>
                  <td><span style={{ background:"#fee2e2", color:"#dc2626", fontSize:11, fontWeight:600, padding:"3px 9px", borderRadius:8, border:"1.5px solid #fecaca", fontFamily:"monospace" }}>{row.oldVal}</span></td>
                  <td><span style={{ background:"#dcfce7", color:"#15803d", fontSize:11, fontWeight:700, padding:"3px 9px", borderRadius:8, border:"1.5px solid #bbf7d0", fontFamily:"monospace" }}>{row.newVal}</span></td>
                  <td style={{ fontFamily:"monospace", fontSize:11, color:"#94a3b8", whiteSpace:"nowrap" }}>{row.changedAt}</td>
                  <td style={{ color:"#64748b" }}>{row.by}</td>
                  <td><SourceBadge source={row.source} /></td>
                  <td style={{ color:"#94a3b8", fontStyle:row.note?"normal":"italic", fontSize:12 }}>{row.note||"—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}