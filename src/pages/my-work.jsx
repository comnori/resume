import { Card, List, Typography } from "antd"
import BasicLayout from "components/templates/BasicLayout"
import * as React from "react"

const { Title } = Typography

const data = [
  {
    title: "Title 1",
  },
  {
    title: "Title 2",
  },
  {
    title: "Title 3",
  },
  {
    title: "Title 4",
  },
  {
    title: "Title 5",
  },
]

const MyWorkPage = () => {
  return (
    <BasicLayout>
      <Typography>
        <Title>My Work</Title>
        <Title level={2}>Working</Title>
      </Typography>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 2,
          xl: 3,
          xxl: 3,
        }}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Card
              title={item.title}
              hoverable>
              Card content
            </Card>
          </List.Item>
        )}
      />
      <Typography>
        <Title level={2}>Release</Title>
      </Typography>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 2,
          xl: 3,
          xxl: 3,
        }}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Card
              title={item.title}
              hoverable>
              Card content
            </Card>
          </List.Item>
        )}
      />
    </BasicLayout>
  )
}

export default MyWorkPage
