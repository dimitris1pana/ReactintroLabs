# HCI React Lab - University of Piraeus
## Department of Informatics - Undergraduate Program

This repository contains comprehensive materials for the Human-Computer Interaction (HCI) course using React. The lab covers fundamental React concepts, user interface design principles, interaction modeling, and usability evaluation techniques.

---

## 📚 Course Overview

This lab introduces students to modern web development using React while emphasizing human-computer interaction principles. Students will learn to build interactive interfaces, model user interactions, and evaluate usability through hands-on exercises.

### Learning Objectives
- Master React fundamentals including components, props, state management, and routing
- Apply HCI principles to interface design and user experience
- Model user interactions using UML and flow diagrams
- Conduct usability evaluations using statistical methods
- Understand Norman's Seven Stages of Action in interface design
- Build complete interactive React applications with proper navigation and onboarding

---

## 🚀 Getting Started

### Node Installation
Download and install Node.js from: https://nodejs.org/en/download

### React Vite Installation 
Having installed npm (node) in previous step, create your first React app:

```bash
npm create vite@latest my-first-react-app -- --template react
cd my-first-react-app
npm install
npm run dev
```

### Additional Tools & Libraries

#### Material UI (Optional)
For enhanced UI components: https://mui.com/material-ui/getting-started/installation/

#### React Dev Tools
Essential browser extension for debugging: https://react.dev/learn/react-developer-tools

#### React Router DOM
For single-page application routing without full page reloads:

```bash
npm install react-router-dom
```

#### Reactour for Onboarding
For step-by-step user onboarding (React 19 compatible):

```bash
npm install @reactour/tour
```

---

## 📖 Lab Structure

### Lab 1: Introduction to React with Vite
**Topics Covered:**
- Project setup and structure
- Creating and using React components
- Props for data passing
- State management with `useState`
- Rendering lists with `.map()`
- Conditional rendering
- Controlled form inputs
- Toggle components

**Key Concepts:**
- Component composition
- Unidirectional data flow
- Declarative UI programming
- React hooks fundamentals

See detailed notes in: `Lab Notes/LAB1.md`

### Lab 2: Routing and Onboarding
**Topics Covered:**
- Multi-page navigation with React Router v6
- Route configuration and navigation
- Step-by-step onboarding with @reactour/tour
- Managing shared state via props
- Loading states with `useEffect`
- Advanced conditional rendering
- Full-screen layout configuration

**Key Concepts:**
- Client-side routing
- User onboarding patterns
- State lifting and prop drilling
- Side effects in React
- UX patterns for navigation

See detailed notes in: `Lab Notes/LAB2.md`

---

## 🎨 HCI Modeling & Visualization

### Norman's Stages of Action
This lab incorporates Donald Norman's Seven Stages of Action model to analyze and design user interactions. Documentation includes:
- Circular diagrams
- State diagrams
- Sequence diagrams
- Flow diagrams showing pain points
- Timeline visualizations

Resources available in: `NormanStages/`

### Mermaid Diagrams
Learn to create professional UML and flow diagrams for documentation:
- Quick starter guide
- Advanced Mermaid techniques
- Cheat sheets for common diagram types

Resources available in: `manual/`

---

## 👥 User Modeling

### Food Ordering Case Study
Practical application of user modeling techniques through a food ordering system example. This demonstrates:
- User journey mapping
- Task analysis
- Interaction flow modeling
- Persona development

Resources available in: `userModelling/FoodOrdering/`

---

## 📊 Usability Evaluation

### Statistical Analysis Tools
Learn to conduct and analyze usability studies using Jupyter notebooks:

**Available Notebooks:**
- `onetest.ipynb` - One-sample t-test for single group analysis
- `paired-ttest.ipynb` - Paired t-test for before/after comparisons
- `annova.ipynb` - ANOVA for multiple group comparisons

**Skills Developed:**
- Experimental design for usability testing
- Statistical significance testing
- Data interpretation and reporting
- Evidence-based design decisions

Resources available in: `evaluation/`

---

## 🛠️ Project Structure

```
reactVite/
├── Lab Notes/          # Detailed lab instructions and tutorials
├── NormanStages/       # HCI modeling and interaction diagrams
├── evaluation/         # Statistical analysis for usability testing
├── manual/             # Documentation and diagram creation guides
├── userModelling/      # User modeling case studies
├── my-first-react-app/ # Sample React application
├── README.md           # This file
├── STARTER.md          # Quick start guide
└── git.MD              # Git workflow documentation
```

---

## Key Skills Developed

### Technical Skills
- Basic Modern React development (React 19 + Vite)
- Component-based architecture
- State management patterns
- Client-side routing
- Form handling and validation
- UI/UX implementation

### HCI Skills
- User-centered design principles
- Interaction modeling and documentation
- Usability evaluation methods
- Statistical analysis of user studies
- Accessibility considerations
- Onboarding design patterns

---

## 📝 Additional Resources

- **STARTER.md** - Quick reference for common setup tasks
- **git.MD** - Version control best practices for the course
- Git repository: Collaborative development workflow

---

## 🎓 Course Information

**Institution:** University of Piraeus  
**Department:** Informatics  
**Level:** Undergraduate  
**Course:** Human-Computer Interaction (HCI)  
**Focus:** React-based interactive interface development, HCI principles, usability evaluation

---

## 💡 Tips

1. **Follow the lab sequence** - Each lab builds on previous concepts
2. **Experiment with examples** - Modify code to deepen understanding
3. **Use React DevTools** - Essential for debugging state and props
4. **Document your designs** - Practice creating UML and flow diagrams
5. **Test with users** - Apply evaluation methods to your projects
6. **Review Norman's principles** - Apply HCI theory to practical development

---
