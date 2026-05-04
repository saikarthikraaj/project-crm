import React from 'react';
// src/pages/Companies.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import { MOCK_COMPANIES, INDUSTRIES, REGIONS } from "../data/mockData";

const sel = { padding:"8px 12px", borderRadius:8, border:"1px solid #e2e8f0", fontSize:13, color:"#0f172a", background:"#fff", cursor:"pointer" };

export default function Companies() {
  const navigate = useNavigate();
  const [search,   setSearch]   = useState("");
  const [industry, setIndustry] = useState("All");
  const [region,   setRegion]   = useState("All");

  const filtered = MOCK_COMPANIES.filter(c =>
    (search===""||(c.name.toLowerCase().includes(search.toLowerCase()))) &&
    (industry==="All"||c.industry===industry) &&
    (region==="All"||c.region===region)
  );

  return (
    <div>
      <TopBar title="Companies" subtitle={`${filtered.length} companies`} />
      <div style={{ display:"flex", gap:10, marginBottom:20, flexWrap:"wrap" }}>
        <input placeholder="Search company..." value={search} onChange={e=>setSearch(e.target.value)} style={{ ...sel, minWidth:220, outline:"none" }} />
        <select style={sel} value={industry} onChange={e=>setIndustry(e.target.value)}>{INDUSTRIES.map(i=><option key={i}>{i}</option>)}</select>
        <select style={sel} value={region}   onChange={e=>setRegion(e.target.value)}>{REGIONS.map(r=><option key={r}>{r}</option>)}</select>
        <button onClick={()=>{setSearch("");setIndustry("All");setRegion("All");}} style={{ ...sel, background:"#f1f5f9", color:"#475569", fontWeight:600 }}>Clear</button>
      </div>
      <div style={{ background:"#fff", borderRadius:14, boxShadow:"0 2px 12px rgba(0,0,0,0.07)", overflowX:"auto" }}>
        <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
          <thead>
            <tr style={{ borderBottom:"2px solid #f1f5f9" }}>
              {["Company","Website","Industry","Region","Clients","Contacts",""].map(h=>(
                <th key={h} style={{ padding:"10px 14px", textAlign:"left", color:"#64748b", fontWeight:700, fontSize:11, textTransform:"uppercase" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((c,i)=>(
              <tr key={c.id} style={{ borderBottom:"1px solid #f8fafc", background:i%2===0?"#fff":"#f8fafc", cursor:"pointer" }} onClick={()=>navigate(`/companies/${c.id}`)}>
                <td style={{ padding:"12px 14px", fontWeight:700, color:"#0f172a" }}>{c.name}</td>
                <td style={{ padding:"12px 14px" }}><a href={`https://${c.website}`} target="_blank" rel="noreferrer" onClick={e=>e.stopPropagation()} style={{ color:"#38bdf8", fontSize:12 }}>{c.website}</a></td>
                <td style={{ padding:"12px 14px" }}><span style={{ background:"#f0f9ff", color:"#0369a1", fontSize:11, fontWeight:700, padding:"2px 9px", borderRadius:99 }}>{c.industry}</span></td>
                <td style={{ padding:"12px 14px", color:"#64748b" }}>{c.region}</td>
                <td style={{ padding:"12px 14px", color:"#64748b", fontSize:12 }}>{c.clients}</td>
                <td style={{ padding:"12px 14px" }}><span style={{ background:"#ede9fe", color:"#7c3aed", fontSize:12, fontWeight:700, padding:"2px 10px", borderRadius:99 }}>{c.contacts}</span></td>
                <td style={{ padding:"12px 14px" }}><span style={{ color:"#38bdf8", fontWeight:700, fontSize:12 }}>View →</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
