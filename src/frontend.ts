import landingHTML from "./landing.html?raw";
import linksHTML from "./links.html?raw";
import projectsHTML from "./projects.html?raw";
import aboutHTML from "./about.html?raw";

import mammoth2dHTML from "./projects/mammoth2d.html?raw";
import silverbackHTML from "./projects/silverback.html?raw";
import dragonHTML from "./projects/dragon.html?raw";
import reactionHTML from "./projects/reaction.html?raw";

import { Project } from "./projects";

export class Frontend 
{
  constructor() 
  {
    let app : HTMLElement = document.querySelector('#app') as HTMLElement;

    let landing = document.createElement('div') as HTMLElement;
    let projects = document.createElement('div') as HTMLElement;
    let about = document.createElement('div') as HTMLElement;
    let links = document.createElement('div') as HTMLElement;

    landing.innerHTML = landingHTML;
    projects.innerHTML = projectsHTML;
    about.innerHTML = aboutHTML;
    links.innerHTML = linksHTML;
    
    app.appendChild(landing);
    app.appendChild(projects);
    // app.appendChild(about);
    app.appendChild(links);


    const mammoth2d = new Project(mammoth2dHTML);
    const silverback = new Project(silverbackHTML);
    const reaction = new Project(reactionHTML);
    const dragon = new Project(dragonHTML);

    this.projects.set("mammoth2d", mammoth2d );
    this.projects.set("silverback", silverback);
    this.projects.set("reaction", reaction);
    this.projects.set("dragon", dragon);

    
    let projectWrapper = document.querySelector(".projects-wrapper") as HTMLElement;

    this.ViewProject(projectWrapper, document.querySelector(".mammoth2d") as HTMLElement, mammoth2d);


    window.addEventListener('DOMContentLoaded', () => 
    {
      window.addEventListener('click', (event : MouseEvent) => 
        {
          const element = event.target as HTMLElement;

          if(element.classList.contains("mammoth2d")) 
          {
            this.ViewProject(projectWrapper, element, mammoth2d);
          }
          else if(element.classList.contains("silverback")) 
          {
            this.ViewProject(projectWrapper, element, silverback);
          }
          else if(element.classList.contains("reaction")) 
          {
            this.ViewProject(projectWrapper, element, reaction);
          }
          else if(element.classList.contains("dragon")) 
          {
            this.ViewProject(projectWrapper, element, dragon);
          }
        })
    })
  }


  ViewProject(projectWrapper : HTMLElement, navbarElement : HTMLElement,  project : Project) : void 
  {
    navbarElement.classList.add("selected-project");
    if (navbarElement && navbarElement.parentElement) 
    {
      const siblings = Array.from(navbarElement.parentElement.children).filter(child => child !== navbarElement);
      for(let sibling of siblings) 
        {
          sibling.classList.remove("selected-project");
        }
    }

    projectWrapper.innerHTML = project.text;
  }
  
  private projects : Map<string, Project> = new Map<string, Project>();
  
};
