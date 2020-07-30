import React from 'react'
// import RashSelfIcon from '../assets/images/rashmi.svg'
import RashSelfIcon from '../assets/images/blank.svg'
import AboutBox from '../components/About/AboutBox'
import about from '../data/About'
import { UserWrapper, UserTitle, UserDescription, DownloadButton, UserTopic } from '../styles/indexStyle.js'
import Layout from '../components/layout'

const IndexPage = () => {
  return <Layout>
  <UserWrapper>
    <UserTitle>Abdelhakim <span>Bendjabeur</span></UserTitle>
    <UserDescription>
      <div>
        <p>
        Hello there,<br/>
        Welcome to my portfolio. I am a Data Scientist, Software Engineer and an amateur photographer
        based in Paris, France.
        </p>
        <DownloadButton href="https://github.com/abdelhakimbendjabeur/website/raw/master/abdelhakim-bendjabeur-resume.pdf"  download title="Resume">Download Resume</DownloadButton>
      </div>
      <img src={RashSelfIcon} alt="Abdelhakim self" />
    </UserDescription>
    <UserTopic>
      {
        about.map(item => (<AboutBox key={item.id} info={item} />))
      }
    </UserTopic>
  </UserWrapper>
  </Layout>
}

export default IndexPage
