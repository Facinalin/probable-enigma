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