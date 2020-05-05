import {Task, tasks} from "./task";
import {Project, projects} from "./project";
import {renderTasks, renderProjects} from "./ui";

const createTask = (object) => {
    let task = Task("New Title", "this is a brief description", "2020-15-05", "urgent");
    tasks.push(task);
    renderTasks();
}

const createProject = (title) => {
    let project = Project(title);
    projects.push(project);
    renderProjects();
}

const functionaliseInputs = () => {
    const projectsInput = document.getElementById("projects-input");
    projectsInput.addEventListener("keydown", (e) => {
        if (e.keyCode === 13) { 
            createProject(window.event.target.value);
            projectsInput.value = ""; // empty field
            projectsInput.blur(); // inactivate field
        }
    });
} 

export {createProject, createTask, functionaliseInputs};