import React from 'react';
// src/pages/Contacts.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopBar      from "../components/TopBar";
import StatusBadge from "../components/StatusBadge";
import CategoryTag from "../components/CategoryTag";
import { MOCK_CONTACTS, STATUS_OPTIONS, CATEGORY_OPTIONS, INDUSTRIES, REGIONS } from "../data/mockData";

const sel = { padding:"8px 12px", borderRadius:8, border:"1px solid #e2e8f0", fontSize:13, color:"#0f172a", background:"#fff", cursor:"pointer" };

export default function Contacts() {
  const navigate = useNavigate();
  const [search,   setSearch]   = useState("");
  const [industry, setIndustry] = useState("All");
  const [region,   setRegion]   = useState("All");
  const [status,   setStatus]   = useState("All");
  const [category, setCategory] = useState("All");

  const filtered = MOCK_CONTACTS.filter((c) =>
    (search==="" || c.name.toLowerCase().includes(search.toLowerCase()) || c.company.toLowerCase().includes(search.toLowerCase())) &&
    (industry==="All" || c.industry===industry) &&
    (region==="All"   || c.region===region)     &&
    (status==="All"   || c.status===status)     &&
    (category==="All" || c.category===category)
  );

  return (
    <div>
      <TopBar title="Contacts" subtitle={`${filtered.length} records`} />
      <div style={{ display:"flex", gap:10, marginBottom:20, flexWrap:"wrap" }}>
        <input placeholder="Search name or company..." value={search} onChange={e=>setSearch(e.target.value)} style={{ ...sel, minWidth:220, outline:"none" }} />
        <select style={sel} value={industry} onChange={e=>setIndustry(e.target.value)}>{INDUSTRIES.map(i=><option key={i}>{i}</option>)}</select>
        <select style={sel} value={region}   onChange={e=>setRegion(e.target.value)}>{REGIONS.map(r=><option key={r}>{r}</option>)}</select>
        <select style={sel} value={status}   onChange={e=>setStatus(e.target.value)}><option value="All">All Statuses</option>{STATUS_OPTIONS.map(s=><option key={s}>{s}</option>)}</select>
        <select style={sel} value={category} onChange={e=>setCategory(e.target.value)}><option value="All">All Categories</option>{CATEGORY_OPTIONS.map(c=><option key={c}>{c}</option>)}</select>
        <button onClick={()=>{setSearch("");setIndustry("All");setRegion("All");setStatus("All");setCategory("All");}} style={{ ...sel, background:"#f1f5f9", color:"#475569", fontWeight:600 }}>Clear</button>
      </div>
      <div style={{ background:"#fff", borderRadius:14, boxShadow:"0 2px 12px rgba(0,0,0,0.07)", overflowX:"auto" }}>
        <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
          <thead>
            <tr style={{ borderBottom:"2px solid #f1f5f9" }}>
              {["Name","Company","Designation","Industry","Category","Status","Last Outreach","Last Followed Up",""].map(h=>(
                <th key={h} style={{ padding:"10px 14px", textAlign:"left", color:"#64748b", fontWeight:700, fontSize:11, whiteSpace:"nowrap", textTransform:"uppercase" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((c,i)=>(
              <tr key={c.id} style={{ borderBottom:"1px solid #f8fafc", background:i%2===0?"#fff":"#f8fafc", cursor:"pointer" }} onClick={()=>navigate(`/contacts/${c.id}`)}>
                <td style={{ padding:"11px 14px", fontWeight:600, color:"#0f172a" }}>{c.name}</td>
                <td style={{ padding:"11px 14px", color:"#475569" }}>{c.company}</td>
                <td style={{ padding:"11px 14px", color:"#64748b" }}>{c.designation}</td>
                <td style={{ padding:"11px 14px", color:"#64748b" }}>{c.industry}</td>
                <td style={{ padding:"11px 14px" }}><CategoryTag category={c.category} /></td>
                <td style={{ padding:"11px 14px" }}><StatusBadge status={c.status} /></td>
                <td style={{ padding:"11px 14px", color:"#94a3b8", fontSize:12 }}>{c.lastOutreach||"—"}</td>
                <td style={{ padding:"11px 14px", color:"#94a3b8", fontSize:12 }}>{c.lastFollowed||"—"}</td>
                <td style={{ padding:"11px 14px" }}><span style={{ color:"#38bdf8", fontWeight:700, fontSize:12 }}>View →</span></td>
              </tr>
            ))}
            {filtered.length===0&&<tr><td colSpan={9} style={{ padding:40, textAlign:"center", color:"#94a3b8" }}>No contacts found.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
