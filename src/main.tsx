import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
import { NotesList } from './components/templates/NotesList/NotesList';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NotesList />
  </StrictMode>,
)
