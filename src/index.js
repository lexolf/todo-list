import {initialiseApp, selectProject} from "./ui"
import {projects, Project} from "./project"
import Task from "./task"

const retrieveProjects = () => {
    if(localStorage.length == 0){
        let newProject = Project("Main");
        let newProjectTask = Task("Create a new Project", "To create a new Project, type its name in the field in the left pane, then press Enter button.", new Date().toDateInputValue(), "high");
        newProject.addTask(newProjectTask);
        let newTaskTask = Task("Create a new Task", "To create a new Task, type its name in the field in the middle pane, then press Enter button OR type its name and details, choose deadline and priority, and click the plus symbol.", new Date().toDateInputValue(), "high");
        newProject.addTask(newTaskTask);
        let markTaskDoneTask = Task("Mark a Task as done", "To mark a Task as done, click a check mark. You can mark it as undone by clicking again.", new Date().toDateInputValue(), "high");
        newProject.addTask(markTaskDoneTask);
        let deleteTaskTask = Task("Delete a Task", "To delete a Task, click the cross mark. The Task will be permanently deleted.", new Date().toDateInputValue(), "high");
        newProject.addTask(deleteTaskTask);
        let deleteProjectTask = Task("Delete a Project", "To delete a Project, click the cross mark next to it in the list. The Project will be permanently deleted.", new Date().toDateInputValue(), "high");
        newProject.addTask(deleteProjectTask);
        let updateTaskTask = Task("Update a Task", "To update the details of the Task, click the Task, then click any field on the details panel to the right that you wish to edit. Enter the updated details, then click the button to confirm a new date, priority or description, or press Enter to update the title", new Date().toDateInputValue(), "high");
        newProject.addTask(updateTaskTask);
        projects.push(newProject);
        for(let i in projects){
            projects[i].store();
        }
    } else {
        for(let i = 0; i < localStorage.length; i++){
            let newProject = Project(localStorage.key(i));
            for(let j = 0; j < JSON.parse(localStorage.getItem(localStorage.key(i))).length; j++){
                let taskTemplate = JSON.parse(localStorage.getItem(localStorage.key(i)))[j];
                let newTask = Task(taskTemplate[0], taskTemplate[1], taskTemplate[2], taskTemplate[3]);
                if(taskTemplate[4]){
                    newTask.switchDone();
                }
                newProject.addTask(newTask);
            }
            projects.push(newProject);
        }
    }
}

retrieveProjects();
initialiseApp();
selectProject(document.getElementsByClassName("project")[0].innerHTML);