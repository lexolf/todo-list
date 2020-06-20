import {createTask, createProject} from "./logic"
import {Project, projects} from "./project"
import {Task, tasks} from "./task"

// The initial state of the app that appears on page load

const initialiseApp = () => {
    // App is a parent element
    let app = document.getElementById("app");
    renderPanes(app);
    functionaliseInputs();
    renderProjects();
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
        } else {
            pane.classList = "empty";
            let paneEmpty = document.createElement("div");
            paneEmpty.textContent = "Please select task to show details";
            paneEmpty.id = "details-empty";
            pane.appendChild(paneEmpty);
        }
    }
}

const renderTasks = (project) => {
    if(projects.length == 0){alert("!")}
    let tasksContainer = document.getElementById("tasks-container");
    tasksContainer.innerHTML = "";
    for(let i in project.getTasks().sort(function(a,b){
        if(!a.getDone()){a = 0}
        else{a = 1}
        if(!b.getDone()){b = 0}
        else{b = 1}
        return b-a
    })){
        let newTaskTitle  = document.createElement("div");
        let allTasksInDOM = document.getElementsByClassName("task");
        newTaskTitle.classList = "task";
        if(project.getTasks()[i].getDone()){
            newTaskTitle.classList += " done";
        }
        newTaskTitle.textContent = project.getTasks()[i].getTitle();
        newTaskTitle.addEventListener("mouseenter", (e) => {
            let deleteTaskButton = document.createElement("a");
            deleteTaskButton.textContent = "×";
            deleteTaskButton.id = "delete-task";
            allTasksInDOM[i].appendChild(deleteTaskButton);
            let doneTaskButton = document.createElement("a");
            doneTaskButton.textContent = "✓";
            doneTaskButton.id = "done-task";
            allTasksInDOM[i].appendChild(doneTaskButton);
        });
        newTaskTitle.addEventListener("mouseleave", (e) => {
            document.getElementById("delete-task").remove();
            document.getElementById("done-task").remove();
        });
        newTaskTitle.addEventListener("click", (e) => {
            let selectedTaskTitle = window.event.target.textContent.substring(0, window.event.target.textContent.length-2) // Cut "x" from string
            if(window.event.target.textContent == "×"){
                deleteTask(project, window.event.target);
            } else if(window.event.target.textContent == "✓"){
                markTaskDone(project, window.event.target);
            } else {
                selectTask(project, selectedTaskTitle);
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
            if(projectsInput.value != ''){
                createProject(window.event.target.value);
                projectsInput.value = ""; // empty field
                projectsInput.blur(); // inactivate field
            } else {
                alert("Please enter project name before creating it.")
            }
        }
    });
}

const callCreateTask = (title, description, deadline, priority) => {
    if(projects){
        if(title != ''){
            let title = document.getElementById("tasks-input").value;
            let description = document.getElementById("tasks-description").value;
            let deadline = document.getElementById("select-deadline").value;
            let priority = document.getElementById("select-priority").value;
            createTask(title, description, deadline, priority, projects.filter(project => project.isActive() == true)[0]);
            document.getElementById("select-priority").remove();
            document.getElementById("select-deadline").remove();
            document.getElementById("tasks-description").remove();
            document.getElementById("create-task-button").remove();
            } else {alert("Please enter task name before creating it.");
        }
    } else {alert("Please select a project first.")}
}

const functionaliseTasksInput = () => {
    const tasksInput = document.getElementById("tasks-input");
    tasksInput.addEventListener("click", (e) => {
        if(!document.getElementById("tasks-description")){
            let tasksDescriptionInput = document.createElement("textarea");
            tasksDescriptionInput.id = "tasks-description";
            tasksDescriptionInput.placeholder = "Enter task description here...";
            let createTaskButton = document.createElement("div");
            createTaskButton.id = "create-task-button";
            createTaskButton.textContent = "+";
            createTaskButton.addEventListener("click", (e) => {
                e.preventDefault();
                callCreateTask();
                tasksInput.value = ""; 
                tasksInput.blur();
            });
            tasksInput.after(createTaskButton);
            tasksInput.after(tasksDescriptionInput);
            let setDeadlineButton = document.createElement("input");
            setDeadlineButton.type = "date";
            setDeadlineButton.id = "select-deadline";
            setDeadlineButton.value = new Date().toDateInputValue();
            tasksInput.after(setDeadlineButton);
            let setPriorityButton = document.createElement("select");
            setPriorityButton.id = "select-priority";
            let options = ["low", "normal", "high", "urgent"];
            for(let i in options){
                let option = document.createElement("option");
                option.textContent = options[i];
                setPriorityButton.appendChild(option);
            }
            setPriorityButton.value = options[2];
            setDeadlineButton.after(setPriorityButton);
            let app = document.getElementById("app");
            app.addEventListener("click", (e) => {
                if(event.target.parentNode != null && event.target.parentNode.id != "tasks-input-container" && event.target.nodeName != "OPTION" && event.target.id != "create-task-button"){
                tasksDescriptionInput.remove();
                setPriorityButton.remove();
                setDeadlineButton.remove();
                createTaskButton.remove();
                };
            });
        };
    });
    tasksInput.addEventListener("keydown", (e) => {
        if (e.keyCode === 13){
            callCreateTask();
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
    localStorage.removeItem(projectToDelete.textContent.substring(0, projectToDelete.textContent.length-1));
    renderProjects();
};

const deleteTask = (project, target) => {
    let taskToDelete = window.event.target.parentNode;
    let tasksContainer =  window.event.target.parentNode.parentNode;
    let taskToDeleteIndex = Array.prototype.indexOf.call(tasksContainer.children, taskToDelete);
    tasksContainer.removeChild(taskToDelete);
    project.removeTask(taskToDeleteIndex);
    project.store();
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
    if(window.event){                                    // has 'active' style
        window.event.target.classList = "project active";} else { 
            document.getElementsByClassName("project")[0].classList = "project active";
        }           
    renderTasks(selectedProject);
}

const selectTask = (project, name) => {
    let selectedTask = project.getTasks().filter(task => task.getTitle() == name)[0];
    let deselectedTasks = project.getTasks().filter(task => task.getTitle() != name);
    for(let i in deselectedTasks){
        deselectedTasks[i].deactivate();
    };
    selectedTask.activate();
    let allTasksInDOM = document.getElementsByClassName("task");
    for(let i = 0; i < allTasksInDOM.length; i++){
        allTasksInDOM[i].classList = "task";
    };
    window.event.target.classList = "task active";
    renderDetails(selectedTask);
}

const markTaskDone = (project, target) => {
    let taskToMark = window.event.target.parentNode;
    let tasksContainer =  window.event.target.parentNode.parentNode;
    let taskToMarkIndex = Array.prototype.indexOf.call(tasksContainer.children, taskToMark);
    project.getTasks()[taskToMarkIndex].switchDone();
    project.store();
    renderTasks(project);
};

const renderDetails = (task) => {
    let details = document.getElementById("details-pane");
    details.classList = "show-content";
    details.innerHTML = "";
    let taskTitle = document.createElement("h2");
    taskTitle.id = "details-title"
    taskTitle.textContent = task.getTitle();
    details.appendChild(taskTitle);
    let taskDescriptionLabel = document.createElement("h3");
    taskDescriptionLabel.id = "details-description-label";
    taskDescriptionLabel.textContent = "Description: ";
    details.appendChild(taskDescriptionLabel);
    let taskDescription = document.createElement("div");
    taskDescription.id = "details-description";
    taskDescription.textContent = task.getDescription();
    details.appendChild(taskDescription);
    let taskDueLabel = document.createElement("h3");
    taskDueLabel.id = "details-due-label";
    taskDueLabel.textContent = "Due: ";
    details.appendChild(taskDueLabel);
    let taskDue = document.createElement("div");
    taskDue.id = "details-due";
    taskDue.textContent = task.getDueDate();
    details.appendChild(taskDue);
    let taskPriorityLabel = document.createElement("h3");
    taskPriorityLabel.id = "details-priority-label";
    taskPriorityLabel.textContent = "Priority: ";
    details.appendChild(taskPriorityLabel);
    let taskPriority = document.createElement("div");
    taskPriority.id = "details-priority";
    taskPriority.textContent = task.getPriority();
    details.appendChild(taskPriority);
}

// Extend Date to allow default date
Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});

export {initialiseApp, selectProject};
export {renderTasks, renderProjects};