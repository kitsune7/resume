import React, { Component, ReactElement } from 'react'
import '../theme.css'
import '../common.css'
import './style.css'
import D20 from './D20'

class Resume extends Component {
  render (): ReactElement {
    return (
      <div className='resume'>
        <header>
          <h1 className='name'>Christopher Bradshaw</h1>
          <h2 className='position'>Software Engineer</h2>
        </header>
        <article>
          <section>
            <h3>Contact</h3>
            <ul className='iconList'>
              <li><ion-icon name='call-outline' /><a href='tel:3852190238'>(385) 219-0238</a></li>
              <li><ion-icon name='mail-outline' /><a href='mailto:christopher.bradshaw7@gmail.com'>christopher.bradshaw7@gmail.com</a></li>
              <li><ion-icon name='location-outline' />Eagle Mountain, UT, USA</li>
              <li><ion-icon name='globe-outline' /><a href='https://christopher-bradshaw.com' target='_blank'>christopher-bradshaw.com</a></li>
            </ul>
          </section>

          <section>
            <h3>Education</h3>
            <h4>Bachelor of Computer Science</h4>
            <p>Brigham Young University</p>
            <p>Provo, UT | April 2019</p>
          </section>

          <section>
            <h3>Relevant Skills</h3>
            <ul className='list'>
              <li>Typescript</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Redux</li>
              <li>GraphQL</li>
              <li>Node.js</li>
              <li>Native web components</li>
            </ul>
          </section>

          <section>
            <h3>Interests</h3>
            <ul className='iconList'>
              <li><D20 />Dungeons & Dragons</li>
              <li><ion-icon name='cube-outline' />3D modeling/printing</li>
              <li><ion-icon name='flash-outline' />Electronics</li>
              <li><ion-icon name='medal-outline' />Gymnastics</li>
              <li><ion-icon name='language-outline' />Japanese</li>
            </ul>
          </section>
        </article>
        <main>
          <section>
            <h3>Career Objective</h3>
            <p>
              Enthusiastic and well-rounded front-end engineer with 6+ years of experience building
              rich applications using Typescript/JavaScript and other web technologies. Eager to
              support Weave in building features for Weave's desktop clients, writing high-quality
              code, and pitching in where needed as a member of an autonomous, cross-functional
              team.
            </p>
          </section>

          <section>
            <h3>Experience</h3>
            <h4>Front End Team Lead</h4>
            <p>DataBased | Lehi, UT | Aug 2018 - Present</p>
            <ul className='list'>
              <li>Designed and implemented the UI for DataBased's websites and services in Typescript and React.js</li>
              <li>Wrote and consumed 3 unique company RESTful APIs</li>
              <li>Setup code bundling, CI/CD pipelines, HTTPS certificates, and hosting</li>
              <li>Developed internal NPM packages for 9 sets of utilities and 12 React components</li>
            </ul>
          </section>

          <section>
            <h4>Software Engineer</h4>
            <p>Fiddle | Provo, UT | Mar 2017 - Aug 2017</p>
            <ul className='list'>
              <li>Built and published an iOS mobile app using React Native and Redux with a GraphQL backend</li>
            </ul>
          </section>

          <section>
            <h4>Web Developer</h4>
            <p>FamilySearch | Orem, UT | Mar 2016 - Aug 2016</p>
            <ul className='list'>
              <li>Coordinated with multiple teams to create features used by millions of users</li>
              <li>Submitted over 130 merge requests for bug fixes and features</li>
            </ul>
          </section>
        </main>
      </div>
    )
  }
}

export default Resume
