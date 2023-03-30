import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import { perArticle, articlePic } from "../../styles/projects-list.module.css"

export default function projects({ data }) {
  const projects = data.blogposts.nodes
  const contact = data.contact.siteMetadata.contact
  
  return (
    <Layout>
    <div>
    <div className={perArticle}>
      {projects.map(project =>(
        <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
          <div>
            <img src={project.frontmatter.thumb.childImageSharp.fluid.src} alt="" className={articlePic}/>
            <h3>{project.frontmatter.title}</h3>
            <p>{project.frontmatter.stack}</p>
          </div>
        </Link>

      ))}
    </div>
    <p>喜歡我的文章？歡迎來信{contact}</p>
 </div>
 </Layout>
  
  )
}
// 解構的data= site(siteMetadata: {}) {
  //   siteMetadata {
  //     copyright
  //     description
  //     title
  //   }
  // }
// export page query 

export const query = graphql`
query ProjectsPage {
  blogposts: allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        stack
        title
        slug
        thumb {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
      id
    }
  }
  contact: site(siteMetadata: {}) {
    siteMetadata {
      contact
    }
  }
}`