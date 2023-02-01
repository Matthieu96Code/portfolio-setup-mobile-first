const allBody = document.querySelector('body');
const btn = document.querySelector('.nav-btn');
const btnClose = document.querySelector('.close-btn');
const menuList = document.querySelectorAll('.nav-toggle a');

btn.addEventListener('click', () => {
  allBody.classList.add('expand');
});

btnClose.addEventListener('click', () => {
  allBody.classList.remove('expand');
});

for (let list = 0; list < menuList.length; list += 1) {
  list.addEventListener('click', () => {
    allBody.classList.remove('expand');
  });
}

/* Works information in Object*/

let works = {
  projectOne : {
    name: '<h3>Multi-Post Stories</h3>',
    description: '<p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.</p>',
    featuredImage: '<img src="img\Project\Img Placeholder.png" alt="project one interface"></img>', 
    technologies: '<ul>\n\t<li><a href="#" >css</a></li>\n\t<li><a href="#" >html</a></li>\n\t<li><a href="#" >bootstrap</a></li>\n\t<li><a href="#" >Ruby</a></li>\n</ul>',
    liveLink: '<button type="button">See Live<img src="img\Project\Img Placeholder.png" alt="project one interface"></img></button>',
    sourceLink: '<button type="button">See Live<img src="img\Project\Img Placeholder.png" alt="project one interface"></img></button>'
  },
  
  projectTwo : {
    name: '<h3 class="mbl-project">Professional Art Printing Data</h3>',
    description: '<p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.</p>',
    featuredImage: '<img src="img\\Project\\Img Placeholder.png" alt="project one interface"></img>', 
    technologies: '<ul>\n\t<li><a href="#" >css</a></li>\n\t<li><a href="#" >html</a></li>\n\t<li><a href="#" >bootstrap</a></li>\n\t<li><a href="#" >Ruby</a></li>\n</ul>',
    liveLink: '<a href"#">See Live<img src="img\\Normal Button\\Tertiary\\Icons\\Vector.png" alt="git-logo"></a>',
    sourceLink: '<a href="#">See Source<img src="img\\Normal Button\\Tertiary\\Icons\\Vector.png" alt="git-logo"></a>'
  },

  projectThree : {
    name: '<h3 class="mbl-project">Professional Art Printing Data</h3>',
    description: '<p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.</p>',
    featuredImage: '<img src="img\Project\Img Placeholder.png" alt="project one interface"></img>', 
    technologies: '<ul>\n\t<li><a href="#" >css</a></li>\n\t<li><a href="#" >html</a></li>\n\t<li><a href="#" >bootstrap</a></li>\n\t<li><a href="#" >Ruby</a></li>\n</ul>',
    liveLink: '<button type="button">See Live<img src="img\\Normal Button\\Tertiary\\Icons\\Vector.png" alt="git-logo"></button>',
    sourceLink: '<button type="button">See Live<img src="img\\Normal Button\\Tertiary\\Icons\\Vector.png" alt="git-logo"></button>'
  },

  projectFour : {
    name: '<h3 class="mbl-project">Professional Art Printing Data</h3>',
    description: '<p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.</p>',
    featuredImage: '<img src="img\Project\Img Placeholder.png" alt="project one interface"></img>', 
    technologies: '<ul>\n\t<li><a href="#" >css</a></li>\n\t<li><a href="#" >html</a></li>\n\t<li><a href="#" >bootstrap</a></li>\n\t<li><a href="#" >Ruby</a></li>\n</ul>',
    liveLink: '<button type="button">See Live<img src="img\\Normal Button\\Tertiary\\Icons\\Vector.png" alt="git-logo"></button>',
    sourceLink: '<button type="button">See Live<img src="img\\Normal Button\\Tertiary\\Icons\\Vector.png" alt="git-logo"></button>'
  },

  projectFive : {
    name: '<h3 class="mbl-project">Professional Art Printing Data</h3>',
    description: '<p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.</p>',
    featuredImage: '<img src="img\Project\Img Placeholder.png" alt="project one interface"></img>', 
    technologies: '<ul>\n\t<li><a href="#" >css</a></li>\n\t<li><a href="#" >html</a></li>\n\t<li><a href="#" >bootstrap</a></li>\n\t<li><a href="#" >Ruby</a></li>\n</ul>',
    liveLink: '<button type="button">See Live<img src="img\\Normal Button\\Tertiary\\Icons\\Vector.png" alt="git-logo"></button>',
    sourceLink: '<button type="button">See Live<img src="img\\Normal Button\\Tertiary\\Icons\\Vector.png" alt="git-logo"></button>'
  },

  projectSix : {
    name: '<h3 class="mbl-project">Professional Art Printing Data</h3>',
    description: '<p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.</p>',
    featuredImage: '<img src="img\Project\Img Placeholder.png" alt="project one interface"></img>', 
    technologies: '<ul>\n\t<li><a href="#" >css</a></li>\n\t<li><a href="#" >html</a></li>\n\t<li><a href="#" >bootstrap</a></li>\n\t<li><a href="#" >Ruby</a></li>\n</ul>',
    liveLink: '<button type="button">See Live<img src="img\\Normal Button\\Tertiary\\Icons\\Vector.png" alt="git-logo"></button>',
    sourceLink: '<button type="button">See Live<img src="img\\Normal Button\\Tertiary\\Icons\\Vector.png" alt="git-logo"></button>'
  },

  projectSeven : {
    name: '<h3 class="mbl-project">Professional Art Printing Data</h3>',
    description: '<p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.</p>',
    featuredImage: '<img src="img\Project\Img Placeholder.png" alt="project one interface"></img>', 
    technologies: '<ul>\n\t<li><a href="#" >css</a></li>\n\t<li><a href="#" >html</a></li>\n\t<li><a href="#" >bootstrap</a></li>\n\t<li><a href="#" >Ruby</a></li>\n</ul>',
    liveLink: '<button type="button">See Live<img src="img\\Normal Button\\Tertiary\\Icons\\Vector.png" alt="git-logo"></button>',
    sourceLink: '<button type="button">See Live<img src="img\\Normal Button\\Tertiary\\Icons\\Vector.png" alt="git-logo"></button>'
  },
}
