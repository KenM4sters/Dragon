import * as landingHTML from "./landing.html?raw";
import * as projectsHTML from "./projects.html?raw";
import * as aboutHTML from "./about.html?raw";

import { Scroll } from "./scroll";

export class Frontend 
{
  constructor() 
  {
    let app : HTMLElement = document.querySelector('#app') as HTMLElement;

    const landing = document.createElement('div');
    const projects = document.createElement('div');
    const about = document.createElement('div');
    
    this.elements.set("Landing", landing);
    this.elements.set("Projects", projects);
    this.elements.set("About", about);

    landing.innerHTML = landingHTML.default;
    projects.innerHTML = projectsHTML.default;
    about.innerHTML = aboutHTML.default;
    
    app.appendChild(landing);
    app.appendChild(projects);
    app.appendChild(about);

    // this.scroll = new Scroll();

  }


  private elements : Map<string, HTMLElement> = new Map<string, HTMLElement>();
  private scroll !: Scroll;
};
