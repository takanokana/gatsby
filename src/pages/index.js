import React from 'react'
// importを追記
import { useStaticQuery, graphql, Link } from 'gatsby'

const IndexPage = () => {
  // queryの取得処理を追加
  const data = useStaticQuery(graphql`
    query allContentfulUser {
      allContentfulUser {
        nodes {
          id
          name
          age
        }
      }
    }
  `)
  return (
    <div>
      <h1>Hi people</h1>
      {/* 取得したデータを表示する処理を追加 */}
      {data.allContentfulUser.nodes.map(({ id, name, age }) => (
        <h3 key={id}>
          {name}({age}歳)
        </h3>
      ))}
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  )
}

export default IndexPage
