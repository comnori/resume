import BasicLayout from "components/templates/layouts/BasicLayout/BasicLayout"
import type { HeadFC, PageProps } from "gatsby"
import React from "react"

const Blog: React.FC<PageProps> = () => {
  return <BasicLayout>Hello blog</BasicLayout>
}

export default Blog

export const Head: HeadFC = () => <title>Blog</title>
