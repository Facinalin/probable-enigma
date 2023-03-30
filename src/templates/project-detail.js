// import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"

export default function projectDetail({data}) {
  const { html } = data.markdownRemark
  const { title, stack } = data.markdownRemark.frontmatter
  return (
    <Layout>
        <div>
            <h2>{title}</h2>
            <h3>{stack}</h3>
            <img alt=""></img>
            <div dangerouslySetInnerHTML={{ __html:html}} />
            </div> 
    </Layout>
   
  
  )
}

// 小提醒：query不能同名
// 參數以$slug: String結構帶入，前者為參數名稱，後者為參數型別
export const query = graphql`
query perPostQuery($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
      }
    }
  }`
