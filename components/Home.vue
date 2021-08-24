<template>
  <body class="sidebar-collapse profile-page">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <navbar
      position="fixed"
      type="primary"
      :transparent="transparent"
      :color-on-scroll="colorOnScroll"
      menu-classes="ml-auto font-weight-bold"
    >
    <template>
      <router-link class="navbar-brand font-weight-bold" style="font-size: 1.1em;" to="/">
        Autthapol Yingjaikla
      </router-link>
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
        <a
          class="nav-link"
          href="javascript:void(0)"
          @click="goto('about')"
        >
          <p>About Me</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          href="javascript:void(0)"
          @click="goto('education')"
        >
          <p>Education</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          href="javascript:void(0)"
          @click="goto('experienced')"
        >
          <p>Experienced</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          href="javascript:void(0)"
        >
          <p>Skill</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          href="javascript:void(0)"
          @click="goto('portfolio')"
        >
          <p>Portfolio</p>
        </a>
      </li>
    </template>
    </navbar>
    <div>
      <div class="page-header clear-filter" filter-color="orange">
        <parallax
          class="page-header-image"
          style="background-image:url('img/bg5.jpg')"
        >
        </parallax>
        <div class="container">
          <div class="photo-container">
            <img src="img/autthapol_cv.png" alt="" />
          </div>
          <h1 class="title" style="font-size:1.5rem">Autthapol Yingjaikla</h1><br>
          <p class="category">Full-Stack Developer</p>
          <div class="content w-100" style="max-width:100%">
            <div class="social-description">
              <h2>22</h2>
              <p>Front-End</p>
            </div>
            <div class="social-description">
              <h2>24</h2>
              <p>Back-End</p>
            </div>
            <div class="social-description">
              <h2>4</h2>
              <p>Mobile App</p>
            </div>
            <div class="social-description">
              <h2>2</h2>
              <p>Embeded</p>
            </div>
            <div class="social-description">
              <h2>1</h2>
              <p>Challenges</p>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="container">
          <h2 class="section-title" ref="about">About Me</h2>
          <h5 class="description">
            To seek challenging assignments, development and responsibility, with an opportunity for growth and for the enhancement of my creative abilities and optimum profitability of the organization.
          </h5>
          <h2 class="section-title">Personal strengths</h2>
          <h5 class="description">“working hard, maintaining good quality work”, “Communicating effectively and respectfully with team members”, “hard worker”, “fast learner”, and “always motivate towards learning new skills”</h5>
          <h2 class="section-title" ref="education">Education</h2>
          <h5 class="description">
	        <ul class="text-left" style="max-width:600px">
            <li><label class="font-weight-bold">2008 - 2013</label> B.Eng. in  Computer Engineering, Dhurakij Pundit University, Bangkok, Thailand.</li>
            <li><label class="font-weight-bold">2005 - 2007</label> Cert. Of Voc.Ed. in Computer, Thasae Industrial and Community Education College, Chumphon.</li>
          </ul>
          </h5>
          <h2 class="section-title" ref="experienced">Work Experienced</h2>
          <h5 class="description">
	        <ul class="text-left" style="max-width:600px">
            <li>
              <div class="row">
              <div class="col-sm-4">
                <label class="font-weight-bold">Feb 2019  - Sep 2020</label>
              </div>
              <div class="col-sm-8">
                <label class="font-weight-bold">BEEHIVE COMPANY LIMITED</label><br>
                <span>Full-stack developers, design and develops web application and service rest full API with PHP and Python, develops  mobile applications</span>
              </div>
              </div>
            </li>
            <li class="mt-3">
              <div class="row">
              <div class="col-sm-4">
                <label class="font-weight-bold"> May 2018 - Sep 2018</label>
              </div>
              <div class="col-sm-8">
                <label class="font-weight-bold">Siam software solution Co.,Ltd.</label><br>
                <span>Developed  service rest full api and migrate SAP system to python service API </span>
              </div>
              </div>
            </li>
            <li class="mt-3">
              <div class="row">
              <div class="col-sm-4">
                <label class="font-weight-bold">Mar 2017 - Apr 2018</label>
              </div>
              <div class="col-sm-8">
                <label class="font-weight-bold">Chaiyohosting Co.,Ltd.</label><br>
                <span>Developed hotel and flight booking system and service rest full API</span>
              </div>
              </div>
            </li>
            <li class="mt-3">
              <div class="row">
              <div class="col-sm-4">
                <label class="font-weight-bold">JUL 2016 - Mar 2017</label>
              </div>
              <div class="col-sm-8">
                <label class="font-weight-bold">Siam software solution Co.,Ltd.</label><br>
                <span>Developed  service rest full api</span>
              </div>
              </div>
            </li>
            <li class="mt-3">
              <div class="row">
              <div class="col-sm-4">
                <label class="font-weight-bold">Jan 2015 - May 2016</label>
              </div>
              <div class="col-sm-8">
                <label class="font-weight-bold">Pinperty Co.,Ltd.</label><br>
                <span>Developed reale state website and service API </span>
              </div>
              </div>
            </li>
            <li class="mt-3">
              <div class="row">
              <div class="col-sm-4">
                <label class="font-weight-bold">Oct 2013 - Dec 2014</label>
              </div>
              <div class="col-sm-8">
                <label class="font-weight-bold">Chaiyohosting Co.,Ltd.</label><br>
                <span>Developed  hotel, ticket, rental car and flight booking website, payment gateway</span>
              </div>
              </div>
            </li>
            <li class="mt-3">
              <div class="row">
              <div class="col-sm-4">
                <label class="font-weight-bold">May 2013 - Oct 2013</label>
              </div>
              <div class="col-sm-8">
                <label class="font-weight-bold">English Online Co.,Ltd.</label><br>
                <span>Developed e-learning online system</span>
              </div>
              </div>
            </li>
          </ul>
          </h5>
          <div class="row">
            <div class="col-md-6 ml-auto mr-auto" ref="portfolio">
              <h4 class="section-title text-center">Portfolio</h4>
            </div>
            <tabs
              pills
              class="nav-align-center"
              tab-content-classes="gallery"
              tab-nav-classes="nav-pills-just-icons"
              type="primary"
            >
              <tab-pane title="Messages">
                <i slot="label" class="now-ui-icons design_image"></i>
                <div class="col-md-10 ml-auto mr-auto">
                  <div class="row">
                    <div class="col-md-12">
                      <img src="img/portfolio/android.png" alt="" class="d-inline ml-3" />
                      <img src="img/portfolio/angularjs.png" alt="" class="d-inline ml-3" />
                      <img src="img/portfolio/arduino.png" alt="" class="d-inline ml-3" />
                      <img src="img/portfolio/codeigniter.png" alt="" style="height:96px !important" class="d-inline ml-3" />
                      <img src="img/portfolio/django.png" alt="" class="d-inline ml-3" />
                      <img src="img/portfolio/docker.png" alt="" class="d-inline ml-3" />
                      <img src="img/portfolio/fastapi.png" alt="" style="height:96px !important" class="d-inline ml-3" />
                      <img src="img/portfolio/flutter.png" alt="" class="d-inline ml-3" />
                      <img src="img/portfolio/ionic.png" alt="" style="height:96px !important" class="d-inline ml-3" />
                      <img src="img/portfolio/javascript.png" alt="" class="d-inline ml-3" />
                      <img src="img/portfolio/jquery.png" alt="" class="d-inline ml-3" />
                      <img src="img/portfolio/mariadb.png" alt="" class="d-inline ml-3" />
                      <img src="img/portfolio/mongodb.png" alt="" class="d-inline ml-3" />
                      <img src="img/portfolio/nodejs.png" alt="" style="height:96px !important" class="d-inline ml-3" />
                      <img src="img/portfolio/php.png" alt="" class="d-inline ml-3" />
                      <img src="img/portfolio/postgressql.png" alt="" class="d-inline ml-3" />
                      <img src="img/portfolio/python.png" alt="" class="d-inline ml-3" />
                      <img src="img/portfolio/react.png" alt="" class="d-inline ml-3" />
                      <img src="img/portfolio/vue-js.png" alt="" class="d-inline ml-3" />
                      <img src="img/portfolio/nginx.png" alt="" class="d-inline ml-3" />
                    </div>
                  </div>
                </div>
              </tab-pane>
              <tab-pane title="Profile">
                <i slot="label" class="now-ui-icons objects_globe"></i>
                <div class="col-md-10 ml-auto mr-auto">
                  <div class="row collections">
                    <div class="col-md-6">
                      <img src="img/portfolio/app/bisshop.png" class="img-raised" />
                      <img src="img/portfolio/app/wyayoga.png" alt="" class="img-raised" />
                    </div>
                    <div class="col-md-6">
                      <img src="img/portfolio/app/traveligo.png" alt="" class="img-raised" />
                    </div>
                  </div>
                </div>
              </tab-pane>
              <tab-pane title="Home">
                <i slot="label" class="now-ui-icons tech_mobile"></i>
                <div class="col-md-10 ml-auto mr-auto">
                  <div class="row collections">
                    <div class="col-md-6">
                      <img src="img/portfolio/app/richmall.png" alt="" class="img-raised" />
                    </div>
                    <div class="col-md-6">
                      <img src="img/portfolio/app/richmall-shop.png" alt="" class="img-raised" />
                    </div>
                  </div>
                </div>
              </tab-pane>
            </tabs>
          </div>
        </div>
      </div>
    </div>
    <footer
      class="footer"
      :class="{ [`footer-${type}`]: type }"
      :data-background-color="backgroundColor"
    >
      <div class="container">
        <nav>
        </nav>
        <div class="copyright">
          &copy; {{ year }}, Designed by
          <a href="https:///www.invisionapp.com" target="_blank" rel="noopener"
            >Invision</a
          >. Coded by
          <a href="https://binarcode.com" target="_blank" rel="noopener"
            >BinarCode</a
          >
          and
          <a href="https://www.creative-tim.com" target="_blank" rel="noopener"
            >Creative Tim</a
          >.
        </div>
      </div>
    </footer>
  </body>
</template>
<script>
import Tab from '@/components/Tabs/Tab'
import Tabs from '@/components/Tabs/Tabs'
import Navbar from '@/components/Navbar/Navbar';
import NavLink from '@/components/Navbar/NavLink';
import Parallax from '@/components/Parallax'
export default {
    components: {
      'tabs': Tabs, 
      'tab-pane': Tab,
      'navbar': Navbar,
      'nav-link': NavLink,
      'parallax': Parallax
    },
    data() {
      return {
        colorOnScroll: 400,
        backgroundColor: 'black',
        transparent: false,
        type: 'black',
        year: new Date().getFullYear()
      };
    },
    methods: {
      goto(refName) {
        var element = this.$refs[refName];
        var top = element.offsetTop;

        window.scrollTo(0, top);
      }
    }
}
</script>