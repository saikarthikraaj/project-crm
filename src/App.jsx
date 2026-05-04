import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar       from "./components/Sidebar";
import Dashboard     from "./pages/Dashboard";
import Contacts      from "./pages/Contacts";
import ContactDetail from "./pages/ContactDetail";
import Companies     from "./pages/Companies";
import CompanyDetail from "./pages/CompanyDetail";
import AuditLog      from "./pages/AuditLog";
import Sync          from "./pages/Sync";
import Reports       from "./pages/Reports";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display:"flex", minHeight:"100vh", background:"#f1f5f9", fontFamily:"'Segoe UI', sans-serif" }}>
        <Sidebar />
        <main style={{ marginLeft:220, flex:1, padding:"32px 36px", minHeight:"100vh" }}>
          <Routes>
            <Route path="/"              element={<Dashboard />}     />
            <Route path="/contacts"      element={<Contacts />}      />
            <Route path="/contacts/:id"  element={<ContactDetail />} />
            <Route path="/companies"     element={<Companies />}     />
            <Route path="/companies/:id" element={<CompanyDetail />} />
            <Route path="/audit"         element={<AuditLog />}      />
            <Route path="/sync"          element={<Sync />}          />
            <Route path="/reports"       element={<Reports />}       />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}