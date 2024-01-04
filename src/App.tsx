import { useState, useRef } from 'react'
import './App.css'
import handler from '../api/test';

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
        testApi()
    }
    const testApi = () => {
        fetch('https://canon-ls-internet-box.vercel.app/api/test?querys=1111')
            .then((response) => {
                console.log(response)
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log(data)
            })
            .catch((error) => {
                console.error('There has been a problem with your fetch operation:', error);
            });



        // const xhr = new XMLHttpRequest();
        // xhr.open('GET', '/api/test');
        // xhr.onload = () => {
        //     if (xhr.status === 200) {
        //         console.log(xhr)

        //         const data = JSON.parse(xhr.responseText);
        //         console.log(data)
        //     }
        // };
        // xhr.send();


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
