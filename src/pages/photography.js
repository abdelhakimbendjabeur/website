import React from 'react'
import SocialContact from '../components/Contact/SocialContact'
import social from '../data/Photography'
import { ContactWrapperStyle, ContactHeader, ContactDetails, ContactBox } from '../styles/contactStyle.js'
import Layout from '../components/layout'

const Contact = () => (
  <Layout>
  <ContactWrapperStyle>
    <ContactHeader></ContactHeader>
    <ContactDetails>
        <ContactBox>
          {
            social.map(item => (<SocialContact key={item.id} info={item} />))
          }
        </ContactBox>
    </ContactDetails>
  </ContactWrapperStyle>
  </Layout>
)

export default Contact
