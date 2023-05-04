import React from 'react'
import {Logo} from '../components'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import {Link} from 'react-router-dom'
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
             <span>求职</span> app
          </h1>

          <Link to='/register' className='btn btn-hero'>
            登录/注册
          </Link >
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}


export default Landing
