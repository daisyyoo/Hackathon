// variable definitions
var $modal = document.querySelector('.modal-background-container');
var $addEntryButton = document.querySelector('.new-entry-button');
var $weekDaySpacingDiv = document.querySelector('.weekday-spacing');
var $tableHeader = document.querySelector('.table-header');
var $tableSelector = document.querySelector('tbody');
var $inputArray = document.querySelectorAll('.input');

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
  var userInputData = {
    time: $inputArray[1].value,
    description: $inputArray[2].value
  };
  data[$inputArray[0].value].push(userInputData);

  dataModel.view = $inputArray[0].value;
  dataModel.view = capitalizeFirstLetter(dataModel.view);
  $tableHeader.textContent = 'Scheduled Events for ' + dataModel.view;
  while ($tableSelector.children.length) {
    $tableSelector.removeChild($tableSelector.firstChild);
  }
  createListEntries(data, dataModel.view);
}

function scheduleUpdate(event) {
  if (event.target.tagName !== 'P') {
    return;
  }
  $tableHeader.textContent = 'Scheduled Events for ' + event.target.textContent;
  dataModel.view = event.target.closest('.day').textContent.toLowerCase();

  while ($tableSelector.children.length) {
    $tableSelector.removeChild($tableSelector.firstChild);
  }

  createListEntries(data, event.target.textContent.toLowerCase());
  // console.log(event.target.textContent);
  // console.log(event.target);
  // console.log(data[event.target.textContent.toLowerCase()]);
  // console.log(data);
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
  dayOfWeek = dayOfWeek.toLowerCase();
  var entries;
  //   if (object[dayOfWeek]) {
  //     for (var i = 0; i < object[dayOfWeek].length; i++) {
  //       entries = generateDomTree('tr', {}, [
  //         generateDomTree('td', { textContent: object[dayOfWeek][i].time }),
  //         generateDomTree('td', { textContent: object[dayOfWeek][i].description })
  //       ]);
  //       $tableSelector.appendChild(entries);
  //     }
  //   } else {
  //     entries = generateDomTree('tr', {}, [
  //       generateDomTree('td', { textContent: 'No time' }),
  //       generateDomTree('td', { textContent: 'No plans made yet' })
  //     ]);
  //     $tableSelector.appendChild(entries);
  //   }
  // }

  for (var i = 0; i < object[dayOfWeek].length; i++) {
    if ($tableSelector.textContent) {
      entries = generateDomTree('tr', {}, [
        generateDomTree('td', { textContent: object[dayOfWeek][i].time }),
        generateDomTree('td', { textContent: object[dayOfWeek][i].description })
      ]);
      $tableSelector.appendChild(entries);
    } else {
      entries = generateDomTree('tr', {}, [
        generateDomTree('td', { textContent: 'No time' }),
        generateDomTree('td', { textContent: 'No plans made yet' })
      ]);
      $tableSelector.appendChild(entries);
    }
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
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
