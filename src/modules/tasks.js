import { taskCreation } from './creatorTest';

import {
    addBtn1
} from './elementCreator'

import {
    taskFormInput1,
    taskFormInput2,
} from './elementCreator';

import {
    projectList
} from './projects'

import { addToLocalStorage} from './localStorage';

export class Task {
    constructor(title, description) {
      this._id = _getID();
      this._title = title;
      this._description = description;
    }
  
    get id() {
      return this._id;
    }
  
    get title() {
      return this._title;
    }
  
    set title(value) {
      if (value) {
        this._title = value;
      }
    }
  
    get description() {
      return this._description;
    }
  
    set description(value) {
      if (value) {
        this._description = value;
      }
    }
  }
  
  function _getID() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  let taskList = [];

  addBtn1.addEventListener('click', function(e) {
      addTask(taskFormInput1.value, taskFormInput2.value);
      console.log(taskFormInput1.value);
  })

  function getProjectID() {
    const selectedProject = document.querySelector('.activeProject');
    console.log( selectedProject
      ? selectedProject.id.substr(selectedProject.id.indexOf('_'))
      : null);
    return selectedProject
        ? selectedProject.id.substr(selectedProject.id.indexOf('_'))
        : null;
}

function pushTask(arr, value, task) {
  for (let i=0, iLen=arr.length; i<iLen; i++) {
    if (arr[i]._id == value) {
    arr[i]._projectTasks.push(task);
    console.log(arr[i]); 
    return arr[i];
    }
  }
}

function getTaskList(arr, value) {
    for (let i=0, iLen=arr.length; i<iLen; i++) {
      if (arr[i]._id == value) {
      console.log(arr[i]._projectTasks); 
      return arr[i]._projectTasks;
      }
    }
  }


  function addTask(title, description) {
      if (!title == '') {
          const newTask = new Task(title, description)
          //taskList.push(newTask);
          //console.log(taskList);
          pushTask(projectList, getProjectID(), newTask);
          addToLocalStorage(getTaskList(projectList, getProjectID()));
      };
  };

function getFromLocalStorage() {
    const reference = localStorage.getItem('taskList');
    if (reference) {
      taskList = JSON.parse(reference);
    }
}
  

  //getFromLocalStorage();

  export {
      taskList,
  }


