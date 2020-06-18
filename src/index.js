import initialiseApp from "./ui"
import {projects, Project} from "./project"
import Task from "./task"

const retrieveProjects = () => {
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

retrieveProjects();
initialiseApp();

