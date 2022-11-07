import { html, define, render } from 'https://unpkg.com/hybrids@^6'
import { commonStyles } from '../common-styles.js'
import { resumeStyles } from './resume-styles.js'
import './icon-d20.js'

define({
  tag: 'resume-page',
  render: render(
    () => html`
      ${commonStyles} ${resumeStyles}
      <div class="resume">
        <header>
          <h1 class="name">Christopher Bradshaw</h1>
          <h2 class="position">Software Engineer</h2>
        </header>
        <article>
          <section>
            <h3>Contact</h3>
            <ul class="iconList">
              <li>
                <ion-icon name="call-outline"></ion-icon><a href="tel:3852190238">(385) 219-0238</a>
              </li>
              <li>
                <ion-icon name="mail-outline"></ion-icon
                ><a href="mailto:christopher.bradshaw7@gmail.com"
                  >christopher.bradshaw7@gmail.com</a
                >
              </li>
              <li>
                <ion-icon name="globe-outline"></ion-icon
                ><a href="https://christopher-bradshaw.com" target="_blank" rel='noopener'
                  >christopher-bradshaw.com</a
                >
              </li>
              <li><ion-icon name="location-outline"></ion-icon>Eagle Mountain, UT, USA</li>
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
            <ul class="list">
              <li>HTML</li>
              <li>CSS</li>
              <li>Typescript</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Native web components</li>
              <li>Node.js</li>
              <li>Vite/Other build tools</li>
              <li>CI/CD workflows</li>
            </ul>
          </section>

          <section>
            <h3>Interests</h3>
            <ul class="iconList">
              <li><icon-d20></icon-d20>Dungeons & Dragons</li>
              <li><ion-icon name="cube-outline"></ion-icon>3D modeling/printing</li>
              <li><ion-icon name="language-outline"></ion-icon>Japanese</li>
              <li><ion-icon name="medal-outline"></ion-icon>Gymnastics</li>
              <li><ion-icon name="flash-outline"></ion-icon>Electronics</li>
            </ul>
          </section>
        </article>
        <main>
          <section>
            <h3>Experience</h3>
            <h4>Senior Software Engineer</h4>
            <p>Weave | Lehi, UT | Oct 2020 - Present</p>
            <ul class="list">
              <li>
                Architected and set up the infrastructure for a re-write of Weave's main software product
              </li>
              <li>
                Set up a CI pipeline to automatically code sign, notarize, and staple Weave's desktop
                application
              </li>
              <li>
                Wrote codemods to dynamically refactor technical debt in 3 separate product
                repositories
              </li>
            </ul>
          </section>

          <section>
            <h4>Frontend Team Lead</h4>
            <p>DataBased | Lehi, UT | Aug 2018 - Present</p>
            <ul class="list">
              <li>
                Designed and implemented the UX/UI for DataBased's websites and services in
                Typescript and React.js
              </li>
              <li>
                Set up and maintained code bundling, CI/CD pipelines, HTTPS certificates, and server
                infrastructure
              </li>
            </ul>
          </section>

          <section>
            <h4>Web Developer</h4>
            <p>FamilySearch | Orem, UT | Mar 2016 - Aug 2016</p>
            <ul class="list">
              <li>Coordinated with multiple teams to create features used by millions of users</li>
            </ul>
          </section>
          <section>
            <h4>See More on LinkedIn</h4>
            <p>
              To keep it short and to the point, this resume only highlights a small selection of my job history.
              For a more complete history, see my profile on
              <a href='https://www.linkedin.com/in/christophergbradshaw/' target='_blank' rel='noopener'>LinkedIn</a>.
            </p>
          </section>
        </main>
      </div>
    `,
    { shadowRoot: false }
  ),
})
