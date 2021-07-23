function HTMLcreator(name, type, ...class1) {
    const HTMLname = document.createElement(type);
    HTMLname.setAttribute('id', name);
    HTMLname.classList.add(name, ...class1);

    return HTMLname

}

import logo from '../components/images/correction.svg';
import inbox from '../components/images/inbox.svg';
import today from '../components/images/clock.svg';
import upcoming from '../components/images/calendar.svg';
import rightArrow from '../components/images/right-arrow.svg';
import plus from '../components/images/plus.svg';

// HTMLcreator();

const header = HTMLcreator('header', 'header');
const headerContent = HTMLcreator('headerContent', 'div');
const headerInner = HTMLcreator('headerInner', 'div');
const leftNavContainer = HTMLcreator('leftNavContainer', 'div');
const rightNavContainer = HTMLcreator('rightNavContainer', 'div');
const headerLogoLink = HTMLcreator('headerLogo', 'a' );
const headerLogo = HTMLcreator('headerLogo', 'img', 'logo')
headerLogo.setAttribute('src', logo);
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
rightNavContainer.append(newTaskBtn, totalTaskNum, notificationsBtn, accountBtn);
headerSearchForm.append(headerSearchLabel, headerSearch);

const appContainer = HTMLcreator('appContainer', 'div');
const appContent = HTMLcreator('appContent', 'div');
const leftMenu = HTMLcreator('leftMenu', 'div', 'active');
const leftContent = HTMLcreator('leftContent', 'div');
const leftModules = HTMLcreator('leftModules', 'div');
const leftCategories = HTMLcreator('leftCategories', 'div');
const leftInbox = HTMLcreator('leftInbox', 'div', 'categoryDiv');
const inboxInnerDiv = HTMLcreator('inboxInnerDiv', 'div', 'categoryInnerDiv')
const inboxIcon = HTMLcreator('inboxIcon', 'img', 'categoryIcon');
inboxIcon.setAttribute('src', inbox);
const inboxText = HTMLcreator('inboxText', 'p', 'categoryText');
inboxText.textContent = 'Inbox';
const inboxNum = HTMLcreator('inboxNum', 'p', 'categoryNum');
const leftToday = HTMLcreator('leftToday', 'div', 'categoryDiv');
const todayInnerDiv = HTMLcreator('todayInnerDiv', 'div', 'categoryInnerDiv')
const todayIcon = HTMLcreator('todayIcon', 'img', 'categoryIcon');
todayIcon.setAttribute('src', today);
const todayText = HTMLcreator('todayText', 'p', 'categoryText');
todayText.textContent = 'Today';
const todayNum = HTMLcreator('todayNum', 'p', 'categoryNum');
const leftUpcoming = HTMLcreator('leftUpcoming', 'div', 'categoryDiv');
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
const projectIcon = HTMLcreator('projectIcon', 'img', 'categoryIcon');
projectIcon.setAttribute('src', rightArrow);
const projectText = HTMLcreator('todayText', 'p', 'categoryText', 'projectText');
projectText.textContent = 'Project';
const addProjectIcon = HTMLcreator('addProjectIcon', 'img', 'categoryIcon', 'projectIcon');
addProjectIcon.setAttribute('src', plus );
const projectItem = HTMLcreator('projectItem', 'div');
const mainSection = HTMLcreator('mainSection', 'div');
mainSection.textContent = 'test';
const mainContent = HTMLcreator('mainContent', 'div');
const mainInbox = HTMLcreator('mainInbox', 'div');
const mainToday = HTMLcreator('mainToday', 'div');
const mainUpcoming = HTMLcreator('mainUpcoming', 'div');

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



appContainer.append(appContent);
appContent.append(leftMenu, mainSection);
leftMenu.append(leftContent);
leftContent.append(leftModules);
leftModules.append(leftCategories, projectCategory);
leftCategories.append(leftInbox, leftToday, leftUpcoming);
leftInbox.append(inboxInnerDiv, inboxNum);
inboxInnerDiv.append(inboxIcon, inboxText);
leftToday.append(todayInnerDiv, todayNum);
todayInnerDiv.append(todayIcon, todayText);
leftUpcoming.append(upcomingInnerDiv, upcomingNum);
upcomingInnerDiv.append(upcomingIcon, upcomingText);
projectCategory.append(projectMain);
projectMain.append(projectHeader);
projectHeader.append(projectInnerDiv, addProjectIcon)
projectInnerDiv.append(projectIcon, projectText);
mainSection.append(mainContent);
mainContent.append(mainInbox, mainToday, mainUpcoming);

projectFormDiv.append(projectForm);
projectForm.append(formHeader, formLabel, formInput, formBtnsDiv);
formBtnsDiv.append(closeBtn, addBtn);


const pageWrap = HTMLcreator('pageWrap', 'div');

pageWrap.append(header, appContainer, projectFormDiv);

export {
    pageWrap,
    headerLogoLink,
    menuBtn,
    appContent,
    leftMenu,
    mainInbox,
    mainToday,
    mainUpcoming,
    projectMain,
    projectItem,
    addProjectIcon,
    projectFormDiv,
    closeBtn,
    addBtn,

}