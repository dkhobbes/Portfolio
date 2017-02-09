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
      <p className="info-me" id="space">Front End Developer</p>
      <div className="ending-bar"></div>
    </section>
    <section className="info-me">

        <div className="shown">
          <h1>Summary</h1>
          <p>This is my path. Originally an IT Recruiter for over 5 years I have always had an interest in creating and making things. I started out as a Graphic Design student in college for 3 years before I missed the cut. I then went on to get an Advertising degree. I like to brew my own beer.</p>
          <h1>Skills</h1>
          <p>My skills involve working with HTML5, CSS3, JS, Node.JS, React, and Express. I am a quick learner, and love to learn. I am currently reading up on Express, and mongoDB.</p>
        </div>
      

      <div className="ending-bar"></div>
    </section>
    <section className="info-me">
      <h1>Projects</h1>

      <div className="project-img">
          <img src="https://images.gamurs.com/756265d0-efac-475f-a67c-6dbb46bf249d.jpg" class="project" />
      </div>
      <div className="project-info">
        <h2>Final Project</h2>
        <h2>worked with</h2>
        <p> React.js, html5, css3</p>
      </div>
      <div className="length">
        <div className="project-img">
            <img src="https://images.gamurs.com/756265d0-efac-475f-a67c-6dbb46bf249d.jpg" class="project" />
        </div>
        <div className="project-info">
          <h2>SWAPI Project</h2>
          <h2>worked with</h2>
          <p> React.js, html5, css3</p>
        </div>
      </div>

      <div className="project-img">
        <img src="https://images.gamurs.com/756265d0-efac-475f-a67c-6dbb46bf249d.jpg" class="project" />
      </div>
      <div className="project-info">
        <h2>Github Repo Project</h2>
        <h2>worked with</h2>
        <p> React.js, html5, css3</p>
      </div>
      <div className="ending-bar"></div>
    </section>
    <footer>
    <img src="images/dkurth-portfolio-social-github-white.png" />
    <img src="images/dkurth-portfolio-social-linkedin-white.png" />
    </footer>
    </div>
  }
}

Portfolio.HomeComponent = HomeComponent;
})();
