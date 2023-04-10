import * as React from "react"
import { Link } from 'gatsby'

export default function NotFound() {
  return (
    <section>
    <div style={{ margin: '50px auto', display: 'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
        <h2>404本頁面不存在！</h2>
        <Link to="/" style={{ background: '#d84242', padding: '12px 18px', color:'#ffffff', borderRadius: '8px', border: '3px solid #161616', display:'inline-block', marginTop:'30px'}}>回首頁</Link>
    </div>
</section>
  )
}