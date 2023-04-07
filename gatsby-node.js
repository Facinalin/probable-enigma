const path = require('path')
// 在node中import path模組module

exports.createPages = async ({ graphql, actions }) => {
    // 因為這些頁面必須等到非同步執行完才會產生所以使用async+ await
    // graphql為函式，data可以直接解構
    const { data } = await graphql(`
    query Projects {
        allMarkdownRemark {
          nodes {
            frontmatter {
              slug
            }
          }
        }
      }
    `)
    // nodes是我們的資料陣列
    // 使用createPage()方法
    data.allMarkdownRemark.nodes.forEach(node =>{
    actions.createPage({
        path:'/projects/' + node.frontmatter.slug,
        component: path.resolve('./src/templates/project-detail.js'),
        context: { slug: node.frontmatter.slug}
        // 前面的slug是一個query variables
    })
    })
}

// exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions
 
//   if (node.internal.type === 'allMarkdownRemark') {
//     console.log('有')
//     // 假設您的Markdown文件中的圖片路徑是存儲在名為'imgarr'的數組字段中
//     const imgarr = node.frontmatter.imgarr || []
//     // 將imgarr添加為节点字段
//     createNodeField({
//       node,
//       name: 'imgarr',
//       value: imgarr
//     })
//   }
// }

const { createRemoteFileNode } = require('gatsby-source-filesystem')

exports.createResolvers = ({ createResolvers, createResolverContext }) => {
  const resolvers = {
    allMarkdownRemark: {
      images: {
        type: '[File]',
        resolve(source, args, context, info) {
          const imagePaths = source.frontmatter.imgarr || []
          const { nodeModel } = context

          return Promise.all(
            imagePaths.map((imagePath) => {
              return nodeModel.runQuery({
                query: {
                  filter: {
                    relativePath: { eq: imagePath },
                  },
                },
                type: 'File',
                firstOnly: true,
              }).then(fileNode => {
                if (!fileNode) return null

                return createRemoteFileNode({
                  url: fileNode.publicURL,
                  parentNodeId: source.id,
                  createNode: context.actions.createNode,
                  createNodeId: context.createNodeId,
                  cache: context.cache,
                })
              })
            })
          )
        },
      },
    },
  }

  createResolvers(resolvers)
}