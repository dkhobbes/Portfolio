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
      <div className="ending-bar"></div>
    </section>
    <section className="info-me">
        <h1 className="space">Summary</h1>
        <p>I'm a developer with 3 years of exerience. My skills involve working with Gulp, Webpack, Express, Node.JS, JavaScript, CSS, HTML, React.JS, jQuery, Sass, Vue.JS, Craft CMS, Wordpress, PHP, Twig, WCAG accessibility compliance, and Responsive Web Design.
        </p>
      <div className="ending-bar"></div>
    </section>
    <section className="info-me">
      <h1 className="space">Projects</h1>

      <div className="project-img">
        <img src="images/sabre-red-360.png" className="project" />
      </div>
      <div className="project-info">
        <h2>Sabre Red 360 Project</h2>
        <h2>worked with: PHP, JS, HTML5, CSS3</h2>
        <p> </p>
        <a href="http://www.sabrered360.com/en/" target="_blank"><button>visit website</button></a>
      </div>

    </section>
    <section className="info-me">


      <div className="project-img">
        <img src="images/parker.png" className="project" />
      </div>
      <div className="project-info">
        <h2>Parker Project</h2>
        <h2>worked with: Vue.JS, Wordpress, HTML5, CSS3</h2>
        <p> </p>
        <a href="https://www.parker.edu/" target="_blank"><button>visit website</button></a>
      </div>

    </section>
    <section className="info-me">


      <div className="project-img">
        <img src="images/donaldson-capital-management.png" className="project" />
      </div>
      <div className="project-info">
        <h2>Donaldson Capital Management Project</h2>
        <h2>worked with: Wordpress, PHP, JS, HTML5, CSS3</h2>
        <p> </p>
        <a href="https://www.dcmol.com/" target="_blank"><button>visit website</button></a>
      </div>

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
