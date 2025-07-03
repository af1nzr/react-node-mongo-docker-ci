import React, { useEffect, useState } from 'react';
import api from './services/api';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Users from Backend</h1>
      <ul>
        {users.map(user => (<li key={user.id}>{user.name}</li>))}
      </ul>
    </div>
  );
}

export default App;
