<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts">
    <img alt="Gatsby" src="src/images/icon.png" width="60" />
  </a>
</p>
<h1 align="center">
  Gatysby RESUME AWESOME Starter
</h1>
<h2 align="center">
  This starter was created by <a href=https://github.com/comnori/frontend-starter>Frontend-starter</a>
</h2>

## important!

This repository is for testing purposes only.

## 🚀 Quick start

```shell
gatsby new my_site https://github.com/comnori/gatsby-starter-comnori
```

## Features

-   Responsive design
-   Google Analytics integration
-   Minimize development environment installation and settings
    -   No need to install nodejs
    -   No need to install gatsby-cli
    -   No need to install vscde extensions
-   `v1.0.0` does not support Typescript because the goal is to keep things simple.
    -   This is because the goal of `v1.0.0` is to make it easy even for beginner developers.
    -   `v2.0.0` will support Typescript, separate Eslint settings, SonarLint support, etc.

## Start

### Requirements

1. POSIX enviroment
    1. Windows Subsystem Linux (WSL)
    2. MacOS
    3. Linux
2. Docker
3. Visual Studio Code

### Step

1. Get starter
2. Open in Visual Studio Code
3. install `devcontiner` extension
4. DevContainer build and run
5. make file `.env.development` and `.env.production`
6. write your `GA_ID` in `.env.development` and `.env.production`
    ```
    GA_ID=xxxxxxxxx
    ```
7. Run `yarn start` or `gatsby develop` in container

## Purpose

This gatsby starter was written to be used for resume, portfolios, and blogs.

## Tech Stack

-   GATSBY
-   Antd
-   React
-   DevContainer

## FAQ

### Why not use Yarn 2

-   [Yarn2 issues](https://github.com/gatsbyjs/gatsby/discussions/20949)
    -   Not answerd yet
    -   Document does not provide for yarn 2
