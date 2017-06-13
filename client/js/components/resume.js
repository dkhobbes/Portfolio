if (window.Portfolio === undefined) {window.Portfolio = {}; }
(function() {

  class ResumeComponent extends React.Component {
    constructor(){
     super();
    }

   render(){
     return <div>
      <header>
       <section id="banner"></section>
       <div className="nav-tab nav-1"><ReactRouter.Link to={'/'}>home</ReactRouter.Link></div>
       <div className="nav-tab"><ReactRouter.Link to={'/resume'}>resume</ReactRouter.Link></div>
      </header>
      <section className="section-margin-top">
        <h1 className="space">David Kurth</h1>
        <h2>Front-End Developer</h2>
        <h2>Email: kurthjdavid@gmail.com</h2>
        <h2>Portfolio: davidjkurth.com</h2>
        <h2>Github: dkhobbes</h2>
        <h2>817-504-6207</h2>
      <div className="ending-bar"></div>
      </section>
      <section className="section-margin">
        <h1 className="space">Summary of Qualifications</h1>
        <ul className="lists">
        <li>A conscientious, fast learner offering the ability to assess an organization’s needs and create a strong web presence.</li>
        <li>Strong ability to improvise and think creatively towards technical problems.</li>
        <li>Experienced with communicating to all levels of management and team members.</li>
        <li>Passionate about learning on a daily basis and an avid reader on IT standards and methods.</li>
        </ul>
        <div className="ending-bar"></div>
      </section>
      <section className="section-margin">
        <h1 className="space">Work History</h1>
        <div className="job">
          <h1 className="edu-bold bump-down">70KFT</h1>
          <h2>May 2017-Present</h2>
          <h2>Web Developer Intern</h2>
          <ul className="lists">
            <li>Worked on creating a PostCSS plugin to create an internal grid system with team member.</li>
            <li>Worked on HTML email tempting with MJML for client .
            </li>
            <li>Helped with new landing page for website.
            </li>
          </ul>
        </div>

        <div className="job">
          <h1 className="edu-bold bump-down">The Iron Yard</h1>
          <h2>Oct 2016-Feb 2017</h2>
          <h2>Front-End Developer</h2>
          <ul className="lists">
            <li>Worked at the coding boot camp to learn the foundation of front-end development including: HTML5, CSS3, JavaScript and React.</li>
            <li>Built and deployed multiple web applications and learned about responsive design, web standards and agile methodologies. 
            </li>
            <li>Utilized Trello to organize and prioritize projects in a collaborative team environment.
            </li>
            <li>Worked within groups of different expertise and experiences to learn how to approach problems from multiple angles.
            </li>
            <li>Utilized GitHub, Terminal, Gulp, Node.JS, JavaScript, CSS, HTML, React.JS, jQuery, Sass and Responsive Web Design in applications.</li>
          </ul>
          <h2 className="edu-bold">Key Project:</h2>
          <p>beer-me-finder - In this project technical skills were utilized to build a web application that pulled a brewery api and google maps api to showcase the breweries near the user, as well as, showing the beers at the breweries by IBU and ABV levels.
          </p>
          <p>Tools: HTML5, CSS3, Javascript, React.JS, Sass, Express, Node.JS, Gulp
          </p>

        </div>
        <div className="job">
          <h1 className="edu-bold bump-down">Pinnacle Group</h1>
          <h2>May 2011-Oct 2016</h2>
          <h2>Technical Recruiter/Delivery Manager</h2>
          <ul className="lists">
            <li>Primary responsibilities included identifying, securing and directing consulting resources to implement client strategies. </li>
            <li>Brought in over $715,383 in GM and over $5,543,457 in revenue throughout tenure.
            </li>
            <li>Led a team of onshore and offshore recruiters to meet performance recruiting goals.
            </li>
            <li>Responsible for program compliance, quality control, client meetings and SLA.
            </li>
            <li>Identified qualified IT candidates to provide a continuous flow of quality profiles into the internal database and to effectively build a pipeline of candidates for technical skill sets nationwide.
            </li>
            <li>Utilized developed candidate pipelines to support client needs and assist with coverage on strategic accounts including Fortune 500 banking clients and healthcare companies.
            </li>
            <li>Sourced candidates for assigned requirements through the internal database, external job boards and additional resources.
            </li>
            <li>Worked with and directly assisted Account Executive on all aspects of recruiting and Delivery Management
            </li>
            <li>Developed and implemented successful recruiting methods to maintain a sustainable profit, while also creating strategies to manage multiple accounts.
            </li>
            <li>Experienced with multiple applicant tracking systems.
            </li>
            <li>Worked with Boolean, creative searching abilities and other internet recruiting tactics on a daily basis.
            </li>
          </ul>
        </div>
        <div className="ending-bar"></div>
      </section>
      <section className="section-margin">
        <h1 className="space">Education</h1>
          <div className="school">
          <h2 className="edu-bold">The Iron Yard</h2>
          <h2>Coding Boot Camp - Front-End Development</h2>
          </div>
          <div className="school">
          <h2 className="edu-bold">University of North Texas</h2>
          <h2>Bachelor of Arts in Advertising</h2>
          </div>
        <div className="ending-bar"></div>
        <a className="space" href="/images/DavidKurthResume.pdf" download=""><button>download</button></a>
      </section>
      <footer>
      <a href="https://github.com/dkhobbes" target="_blank"><img src="images/dkurth-portfolio-social-github-white.png" />
      </a>
      <a href="https://www.linkedin.com/in/davidkurth" target="_blank"><img src="images/dkurth-portfolio-social-linkedin-white.png" />
      </a>
      </footer>
     </div>
    }
  }

Portfolio.ResumeComponent = ResumeComponent;

})();
