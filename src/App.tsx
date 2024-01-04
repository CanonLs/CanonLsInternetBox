import { useState, useRef } from 'react'
import handle from "../api/test";
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const heartDom = useRef<HTMLInputElement>(null)


    const addCount = () => {
        setCount((count) => count + 1)
        bigHeart()
    }
    const bigHeart = () => {
        heartDom.current?.classList.add('big')
        setTimeout(() => {
            heartDom.current?.classList.remove('big')
        }, 100)
        //写一个fetch请求根目录下api文件夹下test
        console.log(handle)


    }


    return (
        <>
            <div>
                李潇潇
            </div>
            <h1 className="heart" ref={heartDom}>♥️</h1>
            <div className="card">
                <button onClick={() => addCount()}>
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
