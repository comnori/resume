import { MailOutlined } from "@ant-design/icons"
import { Menu, MenuProps } from "antd"
import React from "react"

const items: MenuProps["items"] = [
  {
    label: "Navigation One",
    key: "mail",
    icon: <MailOutlined />,
  },
]

const Header: React.FC = () => {
  return <Menu items={items} />
}

export default Header
