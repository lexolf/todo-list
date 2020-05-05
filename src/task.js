const Task = (title, description, dueDate, priority) => {
    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getTimeLeft = () => "1 day" // hardcoded, supposed to be due date minus today
    const getPriority = () => priority;
    let isDone = false;
    const getDone = () => isDone;
    const switchDone = () => {isDone = !isDone}

    return { getTitle, getDescription, getDueDate, getTimeLeft, getPriority, getDone, switchDone }
}

export default Task