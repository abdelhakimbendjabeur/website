import React from 'react'
import rec from '../data/Recommendation'
import { RecWrapper, RecBox, RecDes } from '../styles/recStyle.js'
import Layout from '../components/layout'

const Recommendation = () => (
  <Layout>
  <RecWrapper>
    <h1>Recommendations</h1>
    <h3> (to be filled soon, below are not-so very professional ones)</h3>
    {
      rec.map(item => (<RecBox key={item.id} >
      <h3><a href={item.userLink}>{item.name}</a></h3>
        <p>{item.designation}</p>
        <p>{item.dated}</p>
        <RecDes>{item.description}</RecDes>
        <hr/>
      </RecBox>
      ))
    }
  </RecWrapper>
  </Layout>
)

export default Recommendation
