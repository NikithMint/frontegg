import React, { useState } from 'react';
import { useAuthUser } from '@frontegg/react';
function Profile() {
  const user= useAuthUser();

  const [userInfo, setUserInfo] = useState({
    name: user.name,
    email: user.email,
    phoneNumber: '',
    address: '',
    jobTitle: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };



  return (
    <div className="profile-container">
      <h2>Basic Profile Information</h2>
      <form>
        <label>Email</label>
        <input type="email" value={userInfo.email} name="email" disabled />
        
        <label>Name</label>
        <input type="text" value={userInfo.name} name="name" onChange={handleChange} />
        
        <label>Phone Number</label>
        <input type="text" value={userInfo.phoneNumber} name="phoneNumber" onChange={handleChange} />
        
        <label>Address</label>
        <input type="text" value={userInfo.address} name="address" onChange={handleChange} />
        
        <label>Job Title</label>
        <input type="text" value={userInfo.jobTitle} name="jobTitle" onChange={handleChange} />
        <br></br>
        <br></br>
        <button onClick={()=>alert(user.accessToken)}>Click here to view "Access Token"</button>
        
      </form>
      
    </div>
  );
}

export default Profile;