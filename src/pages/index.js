import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>めざせ回収率100％</h1>
    <p>ようこそうましばの競馬ブログへ</p>
    <p>競馬AI作成中。現在回収率xx％</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/profile/">うましばのプロフィール</Link>
  </Layout>
)

export default IndexPage
