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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createProject\", function() { return createProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTask\", function() { return createTask; });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\n\n\n\nconst createTask = (object) => {\n    let task = Object(_task__WEBPACK_IMPORTED_MODULE_0__[\"Task\"])(\"New Title\", \"this is a brief description\", \"2020-15-05\", \"urgent\");\n    _task__WEBPACK_IMPORTED_MODULE_0__[\"tasks\"].push(task);\n    Object(_ui__WEBPACK_IMPORTED_MODULE_2__[\"renderTasks\"])();\n}\n\nconst createProject = (object) => {\n    let project = Object(_project__WEBPACK_IMPORTED_MODULE_1__[\"Project\"])(\"Main\");\n    _project__WEBPACK_IMPORTED_MODULE_1__[\"projects\"].push(project);\n    Object(_ui__WEBPACK_IMPORTED_MODULE_2__[\"renderProjects\"])();\n}\n\n\n\n//# sourceURL=webpack:///./src/logic.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/*! exports provided: Project, projects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Project\", function() { return Project; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projects\", function() { return projects; });\nlet projects = [];\n\nconst Project = (title) => {\n    const getTitle = () => title;\n    return {getTitle};\n}\n\n\n\n//# sourceURL=webpack:///./src/project.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/*! exports provided: Task, tasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Task\", function() { return Task; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tasks\", function() { return tasks; });\nlet tasks = [];\n\nconst Task = (title, description, dueDate, priority) => {\n    const getTitle = () => title;\n    const getDescription = () => description;\n    const getDueDate = () => dueDate;\n    const getTimeLeft = () => \"1 day\" // hardcoded, supposed to be due date minus today\n    const getPriority = () => priority;\n    let isDone = false;\n    const getDone = () => isDone;\n    const switchDone = () => {isDone = !isDone}\n\n    return { getTitle, getDescription, getDueDate, getTimeLeft, getPriority, getDone, switchDone }\n}\n\n\n\n//# sourceURL=webpack:///./src/task.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/*! exports provided: default, renderTasks, renderProjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderTasks\", function() { return renderTasks; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderProjects\", function() { return renderProjects; });\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n\n\n// The initial state of the app that appears on page load\n\nconst initialiseApp = () => {\n    // App is a parent element\n    let app = document.getElementById(\"app\");\n    renderPanes(app);\n    // Create button to create a new task\n    let newTaskButton = document.createElement(\"a\");\n    newTaskButton.id = \"new-task-btn\";\n    newTaskButton.textContent = \"+\";\n    newTaskButton.addEventListener(\"click\", (e) => { \n        Object(_logic__WEBPACK_IMPORTED_MODULE_0__[\"createTask\"])(window.event.target);\n     }, false);\n    app.appendChild(newTaskButton);\n    // Create button to create a new project\n    let newProjectButton = document.createElement(\"a\");\n    newProjectButton.id = \"new-project-btn\";\n    newProjectButton.textContent = \"P\";\n    newProjectButton.addEventListener(\"click\", (e) => { \n        Object(_logic__WEBPACK_IMPORTED_MODULE_0__[\"createProject\"])(window.event.target);\n     }, false);\n    app.appendChild(newProjectButton);\n}   \n\nconst renderPanes = (app) => {\n    let panes = [\"projects\", \"tasks\", \"details\"];\n    for(let i in panes){\n        let pane = document.createElement(\"div\");\n        pane.id = panes[i] + \"-pane\";\n        app.appendChild(pane);\n        let title = document.createElement(\"h1\");\n        title.id = panes[i] + \"-title\";\n        title.textContent = panes[i];\n        pane.appendChild(title);\n        if(i < 2){\n            let input = document.createElement(\"input\");\n            input.id = panes[i] + \"-input\";\n            input.textContent = \"Type to create a new \" + panes[i] + \"...\";\n            pane.appendChild(input);\n            let container = document.createElement(\"div\");\n            container.id = panes[i] + \"-container\";\n            pane.appendChild(container);\n        }\n    }\n}\n\nconst renderTasks = () => {\n    let tasksContainer = document.getElementById(\"tasks-container\");\n    tasksContainer.innerHTML = \"\";\n    for(let i in _task__WEBPACK_IMPORTED_MODULE_2__[\"tasks\"]){\n        let newTaskTitle  = document.createElement(\"div\");\n        newTaskTitle.classList = \"task\";\n        newTaskTitle.textContent = _task__WEBPACK_IMPORTED_MODULE_2__[\"tasks\"][i].getTitle();\n        tasksContainer.appendChild(newTaskTitle);\n    }\n}\n\nconst renderProjects = () => {\n    let projectsContainer = document.getElementById(\"projects-container\");\n    projectsContainer.innerHTML = \"\";\n    for(let i in _project__WEBPACK_IMPORTED_MODULE_1__[\"projects\"]){\n        let newProjectTitle  = document.createElement(\"div\");\n        newProjectTitle.classList = \"project\";\n        newProjectTitle.textContent = _project__WEBPACK_IMPORTED_MODULE_1__[\"projects\"][i].getTitle();\n        projectsContainer.appendChild(newProjectTitle);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initialiseApp);\n\n\n//# sourceURL=webpack:///./src/ui.js?");

/***/ })

/******/ });