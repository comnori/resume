import { Card, Col, Flex, Row, Typography } from "antd"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"

import BasicLayout from "components/templates/BasicLayout"
import { graphql } from "gatsby"

const { Title } = Typography

const IndexPage = ({ data }) => {
  const cardImage = getImage(data.file)
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
