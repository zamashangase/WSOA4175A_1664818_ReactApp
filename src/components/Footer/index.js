import React from 'react'
import { Button } from '@mui/material';
import './footer.css'
import { Link } from 'react-router-dom';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <div className='footer-container'>
    <section className='footer-subscription'>
      <p className='footer-subscription-heading'>
        Please Dont Forget To Subscribe To Keep Update With More Internet Art.
      </p>
      <p className='footer-subscription-text'>
        You Can Unsubscribe From This Website At Any Time.
      </p>
      <div className='input-areas'>
        <form>
          <input
            className='footer-input'
            name='email'
            type='email'
            placeholder='Your Email'
          />
          <Button buttonStyle='btn--outline'>Subscribe</Button>
        </form>
      </div>
    </section>
    <div class='footer-links'>
      <div className='footer-link-wrapper'>
        <div class='footer-link-items'>
          <h2>About Us</h2>
          <Link to='/menu'>Menu</Link>
          <Link to='/'>Information</Link>
          <Link to='/'>Careers</Link>
          <Link to='/'>Investors</Link>
          <Link to='/'>Terms of Service</Link>
        </div>
        <div class='footer-link-items'>
          <h2>Contact Us</h2>
          <Link to='/'>Contact</Link>
          <Link to='/'>Support</Link>
          <Link to='/'>Locations</Link>
          <Link to='/'>Social Media</Link>
        </div>
      </div>
      <div className='footer-link-wrapper'>
        <div class='footer-link-items'>
          <h2>Videos</h2>
          <Link to='/'>Artworks</Link>
          <Link to='/'>Ambassadors</Link>
          <Link to='/'>Agency</Link>
          <Link to='/'>Influencers</Link>
        </div>
        <div class='footer-link-items'>
          <h2>Social Media</h2>
          <Link to='/'>Instagram</Link>
           <Link to='/'>Youtube</Link>
          <Link to='/'>Twitter</Link>
        </div>
      </div>
    </div>
    <section class='social-media'>
      <div class='social-media-wrap'>
        <div class='footer-logo'>
          <Link to='/' className='social-logo'>
          <BubbleChartIcon/>
            <i class='fab fa-typo3' />
          </Link>
        </div>
        <small class='website-rights'>INTERNETART © 2022</small>
        <div class='social-icons'>
         
          <Link
            class='social-icon-link instagram'
            to='/'
            target='_blank'
            aria-label='Instagram'
            
          >
            <i class='fab fa-instagram' />
            <InstagramIcon/>
          </Link>
          <Link
            class='social-icon-link youtube'
            to='/'
            target='_blank'
            aria-label='Youtube'
          >
            <i class='fab fa-youtube' />
            <YouTubeIcon/>
          </Link>
          <Link
            class='social-icon-link twitter'
            to='/'
            target='_blank'
            aria-label='Twitter'
          >
            <i class='fab fa-twitter' />
            <TwitterIcon/>
          </Link>
          <Link
            class='social-icon-link twitter'
            to='/'
            target='_blank'
            aria-label='LinkedIn'
          >
            <i class='fab fa-linkedin' />
          </Link>
        </div>
      </div>
    </section>
  </div>
  
  )
}

export default Footer;