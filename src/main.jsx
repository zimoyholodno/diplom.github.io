import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Canvas} from "@react-three/fiber";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div id="container">
        <div className="aim"></div>
         <Canvas camera={{ fov: 55 }} shadows>
            <App />
        </Canvas>
    </div>
  </React.StrictMode>,
)

