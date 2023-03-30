import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

export default function Navbar() {
  const data = useStaticQuery(graphql`
  {
    site(siteMetadata: {}) {
      siteMetadata {
        title
      }
    }
  }`)

  const { title } = data.site.siteMetadata
  return (
    <nav>
    <div className="links">
        <h2>{title}</h2> 
        <Link to="/">首頁</Link>
        <Link to="/about">關於我</Link>
        <Link to="/projects">我的作品</Link>
    </div>
</nav>
  )
}