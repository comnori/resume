import { Card, Col, Flex, List, Row, Typography } from "antd"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"

import BasicLayout from "components/templates/BasicLayout"
import { graphql } from "gatsby"

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
          itemLayout="vertical"
          size="large"
          dataSource={lastestBlogList}
          grid={{ gutter: 16, column: 3 }}
          renderItem={({ id, title, description }) => (
            <List.Item
              key={id}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              }>
              <List.Item.Meta
                title={title}
                description={description}
              />
            </List.Item>
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
