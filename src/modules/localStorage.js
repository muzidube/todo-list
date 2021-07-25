import { projectCreation, taskCreation } from "./creatorTest";

function addToLocalStorage(taskList) {
    localStorage.setItem('taskList', JSON.stringify(taskList));
    taskCreation(taskList);
}

function addToLocalStorage1(projectList) {
    localStorage.setItem('projectList', JSON.stringify(projectList));
    projectCreation(projectList);
}



export {
    addToLocalStorage,
    addToLocalStorage1,
}