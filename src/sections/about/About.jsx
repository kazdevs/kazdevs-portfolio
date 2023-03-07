import React from 'react'
import { useState } from 'react'
import './about.css'
import AboutImg from '../../assets/Okezi-LinkedIn.jpg'
import Skills from '../../components/skills/Skills'
import Cv from '../../assets/Okezi__Ikokeno__Resume.pdf'
import data from './about-data'

const About = () => {
  const [paragraphs, setParagraphs] = useState(data)
  return (
    <section id='about'>
      <div className='container about__container'>
        <div className='section__title'>
          <h2>About Me</h2>
          <div className='underline'></div>
        </div>
        <div className='about__top'>
          <div className='about__left'>
            <h4>Get to Know Me!</h4>
            <div className='about__left-paragraphs'>
              <p>
                Hello! My name is Okezi and I enjoy creating things that live on
                the internet, especially the web. My interest in coding and web
                development started back in 2015. Fast-forward to today, and
                I’ve had the privilege of working with an advertising agency, an
                analytics company, a start-up, an ecommerce company, and also
                handled several freelance gigs. My main focus these days is
                building accessible, inclusive products and digital experiences
                for a variety of clients.
              </p>
              {/* <p>
                I also like sharing content related to Ux/Ui design that I have
                learned over the years so as to help beginners looking to
                transition into design and also update fellow designers on
                latest design trends. Feel free to Connect or Follow me on my
                {'  '}
                <span style={{ color: 'red' }}>
                  <a
                    href='https://www.instagram.com/uidesign3r/'
                    target='_blank'
                    style={{ color: '#52d6f4' }}
                  >
                    instagram{' '}
                  </a>
                </span>
                {'  '}
                where I post useful content related to ux/ui.
              </p> */}

              <p>
                I also have interest in sharing my coding and development
                knowledge and experience with the community at large. I really
                love to teach and assist beginners as much as possible. Here are
                a few technologies I’ve worked with recently: HTML, CSS,
                JavaScript, React js, Tailwind css, Bootstrap, Sass, Less, Node
                Js, Mongo DB, Express Js, Firebase, WordPress etc.
              </p>
              <p>
                {' '}
                When I'm not coding, you’ll find me playing chess online,
                playing soccer in the field or petting all the good dogs.
              </p>
            </div>
            <a href='#contact' className='btn'>
              Contact Me
            </a>
          </div>
          <div className='about__right'>
            <div className='about__portrait'>
              <img src={AboutImg} alt='' />
            </div>
          </div>
        </div>
        <div className='about__bottom'>
          <h4>My skills</h4>
          <Skills paragraphs={paragraphs}></Skills>
          <a href={Cv} download className='btn'>
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
