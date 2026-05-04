import React from 'react';
// src/pages/Reports.jsx
import { BarChart, Bar, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from "recharts";
import TopBar    from "../components/TopBar";
import ChartCard from "../components/ChartCard";
import { STATUS_DATA, CATEGORY_DATA, INDUSTRY_DATA, TREND_DATA, STATUS_COLORS, CAT_COLORS } from "../data/mockData";

const regionData  = [{region:"North",contacts:210},{region:"South",contacts:170},{region:"East",contacts:145},{region:"West",contacts:223}];
const pendingData = [{name:"FinTech",pending:14},{name:"HealthTech",pending:9},{name:"EdTech",pending:18},{name:"SaaS",pending:22},{name:"Logistics",pending:7},{name:"HRTech",pending:11}];

export default function Reports() {
  return (
    <div>
      <TopBar title="Reports" subtitle="Outreach analytics and breakdowns" />
      <div style={{ display:"flex", gap:16, marginBottom:20, flexWrap:"wrap" }}>
        <ChartCard title="Outreach Status Breakdown">
          <ResponsiveContainer width="100%" height={240}>
            <PieChart><Pie data={STATUS_DATA} cx="50%" cy="50%" outerRadius={90} dataKey="value" label={({percent})=>`${(percent*100).toFixed(0)}%`} labelLine={false}>{STATUS_DATA.map((_,i)=><Cell key={i} fill={STATUS_COLORS[i%STATUS_COLORS.length]}/>)}</Pie><Tooltip/><Legend iconSize={10} wrapperStyle={{fontSize:11}}/></PieChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard title="Category Distribution">
          <ResponsiveContainer width="100%" height={240}>
            <PieChart><Pie data={CATEGORY_DATA} cx="50%" cy="50%" innerRadius={60} outerRadius={90} dataKey="value" label={({name,value})=>`${name}: ${value}`}>{CATEGORY_DATA.map((_,i)=><Cell key={i} fill={CAT_COLORS[i%CAT_COLORS.length]}/>)}</Pie><Tooltip/><Legend iconSize={10} wrapperStyle={{fontSize:11}}/></PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
      <div style={{ marginBottom:20 }}>
        <ChartCard title="Contacts & Companies by Industry">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={INDUSTRY_DATA} margin={{top:5,right:20,left:0,bottom:5}}><CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9"/><XAxis dataKey="industry" tick={{fontSize:11,fill:"#64748b"}}/><YAxis tick={{fontSize:11,fill:"#64748b"}}/><Tooltip/><Legend wrapperStyle={{fontSize:12}}/><Bar dataKey="contacts" fill="#818cf8" radius={[4,4,0,0]} name="Contacts"/><Bar dataKey="companies" fill="#38bdf8" radius={[4,4,0,0]} name="Companies"/></BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
      <div style={{ display:"flex", gap:16, marginBottom:20, flexWrap:"wrap" }}>
        <ChartCard title="Follow-Up Trend (Weekly)">
          <ResponsiveContainer width="100%" height={240}>
            <AreaChart data={TREND_DATA} margin={{top:5,right:20,left:0,bottom:5}}><defs><linearGradient id="colorFU" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#fb923c" stopOpacity={0.2}/><stop offset="95%" stopColor="#fb923c" stopOpacity={0}/></linearGradient></defs><CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9"/><XAxis dataKey="week" tick={{fontSize:11,fill:"#64748b"}}/><YAxis tick={{fontSize:11,fill:"#64748b"}}/><Tooltip/><Area type="monotone" dataKey="followUps" stroke="#fb923c" strokeWidth={3} fill="url(#colorFU)" name="Follow-Ups"/></AreaChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard title="Contacts by Region">
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={regionData} layout="vertical" margin={{top:5,right:20,left:10,bottom:5}}><CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9"/><XAxis type="number" tick={{fontSize:11,fill:"#64748b"}}/><YAxis type="category" dataKey="region" tick={{fontSize:11,fill:"#64748b"}}/><Tooltip/><Bar dataKey="contacts" fill="#34d399" radius={[0,4,4,0]} name="Contacts"/></BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
      <ChartCard title="Pending Follow-Up by Industry (30+ days)">
        <ResponsiveContainer width="100%" height={230}>
          <BarChart data={pendingData} margin={{top:5,right:20,left:0,bottom:5}}><CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9"/><XAxis dataKey="name" tick={{fontSize:11,fill:"#64748b"}}/><YAxis tick={{fontSize:11,fill:"#64748b"}}/><Tooltip/><Bar dataKey="pending" fill="#fb923c" radius={[4,4,0,0]} name="Pending Follow-Ups"/></BarChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}
