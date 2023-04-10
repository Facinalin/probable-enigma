// import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"
import { detailPic, picRow, btnRow, backToLastPage, perProjectPage, techTool, perToolList, btnWhite, btn } from  "../styles/project-detail.module.css"

export default function projectDetail({data}) {
  const { html } = data.markdownRemark
  const { title, stack, imgarr, url, gitRepo, pack, frameLang, styleSheet, dataApi, deployVer, plugins } = data.markdownRemark.frontmatter
  const imgarray = imgarr.split(',')
  const styleSheetArray = styleSheet.split(',')
  const deployVerArray = deployVer.split(',')
  const pluginsArray = plugins.split(',')
  return (
    <Layout> 
        <div className={perProjectPage}>
          <div className={backToLastPage}>
        <Link to="/projects" >
        <svg width="36" height="36" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="22.2131" y="47.1139" width="30" height="6.93069" transform="rotate(-135 22.2131 47.1139)" fill="#161616"/>
<rect x="1.08728" y="25.5139" width="30" height="6.93069" transform="rotate(-45 1.08728 25.5139)" fill="#161616"/>
<rect x="8" y="23" width="40" height="6.93069" fill="#161616"/>
</svg>
        </Link>
        <Link to="/">
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4.00012" y="17.4936" width="21.2554" height="4.91049" transform="rotate(-36 4.00012 17.4936)" fill="#161616"/>
<rect x="20.8865" y="5" width="21.9719" height="4.91049" transform="rotate(36 20.8865 5)" fill="#161616"/>
<rect x="13.9105" y="14" width="16" height="4.91049" transform="rotate(90 13.9105 14)" fill="#161616"/>
<rect x="24" y="23" width="7" height="6" transform="rotate(90 24 23)" fill="#161616"/>
<rect x="32.9105" y="14" width="16" height="4.91049" transform="rotate(90 32.9105 14)" fill="#161616"/>
</svg>
        </Link>
        </div>
        <div className={btnRow}>
            <h1>{title}</h1>
            <h3 style={{ color: '#5e81fd', marginTop:'24px', fontSize:'24px'}}>{stack}</h3>
            <a href={url} target="_blank" rel="noreferrer" className={btn}>點我看作品</a>
            <a href={gitRepo} target="_blank" rel="noreferrer" className={btnWhite}>點我看程式碼</a>
            </div>
            <div className={picRow}>
              {imgarray.map(el => (
             <img src={el} alt="" key={el} className={detailPic}/>
              ))}
            </div>
            <div className={techTool}>
            <div className={perToolList}>
              <h3 style={{ color: '#5e81fd', marginBottom: '16px', fontSize: '22px'}}>打包工具</h3>
              <ul>
                <li style={{ fontSize: '20px'}}>{pack}
                  </li>
                  </ul>
                  </div>
                  <div className={perToolList}>
              <h3 style={{ color: '#5e81fd', marginBottom: '16px', fontSize: '22px'}}>框架/語言</h3>
              <ul>
                <li style={{ fontSize: '20px'}}>{frameLang}
                  </li>
                  </ul>
                  </div>
                  <div className={perToolList}>
              <h3 style={{ color: '#5e81fd', marginBottom: '16px', fontSize: '22px'}}>樣式處理</h3>
              <ul>
                {styleSheetArray.map(el =>{
                  return <li style={{ fontSize: '20px', marginBottom: '8px'}} key={el}>{el}</li>
                })}
                  </ul>
                  </div>
                  <div className={perToolList}>
              <h3 style={{ color: '#5e81fd', marginBottom: '16px', fontSize: '22px'}}>後端資料</h3>
              <ul>
                <li style={{ fontSize: '20px'}}>{dataApi}
                  </li>
                  </ul>
                  </div>
                  <div className={perToolList}>
              <h3 style={{ color: '#5e81fd', marginBottom: '16px', fontSize: '22px'}}>部署/版控</h3>
              <ul>
                  {deployVerArray.map(el=>{
                 return <li style={{ fontSize: '20px', marginBottom: '8px'}} key={el}>{el}</li>
                })}
                  </ul>
                  </div>
                  <div className={perToolList}>
              <h3 style={{ color: '#5e81fd', marginBottom: '16px', fontSize: '22px'}}>協助套件</h3>
              <ul>
                  {pluginsArray.map(el=>{
                  return <li style={{ fontSize: '20px', marginBottom: '8px'}} key={el}>{el}</li>
                  })}
                  </ul>
                  </div>
            </div>
            <div style={{margin: '30px 24px', display: 'flex'}}>
              <div></div>
            <div dangerouslySetInnerHTML={{ __html:html}} />
            </div> 
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
        url
        gitRepo
        pack
        frameLang
        styleSheet
        dataApi
        deployVer
        plugins
      }
    }
  }`
