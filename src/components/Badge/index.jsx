import React from 'react';

const Badge = ({ info }) => {
  const { name, username, email } = info
  return (
    <div className="badge">
      <h2>Task 2 - User Fetch Info</h2>
      <p>Name: {name}</p>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <br/>
      <br/>
      <hr/>
    </div>
  );
};

export default Badge;
