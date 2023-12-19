import React from "react"

export interface BasicLayoutProps {
  children: React.ReactElement
  selectedMenuKey: "home" | "blog" | "contact"
}
