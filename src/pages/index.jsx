import { Badge, Card, Col, Descriptions, Flex, List, Row, Skeleton, Space, Timeline, Typography } from "antd"
import BasicLayout from "components/templates/BasicLayout"
import { motion } from "framer-motion"
import { graphql, navigate } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"

const { Title } = Typography

const descItemList = [
  {
    key: "1",
    label: "Product",
    children: "Cloud Database",
  },
  {
    key: "2",
    label: "Billing Mode",
    children: "Prepaid",
  },
  {
    key: "3",
    label: "Automatic Renewal",
    children: "YES",
  },
  {
    key: "4",
    label: "Order time",
    children: "2018-04-24 18:00:00",
  },
  {
    key: "5",
    label: "Usage Time",
    children: "2019-04-24 18:00:00",
    span: 2,
  },
  {
    key: "6",
    label: "Status",
    children: (
      <Badge
        status="processing"
        text="Running"
      />
    ),
    span: 3,
  },
  {
    key: "7",
    label: "Negotiated Amount",
    children: "$80.00",
  },
  {
    key: "8",
    label: "Discount",
    children: "$20.00",
  },
  {
    key: "9",
    label: "Official Receipts",
    children: "$60.00",
  },
  {
    key: "10",
    label: "Config Info",
    children: (
      <>
        Data disk type: MongoDB
        <br />
        Database version: 3.4
        <br />
        Package: dds.mongo.mid
        <br />
        Storage space: 10 GB
        <br />
        Replication factor: 3
        <br />
        Region: East China 1
        <br />
      </>
    ),
  },
]

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
    <BasicLayout>
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
          bordered
          size="large"
          dataSource={lastestBlogList}
          rowKey={"id"}
          renderItem={({ title, url, description }) => (
            <motion.div
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 1 }}>
              <List.Item
                onClick={() => handleListItemClick(url)}
                extra={
                  <Space style={{ height: "100%" }}>
                    <Skeleton.Image />
                  </Space>
                }>
                <List.Item.Meta
                  title={title}
                  description={description}
                />
              </List.Item>
            </motion.div>
          )}
        />
        <Title>My Career</Title>
        <Descriptions
          title="User Info"
          bordered
          items={descItemList}
        />

        <Title level={2}>Career</Title>
        <Timeline
          mode="left"
          items={[
            {
              label: "2015-09-01",
              children: "Create a services",
            },
            {
              label: "2015-09-01 09:12:11",
              children: "Solve initial network problems",
            },
            {
              children: "Technical testing",
            },
            {
              label: "2015-09-01 09:12:11",
              children: "Network problems being solved",
            },
          ]}
        />
        <Title level={2}>Tech Stack</Title>
        <Title level={3}>Frontend</Title>
        <Title level={4}>Language</Title>
        <Title level={5}>Framework / Library</Title>
        <Title level={3}>Backend</Title>
        <Title level={3}>DevOps</Title>
        <Title level={3}>Developer Experience</Title>
        <Title level={4}>Operation System</Title>
        <Title level={4}>IDE</Title>
        <Title level={4}>Utility</Title>
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
