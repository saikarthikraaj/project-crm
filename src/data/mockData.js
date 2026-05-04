// src/data/mockData.js

export const MOCK_CONTACTS = [
    { id:1,  name:"Riya Sharma",    company:"TechNova Ltd",   designation:"VP Sales",         linkedin:"linkedin.com/in/riya",    category:"Category A", status:"Response Received - Positive", lastOutreach:"2024-04-18", lastFollowed:"2024-04-21", industry:"SaaS",       region:"North", comments:"Very interested, schedule demo" },
    { id:2,  name:"Arjun Mehta",    company:"LogiMove Inc",   designation:"Head of Ops",      linkedin:"linkedin.com/in/arjun",   category:"Category B", status:"Outreach Message Sent",        lastOutreach:"2024-04-15", lastFollowed:"2024-04-20", industry:"Logistics",  region:"West",  comments:"Awaiting reply" },
    { id:3,  name:"Sneha Patel",    company:"EduBridge",      designation:"CEO",               linkedin:"linkedin.com/in/sneha",   category:"Category A", status:"Connection Accepted",          lastOutreach:"2024-04-12", lastFollowed:"2024-04-19", industry:"EdTech",     region:"South", comments:"" },
    { id:4,  name:"Dev Kumar",      company:"HealthBridge",   designation:"CTO",               linkedin:"linkedin.com/in/dev",     category:"Category C", status:"Connection Request Sent",      lastOutreach:"2024-04-10", lastFollowed:"2024-04-18", industry:"HealthTech", region:"East",  comments:"Follow up next week" },
    { id:5,  name:"Priya Nair",     company:"BlueSky SaaS",   designation:"Product Manager",   linkedin:"linkedin.com/in/priya",   category:"Category A", status:"Response Received - Negative", lastOutreach:"2024-04-08", lastFollowed:"2024-04-17", industry:"SaaS",       region:"North", comments:"Not interested right now" },
    { id:6,  name:"Rahul Verma",    company:"FinServe Co",    designation:"Director",          linkedin:"linkedin.com/in/rahul",   category:"Category B", status:"Outreach Message Sent",        lastOutreach:"2024-04-05", lastFollowed:"2024-04-14", industry:"FinTech",    region:"West",  comments:"" },
    { id:7,  name:"Ananya Roy",     company:"HRFlow",         designation:"HR Lead",           linkedin:"linkedin.com/in/ananya",  category:"Category D", status:"None",                         lastOutreach:"",           lastFollowed:"",           industry:"HRTech",     region:"South", comments:"" },
    { id:8,  name:"Kiran Bose",     company:"CloudBase",      designation:"Engineering Head",  linkedin:"linkedin.com/in/kiran",   category:"Category C", status:"Connection Accepted",          lastOutreach:"2024-04-02", lastFollowed:"2024-04-12", industry:"SaaS",       region:"East",  comments:"Intro call done" },
    { id:9,  name:"Meera Joshi",    company:"GreenLogix",     designation:"Supply Chain Head", linkedin:"linkedin.com/in/meera",   category:"Category B", status:"Outreach Message Sent",        lastOutreach:"2024-03-28", lastFollowed:"2024-04-08", industry:"Logistics",  region:"North", comments:"" },
    { id:10, name:"Sanjay Gupta",   company:"MediTech",       designation:"CMO",               linkedin:"linkedin.com/in/sanjay",  category:"Category A", status:"Response Received - Positive", lastOutreach:"2024-03-25", lastFollowed:"2024-04-05", industry:"HealthTech", region:"West",  comments:"High potential" },
    { id:11, name:"Divya Menon",    company:"TechNova Ltd",   designation:"Growth Lead",       linkedin:"linkedin.com/in/divya",   category:"Category B", status:"Connection Request Sent",      lastOutreach:"2024-03-20", lastFollowed:"2024-04-01", industry:"SaaS",       region:"North", comments:"" },
    { id:12, name:"Arun Pillai",    company:"FinServe Co",    designation:"CFO",               linkedin:"linkedin.com/in/arun",    category:"Category A", status:"Outreach Message Sent",        lastOutreach:"2024-03-18", lastFollowed:"2024-03-28", industry:"FinTech",    region:"West",  comments:"Sent intro deck" },
  ];
  
  export const MOCK_COMPANIES = [
    { id:1, name:"TechNova Ltd",   website:"technova.io",      region:"North", industry:"SaaS",       clients:"Google, Meta",      contacts:3 },
    { id:2, name:"LogiMove Inc",   website:"logimove.com",     region:"West",  industry:"Logistics",  clients:"Amazon, Flipkart",  contacts:2 },
    { id:3, name:"EduBridge",      website:"edubridge.in",     region:"South", industry:"EdTech",     clients:"BYJU's, Unacademy", contacts:4 },
    { id:4, name:"HealthBridge",   website:"healthbridge.co",  region:"East",  industry:"HealthTech", clients:"Apollo, Fortis",    contacts:2 },
    { id:5, name:"BlueSky SaaS",   website:"bluesky.io",       region:"North", industry:"SaaS",       clients:"Freshworks",        contacts:3 },
    { id:6, name:"FinServe Co",    website:"finserve.in",      region:"West",  industry:"FinTech",    clients:"HDFC, ICICI",       contacts:2 },
    { id:7, name:"HRFlow",         website:"hrflow.co",        region:"South", industry:"HRTech",     clients:"Zoho, Darwinbox",   contacts:1 },
    { id:8, name:"CloudBase",      website:"cloudbase.io",     region:"East",  industry:"SaaS",       clients:"Infosys, TCS",      contacts:2 },
    { id:9, name:"GreenLogix",     website:"greenlogix.in",    region:"North", industry:"Logistics",  clients:"Delhivery, Ekart",  contacts:1 },
    { id:10,name:"MediTech",       website:"meditech.co",      region:"West",  industry:"HealthTech", clients:"Max, Narayana",     contacts:1 },
  ];
  
  export const AUDIT_LOG = [
    { id:1,  time:"2024-04-21 10:32", entity:"Riya Sharma",   entityType:"Contact", field:"last_followed_up", oldVal:"2024-04-10",    newVal:"2024-04-21",       by:"admin",  source:"crm_ui"     },
    { id:2,  time:"2024-04-21 09:15", entity:"TechNova Ltd",  entityType:"Company", field:"outreach_status",  oldVal:"None",          newVal:"Conn. Sent",       by:"ravi_k", source:"crm_ui"     },
    { id:3,  time:"2024-04-20 17:44", entity:"Arjun Mehta",   entityType:"Contact", field:"last_followed_up", oldVal:"2024-04-05",    newVal:"2024-04-20",       by:"system", source:"sheet_sync"  },
    { id:4,  time:"2024-04-20 14:02", entity:"BlueSky SaaS",  entityType:"Company", field:"category",         oldVal:"Category B",    newVal:"Category A",       by:"admin",  source:"crm_ui"     },
    { id:5,  time:"2024-04-19 11:30", entity:"Sneha Patel",   entityType:"Contact", field:"comments",         oldVal:"",              newVal:"Interested",       by:"ravi_k", source:"crm_ui"     },
    { id:6,  time:"2024-04-19 09:00", entity:"LogiMove Inc",  entityType:"Company", field:"outreach_status",  oldVal:"Conn. Sent",    newVal:"Conn. Accepted",   by:"system", source:"sheet_sync"  },
    { id:7,  time:"2024-04-18 16:20", entity:"Dev Kumar",     entityType:"Contact", field:"last_followed_up", oldVal:"2024-04-01",    newVal:"2024-04-18",       by:"admin",  source:"crm_ui"     },
    { id:8,  time:"2024-04-18 13:10", entity:"HealthBridge",  entityType:"Company", field:"region",           oldVal:"South",         newVal:"North",            by:"ravi_k", source:"crm_ui"     },
    { id:9,  time:"2024-04-17 10:55", entity:"Priya Nair",    entityType:"Contact", field:"category",         oldVal:"Category C",    newVal:"Category A",       by:"admin",  source:"api"        },
    { id:10, time:"2024-04-17 08:30", entity:"EduBridge",     entityType:"Company", field:"outreach_status",  oldVal:"Outreach Sent", newVal:"Response +ve",     by:"system", source:"sheet_sync"  },
  ];
  
  export const FOLLOWUP_HISTORY = [
    { id:1, contact:"Riya Sharma",  company:"TechNova Ltd",  oldVal:"2024-04-10", newVal:"2024-04-21", changedAt:"2024-04-21 10:32", by:"admin",  source:"crm_ui",    note:"Followed up via LinkedIn" },
    { id:2, contact:"Arjun Mehta", company:"LogiMove Inc",  oldVal:"2024-04-05", newVal:"2024-04-20", changedAt:"2024-04-20 17:44", by:"system", source:"sheet_sync", note:"" },
    { id:3, contact:"Dev Kumar",   company:"HealthBridge",  oldVal:"2024-04-01", newVal:"2024-04-18", changedAt:"2024-04-18 16:20", by:"admin",  source:"crm_ui",    note:"Sent follow-up message" },
    { id:4, contact:"Priya Nair",  company:"BlueSky SaaS",  oldVal:"2024-03-28", newVal:"2024-04-17", changedAt:"2024-04-17 09:10", by:"ravi_k", source:"api",        note:"" },
  ];
  
  export const STATUS_DATA = [
    { name:"None", value:34 },
    { name:"Conn. Sent", value:58 },
    { name:"Conn. Accepted", value:42 },
    { name:"Outreach Sent", value:67 },
    { name:"Response +ve", value:29 },
    { name:"Response -ve", value:18 },
  ];
  
  export const CATEGORY_DATA = [
    { name:"Category A", value:72 },
    { name:"Category B", value:55 },
    { name:"Category C", value:43 },
    { name:"Category D", value:38 },
  ];
  
  export const INDUSTRY_DATA = [
    { industry:"FinTech",    contacts:48, companies:12 },
    { industry:"HealthTech", contacts:36, companies:9  },
    { industry:"EdTech",     contacts:54, companies:14 },
    { industry:"SaaS",       contacts:62, companies:16 },
    { industry:"Logistics",  contacts:28, companies:7  },
    { industry:"HRTech",     contacts:40, companies:11 },
  ];
  
  export const TREND_DATA = [
    { week:"W1 Mar", followUps:12 },
    { week:"W2 Mar", followUps:19 },
    { week:"W3 Mar", followUps:15 },
    { week:"W4 Mar", followUps:27 },
    { week:"W1 Apr", followUps:22 },
    { week:"W2 Apr", followUps:34 },
    { week:"W3 Apr", followUps:29 },
  ];
  
  export const STATUS_OPTIONS = [
    "None",
    "Connection Request Sent",
    "Connection Accepted",
    "Outreach Message Sent",
    "Response Received - Positive",
    "Response Received - Negative",
  ];
  
  export const CATEGORY_OPTIONS = ["Category A","Category B","Category C","Category D"];
  export const INDUSTRIES = ["All","SaaS","FinTech","HealthTech","EdTech","Logistics","HRTech"];
  export const REGIONS    = ["All","North","South","East","West"];
  
  export const STATUS_COLORS = ["#64748b","#f59e0b","#3b82f6","#8b5cf6","#10b981","#ef4444"];
  export const CAT_COLORS    = ["#06b6d4","#f97316","#a855f7","#84cc16"];