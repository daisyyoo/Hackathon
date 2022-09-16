// variable definitions
var $modal = document.querySelector('.modal-background-container');
var $addEntryButton = document.querySelector('.new-entry-button');
var $weekDaySpacingDiv = document.querySelector('.weekday-spacing');
var $tableHeader = document.querySelector('.table-header');
var $tableSelector = document.querySelector('tbody');

// event listeners
$modal.addEventListener('submit', handleModalClick);
$addEntryButton.addEventListener('click', addEntryButton);
$weekDaySpacingDiv.addEventListener('click', scheduleUpdate);

// event listener functions
function addEntryButton(event) {
  $modal.className = 'modal-background-container container';
}

function handleModalClick(event) {
  event.preventDefault();
  $modal.className = 'hidden';
}

function scheduleUpdate(event) {
  $tableHeader.textContent = 'Scheduled Events for ' + event.target.textContent;
  dataModel.view = event.target.textContent.toLowerCase();
  for (var i = 0; i < $tableSelector.children.length; i++) {
    $tableSelector.removeChild($tableSelector.children[i]);
  }
  if (event.target.textContent.toLowerCase() === dataModel.view) {
    createListEntries(data, event.target.textContent.toLowerCase());
  }
}

// other functions
function generateDomTree(tagName, attributes, children = []) {
  var element = document.createElement(tagName);
  for (var key in attributes) {
    if (key === 'textContent') {
      element.textContent = attributes.textContent;
    } else {
      element.setAttribute(key, attributes[key]);
    }
  }
  for (var i = 0; i < children.length; i++) {
    element.append(children[i]);
  }
  return element;
}

// Making a DOM Tree

function createListEntries(object, dayOfWeek) {
  for (var i = 0; i < object[dayOfWeek].length; i++) {
    if (object[dayOfWeek][i].time) {
      var entries = generateDomTree('tr', {}, [
        generateDomTree('td', { textContent: object[dayOfWeek][i].time }),
        generateDomTree('td', { textContent: object[dayOfWeek][i].description })
      ]);
    } else {
      entries = generateDomTree('tr', {}, [
        generateDomTree('td', { textContent: 'No time' }),
        generateDomTree('td', { textContent: 'No plans made yet' })
      ]);

    }
    $tableSelector.appendChild(entries);
  }
}

// Data Model

var data = {
  monday: [
    {
      time: 'Some time',
      description: 'Yes'
    },
    {
      time: '12:00',
      description: 'SURE?'
    }
  ],
  tuesday: [
    {
      time: '',
      description: ''
    }
  ],
  wednesday: [
    {
      time: '',
      description: ''
    }
  ],
  thursday: [
    {
      time: '',
      description: ''
    }
  ],
  friday: [
    {
      time: '',
      description: ''
    }
  ],
  saturday: [
    {
      time: '',
      description: ''
    }
  ],
  sunday: [
    {
      time: '',
      description: ''
    }
  ]
};

var dataModel = {
  days: data,
  view: 'tuesday'
};
