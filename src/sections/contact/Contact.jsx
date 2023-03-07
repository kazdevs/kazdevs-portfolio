import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section id='contact'>
      <div className='container contact__container'>
        <div className='section__title'>
          <h2>contact</h2>
          <div className='underline'></div>
        </div>
        <p className='contact__first-p'>
          If you like what you are looking at, feel free to contact me through
          any of the following and I’d get to you as soon as possible.
        </p>
        <div className='contact__btns'>
          <a
            href='mailto:otaighobawo@gmail.com'
            target='_blank'
            className='btn'
          >
            Email
          </a>
          <a
            href='https://www.linkedin.com/in/bawo-otaigho-b49a69167/'
            target='_blank'
            className='btn white'
          >
            Linkedin
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
