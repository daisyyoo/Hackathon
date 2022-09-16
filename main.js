// variable definitions
var $modal = document.querySelector('.modal-background-container');
var $addEntryButton = document.querySelector('.new-entry-button');
var $weekDaySpacingDiv = document.querySelector('.weekday-spacing');
var $tableHeader = document.querySelector('.table-header');
var $tableSelector = document.querySelector('table');

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
  console.log(event.target.textContent.toLowerCase());
  // debugger;
  createListEntries(data, event.target.textContent.toLowerCase());
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
  var entries = generateDomTree('tbody', {}, [
    generateDomTree('tr', {}, [
      generateDomTree('td', { textContent: object[dayOfWeek][0].time }),
      generateDomTree('td', { textContent: object[dayOfWeek][0].description })
    ])
  ]);
  $tableSelector.appendChild(entries);
}

// Data Model
var data = {
  monday: [
    {
      time: 'Some time',
      description: 'Yes'
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
