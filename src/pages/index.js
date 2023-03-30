import * as React from "react"
import Layout from "../components/Layout"
import { Link } from 'gatsby'
import { header, btn } from "../styles/home.module.css"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Home({ data }) {

  return (
      <Layout>
 <div className={header}>
    <img src="../images/fae.png" alt="cover-pic"/>
        <h2>歡迎光臨</h2>
        <p>集創造力與美感於一身，與chatGPT亦敵亦友的前端工程師ffekjojowjofjownfownfownfownof</p>
        <Link to="/projects" className={btn}>我的作品</Link>
    </div>
      </Layout>
  )
  //         <img src="/test.png" alt="" style={{ maxWidth: '200px' }}/>
}

// export const query = graphql`
// query Banner {
//   file(relativePath: {eq: "fae.png"}) {
//     childrenImageSharp {
//       fluid {
//         sizes
//         src
//         srcSet
//       }
//     }
//   }
// }`

// <GatsbyImage image={image} alt=""/>
