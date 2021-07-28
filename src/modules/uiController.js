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
    taskFormDiv,
    closeBtn,
    addBtn,
    closeBtn1,
    addBtn1,
    leftMenu,
    formInput,
    taskFormInput1,
    taskFormInput2,
} from './elementCreator';


menuBtn.addEventListener('click', leftMenuActive);
addProjectIcon.addEventListener('click', projectItemPopup);
closeBtn.addEventListener('click', projectItemPopupHide);
addBtn.addEventListener('click', addProjectItemPopupHide);
closeBtn1.addEventListener('click', taskItemPopupHide);
addBtn1.addEventListener('click', taskItemPopupHide);


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
    formInput.value = '';
    taskFormInput1.value = '';
    taskFormInput2.value = '';

    if (isOpen == true) {
        projectFormDiv.style.display = "none";
    } else {
        projectFormDiv.style.display = "block";
    }
}


function projectItemPopupHide() {
    projectFormDiv.style.display = 'none';
}

function addProjectItemPopupHide() {
    projectFormDiv.style.display = 'none';
}

function taskItemPopup() {
    let isOpen = taskFormDiv.style.display = "block";
    taskFormInput1.value = '';
    taskFormInput2.value = '';

    if (isOpen == true) {
        taskFormDiv.style.display = "none";
    } else {
        taskFormDiv.style.display = "block";
    }
}

function taskItemPopupHide() {
    taskFormDiv.style.display = 'none';
}



function createProjectItem() {

}

function addProjectItem() {

}

/*function hideOtherProjects() {
    document.querySelectorAll('.projectWrapper').classList.remove('active');
    document.querySelector(formInput.value).classList.add('active');
}*/

function array_move(arr, old_index, new_index) {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; // for testing
};

export {
    taskItemPopup
}