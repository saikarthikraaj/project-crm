import React from 'react';
// src/pages/Dashboard.jsx
import { BarChart, Bar, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import TopBar    from "../components/TopBar";
import StatCard  from "../components/StatCard";
import ChartCard from "../components/ChartCard";
import SourceBadge from "../components/SourceBadge";
import { STATUS_DATA, CATEGORY_DATA, INDUSTRY_DATA, TREND_DATA, AUDIT_LOG, STATUS_COLORS, CAT_COLORS } from "../data/mockData";

export default function Dashboard() {
  return (
    <div>
      <TopBar title="Dashboard Overview" subtitle="Last synced: Today, 10:45 AM" />
      <div style={{ display:"flex", gap:16, marginBottom:22, flexWrap:"wrap" }}>
        <StatCard label="Total Companies"    value="208" sub="Across 6 sectors"             color="#38bdf8" />
        <StatCard label="Total Contacts"     value="748" sub="Active outreach records"       color="#818cf8" />
        <StatCard label="Pending Follow-Up"  value="143" sub="Not followed up in 30+ days"  color="#fb923c" />
        <StatCard label="Positive Responses" value="29"  sub="Response Received — Positive" color="#34d399" />
      </div>

      <div style={{ display:"flex", gap:16, marginBottom:22, flexWrap:"wrap" }}>
        <ChartCard title="Contacts by Outreach Status">
          <ResponsiveContainer width="100%" height={230}>
            <PieChart>
              <Pie data={STATUS_DATA} cx="50%" cy="50%" outerRadius={85} dataKey="value"
                label={({ percent }) => `${(percent*100).toFixed(0)}%`} labelLine={false}>
                {STATUS_DATA.map((_,i) => <Cell key={i} fill={STATUS_COLORS[i % STATUS_COLORS.length]} />)}
              </Pie>
              <Tooltip /><Legend iconSize={10} wrapperStyle={{ fontSize:11 }} />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Contacts by Category">
          <ResponsiveContainer width="100%" height={230}>
            <PieChart>
              <Pie data={CATEGORY_DATA} cx="50%" cy="50%" innerRadius={55} outerRadius={85} dataKey="value"
                label={({ name, value }) => `${name}: ${value}`}>
                {CATEGORY_DATA.map((_,i) => <Cell key={i} fill={CAT_COLORS[i % CAT_COLORS.length]} />)}
              </Pie>
              <Tooltip /><Legend iconSize={10} wrapperStyle={{ fontSize:11 }} />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div style={{ marginBottom:22 }}>
        <ChartCard title="Contacts & Companies per Industry">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={INDUSTRY_DATA} margin={{ top:5, right:20, left:0, bottom:5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="industry" tick={{ fontSize:11, fill:"#64748b" }} />
              <YAxis tick={{ fontSize:11, fill:"#64748b" }} />
              <Tooltip /><Legend wrapperStyle={{ fontSize:12 }} />
              <Bar dataKey="contacts"  fill="#818cf8" radius={[4,4,0,0]} name="Contacts"  />
              <Bar dataKey="companies" fill="#38bdf8" radius={[4,4,0,0]} name="Companies" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div style={{ marginBottom:22 }}>
        <ChartCard title="Follow-Up Activity Trend (Weekly)">
          <ResponsiveContainer width="100%" height={230}>
            <LineChart data={TREND_DATA} margin={{ top:5, right:20, left:0, bottom:5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="week" tick={{ fontSize:11, fill:"#64748b" }} />
              <YAxis tick={{ fontSize:11, fill:"#64748b" }} />
              <Tooltip /><Legend wrapperStyle={{ fontSize:12 }} />
              <Line type="monotone" dataKey="followUps" stroke="#fb923c" strokeWidth={3} dot={{ r:4, fill:"#fb923c" }} name="Follow-Ups" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <ChartCard title="Recent Audit Activity">
        <div style={{ overflowX:"auto" }}>
          <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12 }}>
            <thead>
              <tr style={{ borderBottom:"2px solid #f1f5f9" }}>
                {["Timestamp","Entity","Field Changed","Old Value","New Value","Changed By","Source"].map(h => (
                  <th key={h} style={{ padding:"7px 10px", textAlign:"left", color:"#64748b", fontWeight:700, fontSize:11, whiteSpace:"nowrap", textTransform:"uppercase" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {AUDIT_LOG.slice(0,6).map((row,i) => (
                <tr key={row.id} style={{ borderBottom:"1px solid #f8fafc", background:i%2===0?"#fff":"#f8fafc" }}>
                  <td style={{ padding:"9px 10px", color:"#475569", whiteSpace:"nowrap" }}>{row.time}</td>
                  <td style={{ padding:"9px 10px", fontWeight:600, color:"#0f172a" }}>{row.entity}</td>
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
      </ChartCard>
    </div>
  );
}
