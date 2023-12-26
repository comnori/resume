import { Card, Col, Flex, Layout, Row, Typography } from "antd"

import Footer from "components/organisms/Footer"
import Header from "components/organisms/Header"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"

import { graphql } from "gatsby"

const { Content } = Layout
const { Title } = Typography

const IndexPage = ({ data }) => {
  console.log(data)

  const cardImage = getImage(data.file)
  return (
    <Layout>
      <Header />
      <Content style={{ paddingTop: "1em" }}>
        <Row justify={"center"}>
          <Col>
            <Card hoverable>
              <Flex justify="space-between">
                <GatsbyImage
                  image={cardImage}
                  style={{ display: "block", width: 273 }}
                  alt="avatar"
                />
                <Flex
                  vertical
                  align="flex-end"
                  justify="space-between"
                  style={{ padding: 32 }}>
                  <Typography.Title level={3}>
                    <Title>Hello, I'm Yongsik Yun! 🤚</Title>
                    <Title level={2}>- A FULL-STACK WEB DEVELOPER</Title>
                  </Typography.Title>
                </Flex>
              </Flex>
            </Card>
          </Col>
        </Row>
        <Typography>
          <Title>LATEST FROM THE BLOG</Title>
          <Title>MY WORKS</Title>
        </Typography>
      </Content>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "icon.png" }) {
      childImageSharp {
        gatsbyImageData(width: 273, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`

export default IndexPage

export const Head = () => <title>Home Page</title>
