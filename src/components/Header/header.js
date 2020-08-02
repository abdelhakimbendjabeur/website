import React from 'react'
import NavLink from './NavLink'
import headerList from '../../data/Navigation'
import {ContactBox} from "../../styles/contactStyle";
import contact from "../../data/Contact";
import SocialContact from '../Contact/SocialContact';

const Header = () => (
  <nav className='nav'>
    <div className="nav-list">
      {
        headerList.map(navItem => (<NavLink info={navItem} key={navItem.label} />))
      }
    </div>
    <div>
        <ContactBox>
          {
              contact.map(item => (<SocialContact key={item.id} info={item} />))
          }
        </ContactBox>
    </div>
  </nav>
)

export default Header
