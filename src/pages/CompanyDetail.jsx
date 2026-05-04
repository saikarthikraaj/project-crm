import React from 'react';
// src/pages/CompanyDetail.jsx
import { useParams, useNavigate } from "react-router-dom";
import StatusBadge from "../components/StatusBadge";
import CategoryTag from "../components/CategoryTag";
import { MOCK_COMPANIES, MOCK_CONTACTS } from "../data/mockData";

export default function CompanyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const company  = MOCK_COMPANIES.find(c => c.id === parseInt(id));
  if (!company) return <div style={{ padding:40, textAlign:"center", color:"#94a3b8" }}>Not found. <button onClick={()=>navigate("/companies")} style={{ color:"#38bdf8", border:"none", background:"none", cursor:"pointer", fontWeight:700 }}>← Go back</button></div>;
  const contacts = MOCK_CONTACTS.filter(c => c.company === company.name);

  return (
    <div>
      <button onClick={()=>navigate("/companies")} style={{ background:"none", border:"none", color:"#38bdf8", fontWeight:700, fontSize:13, cursor:"pointer", marginBottom:20 }}>← Back to Companies</button>
      <div style={{ background:"#fff", borderRadius:14, padding:"24px 28px", boxShadow:"0 2px 12px rgba(0,0,0,0.07)", marginBottom:20 }}>
        <div style={{ fontSize:22, fontWeight:800, color:"#0f172a" }}>{company.name}</div>
        <div style={{ fontSize:13, color:"#64748b", marginTop:4 }}>{company.industry} · {company.region}</div>
        <div style={{ marginTop:18 }}>
          {[["Website", <a href={`https://${company.website}`} target="_blank" rel="noreferrer" style={{ color:"#38bdf8" }}>{company.website}</a>],["Region",company.region],["Industry",company.industry],["Clients",company.clients],["Contacts",`${contacts.length} linked`]].map(([l,v])=>(
            <div key={l} style={{ display:"flex", borderBottom:"1px solid #f1f5f9", padding:"12px 0" }}>
              <div style={{ width:160, fontSize:12, fontWeight:700, color:"#64748b", textTransform:"uppercase" }}>{l}</div>
              <div style={{ fontSize:13, color:"#0f172a" }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ background:"#fff", borderRadius:14, padding:"24px 28px", boxShadow:"0 2px 12px rgba(0,0,0,0.07)" }}>
        <div style={{ fontSize:15, fontWeight:700, color:"#0f172a", marginBottom:16 }}>Linked Contacts ({contacts.length})</div>
        <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
          <thead><tr style={{ borderBottom:"2px solid #f1f5f9" }}>
            {["Name","Designation","Category","Status","Last Followed Up",""].map(h=>(
              <th key={h} style={{ padding:"8px 12px", textAlign:"left", color:"#64748b", fontWeight:700, fontSize:11, textTransform:"uppercase" }}>{h}</th>
            ))}
          </tr></thead>
          <tbody>
            {contacts.map((c,i)=>(
              <tr key={c.id} style={{ borderBottom:"1px solid #f8fafc", background:i%2===0?"#fff":"#f8fafc" }}>
                <td style={{ padding:"10px 12px", fontWeight:600, color:"#0f172a" }}>{c.name}</td>
                <td style={{ padding:"10px 12px", color:"#64748b" }}>{c.designation}</td>
                <td style={{ padding:"10px 12px" }}><CategoryTag category={c.category} /></td>
                <td style={{ padding:"10px 12px" }}><StatusBadge status={c.status} /></td>
                <td style={{ padding:"10px 12px", color:"#94a3b8", fontSize:12 }}>{c.lastFollowed||"—"}</td>
                <td style={{ padding:"10px 12px" }}><button onClick={()=>navigate(`/contacts/${c.id}`)} style={{ background:"none", border:"none", color:"#38bdf8", fontWeight:700, fontSize:12, cursor:"pointer" }}>View →</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
