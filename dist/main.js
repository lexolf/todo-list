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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\n\nObject(_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/*! exports provided: createProject, createTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createProject\", function() { return createProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTask\", function() { return createTask; });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\n\n\n\nconst createTask = (title, description, deadline, priority, project) => {\n    let task = Object(_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(title, description, deadline, priority);\n    project.addTask(task);\n    Object(_ui__WEBPACK_IMPORTED_MODULE_2__[\"renderTasks\"])(project);\n}\n\nconst createProject = (title) => {\n    let project = Object(_project__WEBPACK_IMPORTED_MODULE_1__[\"Project\"])(title);\n    _project__WEBPACK_IMPORTED_MODULE_1__[\"projects\"].push(project);\n    Object(_ui__WEBPACK_IMPORTED_MODULE_2__[\"renderProjects\"])();\n    if(_project__WEBPACK_IMPORTED_MODULE_1__[\"projects\"].length > 0){\n            for(let i in _project__WEBPACK_IMPORTED_MODULE_1__[\"projects\"]){\n            _project__WEBPACK_IMPORTED_MODULE_1__[\"projects\"][i].deactivate();\n            document.getElementsByClassName(\"project\")[i].classList = \"project\";\n        }\n    }\n    _project__WEBPACK_IMPORTED_MODULE_1__[\"projects\"][_project__WEBPACK_IMPORTED_MODULE_1__[\"projects\"].length-1].activate();\n    document.getElementsByClassName(\"project\")[_project__WEBPACK_IMPORTED_MODULE_1__[\"projects\"].length-1].classList = \"project active\" // switch focus to new project\n}\n\n\n\n//# sourceURL=webpack:///./src/logic.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/*! exports provided: Project, projects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Project\", function() { return Project; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projects\", function() { return projects; });\nlet projects = [];\n\nconst Project = (title) => {\n    const getTitle = () => title;\n    let tasks = [];\n    let active = true;\n    const addTask = (task) => {\n        tasks.push(task);\n    }\n    const getTasks = () => tasks;\n    const isActive = () => active;\n    const activate = () => {active = true};\n    const deactivate = () => {active = false};\n    return {getTitle, addTask, getTasks, isActive, activate, deactivate};\n}\n\n\n\n//# sourceURL=webpack:///./src/project.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Task = (title, description, dueDate, priority) => {\n    const getTitle = () => title;\n    const getDescription = () => description;\n    const getDueDate = () => dueDate;\n    const getTimeLeft = () => \"1 day\" // hardcoded, supposed to be due date minus today\n    const getPriority = () => priority;\n    let isDone = false;\n    const getDone = () => isDone;\n    const switchDone = () => {isDone = !isDone}\n\n    return { getTitle, getDescription, getDueDate, getTimeLeft, getPriority, getDone, switchDone }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Task);\n\n//# sourceURL=webpack:///./src/task.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/*! exports provided: default, renderTasks, renderProjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderTasks\", function() { return renderTasks; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderProjects\", function() { return renderProjects; });\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n\n\n// The initial state of the app that appears on page load\n\nconst initialiseApp = () => {\n    // App is a parent element\n    let app = document.getElementById(\"app\");\n    renderPanes(app);\n    functionaliseInputs();\n}   \n\nconst renderPanes = (app) => {\n    let panes = [\"projects\", \"tasks\", \"details\"];\n    for(let i in panes){\n        let pane = document.createElement(\"div\");\n        pane.id = panes[i] + \"-pane\";\n        app.appendChild(pane);\n        let title = document.createElement(\"h1\");\n        title.id = panes[i] + \"-title\";\n        title.textContent = panes[i];\n        pane.appendChild(title);\n        if(i < 2){\n            let input = document.createElement(\"input\");\n            input.id = panes[i] + \"-input\";\n            input.placeholder = \"New \" + panes[i].slice(0,panes[i].length-1) + \"...\";\n            pane.appendChild(input);\n            let container = document.createElement(\"div\");\n            container.id = panes[i] + \"-container\";\n            pane.appendChild(container);\n        }\n    }\n}\n\nconst renderTasks = (project) => {\n    let tasksContainer = document.getElementById(\"tasks-container\");\n    tasksContainer.innerHTML = \"\";\n    for(let i in project.getTasks()){\n        let newTaskTitle  = document.createElement(\"div\");\n        newTaskTitle.classList = \"task\";\n        newTaskTitle.textContent = project.getTasks()[i].getTitle();\n        tasksContainer.appendChild(newTaskTitle);\n    }\n}\n\nconst renderProjects = () => {\n    let projectsContainer = document.getElementById(\"projects-container\");\n    projectsContainer.innerHTML = \"\";\n    for(let i in _project__WEBPACK_IMPORTED_MODULE_1__[\"projects\"]){\n        let projectTitle  = document.createElement(\"div\");\n        let projectsDOM = document.getElementsByClassName(\"project\");\n        projectTitle.classList = \"project\";\n        projectTitle.textContent = _project__WEBPACK_IMPORTED_MODULE_1__[\"projects\"][i].getTitle();\n        projectTitle.addEventListener(\"click\", (e) => {\n            let selectedProject = _project__WEBPACK_IMPORTED_MODULE_1__[\"projects\"].filter(project => project.getTitle() == window.event.target.textContent)[0];\n            let deselectedProjects = _project__WEBPACK_IMPORTED_MODULE_1__[\"projects\"].filter(project => project.getTitle() != window.event.target.textContent);\n            for(let i in deselectedProjects){\n                deselectedProjects[i].deactivate();\n            };\n            selectedProject.activate();\n            for(let i = 0; i < projectsDOM.length; i++){                // each inactive projects\n                projectsDOM[i].classList = \"project\";                   // has corresponding no 'active' style\n            };                                                          // while the active project\n            window.event.target.classList = \"project active\";           // has 'active' style\n            renderTasks(selectedProject);\n        })\n        projectsContainer.appendChild(projectTitle);\n    }\n}\n\nconst functionaliseInputs = () => {\n    functionaliseProjectsInput();\n    functionaliseTasksInput();\n};\n\nconst functionaliseProjectsInput = () => {\n    const projectsInput = document.getElementById(\"projects-input\");\n    projectsInput.addEventListener(\"keydown\", (e) => {\n        if (e.keyCode === 13) { \n            Object(_logic__WEBPACK_IMPORTED_MODULE_0__[\"createProject\"])(window.event.target.value);\n            projectsInput.value = \"\"; // empty field\n            projectsInput.blur(); // inactivate field\n        }\n    });\n}\n\nconst functionaliseTasksInput = () => {\n    const tasksInput = document.getElementById(\"tasks-input\");\n    tasksInput.addEventListener(\"click\", (e) => {\n        if(!document.getElementById(\"tasks-description\")){\n            let tasksDescriptionInput = document.createElement(\"textarea\");\n            tasksDescriptionInput.id = \"tasks-description\";\n            tasksInput.after(tasksDescriptionInput);\n            let app = document.getElementById(\"app\");\n            app.addEventListener(\"click\", (e) => {\n                if(event.target.id != \"tasks-input\" && event.target.id != \"tasks-description\"){\n                    tasksDescriptionInput.remove();\n                };\n            });\n        };\n    });\n    tasksInput.addEventListener(\"keydown\", (e) => {\n        if (e.keyCode === 13){\n            Object(_logic__WEBPACK_IMPORTED_MODULE_0__[\"createTask\"])(\"Bomb\", \"it's gonna blow!\", \"tomorrow\", \"urgent\", _project__WEBPACK_IMPORTED_MODULE_1__[\"projects\"].filter(project => project.isActive() == true)[0]);\n            tasksInput.value = \"\"; \n            tasksInput.blur();\n        }\n    });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initialiseApp);\n\n\n//# sourceURL=webpack:///./src/ui.js?");

/***/ })

/******/ });