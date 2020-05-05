import Task from "./task";
import {Project, projects} from "./project";
import {renderTasks, renderProjects} from "./ui";

const createTask = (title, description, deadline, priority, project) => {
    let task = Task(title, description, deadline, priority);
    project.addTask(task);
    renderTasks(project);
}

const createProject = (title) => {
    let project = Project(title);
    projects.push(project);
    renderProjects();
    if(projects.length > 0){
            for(let i in projects){
            projects[i].deactivate();
        }
    }
    projects[projects.length-1].activate(); // switch focus to new project
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
    const tasksInput = document.getElementById("tasks-input");
    tasksInput.addEventListener("keydown", (e) => {
        if (e.keyCode === 13){
            createTask("Bomb", "it's gonna blow!", "tomorrow", "urgent", projects.filter(project => project.isActive() == true)[0]);
            tasksInput.value = ""; 
            tasksInput.blur();
        }
    });
} 

export {createProject, createTask, functionaliseInputs};