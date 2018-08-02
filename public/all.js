"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.Portfolio === undefined) {
  window.Portfolio = {};
}
(function () {
  var HomeComponent = function (_React$Component) {
    _inherits(HomeComponent, _React$Component);

    function HomeComponent() {
      _classCallCheck(this, HomeComponent);

      return _possibleConstructorReturn(this, (HomeComponent.__proto__ || Object.getPrototypeOf(HomeComponent)).call(this));
    }

    _createClass(HomeComponent, [{
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          null,
          React.createElement(
            "header",
            null,
            React.createElement("section", { id: "banner" }),
            React.createElement(
              "div",
              { className: "nav-tab nav-1" },
              React.createElement(
                ReactRouter.Link,
                { to: '/' },
                "home"
              )
            ),
            React.createElement(
              "div",
              { className: "nav-tab" },
              React.createElement(
                ReactRouter.Link,
                { to: '/resume' },
                "resume"
              )
            )
          ),
          React.createElement(
            "section",
            null,
            React.createElement(
              "h1",
              { id: "name-holder" },
              "DAVID KURTH"
            ),
            React.createElement(
              "p",
              { className: "info-me space" },
              "Front End Developer"
            ),
            React.createElement("div", { className: "ending-bar" })
          ),
          React.createElement(
            "section",
            { className: "info-me" },
            React.createElement(
              "h1",
              { className: "space" },
              "Summary"
            ),
            React.createElement(
              "p",
              null,
              "This is my path. Originally an IT Recruiter for over 5 years I have always had an interest in creating and making things. I started out as a Graphic Design student in college for 3 years before I went on to get an Advertising degree. Moving to the Iron Yard has been the best decision to pursue a career in web development. During this 3 month boot camp I built and deployed multiple web applications and learned about responsive design, web standards and agile methodologies.\xA0"
            ),
            React.createElement(
              "h1",
              { className: "space" },
              "Skills"
            ),
            React.createElement(
              "p",
              null,
              "My skills involve working with GitHub, Terminal, Gulp, Express, Node.JS, JavaScript, CSS, HTML, React.JS, jQuery, Sass and Responsive Web Design. I am a quick learner, and love to learn. I am currently working on learning more on Express, and mongoDB."
            ),
            React.createElement("div", { className: "ending-bar" })
          ),
          React.createElement(
            "section",
            { className: "info-me" },
            React.createElement(
              "h1",
              { className: "space" },
              "Projects"
            ),
            React.createElement(
              "div",
              { className: "project-img" },
              React.createElement(
                "a",
                { href: "https://beer-me-finder.herokuapp.com/#/", target: "_blank" },
                React.createElement("img", { src: "images/BeerMeFinder-img.png", className: "project" })
              )
            ),
            React.createElement(
              "div",
              { className: "project-info" },
              React.createElement(
                "h2",
                null,
                "Beer Me Finder Project"
              ),
              React.createElement(
                "h2",
                null,
                "worked with: React.JS, HTML5, CSS3"
              ),
              React.createElement(
                "p",
                null,
                " "
              ),
              React.createElement(
                "a",
                { href: "https://beer-me-finder.herokuapp.com/#/", target: "_blank" },
                React.createElement(
                  "button",
                  null,
                  "visit website"
                )
              ),
              React.createElement(
                "a",
                { href: "https://github.com/dkhobbes/final-project", target: "_blank" },
                React.createElement(
                  "button",
                  null,
                  "view code"
                )
              )
            ),
            React.createElement(
              "div",
              { className: "length" },
              React.createElement(
                "div",
                { className: "project-img" },
                React.createElement(
                  "a",
                  { href: "https://blog-books.herokuapp.com/#/", target: "_blank" },
                  React.createElement("img", { src: "images/blog-books-image.png", className: "project" })
                )
              ),
              React.createElement(
                "div",
                { className: "project-info" },
                React.createElement(
                  "h2",
                  null,
                  "Book Blog Project"
                ),
                React.createElement(
                  "h2",
                  null,
                  "worked with: React.JS, HTML5, CSS3"
                ),
                React.createElement(
                  "a",
                  { href: "https://blog-books.herokuapp.com/#/", target: "_blank" },
                  React.createElement(
                    "button",
                    null,
                    "visit website"
                  )
                ),
                React.createElement(
                  "a",
                  { href: "https://github.com/dkhobbes/blog-books-final", target: "_blank" },
                  React.createElement(
                    "button",
                    null,
                    " view code"
                  )
                )
              )
            ),
            React.createElement(
              "div",
              { className: "project-img" },
              React.createElement(
                "a",
                { href: "https://github-user-repos.herokuapp.com/", target: "_blank" },
                React.createElement("img", { src: "images/githubRepo-img.png", className: "project" })
              )
            ),
            React.createElement(
              "div",
              { className: "project-info" },
              React.createElement(
                "h2",
                null,
                "Github Repo Project"
              ),
              React.createElement(
                "h2",
                null,
                "worked with: React.JS, HTML5, CSS3"
              ),
              React.createElement(
                "a",
                { href: "https://github-user-repos.herokuapp.com/", target: "_blank" },
                React.createElement(
                  "button",
                  null,
                  "visit website"
                )
              ),
              React.createElement(
                "a",
                { href: "https://github.com/dkhobbes/Github-Repo-project", target: "_blank" },
                React.createElement(
                  "button",
                  null,
                  "view code"
                )
              )
            ),
            React.createElement("div", { className: "ending-bar" })
          ),
          React.createElement(
            "footer",
            null,
            React.createElement(
              "a",
              { href: "https://github.com/dkhobbes", target: "_blank" },
              React.createElement("img", { src: "images/dkurth-portfolio-social-github-white.png" })
            ),
            React.createElement(
              "a",
              { href: "https://www.linkedin.com/in/davidkurth", target: "_blank" },
              React.createElement("img", { src: "images/dkurth-portfolio-social-linkedin-white.png" })
            )
          )
        );
      }
    }]);

    return HomeComponent;
  }(React.Component);

  Portfolio.HomeComponent = HomeComponent;
})();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.Portfolio === undefined) {
  window.Portfolio = {};
}
(function () {
  var ResumeComponent = function (_React$Component) {
    _inherits(ResumeComponent, _React$Component);

    function ResumeComponent() {
      _classCallCheck(this, ResumeComponent);

      return _possibleConstructorReturn(this, (ResumeComponent.__proto__ || Object.getPrototypeOf(ResumeComponent)).call(this));
    }

    _createClass(ResumeComponent, [{
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          null,
          React.createElement(
            "header",
            null,
            React.createElement("section", { id: "banner" }),
            React.createElement(
              "div",
              { className: "nav-tab nav-1" },
              React.createElement(
                ReactRouter.Link,
                { to: '/' },
                "home"
              )
            ),
            React.createElement(
              "div",
              { className: "nav-tab" },
              React.createElement(
                ReactRouter.Link,
                { to: '/resume' },
                "resume"
              )
            )
          ),
          React.createElement(
            "section",
            { className: "section-margin-top" },
            React.createElement(
              "h1",
              { className: "space" },
              "David Kurth"
            ),
            React.createElement(
              "h2",
              null,
              "Front-End Developer"
            ),
            React.createElement(
              "h2",
              null,
              "Email: kurthjdavid@gmail.com"
            ),
            React.createElement(
              "h2",
              null,
              "Portfolio: davidjkurth.com"
            ),
            React.createElement(
              "h2",
              null,
              "Github: dkhobbes"
            ),
            React.createElement(
              "h2",
              null,
              "817-504-6207"
            ),
            React.createElement("div", { className: "ending-bar" })
          ),
          React.createElement(
            "section",
            { className: "section-margin" },
            React.createElement(
              "h1",
              { className: "space" },
              "Summary of Qualifications"
            ),
            React.createElement(
              "ul",
              { className: "lists" },
              React.createElement(
                "li",
                null,
                "A conscientious, fast learner offering the ability to assess an organization\u2019s needs and create a strong web presence."
              ),
              React.createElement(
                "li",
                null,
                "Strong ability to improvise and think creatively towards technical problems."
              ),
              React.createElement(
                "li",
                null,
                "Experienced with communicating to all levels of management and team members."
              ),
              React.createElement(
                "li",
                null,
                "Passionate about learning on a daily basis and an avid reader on IT standards and methods."
              )
            ),
            React.createElement("div", { className: "ending-bar" })
          ),
          React.createElement(
            "section",
            { className: "section-margin" },
            React.createElement(
              "h1",
              { className: "space" },
              "Work History"
            ),
            React.createElement(
              "div",
              { className: "job" },
              React.createElement(
                "h1",
                { className: "edu-bold bump-down" },
                "Commerce House"
              ),
              React.createElement(
                "h2",
                null,
                "Dec 2017-Present"
              ),
              React.createElement(
                "h2",
                null,
                "Front End Developer"
              ),
              React.createElement(
                "ul",
                { className: "lists" },
                React.createElement(
                  "li",
                  null,
                  "Developed CMS sites on Wordpress, and worked with Vue.js and Laravel frameworks."
                ),
                React.createElement(
                  "li",
                  null,
                  "Created webpages, sites, and portals from start to finish."
                ),
                React.createElement(
                  "li",
                  null,
                  "Worked on pixel perfect, cross browser, and responsive web development."
                )
              )
            ),
            React.createElement(
              "div",
              { className: "job" },
              React.createElement(
                "h1",
                { className: "edu-bold bump-down" },
                "70KFT"
              ),
              React.createElement(
                "h2",
                null,
                "May 2017-Dec 2017"
              ),
              React.createElement(
                "h2",
                null,
                "Web Developer Intern"
              ),
              React.createElement(
                "ul",
                { className: "lists" },
                React.createElement(
                  "li",
                  null,
                  "Worked on localization of website in Craft CMS, Twig, and JS."
                ),
                React.createElement(
                  "li",
                  null,
                  "Developed webpages, and features for multiple clients while working with QA, and management."
                ),
                React.createElement(
                  "li",
                  null,
                  "Worked on pixel perfect, cross browser, and responsive web development."
                )
              )
            ),
            React.createElement(
              "div",
              { className: "job" },
              React.createElement(
                "h1",
                { className: "edu-bold bump-down" },
                "The Iron Yard"
              ),
              React.createElement(
                "h2",
                null,
                "Oct 2016-Feb 2017"
              ),
              React.createElement(
                "h2",
                null,
                "Front-End Developer"
              ),
              React.createElement(
                "ul",
                { className: "lists" },
                React.createElement(
                  "li",
                  null,
                  "Worked at the coding boot camp to learn the foundation of front-end development including: HTML5, CSS3, JavaScript and React."
                ),
                React.createElement(
                  "li",
                  null,
                  "Built and deployed multiple web applications and learned about responsive design, web standards and agile methodologies.\xA0"
                ),
                React.createElement(
                  "li",
                  null,
                  "Utilized Trello to organize and prioritize projects in a collaborative team environment."
                ),
                React.createElement(
                  "li",
                  null,
                  "Worked within groups of different expertise and experiences to learn how to approach problems from multiple angles."
                ),
                React.createElement(
                  "li",
                  null,
                  "Utilized GitHub, Terminal, Gulp, Node.JS, JavaScript, CSS, HTML, React.JS, jQuery, Sass and Responsive Web Design in applications."
                )
              ),
              React.createElement(
                "h2",
                { className: "edu-bold" },
                "Key Project:"
              ),
              React.createElement(
                "p",
                null,
                "beer-me-finder - In this project technical skills were utilized to build a web application that pulled a brewery api and google maps api to showcase the breweries near the user, as well as, showing the beers at the breweries by IBU and ABV levels."
              ),
              React.createElement(
                "p",
                null,
                "Tools: HTML5, CSS3, Javascript, React.JS, Sass, Express, Node.JS, Gulp"
              )
            ),
            React.createElement(
              "div",
              { className: "job" },
              React.createElement(
                "h1",
                { className: "edu-bold bump-down" },
                "Pinnacle Group"
              ),
              React.createElement(
                "h2",
                null,
                "May 2011-Oct 2016"
              ),
              React.createElement(
                "h2",
                null,
                "Technical Recruiter/Delivery Manager"
              ),
              React.createElement(
                "ul",
                { className: "lists" },
                React.createElement(
                  "li",
                  null,
                  "Primary responsibilities included identifying, securing and directing consulting resources to implement client strategies. "
                ),
                React.createElement(
                  "li",
                  null,
                  "Brought in over $715,383 in GM and over $5,543,457 in revenue throughout tenure."
                ),
                React.createElement(
                  "li",
                  null,
                  "Led a team of onshore and offshore recruiters to meet performance recruiting goals."
                ),
                React.createElement(
                  "li",
                  null,
                  "Responsible for program compliance, quality control, client meetings and SLA."
                ),
                React.createElement(
                  "li",
                  null,
                  "Identified qualified IT candidates to provide a continuous flow of quality profiles into the internal database and to effectively build a pipeline of candidates for technical skill sets nationwide."
                ),
                React.createElement(
                  "li",
                  null,
                  "Utilized developed candidate pipelines to support client needs and assist with coverage on strategic accounts including Fortune 500 banking clients and healthcare companies."
                ),
                React.createElement(
                  "li",
                  null,
                  "Sourced candidates for assigned requirements through the internal database, external job boards and additional resources."
                ),
                React.createElement(
                  "li",
                  null,
                  "Worked with and directly assisted Account Executive on all aspects of recruiting and Delivery Management"
                ),
                React.createElement(
                  "li",
                  null,
                  "Developed and implemented successful recruiting methods to maintain a sustainable profit, while also creating strategies to manage multiple accounts."
                ),
                React.createElement(
                  "li",
                  null,
                  "Experienced with multiple applicant tracking systems."
                ),
                React.createElement(
                  "li",
                  null,
                  "Worked with Boolean, creative searching abilities and other internet recruiting tactics on a daily basis."
                )
              )
            ),
            React.createElement("div", { className: "ending-bar" })
          ),
          React.createElement(
            "section",
            { className: "section-margin" },
            React.createElement(
              "h1",
              { className: "space" },
              "Education"
            ),
            React.createElement(
              "div",
              { className: "school" },
              React.createElement(
                "h2",
                { className: "edu-bold" },
                "The Iron Yard"
              ),
              React.createElement(
                "h2",
                null,
                "Coding Boot Camp - Front-End Development"
              )
            ),
            React.createElement(
              "div",
              { className: "school" },
              React.createElement(
                "h2",
                { className: "edu-bold" },
                "University of North Texas"
              ),
              React.createElement(
                "h2",
                null,
                "Bachelor of Arts in Advertising"
              )
            ),
            React.createElement("div", { className: "ending-bar" }),
            React.createElement(
              "a",
              { className: "space", href: "/images/DavidKurthResume.pdf", download: "" },
              React.createElement(
                "button",
                null,
                "download"
              )
            )
          ),
          React.createElement(
            "footer",
            null,
            React.createElement(
              "a",
              { href: "https://github.com/dkhobbes", target: "_blank" },
              React.createElement("img", { src: "images/dkurth-portfolio-social-github-white.png" })
            ),
            React.createElement(
              "a",
              { href: "https://www.linkedin.com/in/davidkurth", target: "_blank" },
              React.createElement("img", { src: "images/dkurth-portfolio-social-linkedin-white.png" })
            )
          )
        );
      }
    }]);

    return ResumeComponent;
  }(React.Component);

  Portfolio.ResumeComponent = ResumeComponent;
})();
"use strict";

if (window.Portfolio === undefined) {
      window.Portfolio = {};
}

(function () {
      var mountNode = document.querySelector('#react-root');

      var Router = ReactRouter.Router;
      var Route = ReactRouter.Route;
      var IndexRoute = ReactRouter.IndexRoute;

      var router = React.createElement(
            Router,
            { history: ReactRouter.hashHistory },
            React.createElement(Route, { path: "/", component: Portfolio.HomeComponent }),
            React.createElement(Route, { path: "/resume", component: Portfolio.ResumeComponent })
      );

      ReactDOM.render(router, mountNode);
})();
//# sourceMappingURL=all.js.map
