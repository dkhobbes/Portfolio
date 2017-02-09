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
      <section className="section-margin">
        <h1>David Kurth</h1>
        <h2>Front-End Developer</h2>
        <h2>github: dkhobbes</h2>
        <h2>portfolio: davidjkurth.com</h2>
        <h2>Email: kurthjdavid@gmail.com</h2>
        <h2>817-504-6207</h2>
      <div className="ending-bar"></div>
      </section>
      <section className="section-margin">
        <h1>Summary of Qualifications</h1>
        <ul>
        <li>A conscientious, fast learner offering the ability to assess an organization’s needs and create a strong web presence.</li>
        <li>Strong ability to improvise and think creatively towards technical problems.</li>
        <li>Experienced with communicating to all levels of management and team members.</li>
        <li>Passionate about learning on a daily basis and an avid reader on IT standards and methods.</li>
        </ul>
        <div className="ending-bar"></div>
      </section>
      <section className="section-margin">
        <h1>Work History</h1>
        <div className="job">
          <h1>The Iron Yard</h1>
          <h2>October 2016-February 2017</h2>
          <h2>Front-End Developer</h2>
          <ul>
            <li>Worked at the coding boot camp to learn the foundation of front-end development including: HTML5, CSS3, JavaScript and React.</li>
            <li>Built and deployed multiple web applications and learned about responsive design, web standards and agile methodologies. 
            </li>
            <li>Utilized Trello to organize and prioritize projects in a collaborative team environment.
            </li>
            <li>Worked within groups of different expertise and experiences to learn how to approach problems from multiple angles.
            </li>
            <li>Utilized GitHub, Terminal, Gulp, Node.JS, JavaScript, CSS, HTML, React.JS, jQuery, Sass and Responsive Web Design in applications.</li>
          </ul>
          <h2>Key Project:</h2>
          <p>beer-me-finder - In this project technical skills were utilized to build a web application that pulled a brewery api and google maps api to showcase the breweries near the user, as well as, showing the beers at the breweries by IBU and ABV levels.
          </p>
          <p>Tools: HTML5, CSS3, Javascript, React.JS, Sass, Express, Node.JS, Gulp
          </p>

        </div>
        <div className="job">
          <h1>Pinnacle Group</h1>
          <h2>May 2011-Oct 2016</h2>
          <h2>Technical Recruiter/Delivery Manager</h2>
          <ul>
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
        <h1>Education</h1>
          <div className="school">
          <h2>The Iron Yard</h2>
          <h2>Coding Boot Camp - Front-End Development</h2>
          </div>
          <div className="school">
          <h2>University of North Texas</h2>
          <h2>Bachelor of Arts in Advertising</h2>
          </div>
        <div className="ending-bar"></div>
      </section>
      <footer>
       <img src="images/dkurth-portfolio-social-github.png" />
       <img src="images/dkurth-portfolio-social-linkedin.png" />
      </footer>
     </div>
    }
  }

Portfolio.ResumeComponent = ResumeComponent;

})();
