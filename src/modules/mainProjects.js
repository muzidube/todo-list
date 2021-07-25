import {
    headerLogoLink,
    menuBtn,
    appContent,
    mainInbox,
    leftInbox,
    leftToday,
    mainToday,
    mainUpcoming,
    projectMain,
    projectItem,
    addProjectIcon,
    projectFormDiv,
    closeBtn,
    mainContent,
    addBtn,
    addBtn1,
    formInput,
    taskFormInput1,
    taskFormInput2,
    leftMenu,
} from './elementCreator';

import {HTMLcreator as HTMLcreator2} from './elementCreator';
import circle from '../components/images/circle.svg';
import plus from '../components/images/plus.svg';
import {taskItemPopup} from './uiController';

function mainProjectCreator(name) {
    const projectWrapper = HTMLcreator2('projectWrapper', 'div', 'activeProject', name);
    const projectHeader = HTMLcreator2('projectHeader', 'div');
    const projectHeaderContent = HTMLcreator2('projectHeaderContent', 'div', 'categoryDiv');
    const projectHeaderTitle = HTMLcreator2('projectHeaderTitle', 'h1');
    projectHeaderTitle.textContent = name;
    const projectHeaderActions = HTMLcreator2('projectHeaderActions', 'div');
    const addTaskIcon = HTMLcreator2('addTaskIcon', 'img', 'categoryIcon', 'projectIcon');
    addTaskIcon.addEventListener('click', taskItemPopup);
    addTaskIcon.setAttribute('src', plus);

    const projectDivBox = HTMLcreator2('projectDivBox', 'div');
    const itemOuterListContainer = HTMLcreator2('itemOuterListContainer', 'div');
    const itemOuterList = HTMLcreator2('itemOuterList', 'ul');
    
    const itemOuterListItem = HTMLcreator2('itemOuterListItem', 'li');
    const outerItemSection = HTMLcreator2('outerItemSection', 'section');
    const outerItemBtn = HTMLcreator2('outerItemBtn', 'button');
    const innerListContainer = HTMLcreator2('innerListContainer', 'div');
    const innerList = HTMLcreator2('innerList', 'ul', 'activeProject', name);

    projectWrapper.append(projectHeader, projectDivBox);
    projectHeader.append(projectHeaderContent);
    projectHeaderContent.append(projectHeaderTitle, projectHeaderActions);
    projectHeaderActions.append(addTaskIcon);
    projectDivBox.append(itemOuterListContainer);
    itemOuterListContainer.append(itemOuterList);
    itemOuterList.append(itemOuterListItem);
    itemOuterListItem.append(outerItemSection, outerItemBtn);
    outerItemSection.append(innerListContainer);
    innerListContainer.append(innerList);

    mainContent.appendChild(projectWrapper);

};

function mainProjectCreator2(name) {
    const projectWrapper = HTMLcreator2('projectWrapper', 'div', name);
    const projectHeader = HTMLcreator2('projectHeader', 'div');
    const projectHeaderContent = HTMLcreator2('projectHeaderContent', 'div', 'categoryDiv');
    const projectHeaderTitle = HTMLcreator2('projectHeaderTitle', 'h1');
    projectHeaderTitle.textContent = name;
    const projectHeaderActions = HTMLcreator2('projectHeaderActions', 'div');
    const addTaskIcon = HTMLcreator2('addTaskIcon', 'img', 'categoryIcon', 'projectIcon');
    addTaskIcon.addEventListener('click', taskItemPopup);
    addTaskIcon.setAttribute('src', plus);

    const projectDivBox = HTMLcreator2('projectDivBox', 'div');
    const itemOuterListContainer = HTMLcreator2('itemOuterListContainer', 'div');
    const itemOuterList = HTMLcreator2('itemOuterList', 'ul');


    const itemOuterListItem = HTMLcreator2('itemOuterListItem', 'li');
    const outerItemSection = HTMLcreator2('outerItemSection', 'section');
    const outerItemBtn = HTMLcreator2('outerItemBtn', 'button');
    const innerListContainer = HTMLcreator2('innerListContainer', 'div');
    const innerList = HTMLcreator2('innerList', 'ul', name);

    projectWrapper.append(projectHeader, projectDivBox);
    projectHeader.append(projectHeaderContent);
    projectHeaderContent.append(projectHeaderTitle, projectHeaderActions);
    projectHeaderActions.append(addTaskIcon);
    projectDivBox.append(itemOuterListContainer);
    itemOuterListContainer.append(itemOuterList);
    itemOuterList.append(itemOuterListItem);
    itemOuterListItem.append(outerItemSection, outerItemBtn);
    outerItemSection.append(innerListContainer);
    innerListContainer.append(innerList);

    mainContent.appendChild(projectWrapper);

    return projectWrapper;

};

const inbox = mainProjectCreator2('Inbox');
const today = mainProjectCreator2('Today');
const upcoming = mainProjectCreator2('Upcoming');




/*mainProjects.forEach(project => project.addEventListener('click', function (e) {
    console.log('hello');
    let activeProjects = document.getElementsByClassName("activeProject");
    while (activeProjects.length)
    activeProjects[0].classList.remove("activeProject");

    if (projectWrapper.classList.contains(e.target.textContent)) {
        projectWrapper.classList.add('activeProject');
        innerList.classList.add('activeProject');
    }
}));*/

