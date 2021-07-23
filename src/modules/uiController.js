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
    leftMenu,
} from './elementCreator';

menuBtn.addEventListener('click', leftMenuActive);
addProjectIcon.addEventListener('click', projectItemPopup);
closeBtn.addEventListener('click', projectItemPopupHide);


function leftMenuActive() {
    let isOpen = leftMenu.classList.contains('active');
    let isSlideIn = leftMenu.classList.contains('slide-in');

    if (isOpen == true || isSlideIn == true) {
        leftMenu.classList.add('slide-out');
        leftMenu.classList.remove('active');
        leftMenu.classList.remove('slide-in');
        appContent.classList.remove('active');
        appContent.classList.add('active');
    } else {
        leftMenu.classList.remove('inactive');
        leftMenu.classList.remove('slide-out');
        leftMenu.classList.add('slide-in');
        appContent.classList.add('active');
        appContent.classList.remove('active');
    }
}

function projectItemPopup() {
    let isOpen = projectFormDiv.style.display = "block";

    if (isOpen == true) {
        projectFormDiv.style.display = "none";
    } else {
        projectFormDiv.style.display = "block";
    }
}

function projectItemPopupHide() {
    projectFormDiv.style.display = 'none';
}


function createProjectItem() {

}

function addProjectItem() {

}