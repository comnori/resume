import ko_KR from "antd/locale/ko_KR"
import "./src/styles/global.css"

import React from "react"

import { ConfigProvider, theme as antdTheme } from "antd"

const algorithmList = {
  light: antdTheme.defaultAlgorithm,
  dark: antdTheme.darkAlgorithm,
}

export const wrapRootElement = ({ element }) => {
  const getSystemCurrentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"

  return (
    <ConfigProvider
      locale={ko_KR}
      theme={{ algorithm: algorithmList[getSystemCurrentTheme] }}
      componentSize="large">
      {element}
    </ConfigProvider>
  )
}
