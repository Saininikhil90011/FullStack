import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Que01 from './components/Que01.jsx'
import Que02 from './components/Que02.jsx'
import Que03 from './components/Que03.jsx'
import Que04 from './components/Que04.jsx'
import Que05 from './components/Que05.jsx'
import Que06 from './components/Que06.jsx'
import Que7 from './components/Que7.jsx'
import Que08 from './components/Que08.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Que01></Que01> */}
    {/* <Que02></Que02> */}
    {/* <Que03></Que03> */}
    {/* <Que04></Que04> */}
    {/* <Que05></Que05> */}
    {/* <Que06></Que06> */}
    {/* <Que7></Que7> */}
    <Que08></Que08>
  </StrictMode>,
)
