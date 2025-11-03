import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { useState } from 'react';

function UserForm({ onAddUser }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '') {
      onAddUser(name);
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter user name"
        color='primary'
      />
      <Button type="submit">Add User</Button>
    </form>
  );
}

export default UserForm;