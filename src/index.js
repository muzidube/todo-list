import {pageWrap, projectCreator} from './modules/elementCreator';
import './style.css';
import './modules/uiController';
import './modules/creatorTest';
import './modules/mainProjects';
import './modules/tasks';
import './modules/projects';
import {projectCreation, taskCreation2} from './modules/creatorTest'
import { getFromLocalStorage } from './modules/projects';
import { getFromLocalStorage2 } from './modules/tasks';


document.querySelector('body').appendChild(pageWrap);

//mainProjectCreator();

getFromLocalStorage();
projectCreation();
getFromLocalStorage2();
taskCreation2();