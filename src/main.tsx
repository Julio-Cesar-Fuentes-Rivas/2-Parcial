import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
//actualizacion de la ruta del componente NotesList
import { NotesList } from './components/templates/NotesList/NotesList';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NotesList />
  </StrictMode>,
)
