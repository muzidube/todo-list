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
    let isOpen = leftMenu.classList.contains('active');

    if (isOpen == true) {
        leftMenu.classList.add('inactive');
        leftMenu.classList.remove('active');
        appContent.classList.remove('active');
        appContent.classList.add('active');
    } else {
        leftMenu.classList.remove('inactive');
        leftMenu.classList.add('active');
        appContent.classList.add('active');
        appContent.classList.remove('active');
    }
}