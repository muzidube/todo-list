function HTMLcreator(name, type, ...class1) {
    const HTMLname = document.createElement(type);
    HTMLname.setAttribute('id', name);
    HTMLname.classList.add(name, ...class1);

    return HTMLname

}

import logo from '../components/images/correction.svg';
import agenda from '../components/images/agenda.svg';
import today from '../components/images/clock.svg';
import upcoming from '../components/images/calendar.svg';
import rightArrow from '../components/images/right-arrow.svg';
import plus from '../components/images/plus.svg';

const header = HTMLcreator('header', 'header');
const headerContent = HTMLcreator('headerContent', 'div');
const headerInner = HTMLcreator('headerInner', 'div');
const leftNavContainer = HTMLcreator('leftNavContainer', 'div');
const rightNavContainer = HTMLcreator('rightNavContainer', 'div');
const headerLogoLink = HTMLcreator('headerLogoLink', 'a' );
const headerLogo = HTMLcreator('headerLogo', 'button', 'logo', 'headerBtns')
//headerLogo.setAttribute('src', logo);
const menuBtn = HTMLcreator('menuBtn', 'button', 'headerBtns');
const headerSearchForm = HTMLcreator('headerSearchForm', 'form', 'searchForm');
const headerSearchLabel = HTMLcreator('headerSearchLabel', 'label');
const headerSearch = HTMLcreator('headerSearch', 'input', 'searchInput');
const newTaskBtn = HTMLcreator('newTaskBtn', 'button', 'headerBtns');
const totalTaskNum = HTMLcreator('totalTaskNum', 'p');
totalTaskNum.innerText = '12012';
const notificationsBtn = HTMLcreator('notificationsBtn', 'button', 'headerBtns');
const accountBtn = HTMLcreator('accountBtn', 'button', 'headerBtns');

header.append(headerContent)
headerContent.append(headerInner);
headerInner.append(leftNavContainer, rightNavContainer);
leftNavContainer.append(headerLogoLink, menuBtn, headerSearchForm);
headerLogoLink.append(headerLogo);
/*rightNavContainer.append(newTaskBtn, totalTaskNum, notificationsBtn, accountBtn);
headerSearchForm.append(headerSearchLabel, headerSearch);*/

const appContainer = HTMLcreator('appContainer', 'div');
const appContent = HTMLcreator('appContent', 'div');
const leftMenu = HTMLcreator('leftMenu', 'div', 'active');
const leftContent = HTMLcreator('leftContent', 'div');
const leftModules = HTMLcreator('leftModules', 'div');
const leftCategories = HTMLcreator('leftCategories', 'div');
const leftAgenda = HTMLcreator('leftAgenda', 'div', 'categoryDiv', 'mainProject', 'agenda');

leftAgenda.addEventListener('click', function() {
    let activeProjects = document.getElementsByClassName("activeProject");
    let activeLists = document.getElementsByClassName("activeList");
    let activeTitles = document.getElementsByClassName("activeTitle");

    while (activeProjects.length)
    activeProjects[0].classList.remove("activeProject");
    while (activeLists.length)
    activeLists[0].classList.remove("activeList");
    while (activeTitles.length)
    activeTitles[0].classList.remove("activeTitle");

    document.querySelector('.projectWrapper.Agenda').classList.add('activeProject');
    document.querySelector('.innerList.Agenda').classList.add('activeList');
    document.querySelector('#projectHeaderTitleAgenda').classList.add('activeTitle');

})

const agendaInnerDiv = HTMLcreator('agendaInnerDiv', 'div', 'categoryInnerDiv')
const agendaIcon = HTMLcreator('agendaIcon', 'img', 'categoryIcon');
agendaIcon.setAttribute('src', agenda);
const agendaText = HTMLcreator('agendaText', 'p', 'categoryText');
agendaText.textContent = 'Agenda';
const agendaNum = HTMLcreator('agendaNum', 'p', 'categoryNum');
const leftToday = HTMLcreator('leftToday', 'div', 'categoryDiv', 'mainProject', 'Today');

leftToday.addEventListener('click', function() {
    let activeProjects = document.getElementsByClassName("activeProject");
    let activeLists = document.getElementsByClassName("activeList");
    let activeTitles = document.getElementsByClassName("activeTitle");

    while (activeProjects.length)
    activeProjects[0].classList.remove("activeProject");
    while (activeLists.length)
    activeLists[0].classList.remove("activeList");
    while (activeTitles.length)
    activeTitles[0].classList.remove("activeTitle");

    document.querySelector('.projectWrapper.Today').classList.add('activeProject');
    document.querySelector('.innerList.Today').classList.add('activeList');
    document.querySelector('#projectHeaderTitleToday').classList.add('activeTitle');

})

const todayInnerDiv = HTMLcreator('todayInnerDiv', 'div', 'categoryInnerDiv')
const todayIcon = HTMLcreator('todayIcon', 'img', 'categoryIcon');
todayIcon.setAttribute('src', today);
const todayText = HTMLcreator('todayText', 'p', 'categoryText');
todayText.textContent = 'Today';
const todayNum = HTMLcreator('todayNum', 'p', 'categoryNum');
const leftUpcoming = HTMLcreator('leftUpcoming', 'div', 'categoryDiv', 'mainProject', 'Upcoming');

leftUpcoming.addEventListener('click', function() {
    let activeProjects = document.getElementsByClassName("activeProject");
    let activeLists = document.getElementsByClassName("activeList");
    let activeTitles = document.getElementsByClassName("activeTitle");

    while (activeProjects.length)
    activeProjects[0].classList.remove("activeProject");
    while (activeLists.length)
    activeLists[0].classList.remove("activeList");
    while (activeTitles.length)
    activeTitles[0].classList.remove("activeTitle");

    document.querySelector('.projectWrapper.Upcoming').classList.add('activeProject');
    document.querySelector('.innerList.Upcoming').classList.add('activeList');
    document.querySelector('#projectHeaderTitleUpcoming').classList.add('activeTitle');

})

const upcomingInnerDiv = HTMLcreator('upcomingInnerDiv', 'div', 'categoryInnerDiv')
const upcomingIcon = HTMLcreator('upcomingIcon', 'img', 'categoryIcon');
upcomingIcon.setAttribute('src', upcoming);
const upcomingText = HTMLcreator('upcomingText', 'p', 'categoryText');
upcomingText.textContent = 'Upcoming';
const upcomingNum = HTMLcreator('upcomingNum', 'p', 'categoryNum');
const projectCategory = HTMLcreator('projectCategory', 'div');
const projectMain = HTMLcreator('projectMain', 'div');
const projectHeader = HTMLcreator('projectHeader', 'div', 'categoryDiv');
const projectInnerDiv = HTMLcreator('projectInnerDiv', 'div', 'categoryInnerDiv');

projectInnerDiv.addEventListener('click', function() {
    if (projectItems.style.display === "block") {
        projectItems.style.display = "none";
      } else {
        projectItems.style.display = "block";
      }
      if (projectIcon.classList.contains("arrowDown")) {
        projectIcon.classList.remove("arrowDown");
        projectIcon.classList.add("arrowRight");
      } else {
        projectIcon.classList.add("arrowDown");
        projectIcon.classList.remove("arrowRight");
      }

});

const projectIcon = HTMLcreator('projectIcon', 'img', 'categoryIcon', 'projectArrow', 'arrowDown');
projectIcon.setAttribute('src', rightArrow);
const projectText = HTMLcreator('todayText', 'p', 'categoryText', 'projectText');
projectText.textContent = 'Projects';
const addProjectIcon = HTMLcreator('addProjectIcon', 'img', 'categoryIcon', 'projectIcon');
addProjectIcon.setAttribute('src', plus );
const projectItems = HTMLcreator('projectItems', 'div', 'projectItems--animated', 'projectItems-6');
projectItems.setAttribute('style', 'display: block');
const mainSection = HTMLcreator('mainSection', 'div');
const mainContent = HTMLcreator('mainContent', 'div');
const mainAgenda = HTMLcreator('mainAgenda', 'div', 'projectContainers');
const mainToday = HTMLcreator('mainToday', 'div', 'projectContainers');
const mainUpcoming = HTMLcreator('mainUpcoming', 'div', 'projectContainers');
const mainProjects = HTMLcreator('mainProjects', 'div', 'projectContainers');

const projectFormDiv = HTMLcreator('projectFormDiv', 'div');
const projectForm = HTMLcreator('projectForm', 'form', 'formContainer');
const formHeader = HTMLcreator('formHeader', 'h1');
formHeader.textContent = 'Add Project'
const formLabel = HTMLcreator('formLabel', 'label');
formLabel.textContent = 'Name'
formLabel.setAttribute('for', 'name');
const formInput = HTMLcreator('formInput', 'input');
formInput.setAttribute('type', 'name');
formInput.setAttribute('name', 'name');
const formBtnsDiv = HTMLcreator('formBtnsDiv', 'div');
const closeBtn = HTMLcreator('closeBtn', 'button', 'projectFormBtns');
closeBtn.textContent = 'Close';
closeBtn.setAttribute('type', 'button');
const addBtn = HTMLcreator('addBtn', 'button', 'projectFormBtns');
addBtn.textContent = 'Add';
addBtn.setAttribute('type', 'button');
const closeBtn1 = HTMLcreator('closeBtn', 'button', 'projectFormBtns');
closeBtn1.textContent = 'Close';
closeBtn1.setAttribute('type', 'button');
const addBtn1 = HTMLcreator('addBtn', 'button', 'projectFormBtns');
addBtn1.textContent = 'Add';
addBtn1.setAttribute('type', 'button');
const closeBtn2 = HTMLcreator('closeBtn', 'button', 'projectFormBtns');
closeBtn2.textContent = 'Close';
closeBtn2.setAttribute('type', 'button');
const addBtn2 = HTMLcreator('addBtn', 'button', 'projectFormBtns');
addBtn2.textContent = 'Edit';
addBtn2.setAttribute('type', 'button');

const taskFormDiv = HTMLcreator('taskFormDiv', 'div', 'projectFormDiv');
const taskForm = HTMLcreator('taskForm', 'form', 'formContainer', 'projectForm');
const taskFormHeader = HTMLcreator('taskFormHeader', 'p', 'formHeader');
taskFormHeader.textContent = 'New Task'
const taskFormInput1 = HTMLcreator('taskFormInput', 'input','formInput', 'taskFormInput1');
taskFormInput1.setAttribute('type', 'name');
taskFormInput1.setAttribute('name', 'name');
taskFormInput1.setAttribute('placeholder', 'e.g., Lunch at 1pm');
const taskFormInput2 = HTMLcreator('taskFormInput', 'input','formInput', 'taskFormInput2');
taskFormInput2.setAttribute('type', 'description');
taskFormInput2.setAttribute('name', 'description');
taskFormInput2.setAttribute('placeholder', 'Description');
const taskFormInput3 = HTMLcreator('taskFormInput', 'input','formInput', 'taskFormInput3');
taskFormInput3.setAttribute('type', 'date');
taskFormInput3.setAttribute('name', 'dueDate');
taskFormInput3.setAttribute('placeholder', 'Due Date');
const taskFormInput4 = HTMLcreator('taskFormInput', 'input','formInput', 'taskFormInput4');
taskFormInput4.setAttribute('type', 'priority');
taskFormInput4.setAttribute('name', 'priority');
taskFormInput4.setAttribute('placeholder', 'Priority');
const taskFormBtnsDiv = HTMLcreator('taskFormBtnsDiv', 'div', 'formBtnsDiv');

const editTaskDiv = HTMLcreator('editTaskDiv', 'div', 'projectFormDiv');
const editTask = HTMLcreator('editTask', 'form', 'formContainer', 'projectForm');
const editTaskHeader = HTMLcreator('editTaskHeader', 'p', 'formHeader');
editTaskHeader.textContent = 'Edit Task'
const editTaskInput1 = HTMLcreator('editTaskInput', 'input','formInput', 'editTaskInput1');
editTaskInput1.setAttribute('type', 'name');
editTaskInput1.setAttribute('name', 'name');
editTaskInput1.setAttribute('placeholder', 'e.g., Lunch at 1pm');
const editTaskInput2 = HTMLcreator('editTaskInput', 'input','formInput', 'editTaskInput2');
editTaskInput2.setAttribute('type', 'description');
editTaskInput2.setAttribute('name', 'description');
editTaskInput2.setAttribute('placeholder', 'Description');
const editTaskInput3 = HTMLcreator('editTaskInput', 'input','formInput', 'editTaskInput3');
editTaskInput3.setAttribute('type', 'date');
editTaskInput3.setAttribute('name', 'dueDate');
editTaskInput3.setAttribute('placeholder', 'Due Date');
const editTaskInput4 = HTMLcreator('editTaskInput', 'input','formInput', 'editTaskInput4');
editTaskInput4.setAttribute('type', 'priority');
editTaskInput4.setAttribute('name', 'priority');
editTaskInput4.setAttribute('placeholder', 'Priority');
const editTaskBtnsDiv = HTMLcreator('editTaskBtnsDiv', 'div', 'formBtnsDiv');



appContainer.append(appContent);
appContent.append(leftMenu, mainSection);
leftMenu.append(leftContent);
leftContent.append(leftModules);
leftModules.append(leftCategories, projectCategory);
leftCategories.append(leftAgenda, leftToday, leftUpcoming);
leftAgenda.append(agendaInnerDiv, agendaNum);
agendaInnerDiv.append(agendaIcon, agendaText);
leftToday.append(todayInnerDiv, todayNum);
todayInnerDiv.append(todayIcon, todayText);
leftUpcoming.append(upcomingInnerDiv, upcomingNum);
upcomingInnerDiv.append(upcomingIcon, upcomingText);
projectCategory.append(projectMain);
projectMain.append(projectHeader, projectItems);
projectHeader.append(projectInnerDiv, addProjectIcon)
projectInnerDiv.append(projectIcon, projectText);
mainSection.append(mainContent);
mainContent.append(mainAgenda, mainToday, mainUpcoming, mainProjects);

projectFormDiv.append(projectForm);
projectForm.append(formHeader, formLabel, formInput, formBtnsDiv);
formBtnsDiv.append(closeBtn, addBtn);

taskFormDiv.append(taskForm);
taskForm.append(taskFormHeader, taskFormInput1, taskFormInput2, taskFormInput3, taskFormInput4, taskFormBtnsDiv);
taskFormBtnsDiv.append(closeBtn1, addBtn1)

editTaskDiv.append(editTask);
editTask.append(editTaskHeader, editTaskInput1, editTaskInput2, editTaskInput3, editTaskInput4, editTaskBtnsDiv);
editTaskBtnsDiv.append(closeBtn2, addBtn2)


const pageWrap = HTMLcreator('pageWrap', 'div');

pageWrap.append(header, appContainer, projectFormDiv, taskFormDiv, editTaskDiv);

export {
    pageWrap,
    headerLogoLink,
    menuBtn,
    appContent,
    leftMenu,
    leftAgenda,
    leftToday,
    mainAgenda,
    mainToday,
    mainUpcoming,
    projectMain,
    projectItems,
    addProjectIcon,
    mainContent,
    projectFormDiv,
    closeBtn,
    addBtn,
    addBtn1,
    closeBtn1,
    formInput,
    taskFormDiv,
    taskFormInput1,
    taskFormInput2,
    taskFormInput3,
    taskFormInput4,
    addBtn2,
    closeBtn2,
    editTaskDiv,
    editTaskInput1,
    editTaskInput2,
    editTaskInput3,
    editTaskInput4,

}

export {HTMLcreator}