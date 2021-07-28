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
import {inboxProjectList} from './projects';

/*function mainProjectCreator() {
        inboxProjectList.forEach(function(project) {
        let activeProjects = document.getElementsByClassName("activeProject");
        while (activeProjects.length)
        activeProjects[0].classList.remove("activeProject");

        const projectWrapper = HTMLcreator2('projectWrapper', 'div', 'activeProject', project._name);
        projectWrapper.setAttribute('id', 'project' + project._id)
        const projectHeader = HTMLcreator2('projectHeader', 'div');
        const projectHeaderContent = HTMLcreator2('projectHeaderContent', 'div', 'categoryDiv');
        const projectHeaderTitle = HTMLcreator2('projectHeaderTitle', 'h1');
        projectHeaderTitle.textContent = project._name;
        const projectHeaderActions = HTMLcreator2('projectHeaderActions', 'div');
        const addTaskIcon = HTMLcreator2('addTaskIcon', 'img', 'categoryIcon', 'projectIcon');
        const completedTaskIcon = HTMLcreator2('completedTaskIcon', 'img', 'categoryIcon', 'projectIcon');
        addTaskIcon.addEventListener('click', taskItemPopup);
        addTaskIcon.setAttribute('src', plus);
        completedTaskIcon.addEventListener('click', function() {
            innerListToDo.classList.toggle('activeList')
            innerListCompleted.classList.toggle('activeList')
        });
        //completedTaskIcon.setAttribute('src', completed);

        const projectDivBox = HTMLcreator2('projectDivBox', 'div');
        const itemOuterListContainer = HTMLcreator2('itemOuterListContainer', 'div');
        const itemOuterList = HTMLcreator2('itemOuterList', 'ul');


        const itemOuterListItem = HTMLcreator2('itemOuterListItem', 'li');
        const outerItemSection = HTMLcreator2('outerItemSection', 'section');
        const outerItemBtn = HTMLcreator2('outerItemBtn', 'button');
        outerItemBtn.textContent = 'Add Section';
        const innerListContainer = HTMLcreator2('innerListContainer', 'div');
        const innerListToDo = HTMLcreator2('innerListToDo', 'ul', 'activeList', 'innerList', project._name);
        innerListToDo.setAttribute('id', 'projectInnerListToDo' + project._id);
        const innerListCompleted = HTMLcreator2('innerListCompleted', 'ul', 'innerList', project._name);
        innerListCompleted.setAttribute('id', 'projectInnerListCompleted' + project._id);  

        projectWrapper.append(projectHeader, projectDivBox);
        projectHeader.append(projectHeaderContent);
        projectHeaderContent.append(projectHeaderTitle, projectHeaderActions);
        projectHeaderActions.append(addTaskIcon, completedTaskIcon);
        projectDivBox.append(itemOuterListContainer);
        itemOuterListContainer.append(itemOuterList);
        itemOuterList.append(itemOuterListItem);
        itemOuterListItem.append(outerItemSection, outerItemBtn);
        outerItemSection.append(innerListContainer);
        innerListContainer.append(innerListToDo, innerListCompleted);

        document.querySelector('.mainInbox').appendChild(projectWrapper);

        return addTaskIcon;

})}; */

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

};

function mainProjectCreator3(name) {}

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
    