import { useState } from 'react';
import UserForm from '../components/UserForm.jsx';
import UserList from '../components/UserList.jsx';
function Home() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Maria' },
    { id: 2, name: 'Nikos' },
  ]);

  // #spread operator(...) in React works the same way conditions work in JavaScript.
  const addUser = (name) => {
    const newUser = { id: users.length + 1, name };
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <h1>User Management</h1>
      <UserForm onAddUser={addUser} />
      <UserList users={users} />
    </div>
  );
}

export default Home;