let projects = [];

const Project = (title) => {
    const getTitle = () => title;
    let tasks = [];
    let active = true;
    const addTask = (task) => {
        tasks.push(task);
    }
    const removeTask = (index) => {
        tasks.splice(index, 1);
    }
    const getTasks = () => tasks;
    const isActive = () => active;
    const activate = () => {active = true};
    const deactivate = () => {active = false};
    return {getTitle, addTask, removeTask, getTasks, isActive, activate, deactivate};
}

export {Project, projects}