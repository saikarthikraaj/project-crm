// src/api/sync.js
export const triggerSync = async (sourceId) => {
    // Replace with: return axios.post(`/api/sync/${sourceId}`)
    return new Promise((resolve) =>
      setTimeout(() => resolve({ status: "success", synced: 24, failed: 0 }), 2000)
    );
  };
  
  export const getSyncSources = async () => [
    { id:1, sector:"SaaS",       file:"zoho_saas.xlsx",       lastSync:"2024-04-21 10:00", status:"success" },
    { id:2, sector:"FinTech",    file:"zoho_fintech.xlsx",     lastSync:"2024-04-21 09:30", status:"success" },
    { id:3, sector:"HealthTech", file:"zoho_health.xlsx",      lastSync:"2024-04-20 18:00", status:"partial" },
    { id:4, sector:"EdTech",     file:"zoho_edtech.xlsx",      lastSync:"2024-04-20 17:00", status:"success" },
    { id:5, sector:"Logistics",  file:"zoho_logistics.xlsx",   lastSync:"2024-04-19 12:00", status:"failed"  },
    { id:6, sector:"HRTech",     file:"zoho_hrtech.xlsx",      lastSync:"2024-04-19 10:00", status:"success" },
  ];