import { List, Typography } from "antd"
import BasicLayout from "components/templates/BasicLayout"
import { motion } from "framer-motion"
import { graphql, navigate } from "gatsby"
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

  const handleListItemClick = url => {
    navigate(`/posts${url}`)
  }

  return (
    <BasicLayout style={{ minHeight: "100%" }}>
      <List
        itemLayout="vertical"
        pagination={{ pageSize: perPage, position: "bottom", align: "center", total: totalCount, current: currentPage }}
        dataSource={blogList}
        rowKey={"id"}
        renderItem={({ title, url, description }) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}>
            <List.Item
              extra={
                <img
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              }
              onClick={() => handleListItemClick(url)}>
              <List.Item.Meta
                title={title}
                description={description}
              />
            </List.Item>
          </motion.div>
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
