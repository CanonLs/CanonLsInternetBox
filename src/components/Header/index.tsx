
import React from 'react'
import { Layout } from 'antd';
const { Header } = Layout;
import HeaderMenu from '../HeaderMenu/';


interface IntrinsicAttributes {
    style?: React.CSSProperties;
}


const index: React.FC<IntrinsicAttributes> = ({ style, ...props }) => {
    console.log(props)

    return (
        <Header style={style}>
            <HeaderMenu></HeaderMenu>
        </Header>
    )
}

export default index


