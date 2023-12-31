import { List, Typography } from "antd"
import BasicLayout from "components/templates/BasicLayout"
import { graphql } from "gatsby"
import * as React from "react"

const { Title } = Typography

const BlogPage = ({
  location: { pathname, search, hash },
  data: {
    allMdx: {
      edges,
      pageInfo: { totalCount, perPage, pageCount, currentPage },
    },
  },
}) => {
  const blogList = edges.map(({ node }) => {
    const {
      id,
      body,
      frontmatter: { title, date, slug, description },
    } = node

    return { title, date, url: slug, id, body, description }
  })

  const handleListItemClick = e => {
    console.log(e)
  }

  return (
    <BasicLayout style={{ minHeight: "100%" }}>
      <Typography>
        <Title>Blog</Title>
        <Title level={2}>LATEST FROM THE BLOG</Title>
      </Typography>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{ pageSize: perPage, position: "bottom", align: "center", total: totalCount, current: currentPage }}
        dataSource={blogList}
        grid={{ gutter: 16, column: 3 }}
        rowKey={"id"}
        renderItem={({ id, title, date, url, body, description }) => (
          <List.Item
            extra={
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
            onClick={() => handleListItemClick(id)}>
            <List.Item.Meta
              title={title}
              description={description}
            />
          </List.Item>
        )}
      />
    </BasicLayout>
  )
}

export default BlogPage

export const Head = () => {
  return (
    <>
      <title>Blog</title>
      <meta
        name="desciption"
        content="Developer Comnori's blog"
      />
    </>
  )
}

export const query = graphql`
  query MyQuery {
    allMdx(skip: 0, limit: 10, sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          frontmatter {
            title
            date
            slug
            description
          }
          id
          body
        }
      }
      pageInfo {
        totalCount
        perPage
        pageCount
        itemCount
        currentPage
        hasNextPage
        hasPreviousPage
      }
    }
  }
`
