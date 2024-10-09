import React, { useState } from 'react';
import { useAuth } from '@frontegg/react';

const InviteUserComponent = () => {
  const { userService, authState, isAuthenticated } = useAuth();

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const inviteUser = async () => {
    try {
      await userService.inviteUser({ email });
      setMessage(`Invitation sent to ${email}`);
    } catch (error) {
      setMessage('Error sending invitation');
    }
  };


  return (
    <div>
      <h1>Invite User</h1>
      {isAuthenticated?(
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          <button onClick={inviteUser}>Invite User</button>
          {message && <p>{message}</p>}
        </div>
      ) : (
        <p>Please log in to invite a user</p>
      )}
    </div>
  );
};

export default InviteUserComponent;
