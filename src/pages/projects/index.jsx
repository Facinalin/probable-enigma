import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import { perArticle, articlePic, perArticleStack, perProject, projectsPage, emailCTA, articleAdj } from "../../styles/projects-list.module.css"

export default function Projects({ data }) {
  const projects = data.blogposts.nodes
  const contact = data.contact.siteMetadata.contact
  
  return (
    <Layout>
    <div className={projectsPage}>
    <Link to="/" >
        <svg width="36" height="36" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="22.2131" y="47.1139" width="30" height="6.93069" transform="rotate(-135 22.2131 47.1139)" fill="#161616"/>
<rect x="1.08728" y="25.5139" width="30" height="6.93069" transform="rotate(-45 1.08728 25.5139)" fill="#161616"/>
<rect x="8" y="23" width="40" height="6.93069" fill="#161616"/>
</svg>
        </Link>
    <div className={perArticle}>
      {projects.map(project =>(
        <Link to={"/projects/" + project.frontmatter.slug} key={project.id} className={articleAdj}>
            <img src={project.frontmatter.thumb.childImageSharp.fluid.src} alt="" className={articlePic}/>
            <div className={perProject}>
            <h2>{project.frontmatter.title}</h2>
            <p className={perArticleStack}>{project.frontmatter.stack}</p>
            </div>
        </Link>

      ))}
    </div>
    <p className={emailCTA}>喜歡我的作品？歡迎來信 <a href="mailto:lovemistborn13@gmail.com">{contact}</a> 聯絡合作。</p>
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
        imgarr
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