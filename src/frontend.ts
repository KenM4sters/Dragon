import landingHTML from "./landing.html?raw";
import projectsHTML from "./projects.html?raw";
import { Projects } from "./projects/projects";

export class Frontend 
{
  constructor() 
  {
    let app : HTMLElement = document.querySelector('#app') as HTMLElement;

    let landing = document.createElement('div') as HTMLElement;
    let projects = document.createElement('div') as HTMLElement;

    landing.innerHTML = landingHTML;
    projects.innerHTML = projectsHTML;
    
    app.appendChild(landing);
    app.appendChild(projects);

    this.projects = new Projects();
    
    let projectWrapper = document.querySelector(".projects-wrapper") as HTMLElement;

    this.ViewProject(projectWrapper, document.querySelector(".mammoth2d") as HTMLElement, this.projects.mammoth);

    window.addEventListener('click', (event : MouseEvent) => 
      {          
        const element = event.target as HTMLElement;

        if(element.classList.contains("mammoth2d")) 
        {
          this.ViewProject(projectWrapper, element, this.projects.mammoth);
        }
        else if(element.classList.contains("silverback")) 
        {
          this.ViewProject(projectWrapper, element, this.projects.silverback);
        }
        else if(element.classList.contains("dragon")) 
        {
          this.ViewProject(projectWrapper, element, this.projects.dragon);
        }
        else if(element.classList.contains("reaction")) 
        {
          this.ViewProject(projectWrapper, element, this.projects.reaction);
        }
      })


      let aboutToggle = document.querySelector(".about-toggle") as HTMLElement;
      let aboutInfo = document.querySelector(".about-container") as HTMLElement;

      aboutToggle.addEventListener("click", () => 
      {        
          if(this.viewingAbout) 
          {
            this.viewingAbout = false;
            aboutInfo.classList.remove("show-about");
            aboutInfo.classList.add("hide-about");
            aboutToggle.classList.remove("active-toggle");
            aboutToggle.classList.add("inactive-toggle");
          }
          else 
          {
            this.viewingAbout = true;
            aboutInfo.classList.remove("hide-about");
            aboutInfo.classList.add("show-about");
            aboutToggle.classList.remove("inactive-toggle");
            aboutToggle.classList.add("active-toggle");
          }
      })
  }


  ViewProject(projectWrapper : HTMLElement, navbarElement : HTMLElement,  project : string) : void 
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

    projectWrapper.innerHTML = project;
  }

  private projects : Projects;
  private viewingAbout : boolean = false;
  
};
