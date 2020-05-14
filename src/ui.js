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
            let inputContainer = document.createElement("div");
            inputContainer.id = panes[i] + "-input-container";
            pane.appendChild(inputContainer);
            let input = document.createElement("input");
            input.id = panes[i] + "-input";
            input.placeholder = "New " + panes[i].slice(0,panes[i].length-1) + "...";
            inputContainer.appendChild(input);
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
        let allTasksInDOM = document.getElementsByClassName("task");
        newTaskTitle.classList = "task";
        newTaskTitle.textContent = project.getTasks()[i].getTitle();
        newTaskTitle.addEventListener("mouseenter", (e) => {
            let deleteTaskButton = document.createElement("a");
            deleteTaskButton.textContent = "×";
            deleteTaskButton.id = "delete-task";
            allTasksInDOM[i].appendChild(deleteTaskButton);
        });
        newTaskTitle.addEventListener("mouseleave", (e) => {
            document.getElementById("delete-task").remove();
        });
        newTaskTitle.addEventListener("click", (e) => {
            let selectedTaskTitle = window.event.target.textContent.substring(0, window.event.target.textContent.length-1) // Cut "x" from string
            if(window.event.target.textContent == "×"){
                deleteTask(project, window.event.target);
            } else {
                selectTask(selectedTaskTitle);
            }
        });
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
        projectTitle.addEventListener("mouseenter", (e) => {
            let deleteProjectButton = document.createElement("a");
            deleteProjectButton.textContent = "×";
            deleteProjectButton.id = "delete-project";
            projectsDOM[i].appendChild(deleteProjectButton);
        });
        projectTitle.addEventListener("mouseleave", (e) => {
            document.getElementById("delete-project").remove();
        });
        projectTitle.addEventListener("click", (e) => {
            let selectedProjectName = window.event.target.textContent.substring(0, window.event.target.textContent.length-1) // Cut "x" from string
            if(window.event.target.textContent == "×"){
                deleteProject(window.event.target);
            } else {
                selectProject(selectedProjectName);
            }
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
            let setDeadlineButton = document.createElement("input");
            setDeadlineButton.type = "date";
            setDeadlineButton.id = "select-deadline";
            tasksInput.after(setDeadlineButton);
            let setPriorityButton = document.createElement("select");
            setPriorityButton.id = "select-priority";
            let options = ["low", "normal", "high", "urgent"];
            for(let i in options){
                let option = document.createElement("option");
                option.textContent = options[i];
                setPriorityButton.appendChild(option);
            }
            setDeadlineButton.after(setPriorityButton);
            let app = document.getElementById("app");
            app.addEventListener("click", (e) => {
                console.log(event.target.nodeName);
                if(event.target.parentNode.id != "tasks-input-container" && event.target.nodeName != "OPTION"){
                    tasksDescriptionInput.remove();
                    setPriorityButton.remove();
                    setDeadlineButton.remove();
                };
            });
        };
    });
    tasksInput.addEventListener("keydown", (e) => {
        if (e.keyCode === 13){
            let title = document.getElementById("tasks-input").value;
            let description = document.getElementById("tasks-description").value;
            let deadline = document.getElementById("select-deadline").value;
            let priority = document.getElementById("select-priority").value;
            createTask(title, description, deadline, priority, projects.filter(project => project.isActive() == true)[0]);
            tasksInput.value = ""; 
            tasksInput.blur();
        }
    });
}

const deleteProject = (target) => {
    let projectToDelete = window.event.target.parentNode;
    let projectsContainer =  window.event.target.parentNode.parentNode;
    let projectToDeleteIndex = Array.prototype.indexOf.call(projectsContainer.children, projectToDelete);
    projectsContainer.removeChild(projectToDelete);
    projects.splice(projectToDeleteIndex, 1);
    renderProjects();
};

const deleteTask = (project, target) => {
    console.log("Preparing to delte task!");
    let taskToDelete = window.event.target.parentNode;
    let tasksContainer =  window.event.target.parentNode.parentNode;
    let taskToDeleteIndex = Array.prototype.indexOf.call(tasksContainer.children, taskToDelete);
    tasksContainer.removeChild(taskToDelete);
    project.removeTask(taskToDeleteIndex);
    console.log("Deleted task!");
    renderTasks(project);
};

const selectProject = (name) => {
    let selectedProject = projects.filter(project => project.getTitle() == name)[0];
    let deselectedProjects = projects.filter(project => project.getTitle() != name);
    for(let i in deselectedProjects){
        deselectedProjects[i].deactivate();
    };
    selectedProject.activate();
    let projectsDOM = document.getElementsByClassName("project");
    for(let i = 0; i < projectsDOM.length; i++){                // each inactive projects
        projectsDOM[i].classList = "project";                   // has corresponding no 'active' style
    };                                                          // while the active project
    window.event.target.classList = "project active";           // has 'active' style
    renderTasks(selectedProject);
}

export default initialiseApp;
export {renderTasks, renderProjects};