function projectCreator(title) {
    const projectWrapper = document.createElement('div')
    projectWrapper.setAttribute('id', 'projectWrapper');
    projectWrapper.setAttribute('class', 'projectWrapper');

    const projectHeader = document.createElement('header');
    projectHeader.setAttribute('id', 'projectHeader');
    projectHeader.setAttribute('class', 'projectHeader');

    const projectHeaderContent = document.createElement('div');
    projectHeaderContent.setAttribute('id', 'projectHeaderContent');
    projectHeaderContent.setAttribute('class', 'projectHeaderContent');

    const projectHeaderTitle = document.createElement('h1');
    projectHeaderTitle.setAttribute('id', 'projectHeaderTitle');
    projectHeaderTitle.setAttribute('class', 'projectHeaderTitle');
    projectHeaderTitle.textContent = title

    const projectHeaderActions = document.createElement('div');
    projectHeaderActions.setAttribute('id', 'projectHeaderActions');
    projectHeaderActions.setAttribute('class', 'projectHeaderActions');

    projectWrapper.append(projectHeader);
    projectHeader.append(projectHeaderContent);
    projectHeaderContent.append(projectHeaderTitle, projectHeaderActions);

    return projectWrapper;

}

function ItemContainer() {

    const projectDivBox = document.createElement('div');
    projectDivBox.setAttribute('id', 'projectDivBox');
    projectDivBox.setAttribute('class', 'projectDivBox');

    const itemOuterListContainer = document.createElement('div');
    itemOuterListContainer.setAttribute('id', 'itemOuterListContainer');
    itemOuterListContainer.setAttribute('class', 'itemOuterListContainer');

    const itemOuterList = document.createElement('ul');
    itemOuterList.setAttribute('id', 'itemOuterList');
    itemOuterList.setAttribute('class', 'itemOuterList');

    projectDivBox.append(itemOuterListContainer);
    itemOuterListContainer.append(itemOuterList);

    return projectDivBox;
}

function outerItemContainer(itemName, itemDesc) {

    const itemOuterListItem = document.createElement('li');
    itemOuterListItem.setAttribute('id', 'itemOuterListItem');
    itemOuterListItem.setAttribute('class', 'itemOuterListItem');

    const outerItemSection = document.createElement('section');
    outerItemSection.setAttribute('id', 'outerItemSection');
    outerItemSection.setAttribute('class', 'outerItemSection');

    const outerItemBtn = document.createElement('button');
    outerItemBtn.setAttribute('id', 'outerItemBtn');
    outerItemBtn.setAttribute('class', 'outerItemBtn');

    const innerListContainer = document.createElement('div');
    innerListContainer.setAttribute('id', 'innerListContainer');
    innerListContainer.setAttribute('class', 'innerListContainer');

    const innerList = document.createElement('ul');
    innerList.setAttribute('id', 'innerList');
    innerList.setAttribute('class', 'innerList');

    itemOuterListItem.append(outerItemSection, outerItemBtn);
    outerItemSection.append(innerListContainer);
    innerListContainer.append(innerList);

    return itemOuterListItem;

}

function innerListItem(itemName, itemDesc){

    const innerListItem = document.createElement('li');
    innerListItem.setAttribute('id', 'innerListItem');
    innerListItem.setAttribute('class', 'innerListItem');

    const innerListItemBody = document.createElement('div');
    innerListItemBody.setAttribute('id', 'innerListItemBody');
    innerListItemBody.setAttribute('class', 'innerListItemBody');

    const listItemCheckBtn = document.createElement('button');
    listItemCheckBtn.setAttribute('id', 'listItemCheckBtn');
    listItemCheckBtn.setAttribute('class', 'listItemCheckBtn');

    const listItemContainer = document.createElement('div');
    listItemContainer.setAttribute('id', 'listItemContainer');
    listItemContainer.setAttribute('class', 'listItemContainer');

    const listItemContent = document.createElement('div');
    listItemContent.setAttribute('id', 'listItemContent');
    listItemContent.setAttribute('class', 'listItemContent');

    const listItemText = document.createElement('p');
    listItemText.setAttribute('id', 'listItemText');
    listItemText.setAttribute('class', 'listItemText');
    listItemText.textContent = itemName

    const listItemDesc = document.createElement('p');
    listItemDesc.setAttribute('id', 'listItemDesc');
    listItemDesc.setAttribute('class', 'listItemDesc');
    listItemDesc.textContent = itemDesc

    const itemActionsContainer = document.createElement('div');
    itemActionsContainer.setAttribute('id', 'itemActionsContainer');
    itemActionsContainer.setAttribute('class', 'itemActionsContainer');

    const listItemEditBtn = document.createElement('button');
    listItemEditBtn.setAttribute('id', 'listItemEditBtn');
    listItemEditBtn.setAttribute('class', 'listItemEditBtn');

    innerListItem.append(innerListItemBody);
    innerListItemBody.append(listItemCheckBtn, listItemContainer);
    listItemContainer.append(listItemContent, itemActionsContainer);
    listItemContent.append(listItemText, listItemDesc);
    itemActionsContainer.append(listItemEditBtn);

    return innerListItem;

}

function HTMLcreator(name, type, ...class1) {
    const HTMLname = document.createElement(type);
    HTMLname.setAttribute('id', name);
    HTMLname.classList.add(name, ...class1);

    return HTMLname

}