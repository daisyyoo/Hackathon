// variable definitions
var $modal = document.querySelector('.modal-background-container');
var $addEntryButton = document.querySelector('.new-entry-button');
var $weekDaySpacingDiv = document.querySelector('.weekday-spacing');
var $tableHeader = document.querySelector('.table-header');

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
