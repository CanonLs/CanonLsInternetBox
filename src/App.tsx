import { Layout, ConfigProvider } from 'antd';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css'

function App() {

    return (
        <ConfigProvider theme={{
            components: {
                Layout: {
                    /* 这里是你的组件 token */
                    bodyBg: "rgba(0, 0, 0, 0)",
                    footerBg: "rgba(0, 0, 0, 0)",
                    headerBg: "rgba(0, 0, 0, 0)",
                },
            },
        }}>
            <Layout style={{ minWidth: '100vw' }}>
                <Header style={{ minHeight: '10vh' }}></Header>
                <Content style={{ minHeight: '80vh' }} ></Content>
                <Footer style={{ minHeight: '10vh' }}></Footer>
            </Layout>
        </ConfigProvider>

    )
}

export default App
