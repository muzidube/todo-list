import { projectList } from "./projects";
import { changeTaskStatus} from "./tasks";
import {HTMLcreator as HTMLcreator2} from './elementCreator';
import circle from '../components/images/circle.svg';
import plus from '../components/images/plus.svg';
import completed from '../components/images/completed.svg';
import {taskItemPopup} from './uiController';



function projectCreation() {
    projectList.forEach(function(project) {
        document.querySelector('.projectItems').innerHTML = '';    
        document.querySelector('.mainProjects').innerHTML = '';
    })

    projectList.forEach(function(project) {
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
        completedTaskIcon.setAttribute('src', completed);

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

        if (project._name === 'Inbox') {
            document.querySelector('.mainInbox').appendChild(projectWrapper);
        } else {

        const leftProject = HTMLcreator2('leftProject', 'div', 'leftProjectDiv', 'categoryDiv', project._name);
        leftProject.setAttribute('id', 'project' + project._id)
        leftProject.setAttribute('id', 'project' + project._id)
        leftProject.addEventListener('click', function () {
            let activeProjects = document.getElementsByClassName("activeProject");
            let activeList = document.getElementsByClassName("activeProject");

            while (activeProjects.length)
            activeProjects[0].classList.remove("activeProject");
            while (activeList.length)
            activeList[0].classList.remove("activeList");

            if (projectWrapper.classList.contains(leftProject.textContent)) {
                projectWrapper.classList.add('activeProject');
                innerList.classList.add('activeList');
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

        document.querySelector('.mainProjects').appendChild(projectWrapper);

        return addTaskIcon;
    }})
}

function taskCreation2() {

    projectList.forEach(project => project._projectTasks.forEach(function(task) {
    document.querySelector('#projectInnerListToDo' + task._projectID).innerHTML = '';
    document.querySelector('#projectInnerListCompleted' + task._projectID).innerHTML = ''; 
    }));

    projectList.forEach(project => project._projectTasks.forEach(function(task, project) {
        if (task._completed === false) {
            const innerListItem = document.createElement('li');
            innerListItem.setAttribute('id', 'task' + task._taskID);
            innerListItem.classList.add('innerListItem', task._taskID, task._projectID);

            const innerListItemBody = document.createElement('div');
            innerListItemBody.setAttribute('id', 'innerListItemBody');
            innerListItemBody.setAttribute('class', 'innerListItemBody');

            const listItemMoveDiv = document.createElement('div');
            listItemMoveDiv.setAttribute('id', 'listItemMoveDiv');
            listItemMoveDiv.setAttribute('class', 'listItemMoveDiv');

            const listItemUpBtn = document.createElement('button');
            listItemUpBtn.setAttribute('id', 'listItemUpBtn');
            listItemUpBtn.classList.add('listItemUpBtn', 'listItemMoveBtns');

            const listItemDownBtn = document.createElement('button');
            listItemDownBtn.setAttribute('id', 'listItemDownBtn');
            listItemDownBtn.classList.add('listItemDownBtn', 'listItemMoveBtns');

            const listItemCheckBtn = document.createElement('button');
            listItemCheckBtn.setAttribute('id', 'listItemCheckBtn');
            listItemCheckBtn.classList.add('listItemCheckBtn', 'listItemCheckBtnToDo');
            listItemCheckBtn.addEventListener('click', function () {
                let clickedTask = document.getElementsByClassName("clickedTask");
                while (clickedTask.length)
                clickedTask[0].classList.remove("clickedTask");

                if (innerListItem.classList.contains(task._taskID)) {
                    innerListItem.classList.add('clickedTask');
                }
                changeTaskStatus(task._taskID)
                taskCreation2();
            })

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
            innerListItemBody.append(listItemMoveDiv, listItemCheckBtn, listItemContainer);
            listItemMoveDiv.append(listItemUpBtn, listItemDownBtn);
            listItemContainer.append(listItemContent, itemActionsContainer);
            listItemContent.append(listItemText, listItemDesc);
            itemActionsContainer.append(listItemEditBtn);

            document.querySelector('#projectInnerListToDo' + task._projectID).appendChild(innerListItem);

        } else {
            const innerListItem = document.createElement('li');
            innerListItem.setAttribute('id', 'task' + task._taskID);
            innerListItem.classList.add('innerListItem', task._taskID, task._projectID);

            const innerListItemBody = document.createElement('div');
            innerListItemBody.setAttribute('id', 'innerListItemBody');
            innerListItemBody.setAttribute('class', 'innerListItemBody');

            const listItemMoveDiv = document.createElement('div');
            listItemMoveDiv.setAttribute('id', 'listItemMoveDiv');
            listItemMoveDiv.setAttribute('class', 'listItemMoveDiv');

            const listItemUpBtn = document.createElement('button');
            listItemUpBtn.setAttribute('id', 'listItemUpBtn');
            listItemUpBtn.classList.add('listItemUpBtn', 'listItemMoveBtns');

            const listItemDownBtn = document.createElement('button');
            listItemDownBtn.setAttribute('id', 'listItemDownBtn');
            listItemDownBtn.classList.add('listItemDownBtn', 'listItemMoveBtns');

            const listItemCheckBtn = document.createElement('button');
            listItemCheckBtn.setAttribute('id', 'listItemCheckBtn');
            listItemCheckBtn.classList.add('listItemCheckBtn', 'listItemCheckBtnCompleted');
            listItemCheckBtn.addEventListener('click', function () {
                let clickedTask = document.getElementsByClassName("clickedTask");
                while (clickedTask.length)
                clickedTask[0].classList.remove("clickedTask");

                if (innerListItem.classList.contains(task._taskID)) {
                    innerListItem.classList.add('clickedTask');
                }
                changeTaskStatus(task._taskID)
                taskCreation2();
            })

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
            innerListItemBody.append(listItemMoveDiv, listItemCheckBtn, listItemContainer);
            listItemMoveDiv.append(listItemUpBtn, listItemDownBtn);
            listItemContainer.append(listItemContent, itemActionsContainer);
            listItemContent.append(listItemText, listItemDesc);
            itemActionsContainer.append(listItemEditBtn);
        
            document.querySelector('#projectInnerListCompleted' + task._projectID).appendChild(innerListItem);     
        }
    }))
    
}


export {
    projectCreation,
    taskCreation2,
}