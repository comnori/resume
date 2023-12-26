module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: `react-app`,
  settings: {
    linkComponents: ["Hyperlink", { name: "Link", linkAttribute: "href" }],
  },
}
