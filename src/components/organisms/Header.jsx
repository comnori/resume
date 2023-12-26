import { EditOutlined, IdcardOutlined, ProjectOutlined, UserOutlined } from "@ant-design/icons"
import { Avatar, Col, Layout, Menu, Row } from "antd"
import * as React from "react"

const { Header: AntdHeader } = Layout

const items = [
  {
    label: "About ME",
    key: "home",
    icon: <IdcardOutlined />,
  },
  {
    label: "My Works",
    key: "app",
    icon: <ProjectOutlined />,
  },
  {
    label: "Blog",
    key: "blog",
    icon: <EditOutlined />,
  },
]

const Header = () => {
  return (
    <AntdHeader>
      <Row justify="space-between">
        <Col flex={"auto"}>
          <Menu
            theme="dark"
            mode="horizontal"
            items={items}
          />
        </Col>
        <Col>
          <Avatar icon={<UserOutlined />} />
        </Col>
      </Row>
    </AntdHeader>
  )
}

export default Header
