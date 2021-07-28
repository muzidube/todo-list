import {
    listItemCheckBtn
} from './creatorTest';

import {
    addBtn,
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
      this._projectID = getProjectID();
      this._taskID = _getID(); 
      this._title = title;
      this._description = description;
      this._completed = false;
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

addBtn1.addEventListener('click', function() {
      addTask(taskFormInput1.value, taskFormInput2.value);
})

addBtn.addEventListener('click', function() {
    addTask(taskFormInput1.value, taskFormInput2.value);
})


function getProjectID() {
    const selectedProject = document.querySelector('.activeProject');
    return selectedProject
        ? selectedProject.id.substr(selectedProject.id.indexOf('_'))
        : null;
}

function pushTask(arr, value, task) {
  for (let i=0, iLen=arr.length; i<iLen; i++) {
    if (arr[i]._id == value) {
    arr[i]._projectTasks.push(task);
    return arr[i];
    }
  }
}

function getTaskList(arr, value) {
    for (let i=0, iLen=arr.length; i<iLen; i++) {
      if (arr[i]._id == value) {
      return arr[i]._projectTasks;
      }
    }
  }


  function addTask(title, description) {
    if (!title == '') {
        let tasks = getTaskList(projectList, getProjectID());
        const newTask = new Task(title, description);

        if (tasks == '' || containsObject(taskFormInput1.value, getTaskList(projectList, getProjectID())) !== false) {
        pushTask(projectList, getProjectID(), newTask);
        console.table(tasks)
        addToLocalStorage(tasks);
        } else {
            alert('Task name taken.')
        }
      };
  };

function getFromLocalStorage() {
    const reference = localStorage.getItem('taskList');
    if (reference) {
      taskList = JSON.parse(reference);
    }
}

function containsObject(obj, list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i]._title !== obj) {
        } else {
            return false
        }
    }

}

function giveListTitles (list) {
    for (let i = 0; i < list.length; i++) {

    }
}

//let pos = getTaskList(projectList, getProjectID()).map(function(e) { return e._taskID; }).indexOf(getTaskID);


function changeTaskStatus(value) {
    let tasks = getTaskList(projectList, getProjectID());

    console.table(tasks)

    for (let i=0, iLen=tasks.length; i<iLen; i++) {
        if (tasks[i]._taskID == value) {
            tasks[i]._completed = !tasks[i]._completed;
            console.table(tasks);
        }
    }
}

function array_move(arr, old_index, new_index) {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; // for testing
};


//function array_move(getTaskList(projectList, getProjectID()), pos,  )

  //getFromLocalStorage();

  export {
      taskList,
      getProjectID,
      addTask,
      changeTaskStatus,
  }


