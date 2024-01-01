import { Card, Col, Flex, List, Row, Typography } from "antd"
import BasicLayout from "components/templates/BasicLayout"
import { motion } from "framer-motion"
import { graphql, navigate } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"

const { Title } = Typography

const IndexPage = ({
  data: {
    file,
    allMdx: { edges },
  },
}) => {
  const cardImage = getImage(file)

  const lastestBlogList = edges.map(({ node }) => {
    const {
      id,
      frontmatter: { title, date, slug, description },
    } = node

    return { title, date, url: slug, id, description }
  })

  const handleListItemClick = url => {
    navigate(`/posts${url}`)
  }

  return (
    <BasicLayout style={{ minHeight: "100%" }}>
      <Row justify={"center"}>
        <Col>
          <Card hoverable>
            <Flex justify="space-between">
              <GatsbyImage
                image={cardImage}
                style={{ display: "block" }}
                alt="avatar"
              />
              <Flex
                vertical
                align="flex-end"
                justify="space-between"
                style={{ padding: 32 }}>
                <Typography>
                  <Title>Hello, I'm Yongsik Yun! 🤚</Title>
                  <Title level={2}>- A FULL-STACK WEB DEVELOPER</Title>
                </Typography>
              </Flex>
            </Flex>
          </Card>
        </Col>
      </Row>
      <Typography>
        <Title>LATEST FROM THE BLOG</Title>
        <List
          size="large"
          dataSource={lastestBlogList}
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
        <Title>MY WORKS</Title>
      </Typography>
    </BasicLayout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "icon.png" }) {
      childImageSharp {
        gatsbyImageData(width: 512)
      }
    }
    allMdx(limit: 3, sort: { frontmatter: { date: DESC } }) {
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
    }
  }
`

export default IndexPage

export const Head = () => {
  return (
    <>
      <title>Home Page</title>
      <meta
        name="desciption"
        content="Developer Comnori's homepage"
      />
    </>
  )
}
