import {createTask, createProject, functionaliseInputs} from "./logic"
import {Project, projects} from "./project"
import {Task, tasks} from "./task"

// The initial state of the app that appears on page load

const initialiseApp = () => {
    // App is a parent element
    let app = document.getElementById("app");
    renderPanes(app);
    functionaliseInputs();
}   

const renderPanes = (app) => {
    let panes = ["projects", "tasks", "details"];
    for(let i in panes){
        let pane = document.createElement("div");
        pane.id = panes[i] + "-pane";
        app.appendChild(pane);
        let title = document.createElement("h1");
        title.id = panes[i] + "-title";
        title.textContent = panes[i];
        pane.appendChild(title);
        if(i < 2){
            let input = document.createElement("input");
            input.id = panes[i] + "-input";
            input.placeholder = "New " + panes[i].slice(0,panes[i].length-1) + " title...";
            pane.appendChild(input);
            let container = document.createElement("div");
            container.id = panes[i] + "-container";
            pane.appendChild(container);
        }
    }
}

const renderTasks = (project) => {
    let tasksContainer = document.getElementById("tasks-container");
    tasksContainer.innerHTML = "";
    for(let i in project.getTasks()){
        let newTaskTitle  = document.createElement("div");
        newTaskTitle.classList = "task";
        newTaskTitle.textContent = project.getTasks()[i].getTitle();
        tasksContainer.appendChild(newTaskTitle);
    }
}

const renderProjects = () => {
    let projectsContainer = document.getElementById("projects-container");
    projectsContainer.innerHTML = "";
    for(let i in projects){
        let newProjectTitle  = document.createElement("div");
        newProjectTitle.classList = "project";
        newProjectTitle.textContent = projects[i].getTitle();
        newProjectTitle.addEventListener("click", (e) => {
            let selectedProject = projects.filter(project => project.getTitle() == window.event.target.textContent)[0];
            let deselectedProjects = projects.filter(project => project.getTitle() != window.event.target.textContent);
            for(let i in deselectedProjects){
                deselectedProjects[i].deactivate();
            }
            selectedProject.activate();
            renderTasks(selectedProject);
        })
        projectsContainer.appendChild(newProjectTitle);
    }
}

export default initialiseApp;
export {renderTasks, renderProjects};