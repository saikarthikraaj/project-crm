import React from "react";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from "recharts";
import TopBar from "../components/TopBar";
import StatCard from "../components/StatCard";
import ChartCard from "../components/ChartCard";
import SourceBadge from "../components/SourceBadge";
import { STATUS_DATA, CATEGORY_DATA, INDUSTRY_DATA, TREND_DATA, AUDIT_LOG, STATUS_COLORS, CAT_COLORS } from "../data/mockData";

const TT = {
  contentStyle:{ background:"#fff", border:"1.5px solid #e2e8f0", borderRadius:12, color:"#0f172a", fontSize:12, boxShadow:"0 8px 24px rgba(0,0,0,0.1)" },
  cursor:{ fill:"rgba(99,102,241,0.04)" },
};

export default function Dashboard() {
  return (
    <div className="fade-up">
      <TopBar title="Dashboard" subtitle="Welcome back — here's your outreach overview" />

      <div style={{ display:"flex", gap:16, marginBottom:24, flexWrap:"wrap" }}>
        <StatCard label="Total Companies"    value="208" sub="Across 6 sectors"             color="#6366f1" />
        <StatCard label="Total Contacts"     value="748" sub="Active outreach records"       color="#8b5cf6" />
        <StatCard label="Pending Follow-Up"  value="143" sub="Not followed up in 30+ days"  color="#f59e0b" />
        <StatCard label="Positive Responses" value="29"  sub="Response Received — Positive" color="#10b981" />
      </div>

      <div style={{ display:"flex", gap:16, marginBottom:24, flexWrap:"wrap" }}>
        <ChartCard title="Outreach Status" subtitle="Contacts by pipeline stage">
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie data={STATUS_DATA} cx="50%" cy="50%" outerRadius={90} dataKey="value" stroke="none"
                label={({ percent }) => `${(percent*100).toFixed(0)}%`} labelLine={false}>
                {STATUS_DATA.map((_,i) => <Cell key={i} fill={STATUS_COLORS[i % STATUS_COLORS.length]} />)}
              </Pie>
              <Tooltip {...TT} />
              <Legend iconSize={8} wrapperStyle={{ fontSize:11, color:"#64748b" }} />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Category Split" subtitle="A / B / C / D distribution">
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie data={CATEGORY_DATA} cx="50%" cy="50%" innerRadius={60} outerRadius={90} dataKey="value" stroke="none"
                label={({ name, value }) => `${name}: ${value}`}>
                {CATEGORY_DATA.map((_,i) => <Cell key={i} fill={CAT_COLORS[i % CAT_COLORS.length]} />)}
              </Pie>
              <Tooltip {...TT} />
              <Legend iconSize={8} wrapperStyle={{ fontSize:11, color:"#64748b" }} />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div style={{ marginBottom:24 }}>
        <ChartCard title="Industry Overview" subtitle="Contacts & companies per sector">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={INDUSTRY_DATA} margin={{ top:5, right:20, left:0, bottom:5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
              <XAxis dataKey="industry" tick={{ fontSize:11, fill:"#94a3b8" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize:11, fill:"#94a3b8" }} axisLine={false} tickLine={false} />
              <Tooltip {...TT} />
              <Legend iconSize={8} wrapperStyle={{ fontSize:11, color:"#64748b" }} />
              <Bar dataKey="contacts"  fill="#6366f1" radius={[6,6,0,0]} name="Contacts" />
              <Bar dataKey="companies" fill="#06b6d4" radius={[6,6,0,0]} name="Companies" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div style={{ marginBottom:24 }}>
        <ChartCard title="Follow-Up Trend" subtitle="Weekly activity">
          <ResponsiveContainer width="100%" height={230}>
            <AreaChart data={TREND_DATA} margin={{ top:5, right:20, left:0, bottom:5 }}>
              <defs>
                <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor="#6366f1" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
              <XAxis dataKey="week" tick={{ fontSize:11, fill:"#94a3b8" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize:11, fill:"#94a3b8" }} axisLine={false} tickLine={false} />
              <Tooltip {...TT} />
              <Area type="monotone" dataKey="followUps" stroke="#6366f1" strokeWidth={2.5}
                fill="url(#grad1)" name="Follow-Ups"
                dot={{ r:4, fill:"#6366f1", strokeWidth:2, stroke:"#fff" }} activeDot={{ r:6 }} />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div style={{ background:"#fff", borderRadius:18, boxShadow:"0 4px 20px rgba(0,0,0,0.06)", border:"1.5px solid #f1f5f9", overflow:"hidden" }}>
        <div style={{ padding:"20px 22px", borderBottom:"1.5px solid #f8fafc" }}>
          <div style={{ fontSize:15, fontWeight:700, color:"#0f172a" }}>Recent Activity</div>
          <div style={{ fontSize:12, color:"#94a3b8", marginTop:2 }}>Latest changes across the CRM</div>
        </div>
        <div style={{ overflowX:"auto" }}>
          <table className="premium-table">
            <thead>
              <tr>{["Timestamp","Entity","Field","Old Value","New Value","By","Source"].map(h=><th key={h}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {AUDIT_LOG.slice(0,6).map(row => (
                <tr key={row.id}>
                  <td style={{ fontFamily:"monospace", fontSize:11, color:"#94a3b8" }}>{row.time}</td>
                  <td style={{ fontWeight:700, color:"#0f172a" }}>{row.entity}</td>
                  <td><span style={{ background:"#fef3c7", color:"#92400e", fontSize:10, fontWeight:700, padding:"3px 8px", borderRadius:99, fontFamily:"monospace", border:"1.5px solid #fde68a" }}>{row.field}</span></td>
                  <td style={{ color:"#94a3b8" }}>{row.oldVal||"—"}</td>
                  <td style={{ color:"#15803d", fontWeight:600 }}>{row.newVal}</td>
                  <td style={{ color:"#64748b" }}>{row.by}</td>
                  <td><SourceBadge source={row.source} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}