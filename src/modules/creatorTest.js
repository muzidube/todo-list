import { projectList } from "./projects";
import { changeTaskStatus, getTaskFormValues, editTaskValues} from "./tasks";
import {HTMLcreator as HTMLcreator2,
    editTaskInput1,
    editTaskInput2,
    editTaskInput3,
    editTaskInput4,
    addBtn2,} from './elementCreator';
import circle from '../components/images/circle.svg';
import plus from '../components/images/plus.svg';
import completed from '../components/images/completed.svg';
import {taskItemPopup, editTaskPopup} from './uiController';



function projectCreation() {
    projectList.forEach(function(project) {
        document.querySelector('.projectItems').innerHTML = '';    
        document.querySelector('.mainInbox').innerHTML = '';
        document.querySelector('.mainToday').innerHTML = '';
        document.querySelector('.mainUpcoming').innerHTML = '';
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

        } else if (project._name === 'Today') {
            document.querySelector('.mainToday').appendChild(projectWrapper);
            innerListToDo.setAttribute('id', 'projectInnerListToDoToday');
            innerListCompleted.setAttribute('id', 'projectInnerListCompletedToday');  
            
        } else if (project._name === 'Upcoming') {
            document.querySelector('.mainUpcoming').appendChild(projectWrapper);
            innerListToDo.setAttribute('id', 'projectInnerListToDoUpcoming');
            innerListCompleted.setAttribute('id', 'projectInnerListCompletedUpcoming');  
        }
        
        else if (project._name !== 'Inbox' && project._name !== 'Today' && project._name !== 'Upcoming') {

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
                innerListToDo.classList.add('activeList');
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
    document.querySelector('#projectInnerListToDoToday').innerHTML = '';
    document.querySelector('#projectInnerListCompletedToday').innerHTML = ''; 
    document.querySelector('#projectInnerListToDoUpcoming').innerHTML = '';
    document.querySelector('#projectInnerListCompletedUpcoming').innerHTML = ''; 
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
            listItemEditBtn.addEventListener('click', function() {
                let editingTask = document.getElementsByClassName("editingTask");
                while (editingTask.length)
                editingTask[0].classList.remove("editingTask");

                if (innerListItem.classList.contains(task._taskID)) {
                    innerListItem.classList.add('editingTask');
                }

                let isOpen = editTaskDiv.style.display = "block";
                //getTaskFormValues(task._taskID);
                console.log('formValues ' + task._taskID);

                editTaskInput1.value = task._title;
                editTaskInput2.value = task._description;
                editTaskInput3.value = task._dueDate;
                editTaskInput4.value = task._priority;
            
                if (isOpen == true) {
                    editTaskDiv.style.display = "none";
                } else {
                    editTaskDiv.style.display = "block";
                }
            });

            innerListItem.append(innerListItemBody);
            innerListItemBody.append(listItemMoveDiv, listItemCheckBtn, listItemContainer);
            listItemMoveDiv.append(listItemUpBtn, listItemDownBtn);
            listItemContainer.append(listItemContent, itemActionsContainer);
            listItemContent.append(listItemText, listItemDesc);
            itemActionsContainer.append(listItemEditBtn);

            let today = (new Date()).toISOString().split('T')[0];
            let nextDay1 = new Date((new Date()).valueOf() + 1000*3600*24).toISOString().split('T')[0];
            let nextDay2 = new Date((new Date()).valueOf() + ((1000*3600*24)*2)).toISOString().split('T')[0];
            let nextDay3 = new Date((new Date()).valueOf() + ((1000*3600*24)*3)).toISOString().split('T')[0];
            let nextDay4 = new Date((new Date()).valueOf() + ((1000*3600*24)*4)).toISOString().split('T')[0];
            let nextDay5 = new Date((new Date()).valueOf() + ((1000*3600*24)*5)).toISOString().split('T')[0];
            let nextDay6 = new Date((new Date()).valueOf() + ((1000*3600*24)*6)).toISOString().split('T')[0];

            if (task._dueDate == today) {
               let innerListItemToday = innerListItem.cloneNode(true);
                document.querySelector('#projectInnerListToDo' + task._projectID).appendChild(innerListItem);
                document.querySelector('#projectInnerListToDoToday').appendChild(innerListItemToday);
            } else if (task._dueDate == nextDay1 || task._dueDate == nextDay2 || task._dueDate == nextDay3 || task._dueDate == nextDay4 || task._dueDate == nextDay5 || task._dueDate == nextDay6) {
                let innerListItemUpcoming = innerListItem.cloneNode(true);
                document.querySelector('#projectInnerListToDo' + task._projectID).appendChild(innerListItem);
                document.querySelector('#projectInnerListToDoUpcoming').appendChild(innerListItemUpcoming);
            } else {
                document.querySelector('#projectInnerListToDo' + task._projectID).appendChild(innerListItem);
            }

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
        
            let today = (new Date()).toISOString().split('T')[0];
            let nextDay1 = new Date((new Date()).valueOf() + 1000*3600*24).toISOString().split('T')[0];
            let nextDay2 = new Date((new Date()).valueOf() + ((1000*3600*24)*2)).toISOString().split('T')[0];
            let nextDay3 = new Date((new Date()).valueOf() + ((1000*3600*24)*3)).toISOString().split('T')[0];
            let nextDay4 = new Date((new Date()).valueOf() + ((1000*3600*24)*4)).toISOString().split('T')[0];
            let nextDay5 = new Date((new Date()).valueOf() + ((1000*3600*24)*5)).toISOString().split('T')[0];
            let nextDay6 = new Date((new Date()).valueOf() + ((1000*3600*24)*6)).toISOString().split('T')[0];

            if (task._dueDate == today) {
               let innerListItemToday = innerListItem.cloneNode(true);
                document.querySelector('#projectInnerListCompleted' + task._projectID).appendChild(innerListItem);
                document.querySelector('#projectInnerListCompletedToday').appendChild(innerListItemToday);
            } else {
                document.querySelector('#projectInnerListCompleted' + task._projectID).appendChild(innerListItem);
            }    
        }
    }))
    
}


export {
    projectCreation,
    taskCreation2,
}