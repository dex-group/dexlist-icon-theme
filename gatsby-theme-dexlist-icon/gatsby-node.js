exports.createPages = async ({ actions, graphql }, options) => {
  const basePath = options.basePath || "/"

  const result = await graphql(`
    {
      allDataYaml {
        edges {
          node {
            id
          }
        }
      }
    }
  `)

  const icons = result.data.allDataYaml.edges
  const PageTemplate = require.resolve("./src/templates/page.js")

  icons.forEach(icon => {
    const slug = icon.node.id

    actions.createPage({
      path: slug,
      component: PageTemplate,
      context: {
        id: slug
      }
    })
  })
}
