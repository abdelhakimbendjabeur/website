import React from 'react'
import SocialContact from '../components/Contact/SocialContact'
import contact from '../data/Contact'
import { ContactWrapperStyle, ContactBox } from '../styles/contactStyle.js'
import Layout from '../components/layout'

const Contact = () => (
  <Layout>
  <ContactWrapperStyle>
        <ContactBox>
         {
            contact.map(item => (<SocialContact key={item.id} info={item} />))
         }
        </ContactBox>
  </ContactWrapperStyle>
  </Layout>
)

export default Contact
