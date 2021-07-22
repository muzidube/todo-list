function HTMLcreator(name, type, ...class1) {
    const HTMLname = document.createElement(type);
    HTMLname.setAttribute('id', name);
    HTMLname.classList.add(name, ...class1);

    return HTMLname

}

import logo from '../components/images/correction.svg'

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
const leftInbox = HTMLcreator('leftInbox', 'div');
const inboxIcon = HTMLcreator('inboxIcon', 'img', 'categoryIcon');
const inboxText = HTMLcreator('inboxText', 'p', 'categoryText');
const inboxNum = HTMLcreator('inboxNum', 'p', 'categoryNum');
const leftToday = HTMLcreator('leftToday', 'div');
const todayIcon = HTMLcreator('todayIcon', 'img', 'categoryIcon');
const todayText = HTMLcreator('todayText', 'p', 'categoryText');
const todayNum = HTMLcreator('todayNum', 'p', 'categoryNum');
const leftUpcoming = HTMLcreator('leftUpcoming', 'div');
const upcomingIcon = HTMLcreator('upcomingIcon', 'img', 'categoryIcon');
const upcomingText = HTMLcreator('upcomingText', 'p', 'categoryText');
const upcomingNum = HTMLcreator('upcomingNum', 'p', 'categoryNum');
const projectCategory = HTMLcreator('projectCategory', 'div');
const projectMain = HTMLcreator('projectMain', 'div');
const projectItem = HTMLcreator('projectItem', 'div');
const mainSection = HTMLcreator('mainSection', 'div');
const mainContent = HTMLcreator('mainContent', 'div');
const mainInbox = HTMLcreator('mainInbox', 'div');
const mainToday = HTMLcreator('mainToday', 'div');
const mainUpcoming = HTMLcreator('mainUpcoming', 'div');

appContainer.append(appContent);
appContent.append(leftMenu, mainSection);
leftMenu.append(leftContent);
leftContent.append(leftModules);
leftModules.append(leftCategories, projectCategory);
leftCategories.append(leftInbox, leftToday, leftUpcoming);
leftInbox.append(inboxIcon, inboxText, inboxNum);
leftToday.append(todayIcon, todayText, todayNum);
leftUpcoming.append(upcomingIcon, upcomingText, upcomingNum);
projectCategory.append(projectMain);
projectMain.append(projectItem);
mainSection.append(mainContent);
mainContent.append(mainInbox, mainToday, mainUpcoming);

const pageWrap = HTMLcreator('pageWrap', 'div');

pageWrap.append(header, appContainer);

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

}