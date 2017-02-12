if (window.Portfolio === undefined) {window.Portfolio = {}; }
(function(){
class HomeComponent extends React.Component {

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
    <section>
      <h1 id="name-holder">DAVID KURTH</h1>
      <p className="info-me space">Front End Developer</p>
      <div className="ending-bar"></div>
    </section>
    <section className="info-me">
        <h1 className="space">Summary</h1>
        <p>This is my path. Originally an IT Recruiter for over 5 years I have always had an interest in creating and making things. I started out as a Graphic Design student in college for 3 years before I went on to get an Advertising degree. Moving to the Iron Yard has been the best decision to pursue a career in web development. During this 3 month boot camp I built and deployed multiple web applications and learned about responsive design, web standards and agile methodologies. 
        </p>
        <h1 className="space">Skills</h1>
        <p>My skills involve working with GitHub, Terminal, Gulp, Express, Node.JS, JavaScript, CSS, HTML, React.JS, jQuery, Sass and Responsive Web Design. I am a quick learner, and love to learn. I am currently working on learning more on Express, and mongoDB.</p>
      <div className="ending-bar"></div>
    </section>
    <section className="info-me">
      <h1 className="space">Projects</h1>

      <div className="project-img">
          <img src="images/BeerMeFinder-img.png" className="project" />
      </div>
      <div className="project-info">
        <h2>Final Project</h2>
        <h2>worked with: React.JS, HTML5, CSS3</h2>
        <p> </p>
        <a href="https://beer-me-finder.herokuapp.com/#/" target="_blank"><button>visit website</button></a>
        <a href="https://github.com/dkhobbes/final-project" target="_blank"><button>view code</button></a>
      </div>
      <div className="length">
        <div className="project-img">
            <img src="images/Octocats-img.png" className="project" />
        </div>
        <div className="project-info">
          <h2>Octocats Project</h2>
          <h2>worked with: HTML5, CSS3</h2>
          <a href="https://github.com/dkhobbes/little-web-assigments/tree/master/week-5/day-22/day-22-octocats" target="_blank"><button> view code</button></a>
        </div>
      </div>

      <div className="project-img">
        <img src="images/githubRepo-img.png" className="project" />
      </div>
      <div className="project-info">
        <h2>Github Repo Project</h2>
        <h2>worked with: React.JS, HTML5, CSS3</h2>
      <a href="https://github-user-repos.herokuapp.com/" target="_blank"><button>visit website</button></a>
        <a href="https://github.com/dkhobbes/Github-Repo-project" target="_blank"><button>view code</button></a>
      </div>
      <div className="ending-bar"></div>
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

Portfolio.HomeComponent = HomeComponent;
})();
