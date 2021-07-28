import {pageWrap, projectCreator} from './modules/elementCreator';
import './style.css';
import './modules/uiController';
import './modules/creatorTest';
import './modules/mainProjects';
import './modules/tasks';
import './modules/projects';
import {projectCreation} from './modules/creatorTest'


document.querySelector('body').appendChild(pageWrap);

//mainProjectCreator();

projectCreation();