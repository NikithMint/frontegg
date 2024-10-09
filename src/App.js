import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Profile from './Profile';
import Privacy from './Privacy';
import AuditLogs from './AuditLogs';
import Tenants from './Tenants';
import Invite from './Invite';
import './App.css'
function App() {
  return (
    
      
      <div className="App">
        <Sidebar/>
        <div className="content">
          <Routes>
            <Route path="/profile" element={<Profile/>} />
            <Route path="/privacy" element={<Privacy/>} />
            <Route path="/audit-logs" element={<AuditLogs/>} />
            <Route path="/Tenants" element={<Tenants/>}/>
            <Route path="/Invite" element={<Invite/>}/>
            <Route path="/" element={<Profile/>} />
          </Routes>
        </div>
      </div>
    
    
 
  );
}

export default App;