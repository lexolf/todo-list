/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\r\n\r\n\r\n\r\nconst retrieveProjects = () => {\r\n    for(let i = 0; i < localStorage.length; i++){\r\n        let newProject = Object(_project__WEBPACK_IMPORTED_MODULE_1__[\"Project\"])(localStorage.key(i));\r\n        for(let j = 0; j < JSON.parse(localStorage.getItem(localStorage.key(i))).length; j++){\r\n            let taskTemplate = JSON.parse(localStorage.getItem(localStorage.key(i)))[j];\r\n            let newTask = Object(_task__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(taskTemplate[0], taskTemplate[1], taskTemplate[2], taskTemplate[3]);\r\n            newProject.addTask(newTask);\r\n        }\r\n        _project__WEBPACK_IMPORTED_MODULE_1__[\"projects\"].push(newProject);\r\n    }\r\n}\r\n\r\nretrieveProjects();\r\nObject(_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/*! exports provided: createProject, createTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createProject\", function() { return createProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTask\", function() { return createTask; });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\r\n\r\n\r\n\r\nconst createTask = (title, description, deadline, priority, project) => {\r\n    let task = Object(_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(title, description, deadline, priority);\r\n    project.addTask(task);\r\n    project.store();\r\n    Object(_ui__WEBPACK_IMPORTED_MODULE_2__[\"renderTasks\"])(project);\r\n}\r\n\r\nconst createProject = (title) => {\r\n    let project = Object(_project__WEBPACK_IMPORTED_MODULE_1__[\"Project\"])(title);\r\n    _project__WEBPACK_IMPORTED_MODULE_1__[\"projects\"].push(project);\r\n    project.store();\r\n    Object(_ui__WEBPACK_IMPORTED_MODULE_2__[\"renderProjects\"])();\r\n    if(_project__WEBPACK_IMPORTED_MODULE_1__[\"projects\"].length > 0){\r\n            for(let i in _project__WEBPACK_IMPORTED_MODULE_1__[\"projects\"]){\r\n            _project__WEBPACK_IMPORTED_MODULE_1__[\"projects\"][i].deactivate();\r\n            document.getElementsByClassName(\"project\")[i].classList = \"project\";\r\n        }\r\n    }\r\n    _project__WEBPACK_IMPORTED_MODULE_1__[\"projects\"][_project__WEBPACK_IMPORTED_MODULE_1__[\"projects\"].length-1].activate();\r\n    document.getElementsByClassName(\"project\")[_project__WEBPACK_IMPORTED_MODULE_1__[\"projects\"].length-1].classList = \"project active\" // switch focus to new project\r\n    Object(_ui__WEBPACK_IMPORTED_MODULE_2__[\"renderTasks\"])(project);\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/logic.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/*! exports provided: Project, projects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Project\", function() { return Project; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projects\", function() { return projects; });\nlet projects = [];\r\n\r\nconst Project = (title) => {\r\n    const getTitle = () => title;\r\n    let tasks = [];\r\n    let active = true;\r\n    const addTask = (task) => {\r\n        tasks.push(task);\r\n    }\r\n    const removeTask = (index) => {\r\n        tasks.splice(index, 1);\r\n    }\r\n    const getTasks = () => tasks;\r\n    const store = () => {\r\n        let storageArray  = [];\r\n        for(let i of tasks){\r\n            storageArray.push([i.getTitle(), i.getDescription(), i.getDueDate(), i.getPriority()])\r\n        }\r\n        localStorage.setItem(title, JSON.stringify(storageArray));\r\n    }\r\n    const isActive = () => active;\r\n    const activate = () => {active = true};\r\n    const deactivate = () => {active = false};\r\n    return {getTitle, addTask, removeTask, getTasks, isActive, activate, deactivate, store};\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/project.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Task = (title, description, dueDate, priority) => {\r\n    let active = true;\r\n    const getTitle = () => title;\r\n    const getDescription = () => description;\r\n    const getDueDate = () => dueDate;\r\n    const getTimeLeft = () => \"1 day\" // hardcoded, supposed to be due date minus today\r\n    const getPriority = () => priority;\r\n    let isDone = false;\r\n    const isActive = () => active;\r\n    const activate = () => {active = true};\r\n    const deactivate = () => {active = false};\r\n    const getDone = () => isDone;\r\n    const switchDone = () => {isDone = !isDone}\r\n\r\n    return { getTitle, getDescription, getDueDate, getTimeLeft, getPriority, isActive, activate, deactivate, getDone, switchDone }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Task);\n\n//# sourceURL=webpack:///./src/task.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/*! exports provided: default, renderTasks, renderProjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderTasks\", function() { return renderTasks; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderProjects\", function() { return renderProjects; });\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\r\n\r\n\r\n\r\n// The initial state of the app that appears on page load\r\n\r\nconst initialiseApp = () => {\r\n    // App is a parent element\r\n    let app = document.getElementById(\"app\");\r\n    renderPanes(app);\r\n    functionaliseInputs();\r\n    renderProjects();\r\n}   \r\n\r\nconst renderPanes = (app) => {\r\n    let panes = [\"projects\", \"tasks\", \"details\"];\r\n    for(let i in panes){\r\n        let pane = document.createElement(\"div\");\r\n        pane.id = panes[i] + \"-pane\";\r\n        app.appendChild(pane);\r\n        let title = document.createElement(\"h1\");\r\n        title.id = panes[i] + \"-title\";\r\n        title.textContent = panes[i];\r\n        pane.appendChild(title);\r\n        if(i < 2){\r\n            let inputContainer = document.createElement(\"div\");\r\n            inputContainer.id = panes[i] + \"-input-container\";\r\n            pane.appendChild(inputContainer);\r\n            let input = document.createElement(\"input\");\r\n            input.id = panes[i] + \"-input\";\r\n            input.placeholder = \"New \" + panes[i].slice(0,panes[i].length-1) + \"...\";\r\n            inputContainer.appendChild(input);\r\n            let container = document.createElement(\"div\");\r\n            container.id = panes[i] + \"-container\";\r\n            pane.appendChild(container);\r\n        } else {\r\n            pane.classList = \"empty\";\r\n            let paneEmpty = document.createElement(\"div\");\r\n            paneEmpty.textContent = \"Please select task to show details\";\r\n            paneEmpty.id = \"details-empty\";\r\n            pane.appendChild(paneEmpty);\r\n        }\r\n    }\r\n}\r\n\r\nconst renderTasks = (project) => {\r\n    let tasksContainer = document.getElementById(\"tasks-container\");\r\n    tasksContainer.innerHTML = \"\";\r\n    for(let i in project.getTasks()){\r\n        let newTaskTitle  = document.createElement(\"div\");\r\n        let allTasksInDOM = document.getElementsByClassName(\"task\");\r\n        newTaskTitle.classList = \"task\";\r\n        newTaskTitle.textContent = project.getTasks()[i].getTitle();\r\n        newTaskTitle.addEventListener(\"mouseenter\", (e) => {\r\n            let deleteTaskButton = document.createElement(\"a\");\r\n            deleteTaskButton.textContent = \"×\";\r\n            deleteTaskButton.id = \"delete-task\";\r\n            allTasksInDOM[i].appendChild(deleteTaskButton);\r\n        });\r\n        newTaskTitle.addEventListener(\"mouseleave\", (e) => {\r\n            document.getElementById(\"delete-task\").remove();\r\n        });\r\n        newTaskTitle.addEventListener(\"click\", (e) => {\r\n            let selectedTaskTitle = window.event.target.textContent.substring(0, window.event.target.textContent.length-1) // Cut \"x\" from string\r\n            if(window.event.target.textContent == \"×\"){\r\n                deleteTask(project, window.event.target);\r\n            } else {\r\n                selectTask(project, selectedTaskTitle);\r\n            }\r\n        });\r\n        tasksContainer.appendChild(newTaskTitle);\r\n    }\r\n}\r\n\r\nconst renderProjects = () => {\r\n    let projectsContainer = document.getElementById(\"projects-container\");\r\n    projectsContainer.innerHTML = \"\";\r\n    for(let i in _project__WEBPACK_IMPORTED_MODULE_1__[\"projects\"]){\r\n        let projectTitle  = document.createElement(\"div\");\r\n        let projectsDOM = document.getElementsByClassName(\"project\");\r\n        projectTitle.classList = \"project\";\r\n        projectTitle.textContent = _project__WEBPACK_IMPORTED_MODULE_1__[\"projects\"][i].getTitle();\r\n        projectTitle.addEventListener(\"mouseenter\", (e) => {\r\n            let deleteProjectButton = document.createElement(\"a\");\r\n            deleteProjectButton.textContent = \"×\";\r\n            deleteProjectButton.id = \"delete-project\";\r\n            projectsDOM[i].appendChild(deleteProjectButton);\r\n        });\r\n        projectTitle.addEventListener(\"mouseleave\", (e) => {\r\n            document.getElementById(\"delete-project\").remove();\r\n        });\r\n        projectTitle.addEventListener(\"click\", (e) => {\r\n            let selectedProjectName = window.event.target.textContent.substring(0, window.event.target.textContent.length-1) // Cut \"x\" from string\r\n            if(window.event.target.textContent == \"×\"){\r\n                deleteProject(window.event.target);\r\n            } else {\r\n                selectProject(selectedProjectName);\r\n            }\r\n        });\r\n        projectsContainer.appendChild(projectTitle);\r\n    }\r\n}\r\n\r\nconst functionaliseInputs = () => {\r\n    functionaliseProjectsInput();\r\n    functionaliseTasksInput();\r\n};\r\n\r\nconst functionaliseProjectsInput = () => {\r\n    const projectsInput = document.getElementById(\"projects-input\");\r\n    projectsInput.addEventListener(\"keydown\", (e) => {\r\n        if (e.keyCode === 13) { \r\n            if(projectsInput.value != ''){\r\n                Object(_logic__WEBPACK_IMPORTED_MODULE_0__[\"createProject\"])(window.event.target.value);\r\n                projectsInput.value = \"\"; // empty field\r\n                projectsInput.blur(); // inactivate field\r\n            } else {\r\n                alert(\"Please enter project name before creating it.\")\r\n            }\r\n        }\r\n    });\r\n}\r\n\r\nconst functionaliseTasksInput = () => {\r\n    const tasksInput = document.getElementById(\"tasks-input\");\r\n    tasksInput.addEventListener(\"click\", (e) => {\r\n        if(!document.getElementById(\"tasks-description\")){\r\n            let tasksDescriptionInput = document.createElement(\"textarea\");\r\n            tasksDescriptionInput.id = \"tasks-description\";\r\n            tasksDescriptionInput.placeholder = \"Enter task description here...\";\r\n            let createTaskButton = document.createElement(\"div\");\r\n            createTaskButton.id = \"create-task-button\";\r\n            createTaskButton.textContent = \"+\";\r\n            tasksInput.after(createTaskButton);\r\n            tasksInput.after(tasksDescriptionInput);\r\n            let setDeadlineButton = document.createElement(\"input\");\r\n            setDeadlineButton.type = \"date\";\r\n            setDeadlineButton.id = \"select-deadline\";\r\n            setDeadlineButton.value = new Date().toDateInputValue();\r\n            tasksInput.after(setDeadlineButton);\r\n            let setPriorityButton = document.createElement(\"select\");\r\n            setPriorityButton.id = \"select-priority\";\r\n            let options = [\"low\", \"normal\", \"high\", \"urgent\"];\r\n            for(let i in options){\r\n                let option = document.createElement(\"option\");\r\n                option.textContent = options[i];\r\n                setPriorityButton.appendChild(option);\r\n            }\r\n            setPriorityButton.value = options[2];\r\n            setDeadlineButton.after(setPriorityButton);\r\n            let app = document.getElementById(\"app\");\r\n            app.addEventListener(\"click\", (e) => {\r\n                if(event.target.parentNode.id != \"tasks-input-container\" && event.target.nodeName != \"OPTION\"){\r\n                    tasksDescriptionInput.remove();\r\n                    setPriorityButton.remove();\r\n                    setDeadlineButton.remove();\r\n                    createTaskButton.remove();\r\n                };\r\n            });\r\n        };\r\n    });\r\n    tasksInput.addEventListener(\"keydown\", (e) => {\r\n        if (e.keyCode === 13){\r\n            let title = document.getElementById(\"tasks-input\").value;\r\n            let description = document.getElementById(\"tasks-description\").value;\r\n            let deadline = document.getElementById(\"select-deadline\").value;\r\n            let priority = document.getElementById(\"select-priority\").value;\r\n            if(title != ''){\r\n                Object(_logic__WEBPACK_IMPORTED_MODULE_0__[\"createTask\"])(title, description, deadline, priority, _project__WEBPACK_IMPORTED_MODULE_1__[\"projects\"].filter(project => project.isActive() == true)[0]);\r\n            } else {alert(\"Please enter task name before creating it.\");}\r\n            tasksInput.value = \"\"; \r\n            tasksInput.blur();\r\n        }\r\n    });\r\n}\r\n\r\nconst deleteProject = (target) => {\r\n    let projectToDelete = window.event.target.parentNode;\r\n    let projectsContainer =  window.event.target.parentNode.parentNode;\r\n    let projectToDeleteIndex = Array.prototype.indexOf.call(projectsContainer.children, projectToDelete);\r\n    projectsContainer.removeChild(projectToDelete);\r\n    _project__WEBPACK_IMPORTED_MODULE_1__[\"projects\"].splice(projectToDeleteIndex, 1);\r\n    localStorage.removeItem(projectToDelete.textContent.substring(0, projectToDelete.textContent.length-1));\r\n    renderProjects();\r\n};\r\n\r\nconst deleteTask = (project, target) => {\r\n    let taskToDelete = window.event.target.parentNode;\r\n    let tasksContainer =  window.event.target.parentNode.parentNode;\r\n    let taskToDeleteIndex = Array.prototype.indexOf.call(tasksContainer.children, taskToDelete);\r\n    tasksContainer.removeChild(taskToDelete);\r\n    project.removeTask(taskToDeleteIndex);\r\n    project.store();\r\n    renderTasks(project);\r\n};\r\n\r\nconst selectProject = (name) => {\r\n    let selectedProject = _project__WEBPACK_IMPORTED_MODULE_1__[\"projects\"].filter(project => project.getTitle() == name)[0];\r\n    let deselectedProjects = _project__WEBPACK_IMPORTED_MODULE_1__[\"projects\"].filter(project => project.getTitle() != name);\r\n    for(let i in deselectedProjects){\r\n        deselectedProjects[i].deactivate();\r\n    };\r\n    selectedProject.activate();\r\n    let projectsDOM = document.getElementsByClassName(\"project\");\r\n    for(let i = 0; i < projectsDOM.length; i++){                // each inactive projects\r\n        projectsDOM[i].classList = \"project\";                   // has corresponding no 'active' style\r\n    };                                                          // while the active project\r\n    window.event.target.classList = \"project active\";           // has 'active' style\r\n    renderTasks(selectedProject);\r\n}\r\n\r\nconst selectTask = (project, name) => {\r\n    let selectedTask = project.getTasks().filter(task => task.getTitle() == name)[0];\r\n    let deselectedTasks = project.getTasks().filter(task => task.getTitle() != name);\r\n    for(let i in deselectedTasks){\r\n        deselectedTasks[i].deactivate();\r\n    };\r\n    selectedTask.activate();\r\n    let allTasksInDOM = document.getElementsByClassName(\"task\");\r\n    for(let i = 0; i < allTasksInDOM.length; i++){\r\n        allTasksInDOM[i].classList = \"task\";\r\n    };\r\n    window.event.target.classList = \"task active\";\r\n    renderDetails(selectedTask);\r\n}\r\n\r\nconst renderDetails = (task) => {\r\n    let details = document.getElementById(\"details-pane\");\r\n    details.classList = \"show-content\";\r\n    details.innerHTML = \"\";\r\n    let taskTitle = document.createElement(\"h2\");\r\n    taskTitle.id = \"details-title\"\r\n    taskTitle.textContent = task.getTitle();\r\n    details.appendChild(taskTitle);\r\n    let taskDescription = document.createElement(\"div\");\r\n    taskDescription.id = \"details-description\";\r\n    taskDescription.textContent = task.getDescription();\r\n    details.appendChild(taskDescription);\r\n    let taskDue = document.createElement(\"div\");\r\n    taskDue.id = \"details-due\";\r\n    taskDue.textContent = task.getDueDate();\r\n    details.appendChild(taskDue);\r\n    let taskPriority = document.createElement(\"div\");\r\n    taskPriority.id = \"details-priority\";\r\n    taskPriority.textContent = task.getPriority();\r\n    details.appendChild(taskPriority);\r\n}\r\n\r\n// Extend Date to allow default date\r\nDate.prototype.toDateInputValue = (function() {\r\n    var local = new Date(this);\r\n    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());\r\n    return local.toJSON().slice(0,10);\r\n});\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (initialiseApp);\r\n\n\n//# sourceURL=webpack:///./src/ui.js?");

/***/ })

/******/ });