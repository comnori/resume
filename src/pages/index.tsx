import BasicLayout from "components/templates/layouts/BasicLayout"
import type { HeadFC, PageProps } from "gatsby"
import * as React from "react"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <BasicLayout selectedMenuKey="home">
      <>index</>
    </BasicLayout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
