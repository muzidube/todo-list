import {
    headerLogoLink,
    menuBtn,
    appContent,
    mainInbox,
    mainToday,
    mainUpcoming,
    projectMain,
    projectItem,
    addProjectIcon,
    projectFormDiv,
    closeBtn,
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

addBtn.addEventListener('click', function() {
    let activeProjects = document.getElementsByClassName("activeProject");
    while (activeProjects.length)
    activeProjects[0].classList.remove("activeProject");

    const leftProject = HTMLcreator2('leftProject', 'div', 'leftProjectDiv', 'categoryDiv', formInput.value);
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
    leftProjectText.textContent = formInput.value;
    const leftProjectNum = HTMLcreator2('leftProjectNum', 'p', 'leftProjectNum');

    leftProject.append(leftProjectInner, leftProjectNum);
    leftProjectInner.append(leftProjectIcon, leftProjectText);
    document.querySelector('.projectItems').appendChild(leftProject);

    const projectWrapper = HTMLcreator2('projectWrapper', 'div', 'activeProject', formInput.value);
    const projectHeader = HTMLcreator2('projectHeader', 'div');
    const projectHeaderContent = HTMLcreator2('projectHeaderContent', 'div', 'categoryDiv');
    const projectHeaderTitle = HTMLcreator2('projectHeaderTitle', 'h1');
    projectHeaderTitle.textContent = formInput.value;
    const projectHeaderActions = HTMLcreator2('projectHeaderActions', 'div');
    const addTaskIcon = HTMLcreator('addTaskIcon', 'img', 'categoryIcon', 'projectIcon');
    addTaskIcon.addEventListener('click', taskItemPopup);
    addTaskIcon.setAttribute('src', plus);

    const projectDivBox = HTMLcreator2('projectDivBox', 'div');
    const itemOuterListContainer = HTMLcreator2('itemOuterListContainer', 'div');
    const itemOuterList = HTMLcreator2('itemOuterList', 'ul');


    const itemOuterListItem = HTMLcreator2('itemOuterListItem', 'li');
    const outerItemSection = HTMLcreator2('outerItemSection', 'section');
    const outerItemBtn = HTMLcreator2('outerItemBtn', 'button');
    const innerListContainer = HTMLcreator2('innerListContainer', 'div');
    const innerList = HTMLcreator2('innerList', 'ul', 'activeProject', formInput.value);

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
});

addBtn1.addEventListener('click', function(){

    const innerListItem = document.createElement('li');
    innerListItem.setAttribute('id', 'innerListItem');
    innerListItem.setAttribute('class', 'innerListItem');

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
    listItemText.textContent = taskFormInput1.value;

    const listItemDesc = document.createElement('p');
    listItemDesc.setAttribute('id', 'listItemDesc');
    listItemDesc.setAttribute('class', 'listItemDesc');
    listItemDesc.textContent = taskFormInput2.value;

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

});

function HTMLcreator(name, type, ...class1) {
    const HTMLname = document.createElement(type);
    HTMLname.setAttribute('id', name);
    HTMLname.classList.add(name, ...class1);

    return HTMLname

}