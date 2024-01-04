import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                李潇潇
            </div>
            <h1>♥️</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    好运+ {count}
                </button>
                <p>
                    点上边的好运
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
