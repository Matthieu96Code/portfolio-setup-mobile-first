const allBody = document.querySelector("body");
const btn = document.querySelector(".nav-btn");
const btnClose = document.querySelector(".close-btn");
const menuList = document.querySelectorAll(".nav-toggle a");

btn.addEventListener("click", () => {
  allBody.classList.add("expand");
});

btnClose.addEventListener("click", () => {
  allBody.classList.remove("expand");
});

for (let list = 0; list < menuList.length; list += 1) {
  menuList[list].addEventListener("click", () => {
    allBody.classList.remove("expand");
  });
}

/* Works information in Object*/

let works = {
  projectOne: {
    name: "<h3>Multi-Post Stories</h3>",
    description:
      "<p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.</p>",
    featuredImage:
      '<img src="img\\Project\\Img Placeholder.png" alt="project one interface"></img>',
    technologies:
      '<ul>\n\t<li><a href="#" >css</a></li>\n\t<li><a href="#" >html</a></li>\n\t<li><a href="#" >bootstrap</a></li>\n\t<li><a href="#" >Ruby</a></li>\n</ul>',
    liveLink:
      '<a href"#">See Live<img src="img\\popup\\see live.png" alt="live icon"></a>',
    sourceLink:
      '<a href="#">See Source<img src="img\\popup\\Vector.png" alt="git logo"></a>',
  },

  projectTwo: {
    name: '<h3 class="mbl-project">Professional Art Printing Data</h3>',
    description:
      "<p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.</p>",
    featuredImage:
      '<img src="img\\Project\\Img Placeholder.png" alt="project one interface"></img>',
    technologies:
      '<ul>\n\t<li><a href="#" >css</a></li>\n\t<li><a href="#" >html</a></li>\n\t<li><a href="#" >bootstrap</a></li>\n\t<li><a href="#" >Ruby</a></li>\n</ul>',
    liveLink:
      '<a href"#">See Live<img src="img\\popup\\see live.png" alt="live icon"></a>',
    sourceLink:
      '<a href="#">See Source<img src="img\\pupop\\Vector.png" alt="git logo"></a>',
  },

  projectThree: {
    name: '<h3 class="mbl-project">Professional Art Printing Data</h3>',
    description:
      "<p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.</p>",
    featuredImage:
      '<img src="imgProjectImg Placeholder.png" alt="project one interface"></img>',
    technologies:
      '<ul>\n\t<li><a href="#" >css</a></li>\n\t<li><a href="#" >html</a></li>\n\t<li><a href="#" >bootstrap</a></li>\n\t<li><a href="#" >Ruby</a></li>\n</ul>',
    liveLink:
      '<button type="button">See Live<img src="img\\Normal Button\\Tertiary\\Icons\\Vector.png" alt="git-logo"></button>',
    sourceLink:
      '<button type="button">See Live<img src="img\\Normal Button\\Tertiary\\Icons\\Vector.png" alt="git-logo"></button>',
  },

  projectFour: {
    name: '<h3 class="mbl-project">Professional Art Printing Data</h3>',
    description:
      "<p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.</p>",
    featuredImage:
      '<img src="imgProjectImg Placeholder.png" alt="project one interface"></img>',
    technologies:
      '<ul>\n\t<li><a href="#" >css</a></li>\n\t<li><a href="#" >html</a></li>\n\t<li><a href="#" >bootstrap</a></li>\n\t<li><a href="#" >Ruby</a></li>\n</ul>',
    liveLink:
      '<button type="button">See Live<img src="img\\Normal Button\\Tertiary\\Icons\\Vector.png" alt="git-logo"></button>',
    sourceLink:
      '<button type="button">See Live<img src="img\\Normal Button\\Tertiary\\Icons\\Vector.png" alt="git-logo"></button>',
  },

  projectFive: {
    name: '<h3 class="mbl-project">Professional Art Printing Data</h3>',
    description:
      "<p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.</p>",
    featuredImage:
      '<img src="imgProjectImg Placeholder.png" alt="project one interface"></img>',
    technologies:
      '<ul>\n\t<li><a href="#" >css</a></li>\n\t<li><a href="#" >html</a></li>\n\t<li><a href="#" >bootstrap</a></li>\n\t<li><a href="#" >Ruby</a></li>\n</ul>',
    liveLink:
      '<button type="button">See Live<img src="img\\Normal Button\\Tertiary\\Icons\\Vector.png" alt="git-logo"></button>',
    sourceLink:
      '<button type="button">See Live<img src="img\\Normal Button\\Tertiary\\Icons\\Vector.png" alt="git-logo"></button>',
  },

  projectSix: {
    name: '<h3 class="mbl-project">Professional Art Printing Data</h3>',
    description:
      "<p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.</p>",
    featuredImage:
      '<img src="imgProjectImg Placeholder.png" alt="project one interface"></img>',
    technologies:
      '<ul>\n\t<li><a href="#" >css</a></li>\n\t<li><a href="#" >html</a></li>\n\t<li><a href="#" >bootstrap</a></li>\n\t<li><a href="#" >Ruby</a></li>\n</ul>',
    liveLink:
      '<button type="button">See Live<img src="img\\Normal Button\\Tertiary\\Icons\\Vector.png" alt="git-logo"></button>',
    sourceLink:
      '<button type="button">See Live<img src="img\\Normal Button\\Tertiary\\Icons\\Vector.png" alt="git-logo"></button>',
  },

  projectSeven: {
    name: '<h3 class="mbl-project">Professional Art Printing Data</h3>',
    description:
      "<p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.</p>",
    featuredImage:
      '<img src="imgProjectImg Placeholder.png" alt="project one interface"></img>',
    technologies:
      '<ul>\n\t<li><a href="#" >css</a></li>\n\t<li><a href="#" >html</a></li>\n\t<li><a href="#" >bootstrap</a></li>\n\t<li><a href="#" >Ruby</a></li>\n</ul>',
    liveLink:
      '<button type="button">See Live<img src="img\\Normal Button\\Tertiary\\Icons\\Vector.png" alt="git-logo"></button>',
    sourceLink:
      '<button type="button">See Live<img src="img\\Normal Button\\Tertiary\\Icons\\Vector.png" alt="git-logo"></button>',
  },
};

const openButtons = document.querySelectorAll(".projects .card");
const projectId = [
  "projectOne",
  "projectTwo",
  "projectThree",
  "projectFour",
  "projectFive",
  "projectSix",
  "projectSeven",
];

for (let list = 0; list < openButtons.length; list += 1) {
  openButtons[list].addEventListener("click", () => {
    const main = document.createElement("div");
    main.className = "main";
    const popup = document.createElement("div");
    popup.className = "popup";
    const titleAndCross = document.createElement("div");
    titleAndCross.className = "title-cross";
    const technologieUse = document.createElement("div");
    technologieUse.className = "technologie-use";
    const interfaceFeature = document.createElement("div");
    interfaceFeature.className = "interface-feature";
    const descriptionAndButton = document.createElement("div");
    descriptionAndButton.className = "description-button";
    const seeButton = document.createElement("ul");
    seeButton.className = "see-button";
    const seeLive = document.createElement("li");
    seeLive.className = "see-live";
    const seeSource = document.createElement("li");
    seeSource.className = "see-source";

    const exit = document.createElement("div");
    exit.className = "exit-icon";
    exit.innerHTML = '<img src="img/popup/Union 2.png" alt="exit-icon">';

    titleAndCross.innerHTML = works[projectId[list]].name;
    technologieUse.innerHTML = works[projectId[list]].technologies;
    interfaceFeature.innerHTML = works[projectId[list]].featuredImage;
    (descriptionAndButton.innerHTML = works[projectId[list]].description),
      (seeLive.innerHTML = works[projectId[list]].liveLink);
    seeSource.innerHTML = works[projectId[list]].sourceLink;

    seeButton.appendChild(seeLive);
    seeButton.appendChild(seeSource);

    popup.appendChild(titleAndCross);
    popup.appendChild(exit);
    popup.appendChild(technologieUse);
    popup.appendChild(interfaceFeature);
    popup.appendChild(descriptionAndButton);
    popup.appendChild(seeButton);
    main.appendChild(popup);
    allBody.appendChild(main);

    exit.addEventListener('click', () => {
      main.remove();
    });
  }); 
}s
