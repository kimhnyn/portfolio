import './BruinHive.scss';
import '../../assets/styles/main.scss';
import Button from '../../components/Button/Button';
import persona1 from '../../assets/images/BH-Persona1.png';
import persona2 from '../../assets/images/BH-Persona2.png'
import journey1 from '../../assets/images/BH-Journey1.png';
import journey2 from '../../assets/images/BH-Journey2.png';
import sketches from '../../assets/images/BH-Sketches.png';
import lofi from '../../assets/images/BH-Lofi.png';
import infoArch from '../../assets/images/BH-InfoArch.png';
import mockups from '../../assets/images/BH-mockups.png';
import style1 from '../../assets/images/BH-style1.png';
import userflow from '../../assets/images/BH-UserFlow.png';
import usability from '../../assets/images/BH-usability.png';
import thumbnail from '../../assets/images/bruinhive-card.png';
import finalStyle from '../../assets/images/BH-styleguide.png';
import homePages from '../../assets/images/BH-home-pages.png';
import profileCreation from '../../assets/images/BH-profile-creation.png';
import profiles from '../../assets/images/BH-Profiles.png';
import search from '../../assets/images/BH-find.png';

function BruinHive() {
  return(
    <div className='bruinhive'>
      <div className='flex'>
        <div className='left'>
          <section className='title'>
            <div className='description'>
              <p className='small-paragraph'>WEB APP UI/UX DESIGN</p>
              <h1>BruinHive</h1>
            </div>
            <div className='divider'/> 
            <div className='description descr-contain'>
              <h2>overview.</h2>
              <p className='small-paragraph'>BruinHive aims to create a more resilient campus, specifically at UCLA by establishing an interdisciplinary, cross-departmental peer-networking web platform.</p>
            </div>
          </section>
        </div>
        <div className='right'>
          <div className='thumbnail-contain'>
            <img src={thumbnail} alt='BruinHive Thumbnail'/>
            <Button className='button' type='default' link='https://www.figma.com/proto/Nei1HGvgU2bNKtPjoVPCjn/B-Hive-Wireframes?page-id=54%3A1678&node-id=819-14933&starting-point-node-id=656%3A11126&scaling=scale-down&mode=design&t=QlAc5pVz05YgigVS-1' text='view protoype.'/>
          </div>
        </div>
      </div>
        <section className='overview descr-contain'>
          <div className='sub-descript-grid'>
            <div className='sub-descript-child'>
              <p className='sub-title'>duration</p>
              <p className='small-paragraph'>Oct 2022 - Dec 2022 (2 months)</p>
            </div>
            <div className='sub-descript-child'>
              <p className='sub-title'>role</p>
              <p className='small-paragraph'>UI UX Designer</p>
            </div>
            <div className='sub-descript-child'>
              <p className='sub-title'>project type</p>
              <p className='small-paragraph'>Group Project at Creative Labs UCLA </p>
            </div>
            <div className='sub-descript-child'>
              <p className='sub-title'>tools</p>
              <p className='small-paragraph'>Figma, FigJam, Google Docs, Google Slides, Canva</p>
            </div>
            <div className='sub-descript-child skills'>
              <p className='sub-title'>skills</p>
              <p className='small-paragraph'>Prototyping, Usability Testing, User Personas, User Surveys, Market Research/Competitive Analysis</p>
            </div>
          </div>
        </section>
        <div className='grid-contain'>
        <section className='problem'>
          <h2>problem.</h2>
          <div className='descr-contain'>
            <p className='small-paragraph'>As an extremely diverse campus, UCLA creates a home for a plethora of niches and populations. With all these different identities, UCLA students struggle to find mentorship and meaningful connection.</p>
            <p className='small-paragraph'>At the base level, simply finding a mentor you can connect with beyond the surface level is difficult. Browsing on LinkedIn and reaching out or cold emailing can seem unapproachable and impersonable.</p>
          </div>
        </section>
        <section className='solution'>
          <h2>solution.</h2>
          <div className='descr-contain'>
            <p className='small-paragraph'>Our team decided on a web application that allows users to easily search for compatible mentors/mentees, edit their profile, and send/manage contact requests. After some iteration and discussion with the development team, BruinHive decided to feature:</p>
            <ol className='project-ordered-list'>
              <li className='list-child'>A authenticated sign-in using Google Authentication which will later become UCLA Authentication in order to protect users and ensure that users are interacting with other verified users/UCLA student body.</li>
              <li className='list-child'>A customizable profile page that users can update to optimize matching/filtration and to remove their profile from public visibility</li>
              <li className='list-child'>Ability to navigate the website both as a mentor and mentee upon signing up for both roles.</li>
              <li className='list-child'>Separate mentor and mentee search pages with the option to filter the search based on traits from the user profile (e.g. hobbies, career path).</li>
            </ol>
          </div>
        </section>
        <section className='research'>
          <h2>research.</h2>
          <div className='descr-contain'>
            <div className='sub-descript-child'>
              <div className='user-interview-contain'>
                <p className='sub-title'>user interviews</p>
                <p className='small-paragraph'>Our team decided to start the research process with surveying UCLA students to understand what features we could highlight and implement to truly address the needs of the student body. </p>
                <p className='small-paragraph'>After creating a Google Form, the entire BruinHive team surveyed various of UCLA's communities and niches (e.g. Game Development Clubs, Backpacking Club, Filipinos in Engineering. etc.).</p>
                <p className='small-paragraph'>The keys we highlighted include:</p>
                <ul className='list-contain'>
                  <li className='list-child'>Students would primarily use the application as a mentee.</li>
                  <li className='list-child'>They would use it to build their network and collect career advice for internships.</li>
                </ul>
              </div>
              <div className='case-studies-contain'>
                <p className='small-paragraph'>To get a better understanding of other mentorship programs that are platformed on web applications, we conducted market research and gathered insights on several websites, both university-specific and general.</p>
                <Button className='view-more' link='https://docs.google.com/document/d/1eI8iUFOr-6kO1FUen8XryaGsc7YKo5Rkd1xeyb892eA/edit?usp=sharing' text='view case studies' />
              </div>
            </div>
          </div>
        </section>
        <section className='ideation'>
          <h2>ideation.</h2>
          <div className='content'>
            <div className='user-personas'>
              <p className='sub-title'>user personas</p>
              <div className='image-contain'>
                <img src={persona1} alt='User Persona 1'/>
                <img src={persona2} alt='User Persona 2'/>
              </div>
            </div>
            <div className='user-journeys'>
              <p className='sub-title'>user journeys</p>
              <div className='image-contain'>
                <img src={journey1} alt='User Journey 1'/>
                <img src={journey2} alt='User Journey 2'/>
              </div>
            </div>
            <div className='image-contain'>
            <div className='user-flow'>
              <p className='sub-title'>user flow</p>
              <img src={userflow} alt='User Flow'/>
            </div>
            <div className='info-arch'>
              <p className='sub-title'>information architecture</p>
              <img src={infoArch} alt='Information Architecture'/>
            </div>
            </div>
            </div>
        </section>
        <section className='sketches & wireframes'>
          <h2>sketches & wireframes.</h2>
          <div className='content'>
            <div className='sketches'>
              <p className='sub-title'>sketches</p>
              <img className='img-resize' src={sketches} alt='Initial Sketches'/>
              <Button type='default' link='https://docs.google.com/document/d/1pULICvtKlbN3MAIbysTflMY1zqvAgeNi3flrONB4-4c/edit?usp=sharing' text='view all sketches.' />
            </div>
            <div className='wireframes'>
              <p className='sub-title'>wireframes</p>
              <img className='img-resize' src={lofi} alt='Low Fidelity Wireframes'/>
              <Button type='default' link='https://www.figma.com/file/Nei1HGvgU2bNKtPjoVPCjn/B-Hive-Wireframes?node-id=0-1' text='view all low fidelity frames.' />
            </div>
          </div>
        </section>
        <section className='usability testing'>
          <h2>usability testing.</h2>
          <div className='content'>
            <div className='test-distribution'>
              <p className='sub-title'>test-distribution</p>
              <p className='small-paragraph'>Since users would navigate the BruinHive website either as a mentor or mentee, our team decided to create 2 different usability tests.</p>
              <p className='small-paragraph'>After accessing the low fidelity prototypes, users taking the mentor usability test were instructed to::</p>
              <ol className='project-ordered-list'>
                <li className='list-child'>Rate the overall look, feel, and trustworthiness of the website's interface.</li>
                <li className='list-child'>Sign up for an account and review the homepage.</li>
                <li className='list-child'>Access the profile page, enter settings, and verify profile information.</li>
                <li className='list-child'>Search for a mentee profile to review and request the contact information of.</li>
                <li className='list-child'>Review a recommended mentee profile.</li>
                <li className='list-child'>Accept a contact request from a mentee.</li>
                <li className='list-child'>Sign up to also be a mentee.</li>
              </ol>
              <p className='small-paragraph'>For each task, the user was asked about their experience completing them and the overall thoughts/questions regarding the look and feel of the layout.</p>
              <p className='small-paragraph bold'>* Instructions for the mentee usability test were the same, but instead of reviewing and accepting requests from mentee profiles as a mentor, users would be interacting with mentor profiles as a mentee.</p>
              <div className='button-group'>
                <Button type='default' link='https://forms.gle/iHt7imdmU5XU6ksUA' text='mentor usability test.' />
                <Button type='default' link='https://forms.gle/MRH31SWRW8jspjjs9' text='mentee usability test.' />
              </div>
            </div>
            <div className='consolidated results'>
              <p className='sub-title'>consolidated results</p>
              <p className='small-paragraph'>After conducting our tests, we used <span id='accent-paragraph'>Google JamBoard</span> to organize and find a general consensus.</p>
              <img className='img-resize' src={usability} alt='Usability Test Results' />
              <p className='small-paragraph bold'>Notable observations include: </p>
              <ul className='list-contain'>
                <li className='list-child'>All students would use BruinHive as a mentee.</li>
                <li className='list-child'>Students did not struggle too much navigation-wise, but the layout of each page could definitely be refined to be more user friendly.</li>
                <li className='list-child'>A new user may struggle to navigate through all the different user flows and pages (e.g. checking and following up on contact requests)</li>
              </ul>
            </div>
          </div>
        </section>
        <section className='prototyping'>
          <h2>prototyping.</h2>
          <div>
              <div className='prototype-child content'>
              <div className='low fidelity prototyping'>
                <p className='sub-title'>low fidelity prototyping</p>
                <p className='small-paragraph'>After conducting our tests, we used <span id='accent-paragraph'>Google JamBoard</span> to organize and find a general consensus.After translating our sketches into Lo-Fi wireframes, we added page connections and interface interaction so we could simulate a legitimate user flow for our initial usability tests.</p>
                <Button type='default' link='https://www.figma.com/proto/Nei1HGvgU2bNKtPjoVPCjn/B-Hive-Wireframes?page-id=0%3A1&type=design&node-id=23-1732&viewport=200%2C279%2C0.02&t=KcbYUbAcxCdlvRmM-1&scaling=scale-down&starting-point-node-id=23%3A1732&mode=design' text='low fidelity prototype.' />
              </div>
              <div className='high fidelity prototyping'>
                <p className='sub-title'>high fidelity prototyping</p>
                <p className='small-paragraph'>After exploring styling choices, we enhanced our former prototype by:</p>
                <ul className='list-contain'>
                  <li className='list-child'>All students would use BruinHive as a mentee.</li>
                  <li className='list-child'>Students did not struggle too much navigation-wise, but the layout of each page could definitely be refined to be more user friendly.</li>
                  <li className='list-child'>A new user may struggle to navigate through all the different user flows and pages (e.g. checking and following up on contact requests)</li>
                </ul>
                <Button type='default' link='https://www.figma.com/proto/Nei1HGvgU2bNKtPjoVPCjn/B-Hive-Wireframes?page-id=54%3A1678&node-id=2118-6510&starting-point-node-id=2118%3A6510&scaling=scale-down&show-proto-sidebar=1&mode=design&t=dEuvJwjgvaSFqLyA-1' text='high fidelity prototype.' />
              </div>
            </div>
          </div>
        </section>
        <section className='style-guide'>
          <h2>style guide.</h2>
          <div className='content'>
            <div className='style-child'>
              {/* <div className='colors'> */}
                <p className='sub-title'>colors</p>
                <p className='small-paragraph'>Since BruinHive centers on providing mentorship to UCLA Bruins, our team wanted a color palette that was inspired by UCLA's colors. To start this derivation process, we consulted <a target="_blank" href='https://brand.ucla.edu/identity/colors' >UCLA's Branding Guidelines</a>.</p>
                <img className='img-resize' src={style1} alt='Colors'/>
              </div>
              <div className='mockups'>
                <p className='small-paragraph'>
                  From this point, my partner and I created multiple mockup iterations.
                </p>
                <img className='img-resize' src={mockups} alt='BruinHive Mockups.'/>
              </div>
              <div className='color-final'>
                <p className='small-paragraph'>
                 After close review from our team, we decided that a muted and warm color palette suited BruinHive the best. The less saturated palette created a more professional feel that was easier on the eyes while the warmer tones overall foster a welcoming mood.
                </p>
              </div>
              <div className='fonts'>
                <p className='sub-title'>fonts</p>
                <p className='small-paragraph'>We wanted our font to be easy on the eyes for extended browsing, so we iterated over various <span className='accent-paragraph'>sans-serif</span> typefaces. After some deliberation, we decided we liked the professional and clean, yet not overused <span className='accent-paragraph'>Source Sans Pro</span> font.</p>
              </div>
              <div className='final-style'>
                <p className='sub-title'>the final style guide</p>
                <p className='small-paragraph'>After further iteration and ideation, we finalized the style guide as follows: </p>
                <img className='img-resize' src={finalStyle} alt='BruinHive final frames.'/>
              </div>
            {/* </div> */}
          </div>
        </section>
        <section className='final design'>
          <h2>final design.</h2>
          <div className='content'>
            <div className='descr'>
              <p className='small-paragraph'>Upon creating our final designs, we decided to distinguish the user experience
                as a mentor versus mentee versus both using an inverted color scheme.
              </p>
              <p className='small-paragraph'>This difference in interface prevents confusions in cases where the user is registered 
                as both a mentor and mentee.
              </p>
              <ul className='list-contain'>
                <li className='list-child'>Editing their mentor profile versus editing their mentee profile.</li>
                <li className='list-child'>Searching for a mentor versus searching for a mentee.</li>
                <li className='list-child'>Viewing other profiles and easily determining whether they're mentors or mentees.</li>
              </ul>
            </div>
            <div className='home-pages'>
              <p className='sub-title'>home pages</p>
              <img className='img-resize' src={homePages} alt='Home Pages in Mentor, Mentee, and Integrated Views' /> 
            </div>
            <div className='profile-creation'>
              <p className='sub-title'>profile creation</p>
              <img className='img-resize' src={profileCreation} alt='Profile Creation Pages' />
            </div>
            <div className='profiles'>
              <p className='sub-title'>profile editing</p>
              <p className='small-paragraph'>These screens are displayed when users are editing and view their own profile. Changes to the background, buttons, and pills are applied depending on whether the user is editing their mentor or mentee profile. They are also given the option on the lefthand side to toggle between these profiles if they have registered as both a mentor and mentee.</p>
              <img className='img-resize' src={profiles} alt='Profile Pages' />
            </div>
            <div className='find'>
              <p className='sub-title'>searching for a mentor or mentee</p>
              <p className='small-paragraph'>Upon clicking on the mentor or mentee tab on the navigation bar, users are displayed two different interfaces. They can then refer to the contact page to view other users who have requested their contact, their contact requests to others, as well as users that they have as contacts.</p>
              <img className='img-resize' src={search} alt='Search and Contact Pages' />
            </div>
            <div className='accessibility'>
              <p className='sub-title'>accessibility</p>
              <p className='small-paragraph'>To analyze text and color accessibility, we used Figma plugins to test our text's compliance with WCAG guidelines and platforms like Adobe Color Palette Generator for our color choices.</p>
            </div>
          </div>
        </section>
        <section className='reflection'>
          <h2>reflection</h2>
          <div className='content'>
            <div className='refl-1'>
              <p className='sub-title'>large team, strict timeline.</p>
              <p className='small-paragraph' id='accent-paragraph'>BruinHive was my first collaborative UI UX Design project. As such, 
              it was the one that helped me grow the most!</p>
              <p className='small-paragraph'>Transitioning from studying articles and YouTube tutorials to working closely with another designer, a product
              manager, and a team of developers under strict deadlines exposed me to the product development cycle I had read so much about. I learned about the need to facilitate a constant back and forth
              between the product managers and developers to iterate over designs based on what was possible within our timeline.</p>
            </div>
            <div className='refl-2'>
              <p className='sub-title'>design, as a whole.</p>
              <p className='small-paragraph'>I was very fortunate to have worked with a more experienced designer for this project. As such, I learned valuable 
              skills for larger projects like modularizing components to make them reusable across the entire design document.</p>
              <p className='small-paragraph'>Furthermore, beyond making intricate wireframes, I gained a variety of technical skills in prototyping and analyzing user experience including:</p>
              <ul className='list-contain'>
                <li className='list-child'>Creating surveys, usability tests, and user flows</li>
                <li className='list-child'>Accessibility testing and external Figma plugins</li>
                <li className='list-child'>Creating grids and row layouts to ensure consistent, intentional component placement throughout the interface.</li>
              </ul>
            </div>
            <div className='refl-3'>
              <p className='sub-title'>a rearising passion for serving first generation college students.</p>
              <p className='small-paragraph'>I initially joined this project to further my design experience in the context of promoting student connections on campus.</p>
              <p className='small-paragraph'>Working on this project resparked an interest in developing and designing resources that support the educational experience of various demographics including one that I
              identify with -- <span id='accent-paragraph'> the "first-gen" community </span>. It gave a new lens to using technology for social good!</p>
            </div>
            <div className='refl-4'>
              <p className='sub-title'>acknowledgements and gratitude.</p>
              <p className='small-paragraph'>Thank you to my BruinHive team from Creative Labs during the Fall 2022 cycle for supporting my growth as a designer, especially to my co-designer Lindsay for her kindness, patience, and guidance throughout our ten weeks working and learning together!</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BruinHive;