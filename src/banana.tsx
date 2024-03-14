import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {ShareProvider} from "./hooks/share-data";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ShareProvider>
            <App/>
        </ShareProvider>
    </React.StrictMode>,
)
