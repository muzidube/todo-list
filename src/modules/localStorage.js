import { projectCreation, taskCreation, taskCreation2 } from "./creatorTest";

function addToLocalStorage(taskList) {
    localStorage.setItem('taskList', JSON.stringify(taskList));
    taskCreation2(taskList);
}

function addToLocalStorage1(projectList) {
    localStorage.setItem('projectList', JSON.stringify(projectList));
    projectCreation(projectList);
}



export {
    addToLocalStorage,
    addToLocalStorage1,
}