import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import {  useAuthUser } from '@frontegg/react';
function Sidebar() {
    const user = useAuthUser()
    const Navigate= useNavigate()
  return (
    <div className="sidebar">
      <div className="profile-avatar">
        <img src={user.profilePictureUrl} alt="Profile" width="170" height="165"/>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
      <nav>
        <ul>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/privacy">Privacy & Security</Link></li>
          <li><Link to="/audit-logs">Audit Logs</Link></li>
          <li><Link to="/Tenants">Tenants</Link></li>
          <li><Link to="/Invite">Invite</Link></li>
          <li><button className="logout" onClick={()=>Navigate('/account/logout')}> Logout </button></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;