const Task = (title, description, dueDate, priority) => {
    let active = true;
    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getTimeLeft = () => "1 day" // hardcoded, supposed to be due date minus today
    const getPriority = () => priority;
    let isDone = false;
    const isActive = () => active;
    const activate = () => {active = true};
    const deactivate = () => {active = false};
    const getDone = () => isDone;
    const switchDone = () => {isDone = !isDone}

    return { getTitle, getDescription, getDueDate, getTimeLeft, getPriority, isActive, activate, deactivate, getDone, switchDone }
}

export default Task