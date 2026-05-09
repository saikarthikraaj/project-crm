import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import StatusBadge from "../components/StatusBadge";
import CategoryTag from "../components/CategoryTag";
import { MOCK_CONTACTS, STATUS_OPTIONS, CATEGORY_OPTIONS, INDUSTRIES, REGIONS } from "../data/mockData";

const COLORS = [["#6366f1","#8b5cf6"],["#06b6d4","#3b82f6"],["#10b981","#06b6d4"],["#f59e0b","#ef4444"],["#ec4899","#8b5cf6"],["#14b8a6","#10b981"]];
const iS = { background:"#fff", border:"1.5px solid #e2e8f0", borderRadius:10, color:"#0f172a", fontFamily:"inherit", fontSize:13, padding:"9px 14px", outline:"none", cursor:"pointer", boxShadow:"0 1px 3px rgba(0,0,0,0.05)" };

export default function Contacts() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("All");
  const [region, setRegion] = useState("All");
  const [status, setStatus] = useState("All");
  const [category, setCategory] = useState("All");

  const filtered = MOCK_CONTACTS.filter(c =>
    (search===""||c.name.toLowerCase().includes(search.toLowerCase())||c.company.toLowerCase().includes(search.toLowerCase())) &&
    (industry==="All"||c.industry===industry) &&
    (region==="All"||c.region===region) &&
    (status==="All"||c.status===status) &&
    (category==="All"||c.category===category)
  );

  return (
    <div className="fade-up">
      <TopBar title="Contacts" subtitle={`${filtered.length} contacts in your pipeline`} />

      <div style={{ display:"flex", gap:12, marginBottom:20, flexWrap:"wrap" }}>
        {[
          { label:"Total",     value:MOCK_CONTACTS.length,                                          color:"#6366f1", bg:"#eef2ff" },
          { label:"Positive",  value:MOCK_CONTACTS.filter(c=>c.status.includes("Positive")).length, color:"#10b981", bg:"#ecfdf5" },
          { label:"No Follow", value:MOCK_CONTACTS.filter(c=>!c.lastFollowed).length,               color:"#f59e0b", bg:"#fffbeb" },
          { label:"Connected", value:MOCK_CONTACTS.filter(c=>c.status==="Connection Accepted").length,color:"#3b82f6",bg:"#eff6ff" },
        ].map(s=>(
          <div key={s.label} style={{ background:s.bg, borderRadius:12, padding:"12px 18px", display:"flex", alignItems:"center", gap:10, border:`1.5px solid ${s.color}22`, boxShadow:"0 2px 8px rgba(0,0,0,0.04)" }}>
            <div style={{ fontSize:22, fontWeight:800, color:s.color }}>{s.value}</div>
            <div style={{ fontSize:11, fontWeight:600, color:s.color, opacity:0.7 }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ display:"flex", gap:10, marginBottom:20, flexWrap:"wrap" }}>
        <div style={{ position:"relative", flex:1, minWidth:220 }}>
          <span style={{ position:"absolute", left:12, top:"50%", transform:"translateY(-50%)", color:"#94a3b8", fontSize:15 }}>🔍</span>
          <input placeholder="Search name or company..." value={search} onChange={e=>setSearch(e.target.value)} style={{ ...iS, width:"100%", paddingLeft:38 }} />
        </div>
        <select style={iS} value={industry} onChange={e=>setIndustry(e.target.value)}>{INDUSTRIES.map(i=><option key={i}>{i}</option>)}</select>
        <select style={iS} value={region}   onChange={e=>setRegion(e.target.value)}>{REGIONS.map(r=><option key={r}>{r}</option>)}</select>
        <select style={iS} value={status}   onChange={e=>setStatus(e.target.value)}><option value="All">All Statuses</option>{STATUS_OPTIONS.map(s=><option key={s}>{s}</option>)}</select>
        <select style={iS} value={category} onChange={e=>setCategory(e.target.value)}><option value="All">All Categories</option>{CATEGORY_OPTIONS.map(c=><option key={c}>{c}</option>)}</select>
        <button onClick={()=>{setSearch("");setIndustry("All");setRegion("All");setStatus("All");setCategory("All");}} style={{ ...iS, color:"#94a3b8", fontWeight:600 }}>✕ Clear</button>
      </div>

      <div style={{ background:"#fff", borderRadius:18, boxShadow:"0 4px 20px rgba(0,0,0,0.06)", border:"1.5px solid #f1f5f9", overflow:"hidden" }}>
        <div style={{ overflowX:"auto" }}>
          <table className="premium-table">
            <thead>
              <tr>{["Contact","Company","Industry","Category","Status","Last Outreach","Last Follow-Up",""].map(h=><th key={h}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {filtered.map((c,i)=>{
                const [c1,c2] = COLORS[i % COLORS.length];
                return (
                  <tr key={c.id} onClick={()=>navigate(`/contacts/${c.id}`)}>
                    <td>
                      <div style={{ display:"flex", alignItems:"center", gap:11 }}>
                        <div style={{ width:38, height:38, borderRadius:12, background:`linear-gradient(135deg,${c1},${c2})`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:14, fontWeight:700, color:"#fff", flexShrink:0, boxShadow:`0 4px 10px ${c1}44` }}>{c.name[0]}</div>
                        <div>
                          <div style={{ fontWeight:700, color:"#0f172a", fontSize:13 }}>{c.name}</div>
                          <div style={{ fontSize:11, color:"#94a3b8", marginTop:1 }}>{c.designation}</div>
                        </div>
                      </div>
                    </td>
                    <td style={{ fontWeight:500, color:"#334155" }}>{c.company}</td>
                    <td><span style={{ fontSize:11, color:"#6366f1", background:"#eef2ff", padding:"3px 9px", borderRadius:6, fontWeight:600, border:"1px solid #c7d2fe" }}>{c.industry}</span></td>
                    <td><CategoryTag category={c.category} /></td>
                    <td><StatusBadge status={c.status} /></td>
                    <td style={{ fontFamily:"monospace", fontSize:11, color:"#94a3b8" }}>{c.lastOutreach||"—"}</td>
                    <td style={{ fontFamily:"monospace", fontSize:11, color:"#94a3b8" }}>{c.lastFollowed||"—"}</td>
                    <td>
                      <button style={{ background:"linear-gradient(135deg,#eef2ff,#ede9fe)", color:"#6366f1", border:"1.5px solid #c7d2fe", borderRadius:8, padding:"6px 12px", fontSize:12, fontWeight:700, cursor:"pointer" }}
                        onMouseEnter={e=>{e.currentTarget.style.background="linear-gradient(135deg,#6366f1,#8b5cf6)";e.currentTarget.style.color="#fff";}}
                        onMouseLeave={e=>{e.currentTarget.style.background="linear-gradient(135deg,#eef2ff,#ede9fe)";e.currentTarget.style.color="#6366f1";}}>View →</button>
                    </td>
                  </tr>
                );
              })}
              {filtered.length===0&&<tr><td colSpan={8} style={{ padding:56, textAlign:"center" }}><div style={{ fontSize:36, marginBottom:12 }}>🔍</div><div style={{ fontSize:15, fontWeight:600, color:"#334155" }}>No contacts found</div><div style={{ fontSize:13, color:"#94a3b8", marginTop:6 }}>Try adjusting your filters</div></td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}