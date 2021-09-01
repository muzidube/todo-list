import { projectCreation, projectCreation2, taskCreation, taskCreation2 } from "./creatorTest";

function addToLocalStorage(taskList) {
    localStorage.setItem('taskList', JSON.stringify(taskList));
    taskCreation2(taskList);
}

function addToLocalStorage1(projectList) {
    localStorage.setItem('projectList', JSON.stringify(projectList));
    projectCreation(projectList);
}

function addToLocalStorage2(projectList) {
    localStorage.setItem('projectList', JSON.stringify(projectList));
}



export {
    addToLocalStorage,
    addToLocalStorage1,
    addToLocalStorage2,
}