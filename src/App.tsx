import { useState, useRef } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const heartDom = useRef<HTMLInputElement>(null)


    const addCount = () => {
        setCount((count) => count + 1)
        bigHeart()
    }
    const bigHeart = () => {
        // 这里应该调用一个方法来改变样式
        //点击后，让心变大然后马上缩小
        // Document.querySelector('.heart').classList.add('big')
        // setTimeout(() => {
        //     document.querySelector('.heart').classList.remove('big')
        // }, 1000)
        //给heartDom添加class
        heartDom.current?.classList.add('big')
        setTimeout(() => {
            heartDom.current?.classList.remove('big')
        }, 100)
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
