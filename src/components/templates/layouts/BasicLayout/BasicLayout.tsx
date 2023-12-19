import { Layout } from "antd"

import Header from "components/organisms/header"
import React from "react"
import { BasicLayoutProps } from "./BasicLayoutInterface"

const { Content, Footer } = Layout

const BasicLayout: React.FC<BasicLayoutProps> = ({ children, selectedMenuKey }) => {
  return (
    <Layout>
      <Header />
      <Content>{children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  )
}

export default BasicLayout
