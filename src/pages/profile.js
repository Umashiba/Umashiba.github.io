import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image2 from '../components/image2'

const SecondPage = () => (
  <Layout>
    <h1>うましばのプロフィール</h1>
    <p>名前：うましば</p>
    <p>就職先：SIC</p>
    <p>所属：AI-labo</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
    <Image2 />
    </div>
    <Link to="/">戻る</Link>
  </Layout>
)

export default SecondPage
