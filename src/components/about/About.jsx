import React from 'react'
import './about.css'
import ME from "../../assets/me-about.jpg"
import {MdWorkOutline} from 'react-icons/md'
import {FiUsers} from 'react-icons/fi'
import {BsFolderPlus} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About_Image" />
          </div>
        </div>
        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <MdWorkOutline className='about__icon'/>
              <h5>Experience</h5>
              <small>+2 years</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className='about__card'>
              <BsFolderPlus className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Completed projects</small>
            </article>
          </div>
          <p>Lorem ipsum dolor badrrreddine consectetur adipisicing elit. Cupiditate maiores incidunt odio repellat, impedit consequuntur quam doloribus repudiandae atque voluptates id ab, assumenda laborum, beatae iure fugiat sapiente libero explicabo?</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About