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
                <ion-icon name="mail-outline"></ion-icon>
                <a href="mailto:christopher.bradshaw7@gmail.com">
                  christopher.bradshaw7@gmail.com
                </a>
              </li>
              <li>
                <ion-icon name="globe-outline"></ion-icon>
                <a
                  href="https://www.linkedin.com/in/christophergbradshaw/"
                  target="_blank"
                  rel="noopener"
                >
                  LinkedIn
                </a>
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
              <li>Written and Verbal Communication</li>
              <li>Typescript</li>
              <li>Node.js</li>
              <li>React.js</li>
              <li>Svelte</li>
              <li>UX Design</li>
              <li>Vite/Other build tools</li>
              <li>CI/CD workflows</li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>HTML</li>
            </ul>
          </section>

          <section>
            <h3>Interests</h3>
            <ul class="iconList">
              <li><icon-d20></icon-d20>Dungeons & Dragons</li>
              <li><ion-icon name="cube-outline"></ion-icon>3D modeling/printing</li>
              <li><ion-icon name="language-outline"></ion-icon>Japanese</li>
              <li><ion-icon name="medal-outline"></ion-icon>Gymnastics</li>
              <li><ion-icon name="hardware-chip-outline"></ion-icon>Electronics</li>
              <li><ion-icon name="game-controller-outline"></ion-icon>Video Games</li>
            </ul>
          </section>
        </article>
        <main>
          <!--<section>
            <h3>Career Objective</h3>
            <p>Enthusiastic and detail-oriented software engineer with 10 years of experience building
            rich applications using Typescript/JavaScript and other web technologies. Eager to build
            highly polished and interactive frontend web UIs, write high-quality code, and deliver a
            world-class UX.</p>
          </section>-->

          <h3>Experience</h3>

          <section>
            <h4>Senior Software Engineer</h4>
            <p>Spoonful of Comfort | SLC, UT | Mar 2023 - Nov 2023</p>
            <ul class="list">
              <li>
                Rebuilt the website with a new design from scratch with 39% faster speeds and top
                WCAG compliance
              </li>
              <li>
                Imported over 185,000 coupon codes into BigCommerce via Node.js, saving roughly
                15,000 hours of work
              </li>
              <li>
                Designed and built an internal company website to control 3rd party platform data,
                allowing non-tech teams to maintain it
              </li>
            </ul>
          </section>

          <section>
            <h4>Senior Frontend Engineer</h4>
            <p>Weave | Lehi, UT | Oct 2020 - Jan 2023</p>
            <ul class="list">
              <li>
                Architected and set up the infrastructure for a re-write of Weave's main software
                product, drastically improving the product's speed, UX, and maintainability
              </li>
              <li>
                Set up a CI pipeline to automatically code sign, notarize, and staple Weave's
                desktop application, increasing application trust for over 23,000 customers
              </li>
              <li>
                Built an MSI of our software, allowing our largest customers to simultaneously
                install the program on over 400 of their computers at once
              </li>
              <!--<li>
                Wrote codemods to dynamically refactor technical debt in over 2,000 files across 3
                separate product repositories, saving over 2 months of development time
              </li>-->
            </ul>
          </section>

          <section>
            <h4>Team Lead</h4>
            <p>DataBased | Lehi, UT | Aug 2018 - Sep 2020</p>
            <ul class="list">
              <li>
                Architected the foundation and patterns for the code on the frontend and backend,
                allowing junior developers to contribute with less risk
              </li>
              <li>
                Designed and created the UX/UI for DataBased's websites and services in Typescript
                and React.js, allowing us to beta test our first customers
              </li>
            </ul>
          </section>

          <section>
            <h4>See More on LinkedIn</h4>
            <p>
              To keep it short and to the point, this resume only highlights a small selection of my
              job history. For a more complete history, see my profile on
              <a
                href="https://www.linkedin.com/in/christophergbradshaw/"
                target="_blank"
                rel="noopener"
                >LinkedIn</a
              >.
            </p>
          </section>
        </main>
      </div>
    `,
    { shadowRoot: false }
  ),
})
