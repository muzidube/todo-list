import { projectCreation } from './creatorTest';
import {
    addBtn
} from './elementCreator'

import {
    formInput,
} from './elementCreator';

import {addToLocalStorage1} from './localStorage';

export class Project {
    constructor(name) {
      this._id = _getID();
      this._name = name;
      this._projectTasks = [];
    }
  
    get id() {
      return this._id;
    }
  
    set id(value) {
      if (value) {
        this._id = value;
      }
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value) {
        this._name = value;
      }
    }
  
    get projectTasks() {
      return this._projectTasks;
    }
  
    set projectTasks(value) {
      if (value) {
        this._projectTasks.push(value);
      }
    }
  }
  
  function _getID() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

let projectList = [];

addBtn.addEventListener('click', function(e) {
      addProject(formInput.value);
      console.log(formInput.value);
  })

function addProject(name) {
      if (!name == '') {
          const newProject = new Project(name)
          projectList.push(newProject);
          console.log(projectList);
          addToLocalStorage1(projectList);
      };
};

function getFromLocalStorage() {
    const reference = localStorage.getItem('projectList');
    if (reference) {
      projectList = JSON.parse(reference);
    }
}
  



  export {
      projectList,
  }


  //LOOK AT TASK CREATOR, IT IS USING TASKLIST AS ITS BASE BUT WE DONT
  //USE TASKLIST ANYMORE, WILL HAVE TO USE SOMETHING ELSE.
