document.getElementById('itemInputForm').addEventListener('submit', saveItem);

function saveItem(e) {
  const itemDescription = document.getElementById('itemDescriptionInput').value;
  const itemSeverity = document.getElementById('itemSeverityInput').value;
  const itemAssignTo = document.getElementById('itemAssignTo').value;
  const itemId = chance.guid();
  const itemStatus = 'Open';

  const item = {
    id: itemId,
    description: itemDescription,
    severity: itemSeverity,
    assignTo: itemAssignTo,
    status: itemStatus
  };
  
  if (localStorage.getItem('todo-items') === null) {
    const items = [];
    items.push(item);
    localStorage.setItem('todo-items', JSON.stringify(items));
  } else {
    const items = JSON.parse(localStorage.getItem('todo-items'));
    items.push(item);
    localStorage.setItem('todo-items', JSON.stringify(items));
  }

  document.getElementById('itemInputForm').reset();
  fetchItems();

  e.preventDefault();
}

function setStatusClosed(id) {
  const items = JSON.parse(localStorage.getItem('todo-items'));

  for (i = 0; i < items.length; i++) {
    if (items[i].id === id) {
      items[i].status = 'Closed';
    }
  }

  localStorage.setItem('todo-items', JSON.stringify(items));
  fetchItems();
}

function deleteItem(id) {
  const items = JSON.parse(localStorage.getItem('todo-items'));

  for (i = 0; i < items.length; i++) {
    if (items[i].id === id) {
      items.splice(i, 1);
    }
  }

  localStorage.setItem('todo-items', JSON.stringify(items));
  fetchItems();
}

function fetchItems() {
  const items = JSON.parse(localStorage.getItem('todo-items'));
  if (!items) {
    return;
  }

  const itemsList = document.getElementById('itemsList');
  itemsList.innerHTML = '';

  for(let i = 0; i < items.length; i++) {
    const id = items[i].id;
    const description = items[i].description;
    const severity = items[i].severity;
    const assignTo = items[i].assignTo;
    const status = items[i].status;

    itemsList.innerHTML += 
      '<div class="card card-body bg-light">' +
      // '<h6>Item ID: ' + id + '</h6>' +
      '<p>Status: ' + status + '</span></p>' +
      '<h3>' + description + '</h3>' +
      '<p>Severity: ' + severity + '</p>' +
      '<p>Assigned to: ' + assignTo + '</p>' +
      // '<a href="#" onclick="setStatusClosed(\'' + id + '\')" class="btn btn-warning">Close</a>' +
      '<button type="submit" class="btn btn-primary">Add</button>' +
      '<a href="#" onclick="deleteItem(\'' + id + '\')" class="btn btn-danger">Delete</a>' +
      '</div>';
  }
}