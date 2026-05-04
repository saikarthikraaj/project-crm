import React from 'react';
// src/pages/ContactDetail.jsx
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import StatusBadge from "../components/StatusBadge";
import CategoryTag from "../components/CategoryTag";
import SourceBadge from "../components/SourceBadge";
import { MOCK_CONTACTS, FOLLOWUP_HISTORY, STATUS_OPTIONS, CATEGORY_OPTIONS } from "../data/mockData";

const field = { padding:"9px 12px", borderRadius:8, border:"1px solid #e2e8f0", fontSize:13, color:"#0f172a", background:"#fff", width:"100%", boxSizing:"border-box", outline:"none" };
const label = { fontSize:11, fontWeight:700, color:"#64748b", textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:5, display:"block" };

export default function ContactDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const contact = MOCK_CONTACTS.find(c => c.id === parseInt(id));
  const [form, setForm]       = useState(contact || {});
  const [saved, setSaved]     = useState(false);
  const [editing, setEditing] = useState(false);

  if (!contact) return <div style={{ padding:40, textAlign:"center", color:"#94a3b8" }}>Contact not found. <button onClick={()=>navigate("/contacts")} style={{ color:"#38bdf8", border:"none", background:"none", cursor:"pointer", fontWeight:700 }}>← Go back</button></div>;

  const history = FOLLOWUP_HISTORY.filter(h => h.contact === contact.name);
  const handleSave = () => { setSaved(true); setEditing(false); setTimeout(()=>setSaved(false),3000); };
  const set = (key, val) => setForm(f => ({ ...f, [key]: val }));

  return (
    <div>
      <button onClick={()=>navigate("/contacts")} style={{ background:"none", border:"none", color:"#38bdf8", fontWeight:700, fontSize:13, cursor:"pointer", marginBottom:20 }}>← Back to Contacts</button>

      <div style={{ background:"#fff", borderRadius:14, padding:"24px 28px", boxShadow:"0 2px 12px rgba(0,0,0,0.07)", marginBottom:20 }}>
        <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", flexWrap:"wrap", gap:12 }}>
          <div>
            <div style={{ fontSize:22, fontWeight:800, color:"#0f172a" }}>{contact.name}</div>
            <div style={{ fontSize:13, color:"#64748b", marginTop:4 }}>{contact.designation} · {contact.company}</div>
            <div style={{ display:"flex", gap:8, marginTop:10, flexWrap:"wrap" }}>
              <StatusBadge status={contact.status} />
              <CategoryTag category={contact.category} />
            </div>
          </div>
          <div style={{ display:"flex", gap:10 }}>
            {!editing && <button onClick={()=>setEditing(true)} style={{ background:"#0f172a", color:"#38bdf8", border:"none", borderRadius:8, padding:"9px 18px", fontSize:13, fontWeight:700, cursor:"pointer" }}>✏️ Edit</button>}
            {editing && <>
              <button onClick={handleSave} style={{ background:"#10b981", color:"#fff", border:"none", borderRadius:8, padding:"9px 18px", fontSize:13, fontWeight:700, cursor:"pointer" }}>💾 Save</button>
              <button onClick={()=>{setForm(contact);setEditing(false);}} style={{ background:"#f1f5f9", color:"#475569", border:"none", borderRadius:8, padding:"9px 18px", fontSize:13, fontWeight:600, cursor:"pointer" }}>Cancel</button>
            </>}
          </div>
        </div>
        {saved && <div style={{ marginTop:14, padding:"10px 16px", background:"#dcfce7", color:"#15803d", borderRadius:8, fontSize:13, fontWeight:600 }}>✓ Contact updated successfully</div>}
      </div>

      <div style={{ background:"#fff", borderRadius:14, padding:"24px 28px", boxShadow:"0 2px 12px rgba(0,0,0,0.07)", marginBottom:20 }}>
        <div style={{ fontSize:15, fontWeight:700, color:"#0f172a", marginBottom:20 }}>Contact Information</div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))", gap:18 }}>
          <div><span style={label}>Name</span><input style={field} value={form.name||""} disabled={!editing} onChange={e=>set("name",e.target.value)} /></div>
          <div><span style={label}>Designation</span><input style={field} value={form.designation||""} disabled={!editing} onChange={e=>set("designation",e.target.value)} /></div>
          <div><span style={label}>Company</span><input style={field} value={form.company||""} disabled={!editing} onChange={e=>set("company",e.target.value)} /></div>
          <div><span style={label}>LinkedIn</span><input style={field} value={form.linkedin||""} disabled={!editing} onChange={e=>set("linkedin",e.target.value)} /></div>
          <div><span style={label}>Category</span><select style={field} value={form.category||""} disabled={!editing} onChange={e=>set("category",e.target.value)}>{CATEGORY_OPTIONS.map(c=><option key={c}>{c}</option>)}</select></div>
          <div><span style={label}>Outreach Status</span><select style={field} value={form.status||""} disabled={!editing} onChange={e=>set("status",e.target.value)}>{STATUS_OPTIONS.map(s=><option key={s}>{s}</option>)}</select></div>
          <div><span style={label}>Last Outreach Date</span><input type="date" style={field} value={form.lastOutreach||""} disabled={!editing} onChange={e=>set("lastOutreach",e.target.value)} /></div>
          <div><span style={label}>Last Followed Up</span><input type="date" style={field} value={form.lastFollowed||""} disabled={!editing} onChange={e=>set("lastFollowed",e.target.value)} /></div>
          <div style={{ gridColumn:"1 / -1" }}><span style={label}>Comments</span><textarea rows={3} style={{ ...field, resize:"vertical" }} value={form.comments||""} disabled={!editing} onChange={e=>set("comments",e.target.value)} /></div>
        </div>
      </div>

      <div style={{ background:"#fff", borderRadius:14, padding:"24px 28px", boxShadow:"0 2px 12px rgba(0,0,0,0.07)" }}>
        <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:6 }}>
          <div style={{ fontSize:15, fontWeight:700, color:"#0f172a" }}>Last Followed Up — Change History</div>
          <span style={{ background:"#fef2f2", color:"#dc2626", fontSize:11, fontWeight:700, padding:"2px 9px", borderRadius:99 }}>READ-ONLY</span>
        </div>
        <div style={{ fontSize:12, color:"#94a3b8", marginBottom:16 }}>Every change permanently recorded below.</div>
        {history.length===0 ? <div style={{ textAlign:"center", color:"#94a3b8", padding:24 }}>No follow-up history yet.</div> : (
          <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12 }}>
            <thead><tr style={{ borderBottom:"2px solid #f1f5f9" }}>
              {["Previous Date","New Date","Changed At","Changed By","Source","Note"].map(h=>(
                <th key={h} style={{ padding:"7px 10px", textAlign:"left", color:"#64748b", fontWeight:700, fontSize:11, textTransform:"uppercase" }}>{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {history.map((row,i)=>(
                <tr key={row.id} style={{ borderBottom:"1px solid #f8fafc", background:i%2===0?"#fff":"#fafafa" }}>
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
        )}
      </div>
    </div>
  );
}
