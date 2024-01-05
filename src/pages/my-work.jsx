import { GithubOutlined } from "@ant-design/icons"
import { Typography } from "antd"
import WorkList from "components/organisms/WorkList"
import BasicLayout from "components/templates/BasicLayout"
import * as React from "react"

const { Title } = Typography

const workingList = [
  {
    key: 1,
    title: "Spring template Awesome SOHO",
    description:
      "Small Office Home Office 에 최적화된 Java Backend 템플릿입니다. 확장 가능한 사용자/메뉴/권한/공통 관련을 제공하는 것이 목표입니다.",
    url: "https://github.com/users/comnori/projects/2",
    icon: GithubOutlined,
    isPrivate: true,
    tags: [
      "Java",
      "Spring Boot",
      "Spring Framework",
      "Spring Data JPA",
      "Spring Data JDBC",
      "Spring Data Redis",
      "Spring Data REST",
      "Spring Security",
      "Spring Authorization Server",
      "Spring Rest Docs",
      "Spring Valut",
      "Hibernate",
      "Apche Kafka",
      "Redis",
      "Postgres",
      "devcontainer",
      "docker",
    ],
  },
  {
    key: 2,
    title: "DevOps template Awesome SOHO",
    description: "",
    url: "https://github.com/users/comnori/projects/6",
    icon: GithubOutlined,
    isPrivate: true,
    tags: [],
  },
  {
    key: 3,
    title: "RPA Project",
    description:
      "Spring template을 확장하여 BPM 기반의 RPA 시스템을 작성합니다. 사내의 주요 업무를 체계적으로 처리하는 것에 중점을 둡니다.",
    url: "https://github.com/users/comnori/projects/7",
    icon: GithubOutlined,
    tags: [],
  },
  {
    key: 4,
    title: "Private Crawler",
    description:
      "개인적인 관심사의 홈페이지/뉴스 피드/뉴스 레터 등의 정보를 crawling 하여 자동 번역 및 요약해서 한곳에서 확인할 수 있는 프로젝트입니다.",
    url: "https://github.com/users/comnori/projects/5",
    icon: GithubOutlined,
    isPrivate: true,
    tags: ["playwright"],
  },
  {
    key: 5,
    title: "Homelab rebuild",
    description: "DevOps 템플릿을 사용하여 Home에서 전반적인 개발작업을 수행하는 것이 목표입니다.",
    url: "https://github.com/users/comnori/projects/9",
    icon: GithubOutlined,
    isPrivate: true,
    tags: [],
  },
]

const releaseList = [
  {
    key: 1,
    title: "cra-template-awesome-soho",
    description:
      "Docker기반 devcontainer에서 사전에 정의된 Node환경 / vscode 확장이 자동으로 이루어 집니다. 이로 인해 프로젝트를 바로 시작할 수 있습니다.",
    url: "https://github.com/comnori/cra-template-awesome-soho",
    icon: GithubOutlined,
    tags: [
      "Javascript",
      "Typescript",
      "React",
      "react-script",
      "redux",
      "ant design",
      "sass",
      "axios",
      "i18next",
      "eslint",
      "prettier",
      ".env",
      "editorconfig",
      "devcontainer",
      "sonarlint",
    ],
  },
  {
    key: 2,
    title: "vite-template-awesome-soho",
    description: "cra-template-awesome-soho를 vite로 변경한 프로젝트",
    url: "https://github.com/comnori/vite-template-awesome-soho",
    icon: GithubOutlined,
    tags: [
      "Javascript",
      "Typescript",
      "React",
      "react-script",
      "redux",
      "ant design",
      "sass",
      "axios",
      "i18next",
      "eslint",
      "prettier",
      ".env",
      "editorconfig",
      "devcontainer",
      "sonarlint",
      "yarn2",
      "vite",
      "vitest",
    ],
  },
  {
    key: 3,
    title: " vscode-javascript-pack ",
    description:
      "vscode 에서 JS/TS 작업 시 유용한 확장 모음 https://marketplace.visualstudio.com/items?itemName=comnori.js-awesome-soho-extension-pack",
    url: "https://github.com/comnori/vscode-javascript-pack",
    icon: GithubOutlined,
    tags: [],
  },
  {
    key: 4,
    title: " vscode-java-pack ",
    description:
      "vscode 에서 Java 작업 시 유용한 확장 모음 https://marketplace.visualstudio.com/items?itemName=comnori.java-spring-awesome-soho-extension-pack",
    url: "https://github.com/comnori/vscode-java-pack",
    icon: GithubOutlined,
    tags: [],
  },
]

const MyWorkPage = () => {
  return (
    <BasicLayout>
      <Typography>
        <Title>My Work</Title>
        <Title level={2}>Working</Title>
      </Typography>
      <WorkList dataSource={workingList} />
      <Typography>
        <Title level={2}>Release</Title>
      </Typography>
      <WorkList dataSource={releaseList} />
    </BasicLayout>
  )
}

export default MyWorkPage
