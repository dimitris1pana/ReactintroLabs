import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { TourProvider } from '@reactour/tour';

const steps=[
  {
    selector: '.nav',
    content: 'This is the navigation bar where you can find links to different pages.',
  },
  {
    selector: 'h2',
    content: 'This is a heading element that introduces the content of the page.',
  },
];
createRoot(document.getElementById('root')).render(
  <>
  <BrowserRouter>
  <TourProvider steps={steps}> 
    <App />
    </TourProvider>
  </BrowserRouter>
  </>,
)
