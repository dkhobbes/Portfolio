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
      <div className="ending-bar"></div>
    </section>
    <section className="info-me">
        <h1 className="space">Summary</h1>
        <p>I'm a Developer with 3 years of exerience working with primarily Front-End Development. My skills involve working with Gulp, Express, Node.JS, JavaScript, CSS, HTML, React.JS, jQuery, Sass, Vue.JS, Wordpress, Craft CMS, PHP, Twig, and Responsive Web Design. I am a quick learner, and love to learn.
        </p>
        <h1 className="space">Skills</h1>
        <p></p>
      <div className="ending-bar"></div>
    </section>
    <section className="info-me">
      <h1 className="space">Projects</h1>

      <div className="project-img">
      <a href="https://beer-me-finder.herokuapp.com/#/" target="_blank"><img src="images/BeerMeFinder-img.png" className="project" />
      </a>
      </div>
      <div className="project-info">
        <h2>Beer Me Finder Project</h2>
        <h2>worked with: React.JS, HTML5, CSS3</h2>
        <p> </p>
        <a href="https://beer-me-finder.herokuapp.com/#/" target="_blank"><button>visit website</button></a>
        <a href="https://github.com/dkhobbes/final-project" target="_blank"><button>view code</button></a>
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
