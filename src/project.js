let projects = [];

const Project = (title) => {
    const getTitle = () => title;
    let tasks = [];
    let active = true;
    const addTask = (task) => {
        tasks.push(task);
    }
    const getTasks = () => tasks;
    const isActive = () => active;
    const activate = () => {active = true};
    const deactivate = () => {active = false};
    return {getTitle, addTask, getTasks, isActive, activate, deactivate};
}

export {Project, projects}