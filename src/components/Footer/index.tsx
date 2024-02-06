import React from 'react'
import { Layout } from 'antd';
const { Footer } = Layout;


interface IntrinsicAttributes {
    style?: React.CSSProperties;
}


const index: React.FC<IntrinsicAttributes> = ({ style, ...props }) => {
    console.log(props)
    return (
        <Footer style={style}>
            Click on the Vite and React logos to learn more
        </Footer>
    )
}

export default index