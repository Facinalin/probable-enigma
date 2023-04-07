// import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { detailPic, picRow } from  "../styles/project-detail.module.css"

export default function projectDetail({data}) {
  const { html } = data.markdownRemark
  const { title, stack, imgarr } = data.markdownRemark.frontmatter
  const imgarray = imgarr.split(',')
  console.log(imgarray)
  return (
    <Layout>
        <div>
            <h2>{title}</h2>
            <h3>{stack}</h3>
            <div className={picRow}>
              {imgarray.map(el => (
             <img src={el} alt="" key={el} className={detailPic}/>
              ))}
            </div>
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
        imgarr
      }
    }
  }`
