import React, { useState, useRef } from 'react'
import { Layout } from 'antd';
const { Content } = Layout;


interface IntrinsicAttributes {
    style?: React.CSSProperties;
}


const index: React.FC<IntrinsicAttributes> = ({ style, ...props }) => {
    console.log(props)

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
        fetch('/api/test')
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
    }
    return (
        <Content style={style}>
            <div>
                李潇潇
            </div>
            <span className="heart" ref={heartDom}>♥️</span>
            <div className="card">
                <button onClick={() => addCount()}>好运+ {count}</button>
                <p>
                    点上边的好运
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </Content>
    )
}

export default index