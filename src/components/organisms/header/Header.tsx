import { FormOutlined, HomeOutlined, MailOutlined } from "@ant-design/icons"
import { Menu, MenuProps } from "antd"
import React from "react"

const items: MenuProps["items"] = [
  {
    label: "Home",
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: "Blog",
    key: "blog",
    icon: <FormOutlined />,
  },
  {
    label: "Contact",
    key: "contact",
    icon: <MailOutlined />,
  },
]

const Header: React.FC = () => {
  const onClick: MenuProps["onClick"] = e => {
    console.log(e)
  }

  return (
    <Menu
      items={items}
      mode="horizontal"
      onClick={onClick}
    />
  )
}

export default Header
