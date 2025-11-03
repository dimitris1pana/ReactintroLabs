# 🧪 Lab 2 – Routing and Onboarding in React (React 19 + Vite)

This lab builds on the fundamentals from Lab 1 and introduces:

* Multi-page navigation using **React Router v6**
* Step-by-step onboarding using **@reactour/tour** (compatible with React 19)

---
### VITE setup to ensure full screen width
In your `App.css` or `index.css`, replace #rout and #nav with  the following styles to make sure your app uses the full width of the screen:
```css
#root {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

.nav {
  width: 100%;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
}

```

## 🚦 React Router Basics

## 🧩 Managing and Sharing Lists via Props

In this example, we maintain a list of users in the main `App.jsx` component. Users can be added through a child form component, and displayed in another child component.

### `App.jsx`

```jsx
import { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

function App() {
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

export default App;
```

### `components/UserForm.jsx`

```jsx
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
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter user name"
      />
      <button type="submit">Add User</button>
    </form>
  );
}

export default UserForm;
```

### `components/UserList.jsx`

```jsx
function UserList({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;
```

---

### 🌀 Conditional Rendering: `condition ? true : false`

You can use JavaScript's ternary operator in React for inline conditions:

```jsx
const isLoggedIn = true;
return (
  <p>{isLoggedIn ? 'Welcome back!' : 'Please log in.'}</p>
);
```

---

### ⏳ Loading Example with `useState` and `useEffect`

```jsx
import { useEffect, useState } from 'react';

function LoadingExample() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // simulate a delay
    setTimeout(() => {
      setData({ message: 'Data loaded!' });
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>{data.message}</p>
      )}
    </div>
  );
}

export default LoadingExample;
```

---

### 1. Install React Router

```bash
npm install react-router-dom
```

### 2. Set Up Routing

```jsx
// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

### 3. Define Routes in App.jsx

```jsx
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div>
      <nav className="nav">
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
```

### Sample Page Component

```jsx
// pages/Home.jsx
function Home() {
  return <h2 className="home-title">Welcome to the Home Page</h2>;
}

export default Home;
```

---

## Onboarding with @reactour/tour (React 19 compatible)

### 1. Install Reactour

```bash
npm install @reactour/tour
```

### 2. Wrap App in TourProvider

```jsx
// main.jsx
import { TourProvider } from '@reactour/tour';

const steps = [
  {
    selector: '.nav',
    content: 'This is the navigation bar where you can switch pages.',
  },
  {
    selector: '.home-title',
    content: 'This is your homepage title.',
  },
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <TourProvider steps={steps}>
      <App />
    </TourProvider>
  </BrowserRouter>
);
```

### 3. Trigger Onboarding from App

```jsx
// App.jsx
import { useTour } from '@reactour/tour';

function App() {
  const { setIsOpen } = useTour();

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Start Onboarding</button>
      <nav className="nav">
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
```

---

