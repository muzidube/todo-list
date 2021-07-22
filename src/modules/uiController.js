import {
    headerLogoLink,
    menuBtn,
    appContent,
    mainInbox,
    mainToday,
    mainUpcoming,
    projectMain,
    projectItem,
    leftMenu,
} from './elementCreator';

menuBtn.addEventListener('click', leftMenuActive);

function leftMenuActive () {
    leftMenu.classList.toggle('active');
    appContent.classList.toggle('active');
}