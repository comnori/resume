import { Layout } from "antd"
import Footer from "components/organisms/Footer"
import Header from "components/organisms/Header"
import * as React from "react"

const { Content } = Layout

const BasicLayout = ({ children, style }) => {
  return (
    <Layout style={style}>
      <Header />
      <Content style={{ height: "100%", padding: "10px 50px" }}>{children}</Content>
      <Footer />
    </Layout>
  )
}

export default BasicLayout
