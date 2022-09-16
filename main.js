var $modal = document.querySelector('.modal-background-container');
var $addEntryButton = document.querySelector('.new-entry-button');
$modal.addEventListener('submit', handleModalClick);
$addEntryButton.addEventListener('click', addEntryButton);

function addEntryButton(event) {
  $modal.className = 'modal-background-container container';
}

function handleModalClick(event) {
  event.preventDefault();
  $modal.className = 'hidden';
}
