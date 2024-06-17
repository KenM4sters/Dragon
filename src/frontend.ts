import * as landingHTML from "./landing.html?raw";
import * as projectsHTML from "./projects.html?raw";

export class Frontend 
{
  constructor() 
  {
    let app : HTMLElement = document.querySelector('#app') as HTMLElement;

    const landing = document.createElement('div');
    const projects = document.createElement('div');
    
    landing.innerHTML = landingHTML.default;
    projects.innerHTML = projectsHTML.default;

    app.appendChild(landing);
    app.appendChild(projects);
  }
};
