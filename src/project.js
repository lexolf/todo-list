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
    const switchActive = () => !active;
    return {getTitle, addTask, getTasks, isActive, switchActive};
}

export {Project, projects}