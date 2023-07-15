import React from 'react'
import { NavLink } from 'react-router-dom'

import './Header.css'
import {motion} from 'framer-motion'

import userIcon from '../../assets/images/user-icon.png'
import { Container, Row } from 'reactstrap'

const nav_link = [
  {
  path:'home',display:'Home'
},
{
  path:'shop',display:'Shop'
},
{
  path:'cart',display:'Cart'
},

]
const Header = () => {
  return (
    <header className='header'>
      <Container>
        <Row>
          <div className='nav_wrapper'>

            <div>

              <h1> AERIN</h1>

            </div>

            <div className='navigation'>
              <ul className='menu'>
                {nav_link.map((item,index)=>(
                    <li className='nav_item' key={index}>
                  <NavLink to={item.path} className={(navClass)=>navClass.isActive ? 'nav_active':''}>{item.display}</NavLink>
                </li>
                
                  ))
                }
              </ul>
            </div>

            <div className='nav_icons'>
              <span className='fav_icon'>
                <i class="ri-heart-3-line"></i>
                <span className='badge'>1</span>
              </span>
              
              <span className='cart_icon'>
              <i class="ri-shopping-bag-line"></i>
                <span className='badge'>2</span>
              </span>
              <span>
                <motion.img whileTap={{scale:1.2 }} src={userIcon} alt=''/>
                </span>
            </div>
            <div className='mobile_menu'>
              <span className='menu_icon'>
                <i class="ri-menu-line"></i>
              </span>
            </div>

          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header
