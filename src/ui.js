import {createTask, createProject} from "./logic"
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
            input.placeholder = "New " + panes[i].slice(0,panes[i].length-1) + "...";
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
        let projectTitle  = document.createElement("div");
        let projectsDOM = document.getElementsByClassName("project");
        projectTitle.classList = "project";
        projectTitle.textContent = projects[i].getTitle();
        projectTitle.addEventListener("click", (e) => {
            let selectedProject = projects.filter(project => project.getTitle() == window.event.target.textContent)[0];
            let deselectedProjects = projects.filter(project => project.getTitle() != window.event.target.textContent);
            for(let i in deselectedProjects){
                deselectedProjects[i].deactivate();
            };
            selectedProject.activate();
            for(let i = 0; i < projectsDOM.length; i++){                // each inactive projects
                projectsDOM[i].classList = "project";                   // has corresponding no 'active' style
            };                                                          // while the active project
            window.event.target.classList = "project active";           // has 'active' style
            renderTasks(selectedProject);
        });
        projectsContainer.appendChild(projectTitle);
    }
}

const functionaliseInputs = () => {
    functionaliseProjectsInput();
    functionaliseTasksInput();
};

const functionaliseProjectsInput = () => {
    const projectsInput = document.getElementById("projects-input");
    projectsInput.addEventListener("keydown", (e) => {
        if (e.keyCode === 13) { 
            createProject(window.event.target.value);
            projectsInput.value = ""; // empty field
            projectsInput.blur(); // inactivate field
        }
    });
}

const functionaliseTasksInput = () => {
    const tasksInput = document.getElementById("tasks-input");
    tasksInput.addEventListener("click", (e) => {
        if(!document.getElementById("tasks-description")){
            let tasksDescriptionInput = document.createElement("textarea");
            tasksDescriptionInput.id = "tasks-description";
            tasksInput.after(tasksDescriptionInput);
            let app = document.getElementById("app");
            app.addEventListener("click", (e) => {
                if(event.target.id != "tasks-input" && event.target.id != "tasks-description"){
                    tasksDescriptionInput.remove();
                };
            });
        };
    });
    tasksInput.addEventListener("keydown", (e) => {
        if (e.keyCode === 13){
            createTask("Bomb", "it's gonna blow!", "tomorrow", "urgent", projects.filter(project => project.isActive() == true)[0]);
            tasksInput.value = ""; 
            tasksInput.blur();
        }
    });
}

export default initialiseApp;
export {renderTasks, renderProjects};