/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domhandler.js":
/*!***************************!*\
  !*** ./src/domhandler.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   domProjectHandler: () => (/* binding */ domProjectHandler),\n/* harmony export */   domTaskHandler: () => (/* binding */ domTaskHandler)\n/* harmony export */ });\n/* harmony import */ var _generalFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generalFunctions */ \"./src/generalFunctions.js\");\n\nconst domProjectHandler = (function(){\n\n    let Projects = [];\n    const projectHolder = document.querySelector(\".projectHolder\")\n    const projectAddBtn = document.querySelector(\".addProjectBtn\")\n\n    const deleteProject = function(ProjectId)\n    {\n        Projects.splice(ProjectId,id);\n        displayProjects(Projects)\n\n    }\n    const addProject = function(Project)\n    {\n        Projects.push(Project)\n        displayProjects(Projects)\n    }\n    const displayProjects = function()\n    {\n        Projects.forEach(Project => {\n           const ProjectDiv =  _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.insertElement('div','Project',Project.getName(),projectHolder);\n        });\n        projectHolder.appendChild(projectAddBtn)\n    }\n    \n\n    return{deleteProject,addProject}\n\n\n})();\n\n\nconst domTaskHandler = (function()\n{\n    const displayTasks = function(Project)\n    {\n        clearDom(tasks)\n        //code to display tasks here\n    };\n    \n    return{displayTasks}\n})();\n\nconst clearDom = function(element,inputClass)\n{\n    //code to delete all of dom's children\n}\n\n\n\n\n// btnDelProject.addeventlistener(\"click\",function()\n// {\n//     const index; //getIndexCode;\n//     domProjectHandler().deleteProject(index)\n// })\n// btnDelTask.addeventlistener(\"click\",function()\n// {\n//     const index; //getIndexCode;\n//     taskHandler.deleteTask(index,programData.getCurrentProject().getTasks())\n// })\n\n\n\n//# sourceURL=webpack://odin-notepad/./src/domhandler.js?");

/***/ }),

/***/ "./src/generalFunctions.js":
/*!*********************************!*\
  !*** ./src/generalFunctions.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generalFuncModule: () => (/* binding */ generalFuncModule)\n/* harmony export */ });\nconst generalFuncModule = (function()\n{\n    const bodyElem = document.body;\n    const doc = document;\n\n\n\n    const insertElement = function(elementType,elementClass,elementContent,elementParrent,elementImgSrc)\n    {\n       let element = doc.createElement(elementType);\n        element.className = elementClass;\n        element.textContent = elementContent\n        if(elementType === \"img\")\n        {\n            element.src = elementImgSrc;\n        }\n        elementParrent.appendChild(element)\n        return element\n        \n    }\n    return{insertElement}\n})();\n\n\n\n//# sourceURL=webpack://odin-notepad/./src/generalFunctions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects */ \"./src/objects.js\");\n/* harmony import */ var _domhandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domhandler */ \"./src/domhandler.js\");\n\n\n\nconst taskHandler = (function()\n{\n    const setTask = (task,taskArray)=>{taskArray.push(task)}\n    const deleteTask = (taskSpot,taskArray)=>{taskArray.splice(taskSpot,1)}\n    return{setTask,deleteTask}\n})();\n\n\nconst programData = (function()\n{\n    let currentProject;\n    const setProject = function(project){currentProject = project}\n    const getCurrentProject = function(){return currentProject}\n\n    return{setProject,getCurrentProject}\n})();\nconst initialiseApp = function()\n{\n    const btnProject = document.querySelector('.addProjectBtn')\n    const btnTask = document.querySelector('.addTaskBtn')\n    //how we should add the project and the tasks\n    btnProject.addEventListener(\"click\",function()\n    {\n        const project = (0,_objects__WEBPACK_IMPORTED_MODULE_0__.projectMaker)(\"Jimmy\")\n        _domhandler__WEBPACK_IMPORTED_MODULE_1__.domProjectHandler.addProject(project)\n\n    });\n    btnTask.addEventListener(\"click\",function()\n    {\n\n        const task = (0,_objects__WEBPACK_IMPORTED_MODULE_0__.dataTaskMaker)(\"name\",\"description\",\"Date\",\"High\")\n        taskHandler.setTask(task,programData.getCurrentProject().getTasks())\n        _domhandler__WEBPACK_IMPORTED_MODULE_1__.domTaskHandler.displayTasks(programData.getCurrentProject())\n\n    });\n}\ninitialiseApp()\n\n//# sourceURL=webpack://odin-notepad/./src/index.js?");

/***/ }),

/***/ "./src/objects.js":
/*!************************!*\
  !*** ./src/objects.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dataTaskMaker: () => (/* binding */ dataTaskMaker),\n/* harmony export */   projectMaker: () => (/* binding */ projectMaker)\n/* harmony export */ });\nconst dataTaskMaker = function(inputName,inputDescription,inputDate,inputPriority)\n{\n    let taskName = inputName;\n    let taskDescription = inputDescription;\n    let taskDate = inputDate;\n    let taskPriority = inputPriority\n    let isComplete = false;\n\n    const getTaskName = ()=>{return taskName}\n    const getTaskDescription = ()=>{return taskDescription}\n    const getTaskDate = ()=>{return taskDate}\n    const getTaskPriority = ()=>{return taskPriority}\n    const isTaskCompleted = ()=>{return isComplete}\n\n    return{getTaskName,getTaskDescription,getTaskDate,getTaskPriority,isTaskCompleted}\n}\n\nconst projectMaker = function(inputName)\n{\n    let projectName = inputName;\n    let tasks = [];\n\n    const getName = ()=>{return projectName}\n    const getTasks = ()=>{return tasks}\n\n    return{getName,getTasks}\n}\n\n\n\n//# sourceURL=webpack://odin-notepad/./src/objects.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;