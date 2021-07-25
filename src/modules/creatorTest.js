import { projectList } from "./projects";
import { taskList } from "./tasks";
import {HTMLcreator as HTMLcreator2} from './elementCreator';
import circle from '../components/images/circle.svg';
import plus from '../components/images/plus.svg';
import {taskItemPopup} from './uiController';


function projectCreation() {
    projectList.forEach(function(project) {
    let activeProjects = document.getElementsByClassName("activeProject");
    while (activeProjects.length)
    activeProjects[0].classList.remove("activeProject");

    const leftProject = HTMLcreator2('leftProject', 'div', 'leftProjectDiv', 'categoryDiv', project._name);
    leftProject.setAttribute('id', 'project' + project._id)
    leftProject.addEventListener('click', function () {
        let activeProjects = document.getElementsByClassName("activeProject");
        while (activeProjects.length)
        activeProjects[0].classList.remove("activeProject");

        if (projectWrapper.classList.contains(leftProject.textContent)) {
            projectWrapper.classList.add('activeProject');
            innerList.classList.add('activeProject');
        }
    })
    const leftProjectInner = HTMLcreator2('leftProjectInner', 'div', 'leftProjectInner', 'categoryInnerDiv')
    const leftProjectIcon = HTMLcreator2('leftProjectIcon', 'img', 'leftProjectIcon');
    leftProjectIcon.setAttribute('src', circle);
    const leftProjectText = HTMLcreator2('leftProjectText', 'p', 'leftProjectText');
    leftProjectText.textContent = project._name;
    const leftProjectNum = HTMLcreator2('leftProjectNum', 'p', 'leftProjectNum');

    leftProject.append(leftProjectInner, leftProjectNum);
    leftProjectInner.append(leftProjectIcon, leftProjectText);
    document.querySelector('.projectItems').appendChild(leftProject);

    const projectWrapper = HTMLcreator2('projectWrapper', 'div', 'activeProject', project._name);
    projectWrapper.setAttribute('id', 'project' + project._id)
    const projectHeader = HTMLcreator2('projectHeader', 'div');
    
    projectHeader.addEventListener('click', function() {
        const selectedProject = document.querySelector('.activeProject');
        console.log( selectedProject
          ? selectedProject.id.substr(selectedProject.id.indexOf('_'))
          : null);
    })

    const projectHeaderContent = HTMLcreator2('projectHeaderContent', 'div', 'categoryDiv');
    const projectHeaderTitle = HTMLcreator2('projectHeaderTitle', 'h1');
    projectHeaderTitle.textContent = project._name;
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
    const innerList = HTMLcreator2('innerList', 'ul', 'activeProject', project._name);
    innerList.setAttribute('id', 'project' + project._id); 

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

    document.querySelector('.mainContent').appendChild(projectWrapper);

    return addTaskIcon;
    })
}

function taskCreation() {
    taskList.forEach(function(task, project) {
    const innerListItem = document.createElement('li');
    innerListItem.setAttribute('id', 'innerListItem');
    innerListItem.classList.add('innerListItem', project._name);

    const innerListItemBody = document.createElement('div');
    innerListItemBody.setAttribute('id', 'innerListItemBody');
    innerListItemBody.setAttribute('class', 'innerListItemBody');

    const listItemCheckBtn = document.createElement('button');
    listItemCheckBtn.setAttribute('id', 'listItemCheckBtn');
    listItemCheckBtn.setAttribute('class', 'listItemCheckBtn');

    const listItemContainer = document.createElement('div');
    listItemContainer.setAttribute('id', 'listItemContainer');
    listItemContainer.setAttribute('class', 'listItemContainer');

    const listItemContent = document.createElement('div');
    listItemContent.setAttribute('id', 'listItemContent');
    listItemContent.setAttribute('class', 'listItemContent');

    const listItemText = document.createElement('p');
    listItemText.setAttribute('id', 'listItemText');
    listItemText.setAttribute('class', 'listItemText');
    listItemText.textContent = task._title;

    const listItemDesc = document.createElement('p');
    listItemDesc.setAttribute('id', 'listItemDesc');
    listItemDesc.setAttribute('class', 'listItemDesc');
    listItemDesc.textContent = task._description;

    const itemActionsContainer = document.createElement('div');
    itemActionsContainer.setAttribute('id', 'itemActionsContainer');
    itemActionsContainer.setAttribute('class', 'itemActionsContainer');

    const listItemEditBtn = document.createElement('button');
    listItemEditBtn.setAttribute('id', 'listItemEditBtn');
    listItemEditBtn.setAttribute('class', 'listItemEditBtn');

    innerListItem.append(innerListItemBody);
    innerListItemBody.append(listItemCheckBtn, listItemContainer);
    listItemContainer.append(listItemContent, itemActionsContainer);
    listItemContent.append(listItemText, listItemDesc);
    itemActionsContainer.append(listItemEditBtn);

    document.querySelector('.innerList.activeProject').appendChild(innerListItem);

    return innerListItem;
    })
}


export {
    projectCreation,
    taskCreation,
}