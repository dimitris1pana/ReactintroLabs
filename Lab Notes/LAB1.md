# 🧪 Lab 1 – Intro to React with Vite


---

## 💠 Setup: Create a Vite + React Project

### 1. Install Node.js

Download from: [https://nodejs.org/](https://nodejs.org/)

### 2. Scaffold React App using Vite

```bash
npm create vite@latest my-first-react-app -- --template react
cd my-first-react-app
npm install
npm run dev
```

### 3. Open the app

Visit `http://localhost:5173` in your browser.

---

## 🗂️ Project Structure

* `main.jsx`: React entry point
* `App.jsx`: Root component
* `components/`: Your custom React components
* `vite.config.js`: Development settings

---

## 🧱 Basic Components

### `components/Header.jsx`

```jsx
function Header() {
  return <h1>Welcome to My First React App</h1>;
}

export default Header;
```

### Use in `App.jsx`

```jsx
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
```

---

## 📦 Props: Passing Data to Components

### `components/UserCard.jsx`

```jsx
function UserCard({ name, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}

export default UserCard;
```

### Use in `App.jsx`

```jsx
<UserCard name="Maria" age={22} />
```

---

## 🔀 State with useState

State is how a React component remembers information between renders.
	•	Think of state as the component’s memory.
	•	When state changes, the component re-renders automatically to reflect the new data

✅ useState(0) initializes a piece of state called count with value 0
✅ setCount() is used to update the value
✅ When you click the button, the value of count changes — and the UI updates automatically

### `components/Counter.jsx`

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;
```

### Use in `App.jsx`

```jsx
<Counter />
```


## 🧪 Render Dummy Data with `.map()`

```jsx
const users = [
  { name: 'Maria', age: 22 },
  { name: 'Nikos', age: 25 },
  { name: 'Giannis', age: 20 },
];

{users.map((user, i) => (
  <UserCard key={i} name={user.name} age={user.age} />
))}


with condition
  <div className="card">
                {users.map((user,i)=>(
                    user.age===22 &&<p key={i}>{user.name} - {user.age} years old</p>
                    
                ))}
                <div className="card">
                {users.map((user,i)=>(
                      user.age>22 &&<p key={i}>{user.name} - {user.age} years old</p>))}
```
---
## Examples 
### 1. Toggle Details

```jsx
import { useState } from 'react';

function ToggleDetails() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide' : 'Show'} Details
      </button>
      {showDetails && <p>This is some extra information.</p>}
    </div>
  );
}
```

---

### 2. Controlled Input

```jsx
import { useState } from 'react';

function NameInput() {
  const [name, setName] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name || 'stranger'}!</p>
    </div>
  );
}
```
---

This pattern keeps all data in a central state and passes what is needed through props — no session storage or context required.

---

