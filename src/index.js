import {pageWrap, projectCreator} from './modules/elementCreator';
import './style.css';
import './modules/uiController';
import './modules/creatorTest';
import './modules/mainProjects';
import './modules/tasks';
import './modules/projects';

document.querySelector('body').appendChild(pageWrap);

document.querySelector('.projectWrapper.Inbox').classList.add('activeProject');
document.querySelector('.innerList.Inbox').classList.add('activeProject');
